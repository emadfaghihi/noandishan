import { Breakpoint, Theme, useMediaQuery } from "@mui/material";

const useAppMediaQuery = (dir?: "down" | "up", brp?: Breakpoint) =>
  useMediaQuery((theme: Theme) =>
    theme.breakpoints[dir || "down"](brp || "md")
  );

export default useAppMediaQuery;
