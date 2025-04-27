import { PropsWithChildren } from "react";

export default function ModalContent({ children }: PropsWithChildren) {
  return <div className="px-6">{children}</div>;
}
