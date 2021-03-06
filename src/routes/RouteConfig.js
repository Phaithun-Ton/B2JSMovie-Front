import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MyFeed from "../components/myFeed/MyFeed";
import Spinner from "../components/utils/Spinner";
import { AuthContext } from "../contexts/AuthContext";
import MainLayout from "../layouts/MainLayout";
import PublicLayout from "../layouts/PublicLayout";
import CommunityRC from "../pages/CommunityRC";
import Follow from "../pages/Follow";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Post from "../pages/Post";
import Register from "../pages/Register";

function RouteConfig() {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      {user ? (
        (user.role === "USER" && (
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home />} />
            <Route path="post/:id" element={<Post />} />
            <Route path="my-feed" element={<MyFeed />} />
            <Route path="follow" element={<Follow />} />
            <Route path="communityRc" element={<CommunityRC />} />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Route>
        )) ||
        (user.role === "ADMIN" && (
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home />} />
            <Route path="post/:id" element={<Post />} />
            <Route path="my-feed" element={<MyFeed />} />
            <Route path="follow" element={<Follow />} />
            <Route path="communityRc" element={<CommunityRC />} />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Route>
        ))
      ) : (
        <Route path="/" element={<PublicLayout />}>
          <Route path="" element={<Login />} />
          <Route path="register" element={<Register />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Route>
      )}
    </Routes>
  );
}

export default RouteConfig;
