import styled from "styled-components";
// A styled button: for general styling and for coloring the buttons when selectes
export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  color: ${(props) => (props.selected ? "var(--mainRed)" : "var(--mainGreen)")};
  border-color: ${(props) =>
    props.selected ? "var(--mainRed)" : "var(--mainGreen)"};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transitions: all 0.5s ease-in-out;
  &:hover {
    background: ${(props) =>
      props.selected ? "var(--mainRed)" : "var(--mainGreen)"};
    color: var(--mainBlue);
  }
`;
