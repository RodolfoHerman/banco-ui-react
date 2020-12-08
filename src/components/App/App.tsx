import { Container, withStyles } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import { HeaderMenu } from '../Header';

const styles = {
	ContainerContent: {
        backgroundColor: '#ecf0f5',
        minHeight: '88vh',
    },
    
};

declare interface AppProps {
    classes?: {
        [seletor: string]: string
    }
}

const headersMenu: Array<HeaderMenu> = [
	{
		nome: 'Banco',
		link: '/'
	},
	{
		nome: 'Contas',
		link: '/'
	},
	{
		nome: 'Sobre',
		link: '/'
	}
];

const App: React.FC<AppProps> = (props) => {
    return (
        <>
            <BrowserRouter>
                <Header headersMenu={headersMenu} />
                <Container className={props.classes?.ContainerContent}>
                    <Switch>

                    </Switch>
                </Container>
                <Footer version="Version 1.0.0" />
            </BrowserRouter>
        </>
    )
}

export default withStyles(styles)(App);
