import { Book } from './book';

export class BookFactory {

    static empty(): Book {
        return new Book(null, '', '', 0, [], new Date(),null, '', 0, [{id: 0, url: '', title: ''}], '');
    }

    static fromObject(rawBook: any): Book {
        return new Book(
            rawBook.id,
            rawBook.isbn,
            rawBook.title,
            rawBook.brutto_price,
            rawBook.authors,
            typeof(rawBook.created_at) === 'string' ?
                new Date(rawBook.created_at) : rawBook.published,
            rawBook.user_id,
            rawBook.subtitle,
            rawBook.rating,
            rawBook.images,
            rawBook.description,
        );
    }
}