import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { OurWork } from "./pages/OurWork";
import { ProjectForemaster } from "./pages/ProjectForemaster";
import { ProjectCottonwood } from "./pages/ProjectCottonwood";
import { ProjectAlpine } from "./pages/ProjectAlpine";
import { ProjectHideout } from "./pages/ProjectHideout";
import { ProjectHolladay } from "./pages/ProjectHolladay";
import { ClientDropbox } from "./pages/ClientDropbox";
import { Contact } from "./pages/Contact";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "work", Component: OurWork },
      { path: "work/foremaster", Component: ProjectForemaster },
      { path: "work/cottonwood", Component: ProjectCottonwood },
      { path: "work/alpine", Component: ProjectAlpine },
      { path: "work/hideout", Component: ProjectHideout },
      { path: "work/holladay", Component: ProjectHolladay },
      { path: "dropbox", Component: ClientDropbox },
      { path: "contact", Component: Contact },
    ],
  },
]);