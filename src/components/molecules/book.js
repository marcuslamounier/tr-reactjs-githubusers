import React from 'react'
import Author from '../atoms/author'
import Cover from '../atoms/cover'
import Price from '../atoms/price'
import Title from '../atoms/title'

const Book = ({book}) => {
    return (
        <div className="book">
            <Cover cover={book.imgSrc} />
            <div className="book-info">
                <Title title={book.title} />
                <Author author={book.author} />
                <Price price={book.price} />
            </div>
        </div>
    )
}

export default Book