import Google from "./assets/google.svg";

export const SocialsMap = {
  Google: Google,
} as const;

export type SupportedSocials = keyof typeof SocialsMap;
