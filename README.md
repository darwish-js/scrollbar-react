## Scrollbar React

A simple scrollbar component for React.

## Installation

```bash
npm install @darwish/scrollbar-react
```

## Usage

```jsx
import Scrollbar from "@darwish/scrollbar-react";

function App() {
  return (
    <div>
      <Scrollbar height={500}>
        {[...Array(10)].map((_, index) => (
          <p key={index} style={{ width: "300px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi qui
            explicabo fugit? Recusandae enim eveniet quos magni sit earum,
            corrupti qui ducimus saepe! Quos earum sed excepturi praesentium,
            nostrum tempora.
          </p>
        ))}
      </Scrollbar>
    </div>
  );
}
```
