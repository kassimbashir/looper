import React from "react";
import { ButtonContainer } from "./Button";
/* CoolButton is a custom button component that changes color when clicked 
  it's used to keep track of which state of buttons (on/off). for example, mute buttons
*/
export default function CoolButton(props) {
  // a state that determines whether a button has been clicked on.
  const [selected, setSelected] = React.useState(false);

  // a custom onClick function that uses the passed onClick method and toggles the "selected" state
  const onClickProp = () => {
    props.onClick();
    setSelected(!selected);
  };
  return (
    <ButtonContainer selected={selected} onClick={onClickProp}>
      {props.children}
    </ButtonContainer>
  );
}
