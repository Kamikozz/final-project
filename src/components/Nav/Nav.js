import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import PhoneIcon from '@material-ui/icons/Phone';
// import PersonPinIcon from '@material-ui/icons/PersonPin';
import pokedexIcon from '../../assets/logo.png'
import './Nav.css';
import {Link} from "react-router-dom";

const styles = {
	root: {
		flexGrow: 1,
		// maxWidth: "200px",
	},
	tabsIndicator: {
		backgroundColor: 'red'
	},
	tabsRoot: {
		color: 'red'
	},
};

class IconLabelTabs extends React.Component {
	state = {
		value: 0,
	};

	handleChange = (event, value) => {
		this.setState({value});
	};

	render() {
		const {classes} = this.props;

		return (
			<Paper square className={classes.root}>
				<Tabs
					classes={{root: classes.tabsRoot, indicator: classes.tabsIndicator }}
					value={this.state.value}
					onChange={this.handleChange}
					variant="fullWidth"
					// indicatorColor="secondary"
					// textColor="secondary"
				>
					<Tab
						icon={
							<img src={pokedexIcon} alt="Home pokedex" width="24px"/>
						}
						label="POKEDEX" component={Link} to="/" />
					<Tab label="GOTCHA!" component={Link} to="/a"  />
				</Tabs>
			</Paper>
		);
	}
}

IconLabelTabs.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconLabelTabs);