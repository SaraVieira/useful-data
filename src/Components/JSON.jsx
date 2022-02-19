import { Code } from "./Code";

export const JSON = ({ name, description, json }) => (
  <div className="mb-8 break-inside  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
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
);
