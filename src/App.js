//-----------
//-Component-
//-----------
import Header from './components/Header';
import Carousel from './components/Carousel';
import ProductsMain from './components/ProductsMain';

//-----------
//---Style---
//-----------
import './App.css';

//-----------
//----App----
//-----------
export default function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <ProductsMain />
    </div>
  );
}