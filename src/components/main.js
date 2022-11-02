import myImage from '../images/my_image.jpg';
import shareImg from '../images/share-icon.svg';
import slack from '../images/slack.svg';
import github from '../images/Github-icon.svg';
import Links from './links'
import Image from './image' ;
import option from '../images/mobile-option.svg';
import {useState} from 'react';
import Header from './header'
let prev ;

let media = window.matchMedia("(max-width: 700px)").matches;


const imgStyling = {
    height:'24px',
    width: "24px"
}
const Content = ()=>{
const [src, setSrc] = useState(shareImg);
const set = (value)=>{
    console.log(prev, value)
    if(prev === value){
        return
    }
    else{
        prev = value
        setSrc(value)
    }
}
let source = ()=>{
    console.log(media)
    if(media){
        set(option)
    }
    else{
        set(shareImg);
    }
}
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