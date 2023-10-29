import natalUfa from '../../Image/natalCriança.jpg'
import natalUfa2 from '../../Image/natalCriança2.jpg'
import natalUfa3 from '../../Image/natalCriança3.jpg'
import colaboradores from '../../Image/colaboradores.jpg'
import natalUfa4 from '../../Image/natalCriança4.jpg'
import natalUfa5 from '../../Image/natalCriança5.jpg'
import natalUfa6 from '../../Image/natalCriança6.jpg'
import colaboradores2 from '../../Image/colaboradores2.jpg'
import { ContainerImg, Image, ContainerDescribe, Title, Describe  } from './styled.js'


const Main = () => {
    return(
        <>
            <ContainerImg>
                <Image src={natalUfa} alt="" />
                <Image src={natalUfa2} alt="" />
                <Image src={natalUfa3} alt="" />
                <Image src={colaboradores} alt="" />
            </ContainerImg>
            <ContainerDescribe>
                <Title>Natal Solidário UFA</Title>
                <Title>Os Natais dos autistas do nosso grupo, é sempre mágico.</Title>
                <Describe>Com uma festa linda, idealizada com muito amor e colaboração</Describe>
                <Describe>Presenteamos os autistas, e seus irmãos. </Describe>
                <Describe>E para este ano, nossa expectativa é atender cerca de 700 crianças e adolescentes.  </Describe>
                <Describe>E para isso acontecer, precisamos da sua ajuda. </Describe>
           </ContainerDescribe>
           <ContainerImg>
                <Image src={natalUfa4} alt="" />
                <Image src={natalUfa5} alt="" />
                <Image src={natalUfa6} alt="" />
                <Image src={colaboradores2} alt="" />
            </ContainerImg>
        </>
    )
}

export default Main