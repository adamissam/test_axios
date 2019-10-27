import React from 'react';
import axios from 'axios';
import SimpsoneUniverse from './components/DisplayEmployee';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpsone: [],
      citation:''
    };
  }
  componentDidMount(){
  axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
   .then(response =>{
     this.setState({
      simpsone:response.data[0]
     })
   })
 }
 handleClick(){
  this.setState({
    citation:`${this.state.simpsone.quote}`
  })
  console.log(this.state.citation)
 }
  render() {
    console.log(this.state.citation)
    return (
      <div className="App">
        <SimpsoneUniverse simpsone={this.state.simpsone} />
        <button type="button" onClick={this.handleClik}>Get citation</button>
      </div>
    );
  }
}

export default App;
