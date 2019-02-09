import React from 'react';
import axios from 'axios';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }


  componentDidMount(){

    var config = {
      headers: {'X-RapidAPI-Key': '9582c9a04bmsh38417e4edecff7dp13f60djsn521655bbeed3'}
    };
    
    axios.get('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-02-20?inboundpartialdate=2019-01-01', config)
  .then(function (result) {
    console.log(result.data.Carriers);
  });


  }
  
  render() {
    return (
      <div>
        <p>Hello</p>
      </div>
    );
  }
}

export default App;
