import { library } from '@fortawesome/fontawesome-svg-core';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { Container, withStyles } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { 
    AboutView, 
    ContaView, 
    HomeView, 
    NotFoundView 
} from '../../views';
import Footer from '../Footer';
import Header from '../Header';
import { HeaderMenu } from '../Header';

library.add(faAddressCard);

const styles = () => ({
	ContainerContent: {
        backgroundColor: '#ecf0f5',
        minHeight: '88vh',
    },
});

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
		link: '/contas'
	},
	{
		nome: 'Sobre',
        link: '/sobre'
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
                        <Route exact path="/sobre" component={AboutView} />
                        <Route exact path="/contas" component={ContaView} />
                        <Route component={NotFoundView} />
                    </Switch>
                </Container>
                <Footer version="Version 1.0.0" />
            </BrowserRouter>
        </>
    )
}

export default withStyles(styles)(App);
