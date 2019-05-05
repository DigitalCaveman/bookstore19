export class State {
   constructor(
        public order_id : number,
        public stage : number,
        public state : string,
        public state_comment : string,
        public created_at : Date,
        public updated_at : Date
    ){}
}
