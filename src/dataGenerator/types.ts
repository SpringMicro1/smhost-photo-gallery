import { RaRecord } from "react-admin";
import { Comment, Post, Tag, User } from "src/types";

export interface Db {
  comments: Comment[];
  posts: Post[];
  tags: Tag[];
  users: User[];
}
