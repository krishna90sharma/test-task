// import external modules
import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Spinner from "../components/spinner/spinner";

// import internal(own) modules
import CustomLayoutRoutes from "../layouts/routes/customRoutes";

// Main Layout
const LazyUsers = lazy(() => import("../views/user/users"));

class Router extends Component {
   render() {
      return (
         // Set the directory path if you are deplying in sub-folder
         <BrowserRouter basename="/">
            <Switch>
               
               <CustomLayoutRoutes
                  exact
                  path="/"
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyUsers {...matchprops} />
                     </Suspense>
                  )}
               />
               
            </Switch>
         </BrowserRouter>
      );
   }
}

export default Router;
