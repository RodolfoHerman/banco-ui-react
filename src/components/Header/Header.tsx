import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { NavLink } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core';

const styles = () => ({
	header: {
		backgroundColor: '#dd4b39',
		height: '50px',
		display: 'flex',
		alignItems: 'center',
		alignContent: 'center',
		padding: '10px 15px',
		boxShadow: '0 3px 6px rgba(0, 0, 0, .2)',
		marginBottom: '10px'
	},
	'@global': {
		'li:nth-of-type(1)': {
			fontWeight: '900',
		}
	},
	linkContent: {
		color: '#FFF',
		textDecoration: 'none',
		padding: '10px',
		fontSize: '16px',
		'&:hover': {
			textDecoration: 'none',
			backgroundColor: 'rgba(0, 0, 0, .1)',
			borderRadius: '10px',
		}
	}
});

export interface HeaderMenu {
	nome: string,
	link: string
};

declare interface HeaderProps {
	classes?: {
		[seletor: string]: string
	},
	headersMenu: Array<HeaderMenu>
}

const Header: React.FC<HeaderProps> = (props) => {
	return <header className={props.classes?.header}>
		<Container>
			<Breadcrumbs arial-label="breadcrumb">
				{
					props.headersMenu.map(header => {
						return (
							<NavLink 
								className={props.classes?.linkContent}
								key={header.nome}
								to={header.link}
							>
								{ header.nome }
							</NavLink>
						)
					})
				}
			</Breadcrumbs>
		</Container>
	</header>
}

export default withStyles(styles)(Header);
