import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { IconContext } from 'react-icons';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import questions from './data';
import graphic from './images/UIUX_design.svg';

const downAnimation1 = keyframes`
 0% {
    transform: translateY(-7px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;
const downAnimation2 = keyframes`
 0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;
const AccordionContainer = styled.div``;
const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: white;
  max-width: 1200px;
  padding: 3rem;
  border-radius: 2rem;
  box-shadow: 0px 0px 40px -20px rgba(5, 71, 176, 0.5);
  animation: ${downAnimation2} 0.5s 0.1s ease-out both;
`;
const ItemsContainer = styled.div`
  margin-bottom: 7px;
  border: 1px solid #d4dae9;
  border-radius: 5px;
`;
const ImgContainer = styled.div`
  width: 600px;
  img {
    width: 550px;
    padding: 0 1rem;
    height: 100%;
    display: block;
  }
`;
const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
  width: 500px;
  transition: all 0.2s linear;
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
  }
  h3:hover {
    color: #3975fd;
  }
`;
const Answer = styled.div`
  width: 500px;
  padding: 1rem;
  background: #eef9ff;
  border-radius: 5px;
  transition: all 0.2s linear;
  animation: ${downAnimation1} 0.3s 0.1s ease-out both;
  font-size: 0.9rem;
`;

function Accordion() {
  const [clicked, setclicked] = useState(false);

  const handleClick = (index) => {
    if (clicked === index) {
      return setclicked(null);
    }

    setclicked(index);
  };

  return (
    <IconContext.Provider value={{ size: '20px' }}>
      <Card>
        <ImgContainer>
          <img src={graphic} alt="UI/UX Graphic" />
        </ImgContainer>
        <AccordionContainer>
          {questions.map((item, index) => (
            <ItemsContainer>
              <Question
                key={index}
                onClick={() => {
                  handleClick(index);
                }}
                style={{
                  borderBottom:
                    clicked === index ? '1px solid #d4dae9' : undefined,
                  borderLeft:
                    clicked === index ? '5px solid #3975fd' : undefined,
                  color: clicked === index ? '#3975fd' : undefined
                }}
              >
                <h3>{item.question}</h3>
                <span>
                  {clicked === index ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </Question>
              {clicked === index ? <Answer>{item.answer}</Answer> : null}
            </ItemsContainer>
          ))}
        </AccordionContainer>
      </Card>
    </IconContext.Provider>
  );
}

export default Accordion;
