import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

// type categories = "TO_DO" | "DOING" | "DONE" ;

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

// export interface Categories {
//   TO_DO: "TO_DO";
//   DOING: "DOING";
//   DONE: "DONE";
//   [INDEX: string]: string;
// }

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

const { persistAtom: persistAtom1 } = recoilPersist({
  key: "recoil-persist-todos",
  storage: localStorage,
});
const { persistAtom: persistAtom2 } = recoilPersist({
  key: "recoil-persist-category",
  storage: localStorage,
});

export const allCategoryListState = atom<string[]>({
  key: "allCategoryList",
  default: ["TO_DO", "DOING", "DONE"],
  effects_UNSTABLE: [persistAtom2],
});

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom1],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);

    // return [
    //   toDos.filter((toDo) => toDo.category === "TO_DO"),
    //   toDos.filter((toDo) => toDo.category === "DOING"),
    //   toDos.filter((toDo) => toDo.category === "DONE"),
    // ];
  },
});
