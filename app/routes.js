import { nextRoutes, pageRouterStyle, appRouterStyle } from "rr-next-routes";

const routes = nextRoutes({...appRouterStyle, print: "tree", folder: "pages"});

export default routes;