import React from 'react';
import { CiStar } from 'react-icons/ci';

const BookCard = ({book}) => {
    return (
        <div key={book.bookId} className="card bg-base-100 w-96 shadow-sm">
            <figure className='p-6'>
                <img
                    src={book.image}
                    alt={book.bookName} />
            </figure>
            <div className="card-body">
                <div className="flex items-center gap-4">
                    {
                        book.tags.map((tag, index) =>
                            <div key={index} className="badge badge-success text-green-500 bg-green-100 ">{tag} </div>
                        )
                    }
                </div>
                <h2 className="card-title font-bold text-2xl">

                    {book.bookName}

                </h2>
                <p className='font-semibold text-lg'>
                    {book.author}
                </p>
                <div className="card-actions justify-end border-t border-dashed border-gray-300">
                    <div className="badge badge-outline">{book.category} </div>
                    <div className="badge badge-outline">{book.rating} <CiStar /> </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;