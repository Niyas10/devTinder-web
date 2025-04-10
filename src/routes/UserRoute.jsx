import { Routes,Route } from "react-router-dom";
import { Body } from "../components/common/Body";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Feed from "../pages/Feed";
import PublicRoute from "../components/CustomRoutes/PublicRoute";
import ProtectedRoute from "../components/CustomRoutes/ProtectedRoute";
const UserRoute = () => {
  return (
<>
    <Routes>
<Route path="/" element={<Body/>}>
     <Route index  element={
      <PublicRoute>
        <Home/>
      </PublicRoute>
     } />
     <Route path="/login" element={
      <PublicRoute>
        <Login/>
      </PublicRoute>
     } />
     <Route path="/feed" element ={<ProtectedRoute>
      <Feed/>
     </ProtectedRoute>} />
  
</Route>
    </Routes>
</>
  )
};

export default UserRoute;
