import { itemsData } from "./item.data";

export const itemResolver = {
  Query: {
    list: () => itemsData,
  },
};
