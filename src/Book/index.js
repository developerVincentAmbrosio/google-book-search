import React from 'react';

const Book = ({ book }) =>
    book.map(item => <Item key={item.items.id} {...item} />);
    
    const Item = ({ selfLink, title, authors }) => (
        <div>
            <a href={selfLink}>{title}</a>
            <p>Author(s): {authors}</p>
        </div>
    );

export default Book;