import { Tag } from "src/types";

export const generateTags = (): Tag[] => {
  return [
    {
      id: 1,
      name: { en: "Sport" },
      published: true,
    },
    {
      id: 2,
      name: { en: "Technology" },
      published: false,
    },
    {
      id: 3,
      name: { en: "Code" },
      published: true,
    },
    {
      id: 4,
      name: { en: "Photo" },
      published: false,
    },
    {
      id: 5,
      name: { en: "Music" },
      published: true,
    },
    {
      id: 6,
      name: { en: "Parkour" },
      published: true,
      parent_id: 1,
    },
    {
      id: 7,
      name: { en: "Crossfit" },
      published: true,
      parent_id: 1,
    },
    {
      id: 8,
      name: { en: "Computing" },
      published: true,
      parent_id: 2,
    },
    {
      id: 9,
      name: { en: "Nanoscience" },
      published: true,
      parent_id: 2,
    },
    {
      id: 10,
      name: { en: "Blockchain" },
      published: true,
      parent_id: 2,
    },
    {
      id: 11,
      name: { en: "Node" },
      published: true,
      parent_id: 3,
    },
    {
      id: 12,
      name: { en: "React" },
      published: true,
      parent_id: 3,
    },
    {
      id: 13,
      name: { en: "Nature" },
      published: true,
      parent_id: 4,
    },
    {
      id: 14,
      name: { en: "People" },
      published: true,
      parent_id: 4,
    },
    {
      id: 15,
      name: { en: "Animals" },
      published: true,
      parent_id: 13,
    },
    {
      id: 16,
      name: { en: "Moutains" },
      published: true,
      parent_id: 13,
    },
    {
      id: 17,
      name: { en: "Rap" },
      published: true,
      parent_id: 5,
    },
    {
      id: 18,
      name: { en: "Rock" },
      published: true,
      parent_id: 5,
    },
    {
      id: 19,
      name: { en: "World" },
      published: true,
      parent_id: 5,
    },
  ];
};
