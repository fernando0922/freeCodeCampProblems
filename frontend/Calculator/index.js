const { useState } = React;

const App = () => {
  const [display, setDisplay] = useState("0");

  const calculate = () => {
    let data = display.replace(/[x]+/g, "*");

    if (data[data.length - 1] === "+" || data[data.length - 1] === "-") {
      data += "0";
    }

    if (data[data.length - 1] === "*" || data[data.length - 1] === "/") {
      data += "1";
    }

    setDisplay(String(eval(data)));
  };

  const operations = (value, data) => {
    if (!(value === "0" || value === "Infinity")) {
      if (/[x/]/.test(value[value.length - 1]) && data === "-") {
        setDisplay(value + data);
      } else if (value[value.length-2]+value[value.length-1]==="x-" && data === "+") {
        setDisplay(value.substring(0, value.length - 2) + data);
      } else if (/[-+x/]/.test(value[value.length - 1])) {
        setDisplay(value.substring(0, value.length - 1) + data);
      } else {
        setDisplay(value + data);
      }
    }
  };

  const buttonPressed = (data) => {
    switch (data) {
      case "clear":
        setDisplay("0");
        break;
      case "-":
        operations(display, data);
        break;
      case "+":
        operations(display, data);
        break;
      case "x":
        operations(display, data);
        break;
      case "/":
        operations(display, data);
        break;
      case "=":
        calculate();
        break;
      case ".":
        let value = display.split(/[-+x/]/);
        value = value[value.length - 1];
        if (value.includes(".")) {
          return;
        }
        if (/[0-9]/.test(display[display.length - 1])) {
          setDisplay(display + data);
        } else {
          setDisplay(display + "0" + data);
        }
        break;
      default:
        if (display === "0" || display === "ERROR") {
          setDisplay(data);
        } else {
          setDisplay(display + data);
        }
        break;
    }
  };

  return (
    <>
      <h1>CALCULATOR</h1>
      <div id="container">
        <div className="cal-component" id="display">
          {display}
        </div>
        <button
          onClick={() => buttonPressed("clear")}
          className="cal-component btn btn-outline-danger"
          id="clear"
        >
          AC
        </button>
        <button
          onClick={() => buttonPressed("/")}
          className="cal-component btn btn-outline-dark"
          id="divide"
        >
          /
        </button>
        <button
          onClick={() => buttonPressed("x")}
          className="cal-component btn btn-outline-dark"
          id="multiply"
        >
          x
        </button>
        <button
          onClick={() => buttonPressed("7")}
          className="cal-component btn btn-outline-dark"
          id="seven"
        >
          7
        </button>
        <button
          onClick={() => buttonPressed("8")}
          className="cal-component btn btn-outline-dark"
          id="eight"
        >
          8
        </button>
        <button
          onClick={() => buttonPressed("9")}
          className="cal-component btn btn-outline-dark"
          id="nine"
        >
          9
        </button>
        <button
          onClick={() => buttonPressed("-")}
          className="cal-component btn btn-outline-dark"
          id="subtract"
        >
          -
        </button>
        <button
          onClick={() => buttonPressed("4")}
          className="cal-component btn btn-outline-dark"
          id="four"
        >
          4
        </button>
        <button
          onClick={() => buttonPressed("5")}
          className="cal-component btn btn-outline-dark"
          id="five"
        >
          5
        </button>
        <button
          onClick={() => buttonPressed("6")}
          className="cal-component btn btn-outline-dark"
          id="six"
        >
          6
        </button>
        <button
          onClick={() => buttonPressed("+")}
          className="cal-component btn btn-outline-dark"
          id="add"
        >
          +
        </button>
        <button
          onClick={() => buttonPressed("1")}
          className="cal-component btn btn-outline-dark"
          id="one"
        >
          1
        </button>
        <button
          onClick={() => buttonPressed("2")}
          className="cal-component btn btn-outline-dark"
          id="two"
        >
          2
        </button>
        <button
          onClick={() => buttonPressed("3")}
          className="cal-component btn btn-outline-dark"
          id="three"
        >
          3
        </button>
        <button
          onClick={() => buttonPressed("=")}
          className="cal-component btn btn-outline-primary"
          id="equals"
        >
          =
        </button>
        <button
          onClick={() => buttonPressed("0")}
          className="cal-component btn btn-outline-dark"
          id="zero"
        >
          0
        </button>
        <button
          onClick={() => buttonPressed(".")}
          className="cal-component btn btn-outline-dark"
          id="decimal"
        >
          .
        </button>
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
