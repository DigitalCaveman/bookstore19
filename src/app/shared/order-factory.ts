import { Order } from './order';

export class OrderFactory {
    static empty(): Order{
        return new Order(null, 0, 0, 0 , null, [], [], new Date);
    }

    static fromObject(rawOrder: any) : Order{
        return new Order(
            rawOrder.id,
            rawOrder.total_price,
            rawOrder.gross,
            rawOrder.net,
            rawOrder.user_id,
            rawOrder.state,
            rawOrder.books,
            typeof(rawOrder.created_at) === 'string' ?
                new Date(rawOrder.created_at) : rawOrder.published,
        )
    };
}