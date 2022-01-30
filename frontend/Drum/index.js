const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const { useState, useContext, useEffect } = React;

const App = () => {

    
  useEffect(() => {
    const listen = (e) => {
      const btn = document.getElementById(String(e.key).toUpperCase())
      if(btn){
          btn.click()
      }
    };
    window.addEventListener("keydown", listen);
    return () => {
      window.removeEventListener("keydown", listen);
    };
  }, []);

  return (
    <div id="container">
      <DrumMachine />
    </div>
  );
};

const TextContext = React.createContext();

const DrumMachine = () => {
  const [musicId, setMusicId] = useState("-");

  return (
    <div id="drum-machine">
      <TextContext.Provider value={{ setMusicId }}>
        <Display value={musicId} />
        <Keys music={bankOne} />
      </TextContext.Provider>
    </div>
  );
};

const Display = ({ value }) => {
  return <h1 id="display">{value}</h1>;
};

const Keys = ({ music }) => {
  return (
    <div id="keys">
      {music.map((a) => (
        <Key data={a} key={a.keyTrigger} />
      ))}
    </div>
  );
};

const Key = (props) => {
  const tc = useContext(TextContext);

  const buttonClick = ({ url, id }) => {
    new Audio(url).play();
    tc.setMusicId(id);
  };
  return (
    <button
      id={props.data.keyTrigger}
      className="drum-pad"
      key={props.data.keyTrigger}
      value={props.data.keyTrigger}
      onClick={() => buttonClick({url:props.data.url,id:props.data.id})}
    >
      {props.data.keyTrigger}
    </button>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
