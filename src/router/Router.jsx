import { Routes, Route } from "react-router-dom";
import route from "./route";
import Home from "../pages/Home";

const Router = () => {
  return (
    <Routes>
      <Route path={route.home} element={<Home />} />
    </Routes>
  );
};

export default Router;
