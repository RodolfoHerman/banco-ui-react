import { Conta } from '../components/Conta/Conta.model';
import http from '../utils/http';
import { ResponseConta } from './Response.model';

export const getAllContas = (): Promise<ResponseConta<Array<Conta>>> =>
    http
        .get<ResponseConta<Array<Conta>>>('/contas')
        .then(response => response.data);

export const getConta = (id: number): Promise<ResponseConta<Conta>> =>
    http
        .get<ResponseConta<Conta>>(`/contas/${id}`)
        .then(response => response.data);

export const updateConta = (conta: Conta): Promise<ResponseConta<Conta>> =>
    http
        .put<ResponseConta<Conta>>(`/contas/${conta.id}`, conta)
        .then(response => response.data)