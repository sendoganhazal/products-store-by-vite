import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";
import type { CategoryContextType } from "../type/types";

export const useCategories = (): CategoryContextType => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategories must be used within CategoryProvider");
  }
  return context;
};