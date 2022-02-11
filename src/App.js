import "./App.css";
import AudioRow from "./AudioRow";
import React from "react";
import { ButtonContainer } from "./Button";
import CoolButton from "./CoolButton";

const data = [
  {
    trackName: "_tambourine_shake_higher.mp3",
    color: "#e6e6ff",
  },
  {
    trackName: "B VOC.mp3",
    color: "yellow",
  },
  {
    trackName: "DRUMS.mp3",
    color: "#ffd9b3",
  },
  {
    trackName: "HE HE VOC.mp3",
    color: "#ffe6e6",
  },
  {
    trackName: "JIBRISH.mp3",
    color: "#e0ebeb",
  },
  {
    trackName: "LEAD 1.mp3",
    color: "#ccffee",
  },
  {
    trackName: "UUHO VOC.mp3",
    color: "#e0ebeb",
  },
  {
    trackName: "HIGH VOC.mp3",
    color: "lightpink",
  },
];

function App() {
  /** the app states
   * play: a boolean that controls whether the audio should play(true) or pause(false)
   * loop: a boolean that controls whether the audio should loop(true) or not(false)
   * cursor: a double that determines the playing position
   * finishedTracks: an integer [0,8) that tells how many tracks finished playing - for synchronizing
   */
  const [play, setPlay] = React.useState(false);
  const [loop, setLoop] = React.useState(false);
  const [cursor, setCursor] = React.useState(0);
  const [finishedTracks, setFinishedTracks] = React.useState(0);

  // shared props for AudioRow
  const audioProps = {
    cursor,
    setCursor,
    play,
    setPlay,
    loop,
    finishedTracks,
    setFinishedTracks,
  };
  return (
    <div className="App">
      {/* HTML range slider
        onChange: when user tries to move cursor, the audio stops playing -> cursor position is updated
        onMouseUp: when user releases the mouse button, the audio continues to play
      */}
      <div className="slidecontainer">
        <input
          style={{ width: "20vw" }}
          type="range"
          min="1"
          max="100"
          value={cursor}
          onChange={(event) => {
            if (play) setPlay(false);

            setCursor(event.target.value);
          }}
          onMouseUp={() => {
            setPlay(true);
          }}
          className="slider"
          id="myRange"
        ></input>
      </div>
      <div
        className="div"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Each row is a component called AudioRow
          the component creates an htmlaudioElement with the track name and row color
        */}
        {data.map((audioObj) => (
          <AudioRow key={audioObj.trackName} {...audioObj} {...audioProps} />
        ))}
      </div>
      <div className="div">
        {/* Last three buttons are: Play, Stop and Loop
          they have an onClick method that updates the appropriate state
        */}
        <ButtonContainer
          onClick={() => {
            setPlay(true);
          }}
        >
          Play
        </ButtonContainer>
        <ButtonContainer
          onClick={() => {
            setPlay(false);
          }}
        >
          Stop
        </ButtonContainer>
        {/* CoolButton is a custom button component that changes color when clicked */}
        <CoolButton onClick={() => setLoop(!loop)}>loop</CoolButton>
      </div>
    </div>
  );
}

export default App;
