import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {SideNav, NavItem, Navbar, Footer, Row, Container, Section, Col, Button} from 'react-materialize';
import Game from './Game';
import Instructions from './Instructions';
import PastGames from './PastGames';
import './animate.css';

class App extends Component {

     constructor(){
          super();
          this.state = {
               pastGames: [],
               answer: [],
               nWrong: 0,
               nRight: 0,
               pastGuesses: [],
               message: '',
               gameState: '',
               words: [
                    'kaboom',
                    'drive',
                    'keanu',
                    'gottagofast',
                    'matrix',
                    'speed',
                    'pointbreak',
                    'thereisnospoon',
                    'johnwick',
                    'anderson',
               ],
          }

          this.startGame = this.startGame.bind(this);
          this.getRandomWord = this.getRandomWord.bind(this);
          this.newGuess = this.newGuess.bind(this);
          this.checkGuess = this.checkGuess.bind(this);
          this.printGameState = this.printGameState.bind(this);
          this.recordGame = this.recordGame.bind(this);
     }

     startGame(){
          // initialize game state
          this.setState({
               answer: this.getRandomWord().split(''),
               nWrong: 0,
               nRight: 0,
               pastGuesses: [],
               message: '',
               gameState: '',
          })
          // add event listener to focus on the textbox on keydown
          document.addEventListener("keydown", function(){
               if(document.getElementById('inputBox')){
                    document.getElementById('inputBox').focus();
               }
          })
     }

     getRandomWord(){
          const index = Math.floor(Math.random() * this.state.words.length);
          return this.state.words[index];
     }

     newGuess(input){
          // input must be a single character
          if(input.length !== 1){
               this.setState({
                    message: 'You must guess a single letter!'
               })
          }
          // input must be a letter
          else if(!input.match(/[a-z]/i)){
               this.setState({
                    message: 'Your guess must be a letter!'
               })
          }
          // input must not have already been guessed
          else if(this.state.pastGuesses.indexOf(input) > -1){
               this.setState({
                    message: 'You have already guessed that letter!'
               })
          }
          else{
               this.setState({
                    message: 'Your guess is: ' + input,
               })
               this.checkGuess(input.toLowerCase());
          }
     }

     checkGuess(guess){
          // push the guess to past guesses
          let copy = Array.from(this.state.pastGuesses);
          copy.push(guess);
          // check answer for the guessed letter and add matches to count, increase number wrong if no matches
          const matches = this.state.answer.filter(el=>{return el===guess}).length;
          let wrong = this.state.nWrong;
          let right = this.state.nRight;
          if (matches === 0) {
               wrong++;
          }
          else {
               right+= matches;
          }
          this.setState({
               pastGuesses: copy,
               nWrong: wrong,
               nRight: right,
          });
     }

     printGameState() {
          let str = "";
          let answer = this.state.answer;
          // for each letter in the target word
          for (let i = 0; i < answer.length; i++) {
               // look for it in pastGuesses
               let found = this.state.pastGuesses.filter(el=>{return el===answer[i]}).length;
               // print the letter if matched, a blank space if not
               if (found) {
                    str += answer[i];
                    str += "  ";
               }
               else {
                    str += "_  ";
               }
          }
          this.setState({
               gameState: str,
          });
     }

     recordGame(){
          // get game records from local storage
          let gameRecords = JSON.parse(localStorage.getItem('gameRecords'));
          // initialize gameRecords if it does not exist
          if(!gameRecords){
               gameRecords = [];
          }
          // create a record of the current game and store it in local storage
          const newRecord = {
               result: this.state.nWrong > 5 ? 'loss' : 'win',
               answer: this.state.answer.join(''),
               guesses: Array.from(this.state.pastGuesses),
          }
          gameRecords.push(newRecord);
          const output = JSON.stringify(gameRecords);
          localStorage.setItem('gameRecords', output);
     }

     clearGames(){
          localStorage.clear();
     }

     render() {
          const game = () => {return <Game startGame={this.startGame}
               newGuess={this.newGuess}
               printGameState={this.printGameState}
               recordGame={this.recordGame}
               answer={this.state.answer}
               nWrong={this.state.nWrong}
               nRight={this.state.nRight}
               pastGuesses={this.state.pastGuesses}
               message={this.state.message}
               gameState={this.state.gameState}
          />}
          const records = () => {return <PastGames records={this.state.pastGames}
               clearGames={this.clearGames}
          />}
          return (
               <Router>
                    <div className="App">
                         <Navbar className="navbar--color" right>
                              <div className="nav-wrapper">
                                   <ul>
                                        <li><Link to='/'>Game</Link></li>
                                        <li><Link to='/instructions'>Instructions</Link></li>
                                        <li><Link to='/past-games'>Past Games</Link></li>
                                   </ul>
                              </div>
                         </Navbar>
                         <Switch>
                              <Route path='/' exact render={game}/>
                              <Route path='/instructions' component={Instructions}/>
                              <Route path='/past-games' render={records}/>
                         </Switch>
                    </div>
               </Router>
          );
     }
}

export default App;
