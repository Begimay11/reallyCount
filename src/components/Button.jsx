function Button(props){
    let title = props.title
    let setCount = props.setCount

    const countChange = ()=> {
        if(title == '+'){
            setCount((prev) => prev +1)
        } else{
            setCount((prev) => prev -1)
        }
    }
    return <div>
        <button onClick={countChange}>{title}</button>
    </div>
}
export default Button;