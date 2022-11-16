import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Ingredients from './ingredients'
import Directions from './Directions'


/**
 * WARMUP ACTIVITY!
 * Step 1: Head to this basic-white-girl website of pumpkin-based recipes and pick your favorite one: http://dish.allrecipes.com/pumpkin-breakfast-squash-champions-sorry-zucchini/?internalSource=editorial_2&referringId=78&referringContentType=Recipe%20Hub
 * 
 * Step 2: Create a new component (in a new file) called "Ingredients." Make sure you:
 *  import React from 'react'
 *  Create the component
 *  export default Ingredients
 * 
 * Step 3: Make the component say something! For now, just create a header saying "Ingredients" and add an unordered list element (<ul>). Wrap both of these in a <section>
 * 
 * Step 4: Import your component into this file and render it inside the App component
 * 
 * Step 5: Going back to Ingredients.js, create a list of strings. In this list, copy each ingredient from the "ingredients" section on the recipe website you chose
 * 
 * Step 6: Now comes to hard part: showing that list of ingredients as a list on the page. Reference the activity we did last time to see how to use "map()" in order to do this!
 * 
 * Step 7: Let's do something similar to steps 2-6, this time for the "directions" section. Just as before:
 *  1. Make a new component and import it into here (call it Directions preferably)
 *  2. Create a list of strings in this component copied from the "directions" of your recipe and render them inside of a list element. This time, use an ordered list (<ol> instead of <ul>)
 * 
 * Step 8: Just for fun, add an <img> to the App component with a picture of the finished product. To get the src URL for this, head to your recipe's website, right click on your recipe's banner image, and choose "open image in new tab." Copy this URL and paste it here.
 * 
 * Step 9: Enjoy your tasty app with a pumpktin spice latte (extra whip)
 */

/**
 * BONUS CHALLENGE
 * Now let's say we get all of our information back from some API endpoint. The format of the return object goes like this: {ingredients: [...], directions: [...]}, where each list is a list of strings.
 * We want to make this API call from index.js. So, let's simulate this scenario! Take your ingredient and direction lists from the last steps and paste them into this new object. Just make it a const inside this file. Then, find a way to pass each list to the respective Incredients and Directions components.
 */

const sampleAPIresult = {
  ingredients: [ '1 1/2 cups milk', ' 1 cup pumpkin puree', '1 egg',
  '1 1/2 cups milk', ' 1 cup pumpkin puree', '1 egg',]
  directions: [ "Sift flour, sugar, baking powder, cinnamon, and nutmeg together in a bowl.",
  "Whisk milk, pumpkin, egg, and oil together in a bowl. Pour milk mixture into flour mixture and stir until just moistened. Batter will be slightly lumpy.",
  "Heat a lightly oiled griddle over medium-high heat to 350 degrees F (175 degrees C). Drop batter by large spoonfuls onto the griddle and cook until bubbles form and the edges are dry, 1 to 3 minutes. Flip and cook until browned on the other side, about 1 minute more. Repeat with remaining batter."]
}

const App = () => (
  <main>
    <Ingredients/>
    <Directions/>
    <img src="https://www.allrecipes.com/thmb/XTGzT0v7kl7SE9GL90WV0B5uyBM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1084367-7a9826c0cce94776a9b401feead1eb8a.jpg" 
    alt = "Delicius pumpkin spice pancakes" />
    <Ingredients list={sampleAPIresult.ingredients} />
    <Directions list={sampleAPIresult.directions} />
  </main>
)

render(<App />, document.querySelector('body'));
