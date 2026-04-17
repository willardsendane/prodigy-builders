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
import { ProjectBerkshire } from "./pages/ProjectBerkshire";
import { ClientDropbox } from "./pages/ClientDropbox";
import { Contact } from "./pages/Contact";
import { MeetOurFounder } from "./pages/MeetOurFounder";
import { GovernmentCommercial } from "./pages/GovernmentCommercial";
import { Layout } from "./components/Layout";
import { WorkLayout } from "./components/WorkLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about-us", Component: About },
      { path: "government", Component: GovernmentCommercial },
      { path: "our-founder", Component: MeetOurFounder },
      {
        path: "our-work",
        Component: WorkLayout,
        children: [
          { index: true, Component: OurWork },
          { path: "foremaster-ridge", Component: ProjectForemaster },
          { path: "cottonwood-view", Component: ProjectCottonwood },
          { path: "alpine-manor", Component: ProjectAlpine },
          { path: "hideout", Component: ProjectHideout },
          { path: "holladay", Component: ProjectHolladay },
          { path: "hurricane-retreat", Component: ProjectHurricane },
          { path: "traverse-outlook", Component: ProjectTraverse },
        ],
      },
      { path: "berkshire-villa", Component: ProjectBerkshire },
      { path: "dropbox", Component: ClientDropbox },
      { path: "contact-us", Component: Contact },
    ],
  },
]);
