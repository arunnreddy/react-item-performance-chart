export type TodoField = {
    id: number,
    title: string,
    price: 109.95,
    description: string,
    category: string,
    image: string,
    rating: {
      rate: number,
      count: number
  }
};

export type ITodo = {
    data: TodoField[]
};
