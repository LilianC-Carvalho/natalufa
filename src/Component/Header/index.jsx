import Logo from '../../Image/logo.jpeg'
import {  Container, Image, Title, Describe, ContainerDescribe } from './styled.js'

const Header = () => {
    return(
        <>
            <Container>  
                <Image src={Logo} alt="" />
            </Container>
            <ContainerDescribe>
                <Title>UFA - União Familia Azul</Title>
                <Describe>Somos um grupo de Pais de Autistas de Suzano, que lutamos pelos nossos direitos, 
                    conscientização e diversão a nossas crianças.</Describe>
            </ContainerDescribe>
        </>
    )
}

export default Header