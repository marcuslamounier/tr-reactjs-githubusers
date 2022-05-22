import React from 'react'
import Book from '../molecules/book'

import '../style.css'

const BestSellers = ({books}) => {
    return (
        <article className="best-sellers">
            {books.map((book, index) => (
                <Book book={book} key={book.id} />
            ))}
        </article>
    )
}

export default BestSellers