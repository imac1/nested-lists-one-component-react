import { recipes } from './data.js';

export default function RecipeList() {
  const recipeBlocks = recipes.map( recipe => (
    <div key={recipe.id}>
      <h2>{recipe.name}</h2>
    <ul>
      {recipe.ingredients.map((ingredient, index)=>(
      <li key={index}>{ingredient}</li>
      ))}
    </ul>
    </div>
  )
    
  )

  return <div>{recipeBlocks}</div>;
}
