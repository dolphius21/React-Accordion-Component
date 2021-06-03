import { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { IconContext } from 'react-icons';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import graphic from '../assets/UIUX_design.svg';

const downAnimation = keyframes`
 0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
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
  animation: ${downAnimation} 0.5s 0.1s ease-out both;
  @media screen and (max-width: 750px) {
    padding-top: 6rem;
  }
  @media screen and (min-width: 992px) {
    flex-direction: row;
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
const AccordionContainer = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;
const AccordionItem = styled.div`
  border: 1px solid #d4dae9;
  border-radius: 5px;
  width: 470px;
  margin-bottom: 7px;
  @media screen and (max-width: 750px) {
    width: 100%;
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
  &:hover {
    color: #3975fd;
  }
  @media screen and (min-width: 1100px) {
    h3 {
      font-size: 1rem;
    }
  }
`;
const Answer = styled.div`
  background: #eef9ff;
  border-radius: 5px;
  transition: all 0.3s linear;
  font-size: 0.9rem;
  max-height: 0;
  overflow: hidden;
  p {
    padding: 1rem;
  }
`;

const Accordion = ({ questions }) => {
  const [clicked, setclicked] = useState(false);
  const [height, setHeight] = useState(0);
  const content = useRef(0);

  const handleClick = (id) => {
    if (clicked === id) {
      setclicked(0);
      setHeight(0);
    } else {
      setclicked(id);
    }
  };

  useEffect(() => {
    if (clicked) {
      setHeight(content.current.clientHeight);
    }
  }, [clicked]);

  return (
    <IconContext.Provider value={{ size: '20px' }}>
      <Card>
        <ImgContainer>
          <img src={graphic} alt="UI/UX Graphic" />
        </ImgContainer>
        <AccordionContainer>
          <h2>FAQs</h2>
          {questions.map((item) => (
            <AccordionItem key={item.id}>
              <Question
                onClick={() => handleClick(item.id)}
                style={{
                  borderBottom:
                    clicked === item.id
                      ? '1px solid #d4dae9'
                      : '1px solid #fff',
                  borderLeft:
                    clicked === item.id
                      ? '5px solid #3975fd'
                      : '5px solid #fff',
                  color: clicked === item.id ? '#3975fd' : undefined
                }}
              >
                <h3>{item.question}</h3>
                <span>
                  {clicked === item.id ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </Question>
              <Answer
                style={{ maxHeight: clicked === item.id ? height + 'px' : 0 }}
              >
                <p ref={content}>{item.answer}</p>
              </Answer>
            </AccordionItem>
          ))}
        </AccordionContainer>
      </Card>
    </IconContext.Provider>
  );
};

export default Accordion;
