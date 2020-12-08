import { Container, withStyles } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Header from '../Header';
import { HeaderMenu } from '../Header';

const styles = {
	containerContent: {
        backgroundColor: '#ecf0f5',
        minHeight: '93vh',
	}
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
        <div className="AppComponent">
            <BrowserRouter>
                <Header headersMenu={headersMenu} />
                <Container className={props.classes?.containerContent}>
                    <Switch>

                    </Switch>
                </Container>
            </BrowserRouter>
        </div>
    )
}

export default withStyles(styles)(App);
