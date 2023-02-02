import styled from 'styled-components';

const Btn = styled.button``;

const Button = (props) => {
  return <Btn text={props.text}>{props.text}</Btn>;
};

export default Button;
