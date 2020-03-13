// import external modules
import React from "react";
import { Route } from "react-router-dom";

// import internal(own) modules
import CustomLayout from "../customLayout";

const CustomLayoutRoute = ({ render, ...rest }) => {
   return (
      <Route
         {...rest}
         render={matchProps => (
            <CustomLayout>{render(matchProps)}</CustomLayout>
         )}
      />
   );
};

export default CustomLayoutRoute;
