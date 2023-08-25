export type Question = {
id:number;
question:string;
answer:string;
img:string;
price: number,
isDone: boolean,
theme_id:number
};

export type QuestionId = Question['id'];
