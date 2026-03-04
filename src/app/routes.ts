import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { OurWork } from "./pages/OurWork";
import { ClientDropbox } from "./pages/ClientDropbox";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "work", Component: OurWork },
      { path: "dropbox", Component: ClientDropbox },
    ],
  },
]);