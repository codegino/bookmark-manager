import '@pages/newtab/Newtab.css';
import '@src/styles/app.css';
import { useEffect } from 'react';
import ActiveTabs from './ActiveTabs';
import Content from './Content';

const Newtab = () => {
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
    }

    test().then();
  }, []);

  return (
    <div className="App flex justify-between">
      <ActiveTabs />
      <Content />
    </div>
  );
};

export default Newtab;
