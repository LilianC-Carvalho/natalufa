import Rifa from '../../Image/Rifa.jpeg'
import Livro from '../../Image/livro.jpeg'
import { Container, Title, Image, ContainerImg } from './styled.js'

const Products = () => {
    return(
        <Container>
            <Title>Outras formas de Ajudar</Title>
            <ContainerImg>
                <Image src={Rifa} alt="" />
                <Image src={Livro} alt="" />
            </ContainerImg>
        </Container>
    )
}

export default Products