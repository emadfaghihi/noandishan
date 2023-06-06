import { Container, SxProps } from "@mui/material";
import React, { FC, ReactNode } from "react";

const AppContainer: FC<{ children?: ReactNode; sx?: SxProps }> = ({
  children,
  sx,
}) => {
  return (
    <Container maxWidth="xl" sx={sx}>
      {children}
    </Container>
  );
};

export default AppContainer;
