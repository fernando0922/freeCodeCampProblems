
const { useState} = React;

const App = () => {

  const [display, setDisplay] = useState("0"); 

  return (
    <div id="container">
     <div className="cal-component" id="display">{display}</div>
     <button className="cal-component btn btn-outline-danger" id="clear">AC</button>
     <button className="cal-component btn btn-outline-dark" id="divide">/</button>
     <button className="cal-component btn btn-outline-dark" id="multiply">X</button>
     <button className="cal-component btn btn-outline-dark" id="seven">7</button>
     <button className="cal-component btn btn-outline-dark" id="eight">8</button>
     <button className="cal-component btn btn-outline-dark" id="nine">9</button>
     <button className="cal-component btn btn-outline-dark" id="subract">-</button>
     <button className="cal-component btn btn-outline-dark" id="four">4</button>
     <button className="cal-component btn btn-outline-dark" id="five">5</button>
     <button className="cal-component btn btn-outline-dark" id="six">6</button>
     <button className="cal-component btn btn-outline-dark" id="add">+</button>
     <button className="cal-component btn btn-outline-dark" id="one">1</button>
     <button className="cal-component btn btn-outline-dark" id="two">2</button>
     <button className="cal-component btn btn-outline-dark" id="three">3</button>
     <button className="cal-component btn btn-outline-primary" id="equals">=</button>
     <button className="cal-component btn btn-outline-dark" id="zero">0</button>
     <button className="cal-component btn btn-outline-dark" id="decimal">.</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
