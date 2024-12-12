const Input = ({placeholder, onChange, text}) => {

    return (
        <div>
            <input placeholder={placeholder} onChange={onChange} value={text}></input>
        </div>
    )
}
export default Input