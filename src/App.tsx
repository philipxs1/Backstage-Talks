import "./App.css";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import magazines from "../src/sourceData";
import { useState } from "react";

function App() {
  const magazinesData = magazines.data.magazines;

  const [viewing, setViewing] = useState<undefined | string>("");

  function getColor() {
    const currentMag = magazinesData.find((data) => data.id === viewing);

    return currentMag?.background_color;
  }

  return (
    <main
      className={` ${getColor()} app overflow-x-hidden top-0 left-0  w-[100vw] h-[100vh] p-5 snap-y`}>
      <div className="grid">
        <Header />
        <div className="overflow-x-hidden  relative min-h(100vh)">
          {magazinesData.map((magazine) => {
            return (
              <Main
                key={magazine.id}
                name={magazine.name}
                img={magazine.url}
                id={magazine.id}
                background_color={magazine.background_color}
                available={false}
                setViewing={setViewing}
              />
            );
          })}
        </div>

        <Footer />
      </div>
    </main>
  );
}

export default App;
