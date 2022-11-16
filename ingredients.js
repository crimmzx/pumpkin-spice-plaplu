import React from 'react';

const ingredientsList = [
  '1 1/2 cups milk', ' 1 cup pumpkin puree', '1 egg',
  '1 1/2 cups milk', ' 1 cup pumpkin puree', '1 egg',
]

const ingredientsJSX = ingredientsList.map(element => <li>element</li>)

console.log(ingredientsJSX)

const Ingredients = (props) => (
  <section>
    <h1>Ingredients</h1>
    <ul>
      {props.list.map(element => <li>{element}</li>)}
    </ul>
  </section>
)

export default Ingredients
