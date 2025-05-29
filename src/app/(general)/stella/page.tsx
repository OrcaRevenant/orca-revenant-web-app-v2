import Chat from "./components/chat";

export default function StellaPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-var(--navbar-height))] w-full">
      <Chat />
    </div>
  );
}
