import { NextResponse, type NextRequest } from "next/server";
import { getProfile, renewToken } from "@/api/revenant";
import {
  ACCESS_TOKEN_NAME,
  REFRESH_TOKEN_NAME,
} from "@/services/storage/storage";

const excludedUrls = [
  "/auth/verify",
  "/auth/callback",
  "/error",
  "/sentry-example-page",
];

const publicPaths = ["/auth"];

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (excludedUrls.some((url) => pathname.startsWith(url))) {
    return NextResponse.next();
  }

  const accessToken = request.cookies.get(ACCESS_TOKEN_NAME)?.value;
  const refreshToken = request.cookies.get(REFRESH_TOKEN_NAME)?.value;

  const hasAccessToken = !!accessToken;
  const hasRefreshToken = !!refreshToken;
  const isAccessTokenExpired = hasAccessToken
    ? isJwtExpired(accessToken)
    : true;

  let isLoggedIn = hasAccessToken && !isAccessTokenExpired;
  const response = NextResponse.next();

  if (hasAccessToken) {
    try {
      await getProfile({
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (isAccessTokenExpired && hasRefreshToken) {
        const newTokens = await renewToken(
          {
            payload: { refreshToken: refreshToken },
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        response.cookies.set(
          ACCESS_TOKEN_NAME,
          newTokens.data.session.access_token,
          {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
          }
        );
        response.cookies.set(
          REFRESH_TOKEN_NAME,
          newTokens.data.session.refresh_token,
          {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
          }
        );

        isLoggedIn = true;
      }
    } catch {
      response.cookies.delete(ACCESS_TOKEN_NAME);
      response.cookies.delete(REFRESH_TOKEN_NAME);
      isLoggedIn = false;
    }
  }

  if (isLoggedIn) {
    console.log("isLoggedIn", pathname);
    if (publicPaths.some((path) => pathname.startsWith(path))) {
      const dashboardUrl = `/dashboard`;
      return NextResponse.redirect(new URL(dashboardUrl, request.url), 307);
    }
    return response;
  } else {
    if (
      pathname === "/" ||
      publicPaths.some((path) => pathname.startsWith(path))
    ) {
      response.cookies.delete(ACCESS_TOKEN_NAME);
      response.cookies.delete(REFRESH_TOKEN_NAME);
      return response;
    }

    const homeUrl = `/`;

    const redirectResponse = NextResponse.redirect(
      new URL(homeUrl, request.url),
      307
      
    );
    redirectResponse.cookies.delete(ACCESS_TOKEN_NAME);
    redirectResponse.cookies.delete(REFRESH_TOKEN_NAME);

    return redirectResponse;
  }
}

export function decodeJwt(token: string) {
  if (!token || typeof token !== "string") {
    return null;
  }

  try {
    const parts = token.split(".");
    if (parts.length !== 3) {
      return null;
    }

    const base64Url = parts[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");

    const payload = JSON.parse(Buffer.from(base64, "base64").toString());
    return payload;
  } catch {
    return null;
  }
}

function isJwtExpired(token: string, bufferSeconds = 30) {
  const payload = decodeJwt(token);

  if (!payload || !payload.exp) {
    return true;
  }

  return payload.exp * 1000 < Date.now() + bufferSeconds * 1000;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)", "/"],
};
