 
 import Link from './link';
const allLinks = [
    {text:'Twitter',
     url: "https://twitter.com/NwokejiTimothy",
     id:"me"
    },
    {
        text:'Zuri Team',
        url: "https://training.zuri.team",
        id:"btn_zuri"  
    },
    {
        text:'Zuri Books',
        url: "http://books.zuri.team",
        id:"books"  
    },
    {
        text:'Python Books',
        url: "https://books.zuri.team/python-for-beginners?ref_id=Timothy Nwokeji",
        id:"book_python"  
    },
    {
        text:'Background Check For Coders',
        url: "https://background.zuri.team",
        id:"pitch"  
    },
    {
        text:'Design Books',
        url: "https://books.zuri.team/design-rules",
        id:"book_design"  
    }
]
 const Links =()=>{
    return(
    <ul>
{allLinks.map((item, index)=><Link text={item["text"]} url={item["url"]} id={item["id"]}  key={index}/>)}
    </ul>  
    )
 }
 export default Links