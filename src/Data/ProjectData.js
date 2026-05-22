import { projects as softwareProjects } from "./SoftwareDetails";
import { projects as webProjects } from "./WebDetails";
import { projects as aiProjects } from "./AIDetails";

export const Projects = [
  // Top 3 System (Software) projects
  ...softwareProjects.software.slice(0, 3).map(p => ({
    ...p,
    imgUrl: p.image,
    tab: "System",
    detailsLink: "/software"
  })),
  // Top 3 Website (Web) projects
  ...webProjects.web.slice(0, 3).map(p => ({
    ...p,
    imgUrl: p.image,
    tab: "Website",
    detailsLink: "/web"
  })),
  // Top 3 ML (AI) projects
  ...aiProjects.ai.slice(0, 3).map(p => ({
    ...p,
    imgUrl: p.image,
    tab: "ML",
    detailsLink: "/ai"
  }))
];
