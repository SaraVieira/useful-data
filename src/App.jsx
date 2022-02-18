import { Code } from "./Components/Code";
import { ToggleColorButton } from "./Components/ToggleColorButton";
import { data } from "./data";

function App() {
  return (
    <>
      {" "}
      <header className="bg-red-500">
        <p>Hello Vite + React!</p>
        <p>sup</p>
        <ToggleColorButton />
      </header>
      <div className="md:max-w-7xl m-auto mt-12">
        <main className="lg:columns-3 md:columns-2 align-baseline masonry before:box-inherit after:box-inherit">
          {data.map(({ name, description, json }) => (
            <div
              key={name}
              className="mb-8 break-inside  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">
                  {name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {description}
                </p>
              </div>
              <div className="max-h-[500px] overflow-scroll rounded-b-lg">
                <Code code={json} />
              </div>
            </div>
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
