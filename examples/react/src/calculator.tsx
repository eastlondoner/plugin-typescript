import * as React from 'react';
import {CalculatorStore} from './calculator-store';

//import 'systemjs-hot-reloader/default-listener.js';

export class Calculator extends React.Component<any, CalculatorStore> {
   constructor(props) {
      super(props);
      this.state = new CalculatorStore();
   }


   input(digit) {
      this.state.input(digit);
      this.forceUpdate();
   }

   clear() {
      this.state.clear();
      this.forceUpdate();
   }

   add() {
      this.state.add();
      this.forceUpdate();
   }

   inputButton(digit: number) {
      return <button className="adder-button adder-button-digit"
                     key={digit}
                     onClick={() => this.input(digit)}>{digit}</button>;
   }

   render() {
      // build the rows of digits
      let buttons = [
         [1, 2, 3].map((digit) => this.inputButton(digit)),
         [4, 5, 6].map((digit) => this.inputButton(digit)),
         [7, 8, 9].map((digit) => this.inputButton(digit))
      ];

      // add the bottom row
      buttons.push([
         <button className="adder-button adder-button-add"
                 key="add"
                 onClick={() => this.add()}>+</button>,
         this.inputButton(0),
         <button className="adder-button adder-button-clear"
                 key="clear"
                 onClick={() => this.clear()}>c</button>
      ]);

      // wrap with row divs
      let buttonrows = buttons.map((row, idx) => {
         return (
            <div key={"row" + idx} className="adder-row">
               {row}
            </div>
         );
      });

      return (
         <div className="adder-container">
            <div className="adder-row">
               <span className="adder-operand adder-display">{this.state.operand}</span>
            </div>

            <div className="adder-row">
               <span className="adder-total adder-display">{this.state.total}</span>
            </div>

            {buttonrows}
         </div>
      );
   }
}
