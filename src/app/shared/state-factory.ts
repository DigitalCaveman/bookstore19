import {State} from "./state";

export class StateFactory {
    static empty(): State{
        return new State(null, 0, '', '', new Date(), new Date());
    }

    static fromObject(rawState : any) : State{
        return new State(
            rawState.order_id,
            rawState.stage,
            rawState.state,
            rawState.state_comment,
            typeof(rawState.created_at) === 'string' ?
                new Date(rawState.created_at) : rawState.created_at,
            typeof(rawState.updated_at) === 'string' ?
                new Date(rawState.updated_at) : rawState.updated_at
        )

    }
}


