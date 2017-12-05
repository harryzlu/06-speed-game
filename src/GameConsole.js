import React from 'react';
import './GameConsole.css';

class GameConsole extends React.Component{

     render(){
          // renders the game message and the current guess as elements
          let guessed = this.props.pastGuesses.join(', ');
          let lastChance = this.props.nWrong > 4 ? 'LAST CHANCE' : '';
          return(
               <div className="console">
                    <p>{this.props.message}</p>
                    <p>You have already guessed: {guessed} {lastChance}</p>
               </div>
          )
     }
}

export default GameConsole;