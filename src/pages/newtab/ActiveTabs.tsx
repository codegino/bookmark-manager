import React, { useEffect, useState } from 'react';

const ActiveTabs = () => {
  const [tabs, setTabs] = useState<chrome.tabs.Tab[]>([]);

  useEffect(() => {
    chrome.tabs.query({}, (tabs) => {
      console.log(tabs);
      setTabs(
        tabs.filter((tab) => !['Extensions', 'New tab'].includes(tab.title))
      );
    });
  }, []);

  return (
    <section className="w-[65px] p-4 active-tabs-container hover:w-[300px] transition-all overflow-y-auto h-screen">
      <h2 className="text-3xl truncate">Active Tabs</h2>
      {tabs.map((tab) => {
        return (
          <div
            key={tab.id}
            className="p-2 text-left"
            role="button"
            tabIndex={0}
          >
            <div className="flex">
              <img
                height={24}
                width={24}
                src={tab.favIconUrl}
                alt={tab.title}
                className="inline-block mr-2 max-w-[24px] max-h-[24px]"
              />
              <div className="text-xl truncate">{tab.title}</div>
            </div>
            <div className="truncate">{tab.url}</div>
          </div>
        );
      })}
    </section>
  );
};

export default ActiveTabs;
