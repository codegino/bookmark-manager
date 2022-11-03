import { BookMarkGroup } from '@src/types/bookmarks';
import { Database } from '@src/types/supabase';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import React, { useEffect, useState } from 'react';
import BookmarksGroup from './BookmarksGroup';

const Content = () => {
  const [groups, setGroups] = useState<BookMarkGroup[]>([]);
  const supabaseClient = useSupabaseClient<Database>();

  const user = useUser();

  useEffect(() => {
    supabaseClient
      .from('bookmarks_group')
      .select('id,name,icon,description,bookmarks(id,title,url,favIconUrl)')
      .then((res) => {
        const { data: groups } = res;

        console.log(groups);

        if (groups) {
          setGroups(groups as unknown as BookMarkGroup[]);
        }
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

      <div className="flex">
        {groups.map((group) => {
          return (
            <div key={group.id} className="max-w-[350px]">
              <h3>{group.name}</h3>
              <h4>{group.description}</h4>
              <BookmarksGroup bookmarks={group.bookmarks} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
