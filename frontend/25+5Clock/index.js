const numToTime = (num) => {
  const min =
    String(num / 60).length === 1 ? "0" + String(num / 60) : String(num / 60);
  const sec =
    String(num % 60).length === 1 ? "0" + String(num % 60) : String(num % 60);
  return `${min}:${sec}`;
};

const { useState, useEffect, useReducer } = React;

const init = {
  break: 5,
  session: 25,
  play: false,
};

const reducer = (state, action) => {
  switch (action) {
    case "breakInc":
      return state.break > 0 && state.break < 60
        ? { ...state, break: state.break + 1 }
        : state;
    case "breakDec":
      return state.break > 1 && state.break < 60
        ? { ...state, break: state.break - 1 }
        : state;
    case "sessionInc":
      return state.session > 1 && state.session < 60
        ? { ...state, session: state.session + 1 }
        : state;
    case "sessionDec":
      return state.session > 1 && state.session < 60
        ? { ...state, session: state.session - 1 }
        : state;
    case "play":
      return { ...state, play: !state.play };
    default:
      return init;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, init);

  return (
    <>
      <Heading state={state} dispatch={dispatch} />
      <BreakSession state={state} dispatch={dispatch} />
      <Countdown state={state} dispatch={dispatch} />
    </>
  );
};

const BreakSession = ({ state, dispatch }) => {
  return (
    <div id="b-s-c">
      <Break state={state} dispatch={dispatch} />
      <Session state={state} dispatch={dispatch} />
    </div>
  );
};

const Countdown = ({ state, dispatch }) => {
  const [timeInSec, setTimeInSec] = useState(state.session);

  useEffect(() => {
    console.log("I WILL WORK NOW");
  }, [state.play]);

  return (
    <>
      <div>
        <p>HEADING</p>
        <h1>{numToTime(timeInSec*60)}</h1>
      </div>
      <div>
        <button onClick={() => dispatch("play")}>
          {state.play ? "PAUSE" : "PLAY"}
        </button>
        <button onClick={() => dispatch("reset")}>RESET</button>
      </div>
    </>
  );
};

const Heading = () => {
  return <h1>25 + 5 Clock</h1>;
};

const Break = ({ state, dispatch }) => {
  return (
    <div className="c-c">
      <p id="break-label">Break Length</p>
      <div className="b-s">
        <button id="break-decrement" onClick={() => dispatch("breakDec")}>
          -1
        </button>
        <p id="break-length">{state.break}</p>
        <button id="break-increment" onClick={() => dispatch("breakInc")}>
          +1
        </button>
      </div>
    </div>
  );
};

const Session = ({ state, dispatch }) => {
  return (
    <div className="c-c">
      <p id="session-label">session Length</p>
      <div className="b-s">
        <button id="session-decrement" onClick={() => dispatch("sessionDec")}>
          -1
        </button>
        <p id="session-length">{state.session}</p>
        <button id="session-increment" onClick={() => dispatch("sessionInc")}>
          +1
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
