import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { TfiReload } from "react-icons/tfi";
import Cards from './Cards';
import { restart } from '../../redux/slice';

import {
    GameArea,
    Information,
    InfoSpan,
    ReloadGame,
    Score,
    Scoreboard,
    ScoreSpan,
} from "./Content.styled";
  

function Content() {
    const dispatch = useDispatch();

    const point = useSelector((state) => state.game.point);
    
    return (
        <GameArea>
            <Scoreboard>
                <Score>
                    Your Score: <ScoreSpan color='palevioletred'>{point}</ScoreSpan>
                </Score>
                <ReloadGame onClick={() => dispatch(restart())}>
                    <TfiReload />
                    Reload Game
                </ReloadGame>
            </Scoreboard>
            <Information>
                Your start score is 200. Each correct gives{" "}
                <InfoSpan color='green'>50</InfoSpan> points, each wrong takes{" "}
                <InfoSpan color="red">10</InfoSpan> points.
            </Information>
            <Cards />
        </GameArea>
    )
}

export default Content
