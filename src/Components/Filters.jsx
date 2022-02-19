import { categoryOptions } from "../data/categories";

export const Filters = ({ category, setCategory }) => (
  <div className="flex justify-end align-center mb-6">
    <label htmlFor="categories" className="sr-only">
      Select a Category
    </label>
    <select
      id="categories"
      className="max-w-[200px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      onChange={(e) => setCategory(e.target.value)}
      value={category}
    >
      <option value=""> Select a Category</option>
      {categoryOptions.map((category) => (
        <option key={category.name} value={category.name}>
          {category.label}
        </option>
      ))}
    </select>
  </div>
);
