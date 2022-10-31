
const Link = ({url, styling, text, id})=>{
    return(
        <li>
        <a href={url} target='_blank' style={styling} id={id}>{text}</a>
        </li>
    )
}
Link.defaultProps={
    styling : {
        display: 'block',
        textAlign: "center",
        color: '#101828',
        fontWeight: '500',
        fontSize: '1.1rem',
        textDecoration: "none",
        width: "50%",
        margin: '0 auto'
    }
};
export default Link;