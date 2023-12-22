import React from 'react';
import Wordie1 from '../images/Wordie1.png';
import Wordie2 from '../images/Wordie2.png';

const Wordle = () => {
  return (
    <>
      <head>
        <link rel="stylesheet" href="static/basic.css" />
        <title>Python Wordle Project</title>
      </head>
      <body>
        <div className="FrontPageTitle">
          <h1>Wordie: A Python Wordle Clone</h1>
        </div>
        <div className="containerWordle">
          <p className="content">
            In this project, I collaborated with 3 other colleagues to create a clone of the game Wordle, titled "Wordie". In short, the game requires you to guess the randomly selected word within a limited number of tries, using previous words and their letter placements as clues as to what the correct word is.
            <br />
            Overall, the project took 4 months to complete, including the planning and designing of the game. In addition, we added difficulties and a timer.
            <br />
            The difficulties will not only change the length of the word that you will have to guess but also the number of guesses you have to guess the word correctly. Additionally, the length of the timer will also be affected depending on the difficulty.
            <br />
            The program still contains some lack of input validation, and does not work correctly when the program is ran on smaller resolution screens,
            <br />
            <a href="https://github.com/viccon23/WordleGamepy" className="center-link">- Github Link -</a>
          </p>
          <div className="image-container">
            <img src={Wordie1} alt="Image 1" />
            <img src={Wordie2}alt="Image 2" />
          </div>
        </div>
      </body>
    </>
  );
};

export default Wordle;