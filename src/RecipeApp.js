import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import Recipe from './Recipe';
import Navbar from './Navbar';
import RecipeInput from './RecipeInput';
import RecipeList from './RecipeList';
import './RecipeApp.css';

class RecipeApp extends Component {
  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
        showForm: false
      }
    });
  }

  onDelete(id) {
    const recipes = this.state.recipes.filter(r => r.id !== id);
    this.setState({recipes});
  }

  render() {
    const {shouldShowForm, recipes} = this.props;
    return (
      <div className="App">
        <Navbar onNewRecipe={() => this.setState({showForm: true})} />
        { shouldShowForm ? <RecipeInput
          onSave={this.handleSave}
          onClose={() => this.setState({showForm: false})}
        /> : null }
        <RecipeList onDelete={this.onDelete} recipes={recipes} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes,
  shouldShowForm: state.shouldShowForm
});

export default connect(mapStateToProps, null)(RecipeApp);