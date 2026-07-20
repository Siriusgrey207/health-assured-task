import { Routes, Route } from "react-router-dom";
import Resources from "./pages/ResourcesPage/ResourcesPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Resources />} />
    </Routes>
  );
}
