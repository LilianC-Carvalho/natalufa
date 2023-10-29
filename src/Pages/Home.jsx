import Main from "../Component/Main";
import Header from  "../Component/Header"
import Colabore from  "../Component/Colabore"
import Footer from "../Component/Footer";
import Products from "../Component/Products";

function Home() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Colabore />
      <Products />
      <Footer />
    </div>
  );
}

export default Home
