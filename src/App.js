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
const AccordionContainer = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: white;
  max-width: 1200px;
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: 0px 0px 40px -20px rgba(5, 71, 176, 0.5);
  animation: ${downAnimation2} 0.5s 0.1s ease-out both;
  @media screen and (max-width: 750px) {
    padding-top: 6rem;
  }
  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`;
const ItemsContainer = styled.div`
  margin-bottom: 7px;
  border: 1px solid #d4dae9;
  border-radius: 5px;
  width: 470px;
  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;
const ImgContainer = styled.div`
  width: 400px;
  margin-right: 1rem;
  img {
    height: 100%;
    display: block;
    width: inherit;
  }
  @media screen and (max-width: 750px) {
    width: 250px;
    position: absolute;
    top: -120px;
    margin-right: 0;
  }
  @media screen and (min-width: 1100px) {
    width: 500px;
    margin-right: 2rem;
  }
`;
const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s linear;
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-right: 2rem;
  }
  h3:hover {
    color: #3975fd;
  }
  @media screen and (min-width: 1100px) {
    h3 {
      font-size: 1rem;
    }
  }
`;
const Answer = styled.div`
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
          <h2>FAQs</h2>
          {questions.map((item, index) => (
            <ItemsContainer key={index}>
              <Question
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
