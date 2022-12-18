import React from "react";
import { TfiReload } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { restart } from "../../redux/slice";
import {
  ModalBody,
  ModalHeader,
  ModalInformation,
  ModalPoint,
  ModalStyled,
  RestartButton,
} from "./Final.styled";

function Final({ status }) {
  const dispatch = useDispatch();

  const point = useSelector((state) => state.game.point);

  return (
    <ModalStyled>
      <ModalBody>
        <ModalHeader>
          {status === "win" ? "🥳Congratulations🥳" : "😿You Lost😿"}
        </ModalHeader>
        <ModalInformation>
          Your score is <ModalPoint>{point}</ModalPoint>
        </ModalInformation>
        <RestartButton onClick={() => dispatch(restart())}>
          <TfiReload />
          Play Again
        </RestartButton>
      </ModalBody>
    </ModalStyled>
  );
}

export default Final;