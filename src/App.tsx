import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { router } from "./router";

export default function App() {
  return <RouterProvider router={createBrowserRouter(router)} />;
}
