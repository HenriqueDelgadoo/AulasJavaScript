import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import TaskPages from './pages/TaskPage.jsx';

let router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path:"/task",
    element:<TaskPages />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
