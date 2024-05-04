export function computeOverflow(supressScroll?: boolean): "auto" | "hidden" {
  if (supressScroll === true || typeof supressScroll === "undefined") {
    return "auto";
  } else {
    return "hidden";
  }
}
