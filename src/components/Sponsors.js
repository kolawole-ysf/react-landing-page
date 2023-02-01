
const Sponsors = ({sponsors}) => {
  return (
    <div className='sponsor'>
        {sponsors.map(sponsor=> <img src={sponsor.imageSrc} alt="" />)}
    </div>
  )
}

export default Sponsors
