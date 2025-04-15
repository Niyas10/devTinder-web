import { Routes, Route } from "react-router-dom";
import { Body } from "../components/common/Body";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Feed from "../pages/Feed";
import PublicRoute from "../components/CustomRoutes/PublicRoute";
import ProtectedRoute from "../components/CustomRoutes/ProtectedRoute";
import Profile from "../pages/Profile";
import  Connections  from "../pages/Connections";
import Request from "../pages/Requests"
import Signup from "../pages/Signup";
const UserRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route
            index
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
               <Route
             path="/signup"
            element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/feed"
            element={
              <ProtectedRoute>
                <Feed />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
              <Route
            path="/connections"
            element={
              <ProtectedRoute>
                <Connections />
              </ProtectedRoute>
            }
          />
              <Route
            path="/requests"
            element={
              <ProtectedRoute>
                <Request />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default UserRoute;
