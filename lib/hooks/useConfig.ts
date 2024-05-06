import { useContext } from "react";
import {
  GlobalScrollbarContext,
  type GlobalScrollbarContextType,
} from "../global-provider";

export function useConfig() {
  return useContext(GlobalScrollbarContext) as GlobalScrollbarContextType;
}
