import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { OurWork } from "./pages/OurWork";
import { ProjectForemaster } from "./pages/ProjectForemaster";
import { ProjectCottonwood } from "./pages/ProjectCottonwood";
import { ProjectAlpine } from "./pages/ProjectAlpine";
import { ProjectHideout } from "./pages/ProjectHideout";
import { ProjectHolladay } from "./pages/ProjectHolladay";
import { ProjectHurricane } from "./pages/ProjectHurricane";
import { ProjectTraverse } from "./pages/ProjectTraverse";
import { ClientDropbox } from "./pages/ClientDropbox";
import { Contact } from "./pages/Contact";
import { Layout } from "./components/Layout";
import { WorkLayout } from "./components/WorkLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      {
        path: "work",
        Component: WorkLayout,
        children: [
          { index: true, Component: OurWork },
          { path: "foremaster", Component: ProjectForemaster },
          { path: "cottonwood", Component: ProjectCottonwood },
          { path: "alpine", Component: ProjectAlpine },
          { path: "hideout", Component: ProjectHideout },
          { path: "holladay", Component: ProjectHolladay },
          { path: "hurricane", Component: ProjectHurricane },
          { path: "traverse", Component: ProjectTraverse },
        ],
      },
      { path: "dropbox", Component: ClientDropbox },
      { path: "contact", Component: Contact },
    ],
  },
]);
