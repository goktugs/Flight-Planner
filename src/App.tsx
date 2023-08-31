import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Main from "./pages";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
      </Route>
    </Routes>
  );
}
