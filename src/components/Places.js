
import {FaStar ,FaChevronCircleRight, FaChevronCircleLeft} from 'react-icons/fa'
import {BsCheck2Circle} from 'react-icons/bs'
import { useState } from "react"
const Places = ({imageSrc, places}) => {

  const [selected, setSelected]=useState(0)
  const pLength=places.length;
  return (
    <div>
      <div className="places">
            <div className="test-img"><img src={places[selected].imageSrc} alt="" />
            <div className="place-nav">
              <span className="p">{places[selected].place}</span>
              <div>
                <FaChevronCircleLeft style={{fontSize: 24}} onClick={()=>{selected===0? setSelected(pLength-1) : setSelected((prev)=>prev-1);
                }}/>
                <FaChevronCircleRight style={{fontSize: 24}} onClick={()=>{selected===pLength-1? setSelected(0) : setSelected((next)=>next+1);
                }} />
              </div>
              </div>
              </div>
        <div className="testimonial-card">
          <div className='card-slide'>
            <span className='icons'>
                <FaStar style={{color: "gold"}}/>
                <FaStar style={{color: "gold"}}/>
                <FaStar style={{color: "gold"}}/>
                <FaStar style={{color: "gold"}}/>
                <FaStar style={{color: "gold"}}/>
            </span>
            <h2>Make a great Friday <br />at <span>{places[selected].place}</span></h2>
            <div className='info'>
                    <span className='duration'>3 Days(1 Night)</span>
                    <span className="count">256 People Visited</span>
            </div>
            <div>
            <div className='list'>
            <BsCheck2Circle style={{fontSize: 64}} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='list'>
            <BsCheck2Circle style={{fontSize: 64}} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            </div>
            <div className='info'>
                    <span className='price'>{places[selected].price}</span>
                    <span className="btn btn-p" style={{backgroundColor: 'blue'}}>Book Now</span>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Places
