import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Card, CardContent, CardHeader, Grid, Typography, withStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getConta } from '../../../services/Conta.service';
import { setDateBRFormatter, setNumberBRFormatter } from '../../../utils/converter-utils';
import { Conta } from '../Conta.model';

const styles = () => ({
    GridContainerContent: {
        width: "90%",
        position: "relative" as "relative",
        top: "30px",
        margin: "auto",
        '& > *:not(:last-child)': {
            marginBottom: "15px"
        }
    },
    BoxCabecalho: {
        fontSize: "0.7em",
        textTransform: "uppercase" as "uppercase",
        fontWeight: 800,
        color: "#555"
    },
    GridImg: {
        height: "160px",

        '& img': {
            margin: 'auto',
            display: 'block',
            width: '95%',
            height: '100%'
        }
    },
    AwesomeIcon: {
        marginRight: "5px"
    },
    GridTypography: {
        '& :nth-child(odd)': {
            textTransform: "uppercase" as "uppercase",
            fontWeight: 700,
            color: "#555"
        },
        '& :nth-child(even)': {
            fontSize: "0.9em"
        }
    }
})

declare interface ContaDetailProps {
    classes?: {
        [seletor: string]: string
    }
}

const ContaDetail: React.FC<ContaDetailProps> = (props) => {
    const [conta, setConta] = useState<Conta | undefined>(undefined);
    const { id } = useParams<{id: string | undefined}>();

    async function fetchConta() {
        const _conta = await getConta(Number(id));
        setConta(_conta.data);
    }

    useEffect(() => {
        fetchConta();
        const dinheiroImg = require('./../../../assets/img/dinheiro.png');
        if (typeof window !== 'undefined') {
            new Image().src = dinheiroImg;
        }
    }, []);

    return (
        <Grid
            container
            spacing-xs-5="true"
            align-items-xs-flex-end="true"
            direction="column"
            className={props.classes?.GridContainerContent}
        >
            <Grid item xs>
                <Card elevation={3}>
                    <CardHeader
                        style={{
                            borderBottom: "1px solid rgb(220,220,220)"
                        }}
                        title={
                            <Box 
                                display="flex"
                                justifyContent="space-between"
                                flexWrap="wrap"
                                className={props.classes?.BoxCabecalho}
                            >
                                <Box>
                                    <FontAwesomeIcon
                                        size="lg"
                                        icon="credit-card"
                                        color="#555"
                                        className={props.classes?.AwesomeIcon}
                                    />
                                    Conta corrente
                                </Box>
                                <Box>
                                    <FontAwesomeIcon 
                                        size="lg" 
                                        color="#555" 
                                        icon="address-card" 
                                        className={props.classes?.AwesomeIcon} 
                                    />
                                    {
                                        conta?.id
                                    }
                                </Box>
                            </Box>
                        }
                    />
                    <CardContent>
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
                                            Saldo
                                        </Typography>
                                        <Typography>
                                            {
                                                `R$ ${setNumberBRFormatter(conta?.saldo)}`
                                            }
                                        </Typography>
                                        <Typography>
                                            Data criação
                                        </Typography>
                                        <Typography>
                                            {
                                                setDateBRFormatter(conta?.dataCriacao)
                                            }
                                        </Typography>
                                        <Typography>
                                            Data atualização
                                        </Typography>
                                        <Typography>
                                            {
                                                setDateBRFormatter(conta?.dataAtualizacao)
                                            }
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs>
                {/* COMPONENTE DE OPERATION AQUI */}
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(ContaDetail);
