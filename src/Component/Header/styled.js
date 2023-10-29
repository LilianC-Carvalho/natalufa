import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  padding: 10px;
  height: 200px;
`;

export const Image = styled.img`
  height: 120px;
  width: 120px;

  @media (min-width: 768px) and (max-width: 1170px) {
    height: 80px;
    width: 80px;
  }
`;

export const Title = styled.h1`
  font-family: 'Agbalumo', cursive;

  @media (min-width: 768px) and (max-width: 1170px) {
    font-size: 1.5em;
  }
`;

export const Describe = styled.h3`
  font-family: 'Rubik', sans-serif;

  @media (min-width: 768px) and (max-width: 1170px) {
    font-size: 1em;
  }
`;

export const ContainerDescribe = styled.div`
   @media (min-width: 1170px) {        
    margin-top: -230px;
    margin-left: 150px;
  }

  @media (min-width: 768px) and (max-width: 1170px) {
    margin-top: -230px;
    margin-left: 150px;
  }

`;