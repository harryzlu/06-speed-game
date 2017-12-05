import React from 'react';
import {Button} from 'react-materialize';
import './EndScreen.css';

class EndScreen extends React.Component{
     render(){
          // renders the game result and the play again button
          let resultMessage = 'You lose!';
          let hideWin = "end-img hidden";
          let hideLoss = "end-img";
          // change which image is hidden based on the result
          if(this.props.result==='win'){
               resultMessage = 'You win!';
               hideWin = "end-img end-img--animate ";
               hideLoss = "end-img hidden";
          }
          return(
               <div className="display--size fadeIn animated">
                    <h3>{resultMessage}</h3>
                    <Button className="button--color" onClick={this.props.startGame}>Play Again</Button>
                    <img src={require('./img/explosion.png')} className={hideLoss}/>
                    <img src={require('./img/happy-keanu.png')} className={hideWin}/>
               </div>
          )
     }
}

export default EndScreen;