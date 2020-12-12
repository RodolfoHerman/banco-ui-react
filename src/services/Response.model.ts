import { Conta } from "../components/Conta/Conta.model";

export interface ResponseConta {
    data: Array<Conta>,
    errors: Array<string>
}