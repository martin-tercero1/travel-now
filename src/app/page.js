import Home from "./Home/Home";
import Recommended from "./Recommended/Recommended";
import Featured from './Featured/Featured';
import FAQs from './FAQ/FAQs';
import Footer from "./Footer/Footer";
import TabBar from "./Mobile/TabBar";
import Header from './Header/Header';

export default function App() {
    return (
      <>
        <Header/>

        <section className="w-full h-screen">
          <Home />
          <Recommended />
          <Featured />
          <FAQs />
        <Footer />
        </section>
        <TabBar/>
      </>
    );
}