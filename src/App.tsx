import "./App.css";
import ExampleHorizontal from "./components/ep-horizontal";
import ExampleVertical from "./components/ep-vertical";

const horizontalWidth = 320;
function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div style={{ width: `${horizontalWidth}px` }}>
          <h1 style={{ textAlign: "center" }}>Horizontal Scrollbar</h1>
          <div
            style={{
              backgroundColor: "lightgray",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <ExampleHorizontal width={300} />
          </div>
        </div>
        <div>
          <h1>Vertical Scrollbar</h1>
          <div
            style={{
              backgroundColor: "lightgray",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <ExampleVertical />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
