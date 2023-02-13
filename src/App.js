import { Navbar,Hero, Features, Testimonials, CTA, Footer, Brand, FormData, Description } from "./ManageApp";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./Home";
import SignIn from "./ManageApp/SignIn";
function App () {
  return(
    <BrowserRouter>
    <Routes>
           <Route path='signin' element={<SignIn/>}/>
           <Route path="/" element={<Home/>}/>
           <Route path="formdata" element={<FormData/>}/>
           <Route path='description' element={<Description/>}/>
         
    </Routes>     
    </BrowserRouter>
   
  )
}
export default App;

























// import Navbar from "./Components/Navbar";
// import About from "./Components/About";
// import Locations from "./Components/Locations";
// import Boarding from "./Components/Boarding";
// import Container from "./Components/Container";
// import Slider from "./Components/Slider";
// import Footer from "./Components/Footer";
// // import Timeline from "./Components/Timeline";
// function App() {
//   return (
//     <>
//      <Navbar/>
//      <About/>
//      <Locations/>
//      <Boarding/>
//      <Container/>
//      <Slider/>
//      {/* <Timeline/> */}
//      <Footer/>
//     </>
//   );
// }
// export default App;
