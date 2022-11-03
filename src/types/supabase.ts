export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      bookmarks: {
        Row: {
          id: number;
          url: string | null;
          user_id: string;
          favIconUrl: string | null;
          title: string | null;
          group_id: number | null;
        };
        Insert: {
          id?: number;
          url?: string | null;
          user_id: string;
          favIconUrl?: string | null;
          title?: string | null;
          group_id?: number | null;
        };
        Update: {
          id?: number;
          url?: string | null;
          user_id?: string;
          favIconUrl?: string | null;
          title?: string | null;
          group_id?: number | null;
        };
      };
      bookmarks_group: {
        Row: {
          id: number;
          name: string | null;
          icon: string | null;
          description: string | null;
          user_id: string | null;
        };
        Insert: {
          id?: number;
          name?: string | null;
          icon?: string | null;
          description?: string | null;
          user_id?: string | null;
        };
        Update: {
          id?: number;
          name?: string | null;
          icon?: string | null;
          description?: string | null;
          user_id?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
