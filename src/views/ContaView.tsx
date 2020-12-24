import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Conta } from '../components/Conta/Conta.model';
import ContaDetail from '../components/Conta/detail/ContaDetail';
import ContaOperation from '../components/Conta/operation/ContaOperation';
import { getConta } from '../services/Conta.service';

const styles = () => ({
    GridContainerContent: {
        width: "90%",
        position: "relative" as "relative",
        top: "30px",
        margin: "auto",
        '& > *:not(:last-child)': {
            marginBottom: "15px"
        }
    }
})

declare interface ContaViewProps {
    classes?: {
        [seletor: string]: string
    }
}

const ContaView: React.FC<ContaViewProps> = (props) => {
    const initialState: Conta = {
        id: undefined,
        saldo: undefined,
        deposito: undefined,
        valor: undefined,
        dataCriacao: undefined,
        dataAtualizacao: undefined
    }
    const [conta, setConta] = useState<Conta>(initialState);
    const { id } = useParams<{id: string | undefined}>();

    async function fetchConta() {
        const _conta = await getConta(Number(id));
        setConta(_conta.data);
    }

    useEffect(() => {
        fetchConta();
        const dinheiroImg = require('./../assets/img/dinheiro.png');
        if (typeof window !== 'undefined') {
            new Image().src = dinheiroImg;
        }
    }, []);
    
    return(
        <Grid
            container
            spacing-xs-5="true"
            align-items-xs-flex-end="true"
            direction="column"
            className={props.classes?.GridContainerContent}
        >
            <Grid item xs>
                <ContaDetail conta={conta} />
            </Grid>
            <Grid item xs>
                <ContaOperation conta={conta} />
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(ContaView);
