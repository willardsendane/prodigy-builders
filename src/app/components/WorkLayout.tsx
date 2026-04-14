import { Outlet } from 'react-router';

/** Renders child routes for /our-work/* while keeping a single /our-work parent in the route tree. */
export function WorkLayout() {
  return <Outlet />;
}
