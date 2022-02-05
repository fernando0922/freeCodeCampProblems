const numToTime = (num) => {
  let min =
    String(num / 60).length === 1 ? "0" + String(num / 60) : String(num / 60);
  const sec =
    String(num % 60).length === 1 ? "0" + String(num % 60) : String(num % 60);

  min =
    String(parseInt(min)).length === 2
      ? String(parseInt(min))
      : "0" + String(parseInt(min));

  return `${min}:${sec}`;
};

const { useState, useEffect, useReducer } = React;

const init = {
  break: { init: 300, cur: 300, active: false },
  session: { init: 120, cur: 120, active: true },
  play: false,
};

const reducer = (state, action) => {
  switch (action) {
    case "breakInc":
      return {
        ...state,
        break: {
          ...state.break,
          init: state.break.init + 60,
          cur: state.break.cur + 60,
        },
      };
    case "breakDec":
      return {
        ...state,
        break: {
          ...state.break,
          init: state.break.init - 60,
          cur: state.break.cur - 60,
        },
      };
    case "sessionInc":
      return {
        ...state,
        session: {
          ...state.session,
          init: state.session.init + 60,
          cur: state.session.cur + 60,
        },
      };
    case "sessionDec":
      return {
        ...state,
        session: {
          ...state.session,
          init: state.session.init - 60,
          cur: state.session.cur - 60,
        },
      };
    case "breakSub":
      return { ...state, break: { ...state.break, cur: state.break.cur - 1 } };
    case "sessonSub":
      return {
        ...state,
        session: { ...state.session, cur: state.session.cur - 1 },
      };
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
  useEffect(() => {
    if (state.play) {
      setTimeout(() => {
        dispatch("sessonSub");
      }, 1000);
    }
  });

  return (
    <>
      <div>
        <p>HEADING</p>
        <h1>{numToTime(state.session.cur)}</h1>
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
        <button id="break-decrement" onClick={() => dispatch("breakDec")} disabled={state.play}>
          -1
        </button>
        <p id="break-length">{parseInt(state.break.init / 60)}</p>
        <button id="break-increment" onClick={() => dispatch("breakInc")} disabled={state.play}>
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
        <button  id="session-decrement" onClick={() => dispatch("sessionDec")} disabled={state.play}>
          -1
        </button>
        <p id="session-length">{parseInt(state.session.init / 60)}</p>
        <button id="session-increment" onClick={() => dispatch("sessionInc")} disabled={state.play}>
          +1
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
