import { BookMark } from '@src/types/bookmarks';
import { Database } from '@src/types/supabase';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import React, { FC } from 'react';

const BookmarksGroup: FC<{ bookmarks: BookMark[] }> = ({ bookmarks }) => {
  const supabaseClient = useSupabaseClient<Database>();

  return (
    <div>
      {bookmarks.map((todo) => (
        <div className="flex flex-col" key={todo.id} role="button">
          <div className="flex">
            <img
              height={24}
              width={24}
              src={todo.favIconUrl}
              alt={todo.title}
              className="inline-block mr-2 max-w-[24px] max-h-[24px]"
            />
            <div className="text-lg truncate">{todo.title}</div>
          </div>
          <div className="truncate text-sm">{todo.url}</div>
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

                // Update current UI
                // setGroups((_todos) =>
                //   _todos.filter((_todo) => todo.id !== _todo.id)
                // );
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

export default BookmarksGroup;
