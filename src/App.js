import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super()

    this.state = {
      answer: 0,
      input1: null,
      input2: null,
      symbol: null,
      inputs: []
    }
    this.renderInputs = this.renderInputs.bind(this);
    this.renderClear = this.renderClear.bind(this);
    this.renderAnswer = this.renderAnswer.bind(this);
    this.renderSymbol = this.renderSymbol.bind(this);

  }

  renderClear() {
    this.setState({answer: 0, inputs: [], symbol: null});
  }

  renderInputs(inp) {
    
    this.state.inputs.push(inp);
    const inps = this.state.inputs;
    
    const foundIndex = inps.findIndex(e => e === ",");
    console.log(foundIndex);

    if (foundIndex > -1) {
      this.setState({answer: inps.slice(foundIndex + 1, inps.length).join("")});
      const input1 = parseInt(inps.slice(0, foundIndex).join(""));
      const input2 = parseInt(inps.slice(foundIndex + 1, inp.length).join(""));
      this.setState({input1: input1, input2: input2});
    } else if (foundIndex === -1) {
      this.setState({answer: inps.join("")});
    }

    
    
    
  }

  renderSymbol(inp) {
    this.setState({symbol: inp});
    this.state.inputs.push(",");
    console.log(this.state.inputs);
  }

  renderAnswer(i1, i2) {
    
    const sym = this.state.symbol;
    let ans;
    if (sym === "add") {
      ans = i1 + i2;
    } else if (sym === "minus") {
      ans = i1 - i2;
    } else if (sym === "mult") {
      ans = i1 * i2;
    } else if (sym === "div") {
      ans = i1 / i2;
    } else {
      alert("Error: Something didnt work!");
    }

    this.setState({answer: ans});
  }

  render() {
    return(
      <div className="container">
        <h1>Calculator</h1>
        <div className = "answer">{this.state.answer}</div>
        <table>
          <tbody>
            <tr>
              <td onClick = {() => this.renderInputs(1)}>1</td>
              <td onClick = {() => this.renderInputs(2)}>2</td>
              <td onClick = {() => this.renderInputs(3)}>3</td>
              <td onClick = {() => this.renderSymbol("add")}>+</td>
            </tr>
            <tr>
              <td onClick = {() => this.renderInputs(4)}>4</td>
              <td onClick = {() => this.renderInputs(5)}>5</td>
              <td onClick = {() => this.renderInputs(6)}>6</td>
              <td onClick = {() => this.renderSymbol("minus")}>-</td>
            </tr>
            <tr>
              <td onClick = {() => this.renderInputs(7)}>7</td>
              <td onClick = {() => this.renderInputs(8)}>8</td>
              <td onClick = {() => this.renderInputs(9)}>9</td>
              <td onClick = {() => this.renderSymbol("mult")}>*</td>
            </tr>
            <tr>
              <td onClick = {this.renderClear}>C</td>
              <td onClick = {() => this.renderInputs(0)}>0</td>
              <td onClick = {() => this.renderSymbol("div")}>/</td>
              <td onClick = {() => this.renderAnswer(this.state.input1, this.state.input2)}>=</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
