import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Card} from 'react-materialize';

class PastGames extends React.Component{
     render(){
          // transform game record objects into elements
          let gameRecords = JSON.parse(localStorage.getItem('gameRecords'));
          // give an empty array if gameRecords does not exist
          if(!gameRecords){
               gameRecords = [];
          }
          const gamesJSX = gameRecords.map(el=>{return <Card>
               <p>Result: {el.result}</p>
               <p>Answer: {el.answer}</p>
               <p>Guesses: {el.guesses.join(', ')}</p>
          </Card>});
          return(
               <div className="top--spacing fadeIn animated">
                    {/* clear button for past game records */}
                    <div className="top-right absolute"><Link to="/past-games"><Button className="button--color" onClick={this.props.clearGames}>Clear</Button></Link></div>
                    {gamesJSX}
               </div>
          )
     }
}

export default PastGames;