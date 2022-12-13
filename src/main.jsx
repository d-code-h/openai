import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Generate from '../src/pages/Generate';
import ErrorPage from './pages/Error-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Generate />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

{
  /* <App /> */
}
