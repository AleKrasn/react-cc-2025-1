import Card from '../Card/Card.jsx'

function Cards({ meals }) {
    return (
        <div className="flex flex-row flex-wrap gap-8 justify-center">
            {meals.map(meal => (
                <Card
                    key={meal.title}
                    image={meal.image}
                    title={meal.title}
                    description={meal.description}
                />
            ))}
        </div>
    )
}

export default Cards
