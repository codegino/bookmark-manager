import React from "react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function AuthBasic() {
  const supabase = useSupabaseClient();

  return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
}
