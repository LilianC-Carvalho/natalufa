import styled from 'styled-components';
import backgrondImage from '../../Image/backgrond.png'

export const ContainerPayment = styled.div`
  display: grid;
  place-items: center;
  background-image: url(${backgrondImage});
  background-size: cover;
  background-repeat: no-repeat;
  `;

export const ContaiterDescribe = styled.div`
  display: flex;
  flex-direction: column; 
  text-align: center;
`;

export const Title = styled.h1`
  font-family: 'Agbalumo', cursive;
`;

export const Describe = styled.h3`
  font-family: 'Rubik', sans-serif;
`;

export const QrCode = styled.img`
  height: 600px;
  width: 600px;
`;

export const ContainerContato = styled.div`
    display: grid;
    place-items: center;

    @media (min-width: 768px) and (max-width: 1170px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
`;

export const ContainerWhats = styled.div`
  display: flex;
  margin-left: 4px;
`;

export const ContainerInstagram = styled.div`
    padding: 6px;
`;


export const TitleContato = styled.h2`
  
`;

export const ButtonInstagram = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export const ButtonFacebook = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export const Number = styled.p`
  margin-top: 5px;
  margin-left: 9px
`;


