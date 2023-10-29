import styled from 'styled-components';

export const ContainerImg = styled.div`
  display: flex;

  @media (min-width: 768px) and (max-width: 1170px) {
    min-width: 100%;
    max-height: 100%
  }
`;

export const Image = styled.img`
  height: 350px;
  width: 350px;
  padding: 10px;
 
  @media (min-width: 768px) and (max-width: 1170px) {
    max-width: 100%;
    height: auto;
    padding: 5px;
  }
`;

export const ContainerDescribe = styled.div`
  display: flex;
  flex-direction: column; 
  text-align: center;

  @media (min-width: 768px) and (max-width: 1170px) {
    margin-left: 20%;
    padding: 10px;
    width: 100%;
  }
  
`;

export const Title = styled.h1`
  font-family: 'Agbalumo', cursive;

  @media (min-width: 768px) and (max-width: 1170px) {
    font-size: 1.5em;
  }
`;

export const Describe = styled.p`
  font-family: 'Rubik', sans-serif;
  font-weight: 600;

  @media (min-width: 768px) and (max-width: 1170px) {
    font-size: 0.9em;
  }
`;