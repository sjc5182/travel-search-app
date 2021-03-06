import React from 'react';
import axios from 'axios';
//import SearchResult from './components/QuoteSearchResults';
//import Quotes from './constructor/Quotes';
import './styles.less';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        country: '',
        currency: '',
        language: '',
        departure: '',
        arrival: '',
        departureDate: '',
        quotes: []
     }
  }

  handleSearch = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSetApi = () =>{
    const {country, currency, language, departure, arrival, departureDate } = this.state
    console.time("hello")
    const url = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/${country}/${currency}/${language}/${departure}/${arrival}/${departureDate}`
    console.timeEnd("hello")
    const config = {
      headers: {'X-RapidAPI-Key': '9582c9a04bmsh38417e4edecff7dp13f60djsn521655bbeed3'}
    };
    axios.get(url, config)
      .then((result) => {
        console.log(result.data);
        const Test = result.data.Carriers.concat(result.data.Quotes)
        this.setState({
          carriers: Test
        })
      });
  }
  
  // componentDidMount(){
  // const config = {
  //   headers: {'X-RapidAPI-Key': '9582c9a04bmsh38417e4edecff7dp13f60djsn521655bbeed3'}
  // };
  // axios.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/03f71f7a-9152-49ad-8866-037a4cc800ad", config)
  //   .then((result) => {
  //     let itineraries = result.data.Itineraries;
  //     let legs = result.data.Legs;
  //     this.setState({
  //       quotes: Quotes.legs(itineraries, legs)
  //     })
  //   });
  // }
  render() {
    return (
      <div className = 'with-styles'>
        <p>Hello this is my Main Page</p>
        {/* <input type = "text" name = "country" onChange = {this.handleSearch} placeholder = "US"></input>
        <input type = "text" name = "currency" onChange = {this.handleSearch} placeholder = "USD"></input>
        <input type = "text" name = "language" onChange = {this.handleSearch} placeholder = "en-US"></input>
        <input type = "text" name = "departure" onChange = {this.handleSearch} placeholder = "SFO-sky"></input>
        <input type = "text" name = "arrival" onChange = {this.handleSearch} placeholder = "JFK-sky"></input>
        <input type = "text" name = "departureDate" onChange = {this.handleSearch} placeholder = "2019-02-20"></input>
        <button onClick = {this.handleSetApi}>Search</button> */}
        {/* {console.log(this.state.quotes)} */}
      
      </div>
    );
  }
}

export default App;

// https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-02-27
// https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/CN/USD/en-US/SFO-sky/PEK-sky/2019-02-28"
