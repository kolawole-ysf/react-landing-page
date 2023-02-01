const Button = ({color, text}) => {
    const onClick=()=>{
        alert('Button Clicked')
    }
  return <button className="btn" style={{backgroundColor: color}} text={text} onClick={onClick}>{text}</button>
}

export default Button
