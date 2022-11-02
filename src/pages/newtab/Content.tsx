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
    <div className="flex-1 App-header h-screen overflow-auto">
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

      {todos.map((todo) => (
        <div className="flex flex-col" key={todo.id} role="button">
          <div className="flex">
            <img
              height={24}
              width={24}
              src={todo.favIconUrl}
              alt={todo.title}
              className="inline-block mr-2 max-w-[24px] max-h-[24px]"
            />
            <div className="text-xl truncate">{todo.title}</div>
          </div>
          <div className="truncate text-lg">{todo.url}</div>
          <button
            onClick={async () => {
              await chrome.tabs.create({
                url: todo.url,
                active: false,
              });
            }}
          >
            Open
          </button>
          <button
            onClick={async () => {
              try {
                await supabaseClient
                  .from('bookmarks')
                  .delete()
                  .eq('id', todo.id);

                setTodos((_todos) =>
                  _todos.filter((_todo) => todo.id !== _todo.id)
                );
              } catch (error) {
                console.error(error);
              }
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Content;
