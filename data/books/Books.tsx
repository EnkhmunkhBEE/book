export type Book = {
  id: number;
  title: string;
  author: string;
  category: string;
  price: number;
  image: string;
};

export const books: Book[] = [
  { id: 1, title: "Python Crash Course", author: "Eric Matthes",
    category: "Programming", price: 45000, image: "/images/book-1.svg" },
  { id: 2, title: "Eloquent JavaScript", author: "Marijn Haverbeke",
    category: "Web Development", price: 38000, image: "/images/book-2.svg" },
  { id: 3, title: "Learning Next.js", author: "BookMart Team",
    category: "Web Development", price: 42000, image: "/images/book-3.svg" },
    {id : 4 ,
      title : "C The Goat",
      price : 50000,
      category : "Programming",
      author : "hanzi",
      image: "/images/book-3.svg"
    }
];
