import { Container, withStyles } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import HomeView from '../../views/HomeView';
import Footer from '../Footer';
import Header from '../Header';
import { HeaderMenu } from '../Header';

const styles = {
	ContainerContent: {
        backgroundColor: '#ecf0f5',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center'
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
                        <Route exact path="/">
                            <Redirect to="/home" />
                        </Route>
                        <Route exact path="/home" component={HomeView} />
                    </Switch>
                </Container>
                <Footer version="Version 1.0.0" />
            </BrowserRouter>
        </>
    )
}

export default withStyles(styles)(App);
