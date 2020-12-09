import { AppBar, Container, withStyles } from '@material-ui/core';
import React from 'react';

const styles = {
    '@global': {
		'header.FooterContainer': {
            height: '50px',
            backgroundColor: '#FFF',
            color: '#222',
            display: 'flex',
            flexDirection: 'unset',
        },
        'div.ContainerContent': {
            display: 'flex',
            alignItems: 'center',
            padding: '0px',
            position: 'relative'
        },
        'div.DivContentRight': {
            position: 'absolute',
            right: '0px'
        },
        'div.DivContentLeft': {
            position: 'absolute',
            left: '0px'
        }
    }
}

declare interface FooterProps {
    classes?: {
        [selector: string]: string
    },
    version: string
}

const Footer: React.FC<FooterProps> = (props) => {
    return (
        <AppBar className="FooterContainer" position="static">
            <Container className="ContainerContent">
                <div className="DivContentLeft">
                    <strong>Banco</strong> React Application
                </div>
                <div className="DivContentRight">
                    {props.version}
                </div>
            </Container>
        </AppBar>
    )
}

export default withStyles(styles)(Footer);
