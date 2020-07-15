import React from 'react';
import './Calc.css';

class Calc extends React.Component {
  constructor(props){
      super(props);
      this.state = { 
          result : 0
      }
  }

  static getDerivedStateFromProps(props, state){
      return {rate : props.rate}
  }

  calcRate = (e) =>{
      e.preventDefault();
      let elements = e.target.elements;
      let typeCurrency = elements['type-currency'].value;
      let countCurrency = elements['count-currency'].value;
      this.setState({ result : (countCurrency / this.state.rate[typeCurrency]).toFixed(2)})
  }
  render() {
    return (
     <div className='Calc'>
        <h3> Калькулятор обмена</h3>
        <div className="block">
            <div>Я хочу</div>
            <div>
                <form onSubmit={this.calcRate}>
                <input type="number" defaultValue="100" name='count-currency'/>
                <select name="type-currency" id="">
                    {Object.keys(this.props.rate).map(elem => 
                        (
                            <option key={elem} value={elem}>{elem}</option>
                        )
                    )}
                </select>
                <input type='submit' value='Рассчитать'/>
                </form>
            </div>
            <div>
                <h4>Результат</h4>
                <ul className="calc-res">
                    <li>EUR {this.state.result}</li>
                </ul>
            </div>
        </div>
     </div>
    );
  }
}

export default Calc;
