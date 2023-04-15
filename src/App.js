import logo from './logo.svg';
import './App.css';
import Hader from './SharePage/Hader/Hader';
import Footer from './SharePage/Footer/Footer';
import HomeBanars from './Pages/Home/HomeBanars/HomeBanars';
import CreateAccount from './Pages/Home/CreateAccount/CreateAccount';
import ExploreVarieties from './Pages/Home/ExploreVarieties/ExploreVarieties';
import DownloadBanar from './Pages/Home/DownloadBanar/DownloadBanar';
import Checkout from './Pages/Home/Checkout/Checkout';
import SmallHomeBanar from './Pages/Home/HomeBanars/SmallHomeBanar';
import SmallDownloadBanar from './Pages/Home/DownloadBanar/SmallDownloadBanar';

function App() {
  return (
    <div className="">
     <Hader></Hader>
     <div className='md:hidden  block'>
      <SmallHomeBanar></SmallHomeBanar>
     </div>
     <div className='hidden md:block'>
     <HomeBanars></HomeBanars>
     </div>
     <CreateAccount></CreateAccount>
     <ExploreVarieties></ExploreVarieties>
     <Checkout></Checkout>
     <div className='md:hidden block'>
    <SmallDownloadBanar></SmallDownloadBanar>
     </div>
     <div className='hidden md:block'>
     <DownloadBanar></DownloadBanar>
     </div>
     
     <Footer></Footer>
    </div>
  );
}

export default App;
