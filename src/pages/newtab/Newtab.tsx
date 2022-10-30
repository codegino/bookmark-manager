import React, { useEffect, useState } from "react";
import logo from "@assets/img/logo.svg";
import "@src/styles/app.css";
import "@pages/newtab/Newtab.css";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const Newtab = () => {
  const [todos, setTodos] = useState<BookMark[]>([]);

  useEffect(() => {
    supabase
      .from("bookmarks")
      .select("id,name,url")
      .then((res) => {
        const { data: bookmarks } = res;

        setTodos(bookmarks as BookMark[]);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-red-500">
          Edit <code>src/pages/newtab/Newtab.tsx</code> and save to reload.
        </p>
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
