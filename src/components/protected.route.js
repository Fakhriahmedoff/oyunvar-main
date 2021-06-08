import React , {useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";
import {StateListingContext} from './StateListingProvide'

export const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {

const [ loginOpen , loginClose , regOpen , regClose,openBalanceUp, closeBalanceUp, openBalance ,openbuyGameUp, loggged, setloggged] = useContext(StateListingContext)



  return (
    <Route
      {...rest}
      render={props => {
        if (loggged) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to='/'
            />
          );
        }
      }}
    />
  );
};
