import { createContext, useMemo } from "react";
import { atom, selector } from "recoil";

export const countAtom = atom({
    key: "countAtom",
    default: 0
});

export const evenSelector = selector({
    key: "evenSelector",
    get: ({get}) => {
        const count = get(countAtom);
        return count % 2;
    }
});

// Todo creation application with filtering logic
// todos, filter


// 2 input boxes (title, descripition)
// button
// todos => atom
// filter (gym)
// selector (the current set of todos)