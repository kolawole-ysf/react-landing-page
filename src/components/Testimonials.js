
import {FiMap, FiCamera} from 'react-icons/fi'
import {FaStar ,FaHiking} from 'react-icons/fa'
import Carousel from "react-elastic-carousel"
const breakPoints=[
    {width: 1, itemsToShow: 1}
  ]
const Testimonials = ({imageSrc}) => {
  return (
    <div className="testimonials">
        <div className='services'>
            <div>
                <FiMap style={{color: 'black', fontSize: 44}}/>
                <span>Guided Trip</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
                <FiCamera style={{color: 'black', fontSize: 44}} />
                <span>Trip Photographer</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
                <FaHiking style={{color: 'black', fontSize: 44}} />
                <span>Awesome Activities</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
        <div className="testimonial">
            <div className="test-img"><img src={imageSrc} alt="" /></div>
        <div className="testimonial-card">
        <Carousel className="test-card" breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={4800} >
            <div className='card-slide'>
            <h2>Clients Are <span>Happy,</span><br /> We Are Happy.</h2>
            <span className='icons'>
                <FaStar style={{color: "gold"}}/>
                <FaStar style={{color: "gold"}}/>
                <FaStar style={{color: "gold"}}/>
                <FaStar style={{color: "gold"}}/>
                <FaStar style={{color: "gold"}}/>
            </span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='client-info'>
                <div className='dp'><img src='' alt='' /></div>
                <div>
                    <span className='c-name'>Muslimah Tanji</span>
                    <span className='c-role'>CEO, WebAce Technology</span>
                </div>
            </div>
            </div>
            <div className='card-slide'>
            <h2>Clients Are <span>Happy,</span><br /> We Are Happy.</h2>
            <span className='icons'>
                <FaStar style={{color: "gold"}}/>
                <FaStar style={{color: "gold"}}/>
                <FaStar style={{color: "gold"}}/>
                <FaStar style={{color: "gold"}}/>
                <FaStar style={{color: "gold"}}/>
            </span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='client-info'>
                <div className='dp'><img src='' alt='' /></div>
                <div>
                    <span className='c-name'>Muslimah Tanji</span>
                    <span className='c-role'>CEO, WebAce Technology</span>
                </div>
            </div>
            </div>
            <div className='card-slide'>
            <h2>Clients Are <span>Happy,</span><br /> We Are Happy.</h2>
            <span className='icons'>
                <FaStar style={{color: "gold"}}/>
                <FaStar style={{color: "gold"}}/>
                <FaStar style={{color: "gold"}}/>
                <FaStar style={{color: "gold"}}/>
                <FaStar style={{color: "gold"}}/>
            </span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='client-info'>
                <div className='dp'><img src='' alt='' /></div>
                <div>
                    <span className='c-name'>Muslimah Tanji</span>
                    <span className='c-role'>CEO, WebAce Technology</span>
                </div>
            </div>
            </div>
            </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
