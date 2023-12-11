import { generateComments } from "./comments";
import { generatePosts } from "./posts";
import { generateTags } from "./tags";
import { Db } from "./types";

export default (): Db => {
  const db = {} as Db;
  db.tags = generateTags();
  db.comments = generateComments();
  db.posts = generatePosts();

  return db;
};
