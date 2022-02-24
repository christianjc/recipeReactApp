import style from "./recipe.module.css"

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img className={style.image} src={image} alt="" />
            <p>Calories {calories}</p>
            <ol>
                {ingredients.map((ingredient,index) =>(
                    <li key={index}>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    );
}

export default Recipe;