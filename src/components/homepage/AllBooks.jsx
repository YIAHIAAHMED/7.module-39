import React, { use } from 'react';

import BookCard from '../ui/BookCard';
const booksPromise = fetch('/booksData.json').then(res => res.json())

const AllBooks = () => {
    const books = use(booksPromise);
    console.log(books, "Books")
    return (
        <div className='my-12 container mx-auto'>
            <h2 className='font-bold text-3xl text-center'>Books</h2>
            <div className="grid grid-cols-3 gap-4">
                {
                    books.map(book =>
                        <BookCard book={book} ></BookCard>
                    )
                }
            </div>
        </div>
    );
};

export default AllBooks;