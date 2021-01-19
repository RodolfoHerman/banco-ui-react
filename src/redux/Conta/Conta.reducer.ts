import { Action } from "..";
import { Conta } from "../../components/Conta/Conta.model";
import { GET_ALL_CONTAS } from "./Conta.actions.types";

export const contaReducer = (state = [], action: Action): Array<Conta> => {
    switch (action.type) {
        case GET_ALL_CONTAS:
            return [
                ...action.payload
            ]
        default:
            return state;
    }
}
