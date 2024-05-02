## Scrollbar React

[![NPM version](https://img.shields.io/npm/v/@darwish/scrollbar-react.svg?style=flat)](https://www.npmjs.com/package/@darwish/scrollbar-react)[![npm](https://img.shields.io/npm/dt/@darwish/scrollbar-react.svg)](https://www.npmjs.com/package/@darwish/scrollbar-react)[![npm](https://img.shields.io/npm/dw/@darwish/scrollbar-react.svg)](https://www.npmjs.com/package/@darwish/scrollbar-react)

A simple scrollbar component for React.

## Installation

```bash
npm install @darwish/scrollbar-react
```

## Usage

```jsx
import { Scrollbar } from "@darwish/scrollbar-react";

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

## Global Configuration

You can configure the scrollbar globally by passing the props to the `ScrollbarProvider` component.

```jsx
import { GlobalScrollbarProvider, Scrollbar } from "@darwish/scrollbar-react";

function App() {
  return (
    <GlobalScrollbarProvider
      scrollbarWidth={8}
      scrollbarRadius={99}
      trackColor="rgba(0, 0, 0, 0.2)"
      thumbColor="rgba(186, 31, 31, 0.5)"
    >
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
    </GlobalScrollbarProvider>
  );
}
```

## Props

| Prop              | Type   | Default | Description                              |
| ----------------- | ------ | ------- | ---------------------------------------- |
| height(optional)            | number | 0 (px)    | The height of the scrollbar              |
| width(optional)             | number | 0 (px)     | The width of the scrollbar               |
| suppressScrollX(optional)   | boolean | false   | Suppress horizontal scrolling            |
| suppressScrollY(optional)   | boolean | false   | Suppress vertical scrolling              |
| suppressAutoHide(optional)  | boolean | false   | Suppress auto-hiding of the scrollbar    |
| trackStyle(optional)        | React.CSSProperties | {}      | The style of the scrollbar track         |
| thumbStyle(optional)        | React.CSSProperties | {}      | The style of the scrollbar thumb         |
| contentStyle(optional)      | React.CSSProperties | {}      | The style of the scrollbar content       |
| as(optional)                | React.ElementType | "div"   | The element to render the scrollbar as   |
| ...otherProps(optional)        | React.ComponentPropsWithRef<"div">    | null    | Any other props to pass to the element   |

## Provider Props

| Prop              | Type   | Default | Description                              |
| ----------------- | ------ | ---------------------------------------- | -------- |
| scrollbarWidth(optional)   | number | 8 (px)   | The width of the scrollbar               |
| scrollbarRadius(optional)  | number | 99 (px)    | The radius of the scrollbar              |
| trackColor(optional)       | string | "rgba(0, 0, 0, 0.2)"  | The color of the scrollbar track         |
| thumbColor(optional)       | string | "rgba(186, 31, 31, 0.5)"     | The color of the scrollbar thumb         |