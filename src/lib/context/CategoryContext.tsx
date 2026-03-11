/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react"; // type-only import

export interface Category {
  slug: string;
  name: string;
  url: string;
}

export interface CategoryContextType {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const CategoryProvider = ({ children }: Props) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products/categories");
        if (!res.ok) throw new Error("Categories fetch failed");
        const data: Category[] = await res.json();
        setCategories(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories, loading, error }}>
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryContext };