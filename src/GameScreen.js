import React from 'react';
import './GameScreen.css';
import {Card} from 'react-materialize';

class GameScreen extends React.Component{
     render(){
          // show hidden elements and change angle of speedometer needle based on the value of nWrong
          let nWrong = this.props.nWrong;
          let angle = 15 - 35 * nWrong;
          let hide1 = "keanu absolute" + (nWrong > 0 ? "" : " hidden");
          let hide2 = "keanu absolute" + (nWrong > 1 ? "" : " hidden");
          let hide3 = "keanu absolute" + (nWrong > 2 ? "" : " hidden");
          let hide4 = "keanu absolute" + (nWrong > 3 ? "" : " hidden");
          let hide5 = "keanu absolute" + (nWrong > 4 ? "" : " hidden");
          return(
               <div>
                    <Card className="display--size relative">
                         <img className="speedometer absolute" width="100px" src={require('./img/speedometer.png')}/>
                         <img className="bus absolute" width="250px" src={require('./img/bus.png')}/>
                         <span className="needle-wrapper absolute" style={{transform: `rotate(${angle}deg)`}}>
                              <img className="needle" width="60px" src={require('./img/needle.png')}/>
                         </span>
                         <img className="wheel absolute" id="left-wheel" width="35px" src={require('./img/wheel.png')}/>
                         <img className="wheel absolute" id="right-wheel" width="35px" src={require('./img/wheel.png')}/>
                         <img className="keanu absolute" id="keanu-1" src={require('./img/keanu.png')}/>
                         <img className={hide1} id="keanu-2" src={require('./img/keanu.png')}/>
                         <img className={hide2} id="keanu-3" src={require('./img/keanu.png')}/>
                         <img className={hide3} id="keanu-4" src={require('./img/keanu.png')}/>
                         <img className={hide4} id="keanu-5" src={require('./img/keanu.png')}/>
                         <img className={hide5} id="keanu-6" src={require('./img/keanu.png')}/>
                    </Card>
                    <p>{this.props.gameState}</p>
               </div>
          )
     }
}

export default GameScreen;