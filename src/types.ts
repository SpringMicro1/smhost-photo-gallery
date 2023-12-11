import { Identifier, RaRecord } from "react-admin";
import { permissions } from "./gallery-types";

export interface User extends RaRecord {
  name: string;
  email: string;
  permissions?: permissions[];
}

export type Language = "en" | "fr";

export interface Tag extends RaRecord {
  name: Partial<Record<Language, string>>;
  published: boolean;
}

export type UseStateType<T> = [T, React.Dispatch<React.SetStateAction<T>>];

/**
 * TODO: REMOVE THESE TYPES
 * TODO           _
 * TODO          | |
 * TODO         _| |_
 * TODO         \   /
 * TODO          \ /
 * TODO           V
 */

export interface Comment extends RaRecord {
  id: Identifier;
  author: Partial<User>;
  post_id: Identifier;
  body: string;
  created_at: Date;
}

export interface Post extends RaRecord {
  id: Identifier;
  title: string;
  teaser: string;
  body: string; // html
  views: number;
  average_note?: number;
  commentable?: boolean;
  pictures?: any[];
  published_at: Date;
  tags?: number[]; // ids?
  category: string;
  subcategory?: string;
  backlinks?: Backlink[];
  notifications: number[]; // ids?
}

export interface Backlink {
  date: string; // iso
  url: string; // include https://
}
