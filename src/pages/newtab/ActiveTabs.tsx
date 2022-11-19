import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import React, { useCallback, useEffect, useState } from 'react';

const DEFAULT_GROUP_ID = 1;

const ActiveTabs = () => {
  const [tabs, setTabs] = useState<chrome.tabs.Tab[]>([]);
  const supabase = useSupabaseClient();
  const user = useUser();

  const updateActiveTabs = useCallback(() => {
    chrome.tabs.query({ currentWindow: true }, (tabs) => {
      setTabs(
        tabs.filter((tab) => !['Extensions', 'New tab'].includes(tab.title))
      );
    });
  }, []);

  useEffect(updateActiveTabs, []);

  useEffect(() => {
    chrome.tabs.onRemoved.addListener(updateActiveTabs);
    chrome.tabs.onUpdated.addListener(updateActiveTabs);
  }, []);

  return (
    <section className="p-4 active-tabs-container w-[300px] transition-all overflow-x-hidden overflow-y-auto h-screen">
      <h2 className="text-3xl truncate">Active Tabs</h2>
      {tabs.map((tab) => {
        return (
          <div key={tab.id} className="p-2 text-left" role="button">
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
            <button
              onClick={async () => {
                await chrome.tabs.remove(tab.id);
              }}
            >
              Remove
            </button>
            <button
              onClick={async () => {
                try {
                  const { data, error } = await supabase
                    .from('bookmarks')
                    .insert([
                      {
                        title: tab.title,
                        url: tab.url,
                        favIconUrl: tab.favIconUrl,
                        user_id: user.id,
                        group_id: DEFAULT_GROUP_ID,
                      },
                    ]);
                } catch (error) {
                  console.error(error);
                }
              }}
            >
              Add
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default ActiveTabs;
