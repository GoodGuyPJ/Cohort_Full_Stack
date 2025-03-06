import { createContext } from "react";

export const CountContext = createContext(0);
//crateContext is a function that creates a context object. The context object is used to share data between components without having to explicitly pass the data down as props. The createContext function takes an argument that is the default value of the context object. In this case, the default value is 0. This means that the CountContext object will have a default value of 0 if no value is provided when the context is used. The CountContext object is then exported so that it can be used in other components.
