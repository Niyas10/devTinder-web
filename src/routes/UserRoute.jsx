import { Routes,Route } from "react-router-dom";
import { Body } from "../components/common/Body";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Feed from "../pages/Feed";
import PublicRoute from "../components/CustomRoutes/PublicRoute";
import ProtectedRoute from "../components/CustomRoutes/ProtectedRoute";
import Profile from "../pages/Profile";
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

     <Route path="/profile" element ={<ProtectedRoute>
      <Profile/>
     </ProtectedRoute>} />
  
</Route>
    </Routes>
</>
  )
};

export default UserRoute;
