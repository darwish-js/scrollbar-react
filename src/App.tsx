import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ScrollBar } from "../lib";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ScrollBar height={500}>
        <div>
          <img src={reactLogo} alt="React" />
          <h1>React ScrollBar</h1>
          <p>
            A simple React component that creates a custom scrollbar that can be
            styled and customized.
          </p>
          <button onClick={() => setCount(count + 1)}>
            Click me {count} times
          </button>
          <img src={viteLogo} alt="Vite" />

          <p>
            This is a demo of the React ScrollBar component. You can use it to
            create a custom scrollbar that can be styled and customized.
          </p>
        </div>
        <div>
          <img src={reactLogo} alt="React" />
          <h1>React ScrollBar</h1>
          <p>
            A simple React component that creates a custom scrollbar that can be
            styled and customized.
          </p>
          <button onClick={() => setCount(count + 1)}>
            Click me {count} times
          </button>
          <img src={viteLogo} alt="Vite" />

          <p>
            This is a demo of the React ScrollBar component. You can use it to
            create a custom scrollbar that can be styled and customized.
          </p>
        </div>
        <div>
          <img src={reactLogo} alt="React" />
          <h1>React ScrollBar</h1>
          <p>
            A simple React component that creates a custom scrollbar that can be
            styled and customized.
          </p>
          <button onClick={() => setCount(count + 1)}>
            Click me {count} times
          </button>
          <img src={viteLogo} alt="Vite" />

          <p>
            This is a demo of the React ScrollBar component. You can use it to
            create a custom scrollbar that can be styled and customized.
          </p>
        </div>
        <div>
          <img src={reactLogo} alt="React" />
          <h1>React ScrollBar</h1>
          <p>
            A simple React component that creates a custom scrollbar that can be
            styled and customized.
          </p>
          <button onClick={() => setCount(count + 1)}>
            Click me {count} times
          </button>
          <img src={viteLogo} alt="Vite" />

          <p>
            This is a demo of the React ScrollBar component. You can use it to
            create a custom scrollbar that can be styled and customized.
          </p>
        </div>
      </ScrollBar>
    </>
  );
}

export default App;
