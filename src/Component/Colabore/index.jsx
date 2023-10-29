import { useNavigate } from 'react-router-dom'
import { Container, Title, Describe, Button } from './styled.js'


const Colabore = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/Payment');
      };
      
    return(
        <>
            <Container>
                <Title>Você pode nos ajudar, apadrinhando uma criança</Title>
                <Describe>Com apenas R$40,00 você apadrinha uma criança, e transforma o Natal</Describe>
                <Describe>Também precisamos de doações de caixas de Bombom</Describe>
                <Describe>Receberemos doações até o dia 20/11</Describe>
                <Button onClick={handleButtonClick}>Colobore para um Natal Feliz</Button>
                <Describe>Doar é um ato de amor</Describe>
            </Container>
        </>
    )
}

export default Colabore