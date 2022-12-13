import { useRouteError } from 'react-router-dom';
import Menu from '../components/Menu';
import Welcome from '../components/Welcome';

import React from 'react';

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <div id="error-page">
      <Welcome />
      <div className="border flex h-80 p-4">
        <Menu />
        <main className="text-3xl w-50 mx-auto my-10">
          <h1 className="text-3xl font-extrabold">Oops!</h1>
          <p className="italic">Sorry, an unexpected error has occcurred.</p>
          <p>
            <i className="text-red-600">{error.statusText || error.message}</i>
          </p>
        </main>
      </div>
    </div>
  );
}
