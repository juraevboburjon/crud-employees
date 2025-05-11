import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add" element={<AddUser />}></Route>
      </>
    )
  );
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
