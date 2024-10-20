import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import { FilterAndSearch } from './Components/Filter';
import { Trending } from './Components/TrendingCard';
import { BestSelling } from './Components/Bestselling';
import { Review } from './Components/Reviews';
import { Findvehicle } from './Components/Findvehicle';
import { Footer } from './Components/Footer';
function App() {
 
  return (
    <>
    <Navbar/>
      <Hero />
      <FilterAndSearch />
      <Trending />
      <BestSelling />
      <Review />
      <Findvehicle />
      <Footer/>
    </>
  )
}

export default App
