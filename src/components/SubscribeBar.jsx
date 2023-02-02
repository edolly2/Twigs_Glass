import styled from 'styled-components';
import Button from './Button';

const Container = styled.div`
  width: 100%;
  max-height: 30rem;
  background-color: pink;
  display: flex;
  padding: 0.4rem;
  gap: 8rem;
  align-items: center;
  justify-content: flex-end;
`;

const BarText = styled.h3`
  font-size: 1.6rem;
`;

const BarInputGrp = styled.div`
  /* margin: auto; */
  /* margin-left: auto; */
`;

const BarInput = styled.input`
  padding: 0.2rem 0 0.2rem 0.4rem;
`;

const SubscribeBar = () => {
  return (
    <Container>
      <BarText>Join Our Mailing List For Access to Awesome Deals!</BarText>
      <BarInputGrp>
        <BarInput
          type='email'
          name='sub-email'
          id='sub-email'
          placeholder='Example@email.com'
        />
        <Button text='Subscribe' />
      </BarInputGrp>
    </Container>
  );
};

export default SubscribeBar;
