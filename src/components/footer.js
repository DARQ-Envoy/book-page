import Image from './image';
import Zuri from '../images/zuriLogo.svg'
import i4g from '../images/I4G.svg'
let Footer = ()=>{
    let zuriSty ={
            height: "32px",
            width: "20%",
            maxWidth: '187px'
    } ;
    let i4gSty = {
        height: "32px",
        width: "20%",
        maxWidth: '132px'
    }
    return(
        <footer>
            <div className="foot">
                <Image imgSrc={Zuri} alt={"Zuri Logo"} styling={zuriSty} gClass="zuri"/>
                <span style={{color: "#667085",
            fontSize: "1rem"}}>HNG Intership 9 Frontend Task</span>
                <Image imgSrc={i4g} alt={"I4g Logo"} styling={i4gSty} gClass="i4g"/>
            </div>
        </footer>
    )
}
export default Footer;