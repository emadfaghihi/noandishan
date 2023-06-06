/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  MiddlewareAPI,
  isRejectedWithValue,
  Middleware,
} from "@reduxjs/toolkit";

export const ApiErrorHandle: Middleware =
  (api: MiddlewareAPI) => (next) => async (action) => {
    // if there is forbidden toast route
    //   const IsNoToast = noToastRoutes.find((item) =>
    //     action?.meta?.baseQueryMeta?.request?.url.includes(item)
    //   );
    //   if (action?.payload?.data?.status === 401 && !window.location.pathname.includes("authentication"))
    //     logout();
    if (isRejectedWithValue(action) && action?.meta?.arg?.type === "mutation") {
      const data = action?.payload?.data;
      console.log({data});
      // CustomToast({
      //   text: data?.message || "",
      //   type: "error",
      // });
      console.log("object,data?.error ", { item: data?.message });

      if (data?.errors) {
        const errors = Object.values(data?.errors);
        errors?.flat()?.forEach((item) => {
          // CustomToast({
          //   text: String(item) || "",
          //   type: "error",
          // });
          console.log("object", { item });
        });
      }
    }

    next?.(action);
  };
