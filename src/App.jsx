import { useState } from "react";
import { Filters } from "./Components/Filters";
import { Header } from "./Components/Header";
import { JSON } from "./Components/JSON";
import { data } from "./data";

function App() {
  const [category, setCategory] = useState("");

  const getData = () => {
    if (category) {
      return data.filter((d) => d.category === category);
    }

    return data;
  };

  return (
    <>
      <Header />
      <div className="md:max-w-7xl m-auto mt-12">
        <Filters category={category} setCategory={setCategory} />
        <main className="lg:columns-3 md:columns-2 align-baseline masonry before:box-inherit after:box-inherit">
          {getData().map((d) => (
            <JSON {...d} key={d.index} />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
