"use client";

import Autocomplete from "@/app/components/autocomplete";
import ConnectionModal from "@/app/components/connection-modal";

export default function page() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <ConnectionModal />
    </div>
  );
}
