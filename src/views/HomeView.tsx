import { Card, CardActions, CardContent, Grid, Typography, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const styles = () => ({
	GridContent: {
        width: '80%',
        margin: 'auto',
        textAlign: 'center' as 'center',
        padding: '5%',
    },
    CardStyle: {
        padding: '5%',
        '& div h1': {
            marginBottom: '20px'
        }
    },
    CardActions: {
        display: 'block',
        marginTop: '30px'
    },
    LinkStyle: {
        textDecoration: 'none'
    }
});

declare interface HomeViewProps {
    classes?: {
        [selector: string]: string
    }
}

const HomeView: React.FC<HomeViewProps> = (props) => {
    return (
        <Grid className={props.classes?.GridContent}>
            <Card className={props.classes?.CardStyle}>
                <CardContent>
                    <Typography component="h1" variant="h2">
                        Bem vindo ao Banco <strong>Inter</strong>
                    </Typography>
                    <Typography component="h4" variant="h5">
                        Gostaria de visualizar alguma conta?
                    </Typography>
                </CardContent>
                <CardActions className={props.classes?.CardActions}>
                    <Link 
                        to="/contas" 
                        className={props.classes?.LinkStyle}
                    >
                        <Button 
                            variant="contained" 
                            color="primary" 
                            size="large"
                        >
                            Ver contas
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default withStyles(styles)(HomeView);
