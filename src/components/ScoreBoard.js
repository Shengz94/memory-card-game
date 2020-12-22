const ScoreBoard = (props) => {

    return(
        <div className="score-board">
            <div className="score"><b>Score: {props.score}</b></div>
            <div className="highest-score"><b>Highest Score: {props.highestScore}</b></div>
        </div>
    )
}

export default ScoreBoard