const Cards = (props) => {

    return (
        <div className="card" id={props.card.id} onClick={props.clickCard}>
            <img id={props.card.id} src={props.card.img} alt={props.card.title} />
            <h5>{props.card.title}</h5>
        </div>
    )
}

export default Cards;