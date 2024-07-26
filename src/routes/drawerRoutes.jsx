import React from "react";
import { Route } from "react-router-dom";
import appRoutes from "./appRoutes";
import PageWrapper from "./PageWrapper";

const generateRoute = (routes) => {
  console.log("routes:", routes);

  return routes.map((route, index) => {
    // console.log("current route:", route);

    return route.index ? (
      <Route
        path={route.path}
        element={<PageWrapper state={route.state}>{route.element}</PageWrapper>}
        key={index}
      />
    ) : (
      <Route
        path={route.path}
        element={
          <PageWrapper state={route.child ? undefined : route.state}>
            {route.element}
          </PageWrapper>
        }
        key={index}
      >
        {route.child && generateRoute(route.child)}
      </Route>
    );
  });
};

const drawerRoutes = generateRoute(appRoutes);
// console.log(drawerRoutes[0]);

export default drawerRoutes;
