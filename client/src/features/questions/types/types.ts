export type Question = {
id:number;
question:string;
answer:string;
img:string;
theme_id:number
};

export type QuestionId = Question['id'];
