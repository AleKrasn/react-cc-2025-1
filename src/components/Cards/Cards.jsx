import Card from '../Card/Card.jsx'

function Cards({ cards }) {
    return (
        <div className="flex flex-row flex-wrap gap-8 justify-center">
            {cards.map(card => (
                <Card
                    key={card.title}
                    image={card.image}
                    title={card.title}
                    description={card.description}
                />
            ))}
        </div>
    )
}

export default Cards
