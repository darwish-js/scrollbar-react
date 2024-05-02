import { useContext } from "react";
import {
  GlobalScrollbarContext,
  type GlobalScrollbarContextType,
} from "../global-provider";

export function useConfig(): GlobalScrollbarContextType {
  return useContext(GlobalScrollbarContext);
}
