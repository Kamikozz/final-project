import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import config from "../../config/config.json";
import CaughtPokemon from "./CaughtPokemon";

const styles = theme => ({
  root: {
    margin: "20px",
    flexGrow: 1
  }
});

class CaughtPokemons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserId: 1,
      caughtPokemons: []
    };
    this.getCaughtPokemonsList = this.getCaughtPokemonsList.bind(this);
  }

  getCaughtPokemonsList() {
    fetch(
      `${config.host}:${config.port}/user/${
        this.state.currentUserId
      }/caught_pokemons`
    )
      .then(res => res.json())
      .then(pokemons => {
        this.setState({ caughtPokemons: pokemons });
      })
      .catch(err => console.log(err));
  }

  // getPokemonDescription = (name) => {
  // 	fetch(`https://www.pokemon.com/ru/pokedex/${name}`)
  // 		.then(res => res.text())
  // 		.then(body => {
  //
  // 			const regexp = /<p class="version-y\s.*\s*[\w .\n&#;,:]*<\/p>/;
  // 			const replaceRegexp = /<p class="version-y\s.*\s*|\s*<\/p>|/g;
  // 			console.log(body);
  // 			body = body.match(regexp).toString().replace(replaceRegexp, "").replace(/\n/g, " ");
  //
  // 			return body;
  // 			// var p = document.getElementById('description');
  // 			// p.innerHTML = body;
  // 		})
  // 		.catch(err => console.log(err))
  // };

  componentDidMount() {
    this.getCaughtPokemonsList();
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24} justify="center">
          {this.state.caughtPokemons.map(pokemon => (
            <CaughtPokemon
              key={pokemon.id}
              pokemonId={pokemon.pokemonId}
              name={pokemon.name}
              date={pokemon.caughtDate}
            />
          ))}
        </Grid>
      </div>
    );
  }
}

CaughtPokemons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CaughtPokemons);
