import React, { useEffect, useState } from 'react';
import logo from '@assets/img/logo.svg';

export default function Popup(): JSX.Element {
  const [value, setValue] = useState(() =>
    localStorage.getItem('gino:testing')
  );

  useEffect(() => {
    async function test() {
      // const queryOptions = { active: true, lastFocusedWindow: true };
      // // `tab` will either be a `tabs.Tab` instance or `undefined`.
      // const [tab] = await chrome.tabs.query(queryOptions);
      const res = await chrome.tabs.query({
        active: true,
        lastFocusedWindow: true,
      });

      console.log(res[0].title);

      setValue(res[0].title);
    }

    test().then();
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 text-center h-full p-3 bg-gray-800">
      <header className="flex flex-col items-center justify-center text-white">
        <img
          src={logo}
          className="h-36 pointer-events-none animate-spin-slow"
          alt="logo"
        />
        <p>Local Storage: {value}</p>
        <a
          className="text-blue-400"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
        <p>Popup styled with TailwindCSS!</p>
      </header>
    </div>
  );
}
