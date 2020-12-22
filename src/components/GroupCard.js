import {useState} from "react"
import images from "./Images"
import ScoreBoard from "./ScoreBoard"
import Cards from "./Cards";

function shuffle(originalArray) {
  let newArray =  Array.from(originalArray);
  var currentIndex = newArray.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = newArray[currentIndex];
    newArray[currentIndex] = newArray[randomIndex];
    newArray[randomIndex] = temporaryValue;
  }

return newArray;
}

const GroupCard = () =>{
    const [cards, setCards] = useState(shuffle(images));
    const [clickedCards, setclickedCards] = useState([]);
    const [score, setScore] = useState(0);
    const [highestScore, sethighestScore] = useState(0);

    function clickCard(e){
      let id = e.target.id;
      console.log(clickedCards)
      if(clickedCards.length <= 0 || (clickedCards.length > 0 && !clickedCards.includes(id))){
        setScore(score+1);
        let newClickedCards = clickedCards.concat(id);
        setclickedCards(newClickedCards);
      }
      else{
        sethighestScore(score > highestScore ? score : highestScore);
        setScore(0);
        setclickedCards([]);
      }
      setCards(shuffle(cards));
    }
    return (
      <div className="memory-game">
        <ScoreBoard score={score} highestScore={highestScore} />
        <div className="group-card">
          {cards.map(card => {
            return <Cards key={card.id} card={card} clickCard={clickCard} />
          })}
        </div>
      </div>
    )
}

export default GroupCard;