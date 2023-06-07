import React, { FC, ReactNode } from "react";

const AppContainer: FC<{ children?: ReactNode }> = ({ children }) => {
  return <div className="container mx-auto">{children}</div>;
};

export default AppContainer;
