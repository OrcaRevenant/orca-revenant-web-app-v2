import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const appConfig = {
  version: "2.0.0",
  license: "UNLICENSED",
  private: true,
  name: "Orca",
  description: "Orca crypto tracking platform",
  language: "en",
  auther: {
    name: ["Ali Ahmadi", "Mohammad Hossien Alipour"],
    email: ["ali.ahmadi.1377@gmail.com", "mmdalipour7@gmail.com"],
  },
  releaseDate: "2025-04-23",
  releaseNotes: "Initial release",
  website: "https://orca.com",
  github: "https://github.com/orca-com",
  twitter: "https://twitter.com/orca_com",
  telegram: "https://t.me/orca_com",
  discord: "https://discord.com/orca_com",
  linkedin: "https://linkedin.com/orca_com",
  theme: {
    default: "dark",
  },
  typography: {
    fontFamily: montserrat,
  },
  paths: {
    landing: {
      home: {
        path: "/",
        title: "Home",
        description: "Home page",
      },
    },
    auth: {
      login: {
        path: "/auth/login",
        title: "Login",
        description: "Login page",
      },
      signup: {
        path: "/auth/signup",
        title: "Signup",
        description: "Signup page",
      },
    },
    panel: {
      dashboard: {
        path: "/dashboard",
        title: "Dashboard",
        description: "Dashboard page",
      },
    },
  },
};
