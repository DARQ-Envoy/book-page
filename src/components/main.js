import myImage from '../images/my_image.jpg';
import shareImg from '../images/share-icon.svg';
import slack from '../images/slack.svg';
import github from '../images/Github-icon.svg';
import Links from './links'
import Image from './image' ;
import option from '../images/mobile-option.svg';
import {useState} from 'react';
let prev ;
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
let media = window.matchMedia("(max-width: 700px)");

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

const imgStyling = {
    height:'24px',
    width: "24px"
}
const Content = ()=>{
let [src, setSrc] = useState(shareImg);
const set = (value)=>{
    if(prev == value){
        return
    }
    else{
        prev = value
        setSrc(value)
    }
}
let source = ()=>{
    console.log(media)
    if(media.matches){
        set(option)
    }
    else{
        set(shareImg);
    }
    console.log(src)
}
media.addEventListener("change",source);
source();
 return (
    <main className='main'>
    <Header source={myImage} shareSrc={src}/>
    <div className="links-parent">
    < Links />
    </div>
    <div className="socials">
        <Image imgSrc={slack} alt={"Slack Logo"} styling={imgStyling}/>
        <Image imgSrc={github} alt={"GIthub Logo"} styling={imgStyling}/>
    </div>
    </main>
 )
}

export default Content