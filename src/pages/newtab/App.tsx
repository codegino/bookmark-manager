import { useSession } from "@supabase/auth-helpers-react";
import React from "react";
import AuthBasic from "./Auth";
import Newtab from "./Newtab";

function App() {
  const session = useSession();

  return session ? <Newtab /> : <AuthBasic />;
}

export default App;
