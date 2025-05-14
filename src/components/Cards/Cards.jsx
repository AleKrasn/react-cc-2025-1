import Card from '../Card/Card.jsx'

function Cards({ meals }) {
  return (
    <div className="flex flex-row flex-wrap gap-8 justify-center">
      {meals.map((meal, index) => (
        <div
          key={meal.title + meal.image}
          className="fade-in"
          style={{ 
            animationDelay: `${index * 100}ms` 
          }}
        >
          <Card
            image={meal.image}
            title={meal.title}
            description={meal.description}
          />
        </div>
      ))}
    </div>
  )
}

export default Cards
