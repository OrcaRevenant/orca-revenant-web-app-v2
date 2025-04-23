import Google from "./assets/Google";

export const SocialsMap = {
  Google,
} as const;

export type SupportedSocials = keyof typeof SocialsMap;
