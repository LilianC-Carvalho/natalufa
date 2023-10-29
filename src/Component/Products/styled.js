import styled from 'styled-components';

export const Container = styled.div`
   
   @media (min-width: 768px) and (max-width: 1170px) {
    margin-left: 50%;
    max-width: 100%;
  } 
`;

export const Title = styled.h1`
  display: grid;
  place-items: center;
  font-family: 'Agbalumo', cursive;
  font-size: 2em;

  @media (min-width: 768px) and (max-width: 1170px) {
  font-size: 1.5em;
};
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  padding: 20px;
  max-height: 550px;
  width: auto;
  padding: 33px;

  @media (min-width: 768px) and (max-width: 1170px) {
    max-height: 300px;
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
`;