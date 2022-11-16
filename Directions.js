import React from 'react'

const directionsList = [
  "Sift flour, sugar, baking powder, cinnamon, and nutmeg together in a bowl.",
  "Whisk milk, pumpkin, egg, and oil together in a bowl. Pour milk mixture into flour mixture and stir until just moistened. Batter will be slightly lumpy.",
  "Heat a lightly oiled griddle over medium-high heat to 350 degrees F (175 degrees C). Drop batter by large spoonfuls onto the griddle and cook until bubbles form and the edges are dry, 1 to 3 minutes. Flip and cook until browned on the other side, about 1 minute more. Repeat with remaining batter."
]

const directionsJSX = directionsList.map(element => <li>{element}</li>)

const Directions = (props) => {
  <section>
    <h2> Directions </h2>
    <ol>
      {props.list.map(element => <li>{element})</li>)}
    </ol>
    </section>

}

export default Directions