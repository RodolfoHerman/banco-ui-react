import { Grid, withStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const styles = () => ({
    GridStyle: {
        width: "60%",
        margin: "auto",
        display: "flex",
        minHeight: "80vh",
        alignItems: "center",
        flexDirection: "column" as "column",
        justifyContent: "center",

        '& h1': {
            color: "#09F",
            fontWeight: "900"
        }
    },
    LinkStyle: {
        textDecoration: "none",
        marginTop: "20px",
        color: "#09F",
        fontSize: "12px"
    }
});

declare interface NotFoundViewProps {
    classes?: {
        [seletor: string]: string
    }
}

const NotFoundView: React.FC<NotFoundViewProps> = (props) => {
    return (
        <Grid
            className={props.classes?.GridStyle}
        >
            <h1>
                404
            </h1>
            <p>Não encontrado</p>
            <Link 
                to="/"
                className={props.classes?.LinkStyle}
            >
                Voltar para a Home
            </Link>
        </Grid>
    )
}

export default withStyles(styles)(NotFoundView);
