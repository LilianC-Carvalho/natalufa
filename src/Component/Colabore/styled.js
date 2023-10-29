import styled from 'styled-components';

export const Container = styled.div`
   display: grid;
   place-items: center;
   padding: 20px;

   @media (min-width: 768px) and (max-width: 1170px) {
    margin-left: 20%;
    padding: 10px;
    width: 100%;
   }
`;

export const Title = styled.h1`
  font-family: 'Agbalumo', cursive;
  font-size: 2em;
  text-align: center;

  @media (min-width: 768px) and (max-width: 1170px) {
    font-size: 1.5em;
  };
`;

export const Describe = styled.h3`
  font-family: 'Rubik', sans-serif;
  font-size: 1.5em; 
  text-align: center;

  @media (min-width: 768px) and (max-width: 1170px) {
    font-size: 1.2em;
  }
`;

export const Button = styled.button`
  box-shadow: 0 0 0 1px white;
  background-color: #0a66c2;
  color: #ffffff;
  cursor: pointer;
  height: 40px;  
  width: 40%;
  border-radius: 30px;
  border-color: inherit;
 
  @media (min-width: 768px) and (max-width: 1170px) {
    font-size: 1.2em;
    margin-top: 10px;
  }
`;
