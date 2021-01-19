import { Action } from "..";
import { Conta } from "../../components/Conta/Conta.model";
import { GET_ALL_CONTAS } from "./Conta.actions.types";

export const mockData: Array<Conta> = [
    {
        dataAtualizacao: '2020-11-28T17:43:40.524+0000',
        dataCriacao: '2020-11-28T17:24:57.363+0000',
        deposito: undefined,
        valor: undefined,
        id: 1,
        saldo: 55555455556056.00
    },
    {
        dataAtualizacao: '2020-12-24T17:57:07.989+0000',
        dataCriacao: '2020-11-28T17:24:57.363+0000',
        deposito: undefined,
        valor: undefined,
        id: 2,
        saldo: 0.05
    }
];

export const getAllContas = (): Action<Array<Conta>> => {
    return {
        type: GET_ALL_CONTAS,
        payload: mockData
    }
}
