import React from 'react';
import './Rate.css';
import Calc from '../Calc/Calc'

class Rate extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          date : '',
          currencyRate : {}
      }
      this.getRate();
      this.currency = ['USD', 'PLN', 'CAD', 'PHP']
     
  }
  getRate = () =>{
      fetch('https://api.exchangeratesapi.io/latest')
      .then(data => data.json())
      .then(data => {
          this.setState({ date : data.date});
          let result = {};
          for (let i = 0; i < this.currency.length; i++){
              result[this.currency[i]] = data.rates[this.currency[i]];
          }
          this.setState({currencyRate : result})
        })
  }
  render() {
    return (
    <div className='rate'>
         <h3> Курс валют на {this.state.date}</h3> 
         <div className="flex-container">
         {Object.keys(this.state.currencyRate).map(elem => 
            (
                <div className="block flex-item" key={elem}>
                    <div className="currency-name">{elem}</div>
                    <div className="currency-in">{this.state.currencyRate[elem].toFixed(2)}*</div>
                    <p>* Можно купить за 1 EUR</p>
                </div>
             )
         )}
        </div>
        <Calc rate={this.state.currencyRate}/>
    </div>
     
    );
  }
}

export default Rate;
