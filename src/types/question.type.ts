type Question = {
  id: number;
  title: string;
  subtitle: string;
  image_uri: string;
  uri: string;
  order: number;
};

type QuestionsApiResponse = Array<Question>;

export { Question, QuestionsApiResponse };
