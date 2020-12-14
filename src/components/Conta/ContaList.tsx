import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Paper, Typography, withStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllContas } from '../../services/Conta.service';
import { setNumberBRFormatter } from '../../utils/converter-utils';
import { Conta } from './Conta.model';

const styles = () => ({
    ContaListaH1: {
        marginBottom: "20px"
    },
    GridStyle: {
        alignItems: "stretch"
    },
    LinkStyle: {
        textDecoration: 'none',
        color: "#000"
    },
    PaperStyle: {
        padding: "2%",
        minHeight: "120px"
    },
    GridImg: {
        width: "125px",
        height: "90px",

        '& img': {
            margin: 'auto',
            display: 'block',
            width: '100%',
            height: '100%'
        }
    },
    GridTypography: {
        '& :first-child': {
            textTransform: "uppercase",
            fontWeight: "bold",
            marginBottom: "10px !important"
        },
        '& > *:not(:last-child)': {
            marginBottom: "5px"
        }
    },
    AwesomeIcon: {
        marginRight: "5px"
    }
});

declare interface ContaListProps {
    classes?: {
        [seletor: string]: string
    }
}

const ContaList: React.FC<ContaListProps> = (props) => {
    const [contas, setContas] = useState<Array<Conta>>([]);

    async function fetchContas() {
        const _contas = await getAllContas();
        setContas(_contas.data);
    }

    useEffect(() => {
        fetchContas();
        const dinheiroImg = require('./../../assets/img/dinheiro.png');
        if (typeof window !== 'undefined') {
            new Image().src = dinheiroImg;
        }
    }, []);

    return (
        <>
            <h1 className={props.classes?.ContaListaH1}>Lista de contas</h1>
            <Grid 
                container 
                direction="row"
                spacing={5}
                alignItems="center"
                className={props.classes?.GridStyle}
            >
                {
                    contas.map(conta => 
                        <Grid key={`conta_corrente_${conta.id}`}  item sm={6} xs={12}>
                            <Paper className={props.classes?.PaperStyle}>
                                <Link to="/" className={props.classes?.LinkStyle}>
                                    <Grid container spacing={2}>
                                        <Grid xs={3} item className={props.classes?.GridImg}>
                                            <img alt="complex" src="/static/media/dinheiro.1dc4fa37.png" />
                                        </Grid>
                                        <Grid item xs={9} sm container>
                                            <Grid 
                                                item 
                                                xs 
                                                container 
                                                direction="column" 
                                                spacing={5}
                                            >
                                                <Grid item xs className={props.classes?.GridTypography}>
                                                    <Typography>
                                                        Conta corrente
                                                    </Typography>
                                                    <Typography>
                                                        Saldo
                                                    </Typography>
                                                    <Typography>
                                                        {
                                                            `R$ ${setNumberBRFormatter(conta.saldo)}`
                                                        }
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <FontAwesomeIcon 
                                                    size="lg" 
                                                    color="black" 
                                                    icon="address-card" 
                                                    className={props.classes?.AwesomeIcon} 
                                                />
                                                    {
                                                        conta.id
                                                    }
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Link>
                            </Paper>
                        </Grid>
                    )
                }
            </Grid>
        </>
    )
}

export default withStyles(styles)(ContaList);
