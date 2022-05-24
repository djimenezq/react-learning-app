const Button = ({clickEvent, displayText}) => {
    return(
        <button onClick={clickEvent}>{displayText}</button>
    )
}

export default Button;