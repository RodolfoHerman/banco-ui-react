import { Grid, Typography, withStyles } from '@material-ui/core';
import React from 'react';

const styles = () => ({
    GridStyle: {
        padding: '5%',
        '& > *:not(:last-child)': {
            marginBottom: "20px",
        },
        '& > *:not(:first-child)': {
            fontSize: "1.2em"
        }
    }
});

declare interface AboutViewProps {
    classes?: {
        [seletor: string]: string
    }
}

const AboutView: React.FC<AboutViewProps> = (props) => {
    return (
        <Grid 
            className={props.classes?.GridStyle}
            direction="column"
        >
            <Typography component="h2" variant="h3">
                Sobre
            </Typography>
            <p>Banco | Aplicação que visualiza contas do banco Inter</p>
            <p>Serviços diposnibilizados na API:</p>
            <p>1) Serviço para verificar o saldo de uma conta corrente.</p>
            <p>2) Serviço para realizar um depósito em uma determinada conta corrente.</p>
            <p>3) Serviço para realizar um saque de uma determinada conta corrente.</p>
        </Grid>
    )
}

export default withStyles(styles)(AboutView);
