import Link from "next/link";
import IconSelector from "../icon-selector";

export default function StellaActionButton() {
  return (
    <div className="fixed bottom-6 right-6">
      <div className="relative">
        <Link href="/stella" passHref>
          <button className="relative flex items-center justify-center w-14 h-14 rounded-full bg-black border border-utility-gray-blue-600 p-2 overflow-hidden cursor-pointer focus:ring-2 focus:ring-offset-1 focus:ring-utility-gray-blue-600 focus:ring-offset-bg-primary active:scale-95 transition-transform duration-100">
            <IconSelector
              icon="Stars01"
              className="absolute size-7 text-utility-gray-blue-700 z-10"
            />
            <video
              src="/assets/videos/stella.webm"
              autoPlay
              muted
              loop
              className="absolute w-32 h-32 object-cover rounded-full z-0"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}
