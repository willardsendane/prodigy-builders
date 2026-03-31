import { Outlet } from 'react-router';

/** Renders child routes for /work/* while keeping a single /work parent in the route tree. */
export function WorkLayout() {
  return <Outlet />;
}
