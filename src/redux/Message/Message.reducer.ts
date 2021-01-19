import { Action } from "..";
import { SHOW_MESSAGE } from "./Message.actions.types";

export const messageReducer = (state: string = '', action: Action): string => {
    switch (action.type) {
        case SHOW_MESSAGE: 
            return action.payload
        default:
            return state;
    }
}