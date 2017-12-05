import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Card, Button} from 'react-materialize';

class Instructions extends React.Component{
     render(){
          return(
               <div className="fadeIn animated">
                    <Row>
                         <Col l={4} m={3} s={1}/>
                         <Col l={4} m={6} s={10}>
                              <Card className="top--spacing" title="Speed">
                                   Keanu is trapped on a bus rigged with a bomb! If the bus goes slower than 50mph, the bomb will explode! Guess the word correctly to defuse the bomb and save Keanu, but each time you guess a letter wrong, the bus will slow down!
                              </Card>
                         </Col>
                         <Col l={4} m={3} s={1}/>
                    </Row>
                    <Link to="/"><Button className="button--color absolute top-right">Play!</Button></Link>
               </div>
          )
     }
}

export default Instructions;