"use client";
import { useState } from "react";
import Image from "next/image";
import type { Book } from "@/data/books/Books";
type Props = { book: Book };

export function BookCard({ book }: Props) {
  const  [likes , setlikes] = useState(0);
  return (
    <article className="book-card">
      <Image src={book.image} alt={book.title} width={220} height={330} />
      <p className="category">{book.category}</p>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <strong>{book.price.toLocaleString()} ₮</strong>
      <div>
        <button onClick={() => setlikes(likes + 1)}>
          ❤️ {likes}
        </button>

      </div>
    </article>
    
  );
}