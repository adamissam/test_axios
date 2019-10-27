import React from 'react';
import axios from 'axios';
import SimpsoneUniverse from './components/DisplayEmployee';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpsone: []
    };
    this.onClick = this.onClick.bind(this);
  }
  componentDidMount(){
  axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
   .then(response =>{
     this.setState({
      simpsone:response.data[0]
     })
   })
 }
 onClick(){
  axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
  .then(response =>{
    this.setState({
     simpsone:response.data[0]
    })
  })
 }

 
  render() {
   
    return (
      <div className="App">
        <SimpsoneUniverse simpsone={this.state.simpsone} />
        <button type="button" onClick={this.onClick}>Get citation</button>
      </div>
    );
  }
}

export default App;
