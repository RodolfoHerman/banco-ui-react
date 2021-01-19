import { Action } from ".."
import { SHOW_MESSAGE } from "./Message.actions.types"


export const showMessage = (message: string = "Mensagem"): Action<string> => {
    return {
        type: SHOW_MESSAGE,
        payload: message
    }
}