// import Link from "next/link";
// import Navbar from "./Components/Navbar"; 
import Hero from "./Components/Hero"; 
import Footer from "./Components/Footer"; 
import Image from "next/image";
import codeImage from '../public/wc2.jpg'; 
import codeimage from '../public/wc1.jpg'; 
import codeimage1 from '../public/watch.jpg';

const HomePage = () => {
  return (
    <div className='min-h-screen w-full'>
     
     <br />
     <br />

      <div className='h-[70vh] w-full'> 
        <h1 className="text-black text-5xl font-bold mb-4 p-4 bg-[rgb(151,100,151)]">
          Men Wrist Watches
        </h1>
        <br />
        <p className="text mb-8">
          Discover our collection of men&apos;s wrist watches, where precision meets style.
          Elevate your look with timeless designs crafted for every occasion.
        </p>
        <div className="flex space-x-4 mb-8 mt-8">
          <Image src={codeImage} alt="Code Image 1" width={400} height={500} />
          <Image src={codeimage} alt="Code Image 2" width={400} height={500} />
          <Image src={codeimage1} alt="Code Image 3" width={400} height={500} />
        </div>

        <Hero />
        <Footer /> 
      </div>
    </div>
  );
};

export default HomePage;
