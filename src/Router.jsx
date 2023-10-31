import { Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home";
import Payment from './Component/Payment';

const Router = () => {
    return(
        <>
            <Routes>
                <Route path='/https://lilianc-carvalho.github.io/natalufa/' element={<Home />} />
                <Route path='/Payment' element={<Payment />} />
            </Routes>
        </>
    )
}

export default Router