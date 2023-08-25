import { Theme } from "../features/questions/types/types";

export const fetchQuestion = async (): Promise<Theme[]> => {
  const res = await fetch("/api/questions");
  return res.json();
};
