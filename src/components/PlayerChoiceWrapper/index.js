import React from "react";
import { useAppContext } from "../../contexts/AppContext";
import { TripleCirclesEffect } from "../TripleCirclesEffect";
import "./styles.css";
import Paper from "../../images/icon-paper.svg";
import Scissors from "../../images/icon-scissors.svg";
import Rock from "../../images/icon-rock.svg";
import P from "prop-types";

export const GameChoice = ({ isMachine }) => {
  const [AppState] = useAppContext();
  const { playerChoice, machineChoice, result } = AppState;

  const title = isMachine === false ? "you picked" : "the house picked";

  if (!machineChoice && isMachine === true) {
    return (
      <div className={`box ${isMachine === true ? "moveLeft" : "moveRight"}`}>
        <h1>{title}</h1>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className={`box ${isMachine === true ? "moveLeft" : "moveRight"}`}>
      <h1>{title}</h1>
      <div
        className="gameChoice"
        id={!isMachine ? playerChoice : machineChoice}
      >
        {isMachine === false && (
          <img
            alt="player-choice"
            src={
              playerChoice === "rock"
                ? Rock
                : playerChoice === "scissor"
                ? Scissors
                : playerChoice === "paper"
                ? Paper
                : undefined
            }
          />
        )}

        {isMachine === true && (
          <img
            alt="machine-choice"
            src={
              machineChoice === "rock"
                ? Rock
                : machineChoice === "scissor"
                ? Scissors
                : machineChoice === "paper"
                ? Paper
                : undefined
            }
          />
        )}

        {isMachine === false && result === "W" && (
          <>
            <TripleCirclesEffect />
          </>
        )}

        {isMachine === true && result === "L" && (
          <>
            <TripleCirclesEffect />
          </>
        )}
      </div>
    </div>
  );
};

GameChoice.propTypes = {
  isMachine: P.bool.isRequired,
};
