import React, { Component } from 'react';
import Menu from './MenuComponent.js';
import { DISHES } from '../shared/dishes.js';
import Dishdetail from './DishdetailComponent.js';
import { View } from 'react-native';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }
  onDishSelect(dishId) {
    this.setState({selectedDish: dishId})
}
  render() {
 
    return (
      //<View style={{flex:1}}>
      <View>
      <Menu dishes={this.state.dishes} onPress={(dishId) => this.onDishSelect(dishId)} />
      <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
  </View>
    );
  }
}
  
export default Main;