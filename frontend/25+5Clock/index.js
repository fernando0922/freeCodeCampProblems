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

const checkIncDecValue = (data, val) => {
  const num = parseInt((data + val) / 60);
  return num >= 1 && num < 60;
};

const { useState, useEffect, useReducer, useRef } = React;

const init = {
  break: { init: 300, cur: 300, active: false },
  session: { init: 1500, cur: 1500, active: true },
  play: false
};

const reducer = (state, action) => {
  switch (action) {
    case "breakInc":
      if (checkIncDecValue(state.break.init, 1)) {
        return {
          ...state,
          break: {
            ...state.break,
            init: state.break.init + 60,
            cur: state.break.cur + 60,
          },
        };
      } else {
        return state;
      }

    case "breakDec":
      if (checkIncDecValue(state.break.init, -1)) {
        return {
          ...state,
          break: {
            ...state.break,
            init: state.break.init - 60,
            cur: state.break.cur - 60,
          },
        };
      } else {
        return state;
      }
    case "sessionInc":
      if (checkIncDecValue(state.session.init, 1)) {
        return {
          ...state,
          session: {
            ...state.session,
            init: state.session.init + 60,
            cur: state.session.cur + 60,
          },
        };
      } else {
        return state;
      }
    case "sessionDec":
      if (checkIncDecValue(state.session.init, -1)) {
      return {
        ...state,
        session: {
          ...state.session,
          init: state.session.init - 60,
          cur: state.session.cur - 60,
        },
      };
    }else{
      return state;
    }
    case "breakSub":
      return { ...state, break: { ...state.break, cur: state.break.cur - 1 } };
    case "sessonSub":
      return {
        ...state,
        session: { ...state.session, cur: state.session.cur - 1 },
      };
    case "activeBreak":
      return {
        ...state,
        break: { ...state.break, cur: state.break.init, active: true },
        session: { ...state.session,cur:state.session.init, active: false },
      };
    case "activeSession":
      return {
        ...state,
        session: { ...state.session, cur: state.session.init, active: true },
        break: { ...state.break,cur: state.break.init, active: false },
      };
    case "play":
      return { ...state, play: !state.play };
    default:
      return init;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, init);

  console.log(state.session, state.break );

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

  let interval = ""

  const aref = useRef();
  

  useEffect(() => {
    if (state.play) {
      if (state.session.active && state.session.cur === -1) {
       aref.current.play()
       dispatch("activeBreak");
      }
      
      if (state.break.active && state.break.cur === -1) {
        aref.current.play()
        dispatch("activeSession");
      }

      interval = setTimeout(() => {
        state.session.active ? dispatch("sessonSub") : dispatch("breakSub");
      }, 1000);
    }
  });

  return (
    <>
    
    <audio
        ref={aref}
        hidden
        id="beep"
        controls
        src={"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"}
      />
      <div>
        <p id="timer-label">{state.session.active ? "SESSION" : "BREAK"}</p>
        <h1 id="time-left">
          {numToTime(
            state.session.active ? state.session.cur : state.break.cur
          )}
        </h1>
      </div>
      <div id="button-container">
        <button id="start_stop" onClick={() => {
          clearTimeout(interval)
          return dispatch("play")}}>
          {state.play ? "PAUSE" : "PLAY"}
        </button>
        <button id="reset"onClick={() => {
          clearTimeout(interval)
          return dispatch("reset")
          }}>RESET</button>
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
        <button
          id="break-decrement"
          onClick={() => dispatch("breakDec")}
          disabled={state.play}
        >
          -1
        </button>
        <p id="break-length">{parseInt(state.break.init / 60)}</p>
        <button
          id="break-increment"
          onClick={() => dispatch("breakInc")}
          disabled={state.play}
        >
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
        <button
          id="session-decrement"
          onClick={() => dispatch("sessionDec")}
          disabled={state.play}
        >
          -1
        </button>
        <p id="session-length">{parseInt(state.session.init / 60)}</p>
        <button
          id="session-increment"
          onClick={() => dispatch("sessionInc")}
          disabled={state.play}
        >
          +1
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
