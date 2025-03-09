import { Routes, Route } from "react-router-dom";
import Hello from "./pages/Hello";
import AboutMe from "./pages/AboutMe";
import NotFound from "./pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Hello />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/projects" element={<AboutMe />} />
      <Route path="/contact" element={<AboutMe />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
