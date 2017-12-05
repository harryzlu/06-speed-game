import React from 'react';
import './Game.css'
import GameScreen from './GameScreen';
import GameConsole from './GameConsole';
import GameInput from './GameInput';
import EndScreen from './EndScreen';

class Game extends React.Component{

     // starts the game when the component mounts
     componentWillMount(){
          this.props.startGame();
     }

     // print the hangman word
     componentDidMount(){
          this.props.printGameState();
     }

     componentDidUpdate(prevProps, prevState){
          if(prevProps.pastGuesses!==this.props.pastGuesses){
               // print the game state after a new guess
               this.props.printGameState();
               // record the results when a game ends
               if(this.props.nWrong > 5 || this.props.nRight === this.props.answer.length){
                    this.props.recordGame();
               }
          }
     }

     render(){
          let screen = <div className="fadeIn animated">
               <h2>SPEED</h2>
               <GameScreen gameState={this.props.gameState} nWrong={this.props.nWrong}/>
               <GameConsole message={this.props.message} nWrong={this.props.nWrong} pastGuesses={this.props.pastGuesses}/>
               <GameInput newGuess={this.props.newGuess} startGame={this.props.startGame}/>
          </div>
          if(this.props.nRight === this.props.answer.length){
               screen = <EndScreen result='win' startGame={this.props.startGame}/>
          }
          else if(this.props.nWrong > 5){
               screen = <EndScreen result='loss' startGame={this.props.startGame}/>
          }
          return (
               <div className="display--width top--spacing">
                    {screen}
               </div>
          )
     }
}

export default Game;