import Button from "./Button"
import Carousel from "react-elastic-carousel"
import { useInView } from 'react-intersection-observer';
const breakPoints=[
  {width: 1, itemsToShow: 1},
  {width: 550, itemsToShow: 2},
  {width: 768, itemsToShow: 3},
  {width: 1200, itemsToShow: 4},
]
const Destination = ({ destinationSlider}) => {
  const { ref, inView} = useInView({
    /* Optional options */
    threshold: 0.4,
  });
  return (
    <div className={inView? "destination destination-zoom" : "destination"} ref={ref}>
        <h2>Popular Destinations</h2>
        <div className="destination-slider">
        <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={4800}>
            {destinationSlider.map(destinationSlide=> <div className="slide" key={destinationSlide.id}>
            <img src={destinationSlide.imageSrc} alt="" className="" />
            <div className="slide-text">
            <div className="hover-text">
                <span>{destinationSlide.destination}</span>
                <span>{destinationSlide.distance}</span>
                <p> {destinationSlide.details}</p>
                <div>
                    <span>{destinationSlide.price}</span>
                    <span>{destinationSlide.duration}</span>
                </div>
                <Button color="black" text="Book Now" />
            </div>
            </div>
            <div className="overlay"></div>
        </div> 
        
                )}
        </Carousel>
        
        </div>
      
    </div>
  )
}

export default Destination
