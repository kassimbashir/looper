import React, { useMemo } from "react";
import CoolButton from "./CoolButton";

/* this component creates an htmlaudioElement with the track name and row color 
  it also controls everything about the audio: muting, playing, pausing, stopping
*/

export default function AudioRow({
  cursor,
  setCursor,
  play,
  setPlay,
  loop,
  trackName,
  color,
}) {
  // a state that determines if certain audio track should be muted
  const [mute, setMute] = React.useState(false);
  /** here I used the useMemo hook. Reason: audio is a dependency for useEffect, but it changes on every render
   * so to prevent that from happening we memoize "audio" so it only updates when necessary
   */
  const audio = useMemo(() => {
    return new Audio("/audio/" + trackName);
  }, [trackName]);
  /** useEffect hook: in order to toggle the mute button we use the "mute" state and update it
   * in the useEffect hook so that it only changes when the right dependencies change
   */
  React.useEffect(() => {
    if (mute) {
      audio.muted = true;
    } else {
      audio.muted = false;
    }
  }, [mute, audio]);
  /** this useEffect determines whether audio should play or pause using the delegated state "play" */
  React.useEffect(() => {
    if (play) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [audio, play]);
  /** this useEffect determines whether audio should loop or not using the delegated state "loop" */
  React.useEffect(() => {
    audio.loop = loop;
  }, [audio, loop]);
  /** this useEffect creates an event listener that updates cursor as time passes */
  React.useEffect(() => {
    audio.addEventListener("timeupdate", () => {
      setCursor((audio.currentTime / audio.duration) * 100);
    });
  }, [audio, setCursor]);
  /** Bonus: this useEffect handles the drag and drop abilities; it moves playback to the dropped position
   * by updating the audio.current time
   */
  React.useEffect(() => {
    if (play) audio.currentTime = (cursor / 100) * audio.duration;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audio, play]);
  /** this useEffect creates an event listener that rewinds audio to zero when audio reaches its end */
  React.useEffect(() => {
    audio.addEventListener(
      "ended",
      () => {
        /** after audio has reached its end, rewind back to zero */
        audio.rewind();
      },
      [audio]
    );
  });
  /** custom rewind method; rewinds audio back to zero */
  HTMLMediaElement.prototype.rewind = function () {
    this.pause();
    this.currentTime = 0;
    setPlay(false);
  };

  return (
    <div style={{ backgroundColor: color }}>
      <CoolButton
        onClick={() => {
          setMute(!mute);
        }}
      >
        mute
      </CoolButton>
    </div>
  );
}
