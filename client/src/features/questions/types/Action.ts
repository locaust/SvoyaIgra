import { Question } from './types';

export type Action =
  | {type:'questions/load'; payload:Question[]};
