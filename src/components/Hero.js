import Button from "./Button"
const Hero = ({imageSrc}) => {
  return (
    <div className="hero">
        <img src={imageSrc} alt="Travel" className="hero-bg"/>
        <div className="hero-text">
        <h1>choose your destinations</h1>
        <p>A world of exceptional destinations for you</p>
        <Button color="black" text="BOOK NOW" />
        </div>
    </div>
  )
  
}

export default Hero
