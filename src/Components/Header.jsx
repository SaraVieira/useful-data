import { ToggleColorButton } from "./ToggleColorButton";

export const Header = () => (
  <header className=" pt-4 pb-8">
    <div className="flex justify-end pr-4">
      <ToggleColorButton />
    </div>
    <img src="/logo.png" className="w-12 m-auto block mb-2" alt="JSON Data" />
    <h1 className="sr-only">JSON Data</h1>
    <h2 className="dark:text-gray-400 text-gray-600 text-2xl italic font-semibold text-center mt-4">
      Because JSON is fucking great
    </h2>
  </header>
);
