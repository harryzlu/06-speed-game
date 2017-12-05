import React from 'react';
import {Button, Card} from 'react-materialize';

class GameInput extends React.Component{

     constructor(){
          super();
          this.state = {
               letterInput: '',
          }
          this.inputHandler = this.inputHandler.bind(this);
          this.submitHandler = this.submitHandler.bind(this);
          this.newGame = this.newGame.bind(this);
     }

     // state corresponds to value of input box
     inputHandler(event){
          this.setState({
               letterInput: event.target.value,
          });
     }

     // runs newGuess function when form is submitted
     submitHandler(event){
          event.preventDefault();
          this.props.newGuess(this.state.letterInput);
          event.target.reset();
     }

     // reset input box state when newgame button is clicked
     newGame(){
          this.setState({
               letterInput: '',
          });
          this.props.startGame();
     }

     render(){
          return(
               <div>
                    <div>
                         <form onSubmit={this.submitHandler}>
                              <input type="text" id="inputBox" onChange={this.inputHandler} placeholder="guess a letter"/>
                              <Button className="button--color" type="submit">Guess!</Button>
                         </form>
                    </div>
                    <Button className="button--color absolute top-right" onClick={this.newGame}>New Game</Button>
               </div>
          )
     }
}

export default GameInput;