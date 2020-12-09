import { Card, CardActions, CardContent, Typography, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React from 'react';

const styles = {
	CardContent: {
        width: '80%',
        minHeight: '200px',
        margin: 'auto',
        textAlign: 'center' as 'center',
        padding: '5%',
        marginTop: '7%'
    },
    CardActions: {
        display: 'block',
        marginTop: '30px'
    }
};

declare interface HomeViewProps {
    classes?: {
        [selector: string]: string
    }
}

const HomeView: React.FC<HomeViewProps> = (props) => {
    return (
        <Card className={props.classes?.CardContent}>
            <CardContent>
                <Typography component="h1" variant="h2">
                    {
                        "Bem vindo ao Banco Inter"
                    }
                </Typography>
                <Typography component="h4" variant="h5">
                    {
                        "Gostaria de visualizar alguma conta?"
                    }
                </Typography>
            </CardContent>
            <CardActions className={props.classes?.CardActions}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        size="small"
                    >
                        {'Ver contas'}
                    </Button>
            </CardActions>
        </Card>
    )
}

export default withStyles(styles)(HomeView);
