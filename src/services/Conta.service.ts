import http from '../utils/http';
import { ResponseConta } from './Response.model';

export const getAllContas = () =>
    http
        .get<ResponseConta>('/contas')
        .then(response => response.data);
