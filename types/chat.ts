import { Block } from '@/lib/contentFormatter';

export type Msg = {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content?: string;
  html?: string;
  blocks?: Block[];
};
