import Link from "next/link";
import AiAvatar from "../ai-avatar";

export default function AiActionButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 hover:**:data-[slot=ai-avatar-video]:brightness-[400%]">
      <div className="relative">
        <Link href="/stella" passHref>
          <AiAvatar />
        </Link>
      </div>
    </div>
  );
}
