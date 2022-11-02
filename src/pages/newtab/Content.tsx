import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import React, { useEffect, useState } from 'react';

type BookMark = {
  id: number;
  title: string;
  url: string;
  favIconUrl: string;
};

const Content = () => {
  const [todos, setTodos] = useState<BookMark[]>([]);
  const supabaseClient = useSupabaseClient();

  const user = useUser();

  useEffect(() => {
    supabaseClient
      .from('bookmarks')
      .select('id,title,url,favIconUrl')
      .then((res) => {
        const { data: bookmarks } = res;

        setTodos(bookmarks as BookMark[]);
      });
  }, []);

  return (
    <div className="flex-1 App-header">
      <p>Hello: {user?.email}</p>
      <button
        onClick={async () => {
          await supabaseClient.auth.signOut();
        }}
      >
        Logout
      </button>
      <hr />
      <br />

      {todos.map((tab) => (
        <div
          className="flex flex-col"
          key={tab.id}
          role="button"
          tabIndex={0}
          onClick={async () => {
            await chrome.tabs.create({
              url: tab.url,
            });
          }}
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
          <div className="truncate text-lg">{tab.url}</div>
        </div>
      ))}
    </div>
  );
};

export default Content;
