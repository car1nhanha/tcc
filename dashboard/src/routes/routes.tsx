import { createHashRouter, type RouteObject } from "react-router";
import { HomePage } from "../components/pages/home/home";
import { textRoutes } from "./text-routes";

const authRoutes = [{ path: textRoutes.auth.signIn, Component: HomePage }] as RouteObject[];
const normalRoutes = [{ path: textRoutes.home.dashboard, Component: HomePage }] as RouteObject[];

export const router = createHashRouter([...authRoutes, ...normalRoutes]);
