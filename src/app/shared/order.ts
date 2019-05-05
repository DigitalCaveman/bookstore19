import {State} from "./state";
export {State} from "./state"
import {Book} from "./book";

export class Order {
    constructor(
        public id : number,
        public total_price : number,
        public gross : number,
        public net : number,
        public user_id : number,
        public state : State[],
        public books : Book[],
        public created_at : Date
    ){}


}
