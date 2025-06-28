export abstract class Auth {
  abstract login(params: Login): Promise<LoginResponse>;
  abstract loginWithProvider(
    params: LoginWithProvider
  ): Promise<LoginWithProviderResponse>;
  abstract register(params: Register): Promise<RegisterResponse>;
  abstract logout(): Promise<LogoutResponse>;
  abstract getProfile(): Promise<GetProfileResponse>;
  abstract renewToken(params: RenewToken): Promise<RenewTokenResponse>;
}

export type AuthProvider = "google";
export interface UserIdentity {
  id: string;
  user_id: string;
  identity_data?: {
    [key: string]: unknown;
  };
  identity_id: string;
  provider: string;
  created_at?: string;
  last_sign_in_at?: string;
  updated_at?: string;
}

export interface UserAppMetadata {
  provider?: string;
  [key: string]: unknown;
}

export interface UserMetadata {
  [key: string]: unknown;
}

export type Factor = {
  id: string;
  friendly_name?: string;
  factor_type: "totp" | "phone" | string;
  status: "verified" | "unverified";
  created_at: string;
  updated_at: string;
};

export type Session = {
  provider_token?: string | null;
  provider_refresh_token?: string | null;
  access_token: string;
  refresh_token: string;
  expires_in: number;
  expires_at?: number;
  token_type: string;
};

export type User = {
  id: string;
  app_metadata: UserAppMetadata;
  user_metadata: UserMetadata;
  aud: string;
  confirmation_sent_at?: string;
  recovery_sent_at?: string;
  email_change_sent_at?: string;
  new_email?: string;
  new_phone?: string;
  invited_at?: string;
  action_link?: string;
  email?: string;
  phone?: string;
  created_at: string;
  confirmed_at?: string;
  email_confirmed_at?: string;
  phone_confirmed_at?: string;
  last_sign_in_at?: string;
  role?: string;
  updated_at?: string;
  identities?: UserIdentity[];
  is_anonymous?: boolean;
  factors?: Factor[];
  session: Session;
};

// Login types
export type Login = {
  payload: LoginPayload;
};
export type LoginPayload = {
  email: string;
  password: string;
};
export type LoginResponse = User;

// Login With Provider types
export type LoginWithProvider = {
  payload: LoginWithProviderPayload;
};
export type LoginWithProviderPayload = {
  provider: AuthProvider;
};
export type LoginWithProviderResponse = undefined;

// Register types
export type Register = {
  payload: RegisterPayload;
};
export type RegisterPayload = { email: string; password: string };
export type RegisterResponse = User;

// Profile type
export type GetProfileResponse = User;

// Logout type
export type LogoutResponse = void;

// Renew Token
export type RenewToken = { payload: RenewTokenPayload };

export type RenewTokenPayload = { refreshToken: string };

export type RenewTokenResponse = User;
