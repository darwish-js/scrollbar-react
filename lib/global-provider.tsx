import { createContext } from "react";
import { DEFAULT_CONTEXT } from "./constants";

export interface GlobalScrollbarContextType {
  scrollbarWidth: number;
  scrollbarRadius: number;
  trackColor: string;
  thumbColor: string;
}

export const GlobalScrollbarContext =
  createContext<Partial<GlobalScrollbarContextType>>(DEFAULT_CONTEXT);
export const GlobalScrollbarProvider = (
  props: React.PropsWithChildren<{
    config: Partial<GlobalScrollbarContextType>;
  }>
) => {
  const context = Object.assign({}, DEFAULT_CONTEXT, props.config);

  return (
    <GlobalScrollbarContext.Provider value={context}>
      {props.children}
    </GlobalScrollbarContext.Provider>
  );
};
