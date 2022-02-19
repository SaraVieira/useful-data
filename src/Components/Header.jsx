import { GH } from "./Icons";
import { ToggleColorButton } from "./ToggleColorButton";

export const Header = () => (
  <header className=" pt-4 pb-8">
    <div className="flex justify-end gap-3 pr-4 items-center">
      <a
        href="https://github.com/SaraVieira/useful-data"
        target="_blank"
        rel="noreferrer"
        className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
      >
        <GH />
      </a>
      <ToggleColorButton />
    </div>
    <img src="/logo.png" className="w-12 m-auto block mb-2" alt="JSON Data" />
    <h1 className="sr-only">JSON Data</h1>
    <h2 className="dark:text-gray-400 text-gray-600 text-2xl italic font-semibold text-center mt-4">
      Because JSON is fucking great
    </h2>
  </header>
);
