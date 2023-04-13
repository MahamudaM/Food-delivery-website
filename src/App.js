import logo from './logo.svg';
import './App.css';
import Hader from './SharePage/Hader/Hader';
import Footer from './SharePage/Footer/Footer';
import HomeBanars from './Pages/Home/HomeBanars/HomeBanars';
import CreateAccount from './Pages/Home/CreateAccount/CreateAccount';
import ExploreVarieties from './Pages/Home/ExploreVarieties/ExploreVarieties';
import DownloadBanar from './Pages/Home/DownloadBanar/DownloadBanar';
import Checkout from './Pages/Home/Checkout/Checkout';

function App() {
  return (
    <div className="">
     <Hader></Hader>
     <HomeBanars></HomeBanars>
     <CreateAccount></CreateAccount>
     <ExploreVarieties></ExploreVarieties>
     <Checkout></Checkout>
     <DownloadBanar></DownloadBanar>
     <Footer></Footer>
    </div>
  );
}

export default App;
