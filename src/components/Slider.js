import Button from "./Button"
import { useInView } from 'react-intersection-observer';

const Slider = ({imageSrc, title, subtitle, flipped}) => {
  // Animation effect on the sliders
  const { ref, inView} = useInView({
    /* Optional options */
    threshold: 0.4,
  });

  //Alternate slide display
  const renderSlider=()=>{
    if(!flipped){
      return <>
        <img src={imageSrc} alt="Travel-1" className="slider-img"/>
        <div className="slider-content">
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <Button color="black" text="CHOOSE A LOCATION" />
        </div>
      
    </>
    }else{
      return <>
    <div className="slider-content">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <Button color="black" text="BOOK NOW" />
    </div>
    <img src={imageSrc} alt="Travel-1" className="slider-img"/>
</>
    }
  }

  return (
    <div className={inView? "slider slider-zoom" : "slider"} ref={ref}>
        {renderSlider()}
    </div>
  )
}

export default Slider
