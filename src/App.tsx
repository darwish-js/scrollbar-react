import "mac-scrollbar/dist/mac-scrollbar.css";
import { EpVertical1 } from "./components/ep-vertical-1";
import { EpVertical2 } from "./components/ep-vertical-2";
import { EpVertical3 } from "./components/ep-vertical-3";
import { EpHorizontal1 } from "./components/ep-horizontal-1";
import "./App.css";
import { EpHorizontal2 } from "./components/ep-horizontal-2";
import { EpHorizontal3 } from "./components/ep-horizontal-3";

function App() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridTemplateRows: "400px 400px",
      }}
    >
      <EpVertical1 />
      <EpVertical2 />
      <EpVertical3 />
      <EpHorizontal1 />
      <EpHorizontal2 />
      <EpHorizontal3 />
    </div>
  );
}

export default App;
