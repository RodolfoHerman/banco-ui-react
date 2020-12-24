import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Card, CardContent, CardHeader, Grid, Typography, withStyles } from '@material-ui/core';
import React from 'react';
import { setDateBRFormatter, setNumberBRFormatter } from '../../../utils/converter-utils';
import { Conta } from '../Conta.model';

const styles = () => ({
    CardHeader: {
        borderBottom: "1px solid rgb(220,220,220)"
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
    },
    conta: Conta
}

const ContaDetail: React.FC<ContaDetailProps> = (props) => {
    return (
        <Card elevation={3}>
            <CardHeader
                className={props.classes?.CardHeader}
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
                                props.conta?.id
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
                    <Grid item xs={9} sm>
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
                                        `R$ ${setNumberBRFormatter(props.conta?.saldo)}`
                                    }
                                </Typography>
                                <Typography>
                                    Data criação
                                </Typography>
                                <Typography>
                                    {
                                        setDateBRFormatter(props.conta?.dataCriacao)
                                    }
                                </Typography>
                                <Typography>
                                    Data atualização
                                </Typography>
                                <Typography>
                                    {
                                        setDateBRFormatter(props.conta?.dataAtualizacao)
                                    }
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default withStyles(styles)(ContaDetail);
