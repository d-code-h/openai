import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  const [menu, updateMenu] = useState([
    {
      name: 'Generate',
      link: '/',
      color: 'blue',
    },
    {
      name: 'Chat',
      link: '/somewhere',
      color: 'red',
    },
    {
      name: 'Complete',
      link: '/somewhere',
      color: 'green',
    },
    {
      name: 'Others',
      link: '/somewhere',
      color: 'yellow',
    },
  ]);
  return (
    <div className="mb-4">
      <div className="flex flex-col w-28 gap-3 fixed right-2 md:left-4">
        {menu.map(function (item) {
          return (
            <Link
              key={item.name}
              to={item.link}
              className={`button p-3 rounded-lg  bg-${item.color}-300 text-slate-800 font-bold`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
