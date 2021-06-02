import { useState } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import questions from './data';

const Card = styled.div`
  display: flex;
  background: white;
  max-width: 800px;
  padding: 2rem;
  border-radius: 2rem;
`;
const ImgContainer = styled.div``;
const Heading = styled.h2``;
const Container = styled.div``;
const ItemsContainer = styled.div``;
const Question = styled.div``;
const Answer = styled.div``;

function Accordion() {
  const [clicked, setclicked] = useState(false);

  const handleClick = (index) => {
    if (clicked === index) {
      setclicked(null);
    }

    setclicked(index);
  };

  return (
    <IconContext.Provider value={{ size: '25px' }}>
      <Card>
        <ImgContainer></ImgContainer>
        <Heading>FAQ</Heading>
        <Container>
          {questions.map((item, index) => (
            <ItemsContainer
              key={item.id}
              onClick={(index) => {
                handleClick(index);
              }}
            >
              <Question>
                <h3>{item.question}</h3>
                <span>{clicked ? <FiChevronDown /> : <FiChevronUp />}</span>
              </Question>
              <Answer>{item.answer}</Answer>
            </ItemsContainer>
          ))}
        </Container>
      </Card>
    </IconContext.Provider>
  );
}

export default Accordion;
