import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../App";

const GuardedRoute = () => {
  const { session, isFetching } = useContext(AuthContext);

  if (session || isFetching) return <Outlet />;
  else return <Navigate to="/login" />;
};

export default GuardedRoute;
