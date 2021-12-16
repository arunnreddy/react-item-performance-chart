import { createContext } from "react";
import { DataType } from "../TypeData/DataType";

const PerformanceContext = createContext<DataType>(
  {} as DataType
);

const PerformanceContextProvider = PerformanceContext.Provider;
const PerformanceContextConsumer = PerformanceContext.Consumer;

export {
  PerformanceContext,
  PerformanceContextProvider,
  PerformanceContextConsumer,
};
