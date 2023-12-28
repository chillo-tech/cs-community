export type SuggestionType = {
  author: {
    name: string;
    email: string;
    phoneIndex: number;
    phone: number;
    civility: string;
    tag: string[];
    age: number;
  };
  title: string;
  description: string;
};