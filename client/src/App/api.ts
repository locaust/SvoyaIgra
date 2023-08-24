import { Question } from '../features/questions/types/types';

export const fetchQuestion = async (): Promise<Question[]> => {
  const res = await fetch('/api/questions');
 const data = await res.json();
};
