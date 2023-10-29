import styled from 'styled-components';

export const ContainerContato = styled.div`
   margin-left: 40%;
   max-width: 100%;

    @media (min-width: 768px) and (max-width: 1170px) {
    margin-left: 50%;
    max-width: 100%;
  } 
  
`;

export const ContainerWhats = styled.div`
  display: flex;
  margin-left: 4px;
  padding: 5px;
`;

export const TitleContato = styled.h2`
  font-family: 'Agbalumo', cursive;
  
`;

export const ButtonInstagram = styled.button`
  border: none;
    background: papayawhip;
    cursor: pointer;
    border-radius: 20px;
    padding: 5px 10px;
    margin-top: 5px;
`;

export const ButtonFacebook = styled.button`
  border: none;
    background: papayawhip;
    cursor: pointer;
    border-radius: 20px;
    border-radius: 20px;
  padding: 5px 10px;
  margin-top: 5px;
`;

export const Number = styled.p`
  margin-top: 5px;
  margin-left: 9px;
  font-size: 0.8em;
    
`;
