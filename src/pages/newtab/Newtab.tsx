import logo from "@assets/img/logo.svg";
import "@pages/newtab/Newtab.css";
import "@src/styles/app.css";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";

const Newtab = () => {
  const [todos, setTodos] = useState<BookMark[]>([]);
  const supabaseClient = useSupabaseClient();

  const user = useUser();

  useEffect(() => {
    supabaseClient
      .from("bookmarks")
      .select("id,name,url")
      .then((res) => {
        const { data: bookmarks } = res;

        setTodos(bookmarks as BookMark[]);
      });
  }, []);

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
    <div className="App">
      <header className="App-header">
        <p>Hello: {user?.email}</p>
        <button
          onClick={async () => {
            await supabaseClient.auth.signOut();
          }}
        >
          Logout
        </button>
        <img src={logo} className="App-logo" alt="logo" />

        {todos.map((todo) => (
          <div key={todo.id}>
            <p>{todo.name}</p>
            <p>{todo.url}</p>
          </div>
        ))}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
        <h6>The color of this paragraph is defined using Tailwind.</h6>
      </header>
    </div>
  );
};

type BookMark = {
  id: number;
  name: string;
  url: string;
};

export default Newtab;
