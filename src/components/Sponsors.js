
const Sponsors = ({sponsors}) => {
  return (
    <div className='sponsor'>
        {sponsors.map(sponsor=> <img key={sponsor.id} src={sponsor.imageSrc} alt="" />)}
    </div>
  )
}

export default Sponsors
