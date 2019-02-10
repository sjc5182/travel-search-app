import React from 'react';

const SearchResult = (props) => (
  //const {carriers, quotes} = props
  <div>
    {props.carriers.map(carrier => <div key = {carrier.CarrierId}>{carrier.Name}</div>)}
  </div>
);


export default SearchResult;