
const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div>
            <h1>{title}</h1>
            <img src={image} alt="" />
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