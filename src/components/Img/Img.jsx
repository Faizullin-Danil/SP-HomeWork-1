import "./Img.css"

const Img = ({src, alt}) => {
    return(
        <div>
            <img className="image" src={src} alt={alt}></img>
        </div>
    )
}
export default Img