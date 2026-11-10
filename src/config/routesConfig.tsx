import { Navigate, RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/home'));
const ToolsByCategory = lazy(() => import('../pages/tools-by-category'));
const About = lazy(() => import('../pages/legal/About'));
const Contact = lazy(() => import('../pages/legal/Contact'));
const Privacy = lazy(() => import('../pages/legal/Privacy'));
const Terms = lazy(() => import('../pages/legal/Terms'));
const Disclaimer = lazy(() => import('../pages/legal/Disclaimer'));
const NotFound = lazy(() => import('../pages/legal/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/privacy-policy', element: <Privacy /> },
  { path: '/terms-and-conditions', element: <Terms /> },
  { path: '/disclaimer', element: <Disclaimer /> },
  {
    path: '/categories/:categoryName',
    element: <ToolsByCategory />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;
