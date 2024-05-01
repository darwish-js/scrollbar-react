declare global {
  interface IEvent extends Omit<Event, "target"> {
    target: Element;
  }
}

export {};
