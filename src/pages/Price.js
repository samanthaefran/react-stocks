import { useState, useEffect } from 'react';

const Price = (props) => {
  const apiKey = '52f7e2ea280dd0b8d02ff1f3ba6da105';
  
  const symbol = props.match.params.symbol;

  const url =`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`

  const [stock, setStock] = useState(null);

  async function getStock(){
    const response = await fetch(url);
    const data = await response.json();
    setStock(data);
  }

  useEffect(() => {
    getStock();
  }, [])

  const loading = () => <h1>loading ...</h1>

  const loaded = () => {
    return (
      <div>
        <h1>{stock[0].companyName}</h1>
        <h2>{stock[0].price}</h2>
      </div>
    )
  }
  return stock ? loaded () : loading();
}


export default Price;