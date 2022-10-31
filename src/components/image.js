import react from 'react'


class Image extends react.Component{
    render(){
        let props = this.props;
        const {imgSrc, alt,styling, gClass} = props;
        return(
                <img src={imgSrc} alt={alt} style={styling} className={gClass}/>
        )
        }
};
export default Image;