import { Conta } from '../components/Conta/Conta.model';
import http from '../utils/http';
import { ResponseConta } from './Response.model';

export const getAllContas = () =>
    http
        .get<ResponseConta<Array<Conta>>>('/contas')
        .then(response => response.data);

export const getConta = (id: number) =>
    http
        .get<ResponseConta<Conta>>(`/contas/${id}`)
        .then(response => response.data);