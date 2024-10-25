import cssStyle from "./about.module.css";


const AboutPage = () => {
  return (
    <div className="textAlign center"  >
      
      <h1 className={cssStyle.purple}>This is About Page</h1> 
      
      <h3 className="text-container bg-slate-400 h-20 text-black text-center">
       <b>Discover</b>  our collection of<b> men&apos;s wrist watches</b>  , where precision meets style. 
        Elevate your look with timeless designs crafted for every<b> occasion.</b>
      </h3>
  
    </div>
  );
};

export default AboutPage;

