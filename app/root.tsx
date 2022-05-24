import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/app.css";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { LoaderFunctionArgs } from "@clerk/remix/dist/ssr/types";
import { ClerkApp, ClerkCatchBoundary } from "@clerk/remix";

export const loader = (args: LoaderFunctionArgs) => rootAuthLoader(args);
export const CatchBoundary = ClerkCatchBoundary();

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="overflow-y-hidden">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default ClerkApp(App);
