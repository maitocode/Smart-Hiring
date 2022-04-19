import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "pages/Authentication/Login/Login";
import SignUp from "pages/Authentication/SignUp/SignUp";
import Error from "pages/Error/Error.js";

import { USER_ROLE } from "core/constants";

export const routeConfig = [
  {
    path: "/signup",
    isPrivate: false,
    exact: true,
    component: SignUp
  },
  // {
  //   path: "/verify-email",
  //   isPrivate: false,
  //   exact: false,
  //   component: VerifyEmail
  // },
  {
    path: "/login",
    isPrivate: false,
    exact: true,
    component: Login
  },
  // {
  //   path: "/fogot-password-enter-email",
  //   isPrivate: false,
  //   exact: true,
  //   component: EnterEmail
  // },
  // {
  //   path: "/fogot-password-verify-code",
  //   isPrivate: false,
  //   exact: true,
  //   component: VerifyDigitalCode
  // },
  // {
  //   path: "/fogot-password-update-password",
  //   isPrivate: false,
  //   exact: true,
  //   component: UpdatePassWord
  // },
  { path: "*", component: Error }
];

const PrivateRoute = (privateProps) => {
  const { user } = useSelector((state) => state.user);
  if (user) {
    if (user.isProfileCreated) {
      if (
        privateProps.path === "/profile-creation" ||
        privateProps.path === "/general-information"
      ) {
        return <Redirect to="/not-found" />;
      }

      if (
        privateProps.role !== undefined &&
        !user.roles.includes(privateProps.role)
      ) {
        return <Redirect to="/not-found" />;
      }
    } else {
      if (user.roles[0] === USER_ROLE.DEVELOP) {
        if (privateProps.path !== "/profile-creation") {
          return <Redirect to="/profile-creation" />;
        }
      } else {
        if (privateProps.path !== "/general-information") {
          return <Redirect to="/general-information" />;
        }
      }
    }

    return <privateProps.component {...privateProps} />;
  }

  return <Redirect to="/login" />;
};

export const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) =>
        route.isPrivate ? (
          <PrivateRoute {...route} />
        ) : (
          <route.component {...props} />
        )
      }
    />
  );
};
