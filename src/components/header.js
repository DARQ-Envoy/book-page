const imageStyling={
    height: '88px',
    width: '88px',
    borderRadius:'50%'
};
const shareSty = {
    height:'40px',
    width: '40px',
    position: 'absolute',
    top:'0',
    left: '80%',
    translate: '0 -50%'

}
// debugger

const Header = ({shareSrc, shareAlt, source, alt, styling})=>{
    return(
<header className="main-head">
    <img src={shareSrc} alt={shareAlt} style={shareSty}/>
    <img src={source} alt={alt} style={styling} id='profile__img' />
    <h3 id="twitter">Timothy Nwokeji</h3>
    <small className="hidden" id="slack">Timothy Nwokeji</small>
</header>
    )
};

Header.defaultProps = {
    alt:'My Image',
    styling: imageStyling
}
export default Header