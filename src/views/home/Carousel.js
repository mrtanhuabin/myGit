import React, {PureComponent} from 'react'
import { Carousel } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './Home.scss';


// const tabs = [
//     { title: '首 页', sub: '1' },
//     { title: '管 理', sub: '2' },
//     { title: '我 的', sub: '3' },
// ];

class CarouselBox extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            imgHeight: 176,
          }
    }
    componentDidMount(){
        document.title="首页";
        const imgUrla = require("./img/a.png");
        const imgUrlb = require("./img/b.png");
        const imgUrlc = require("./img/c.png");
        const dataNew = [...this.state.data];
        dataNew.push(imgUrla,imgUrlb,imgUrlc);
        setTimeout(() => {
            this.setState({
                data : dataNew
                },()=>{console.log(this.state.data);})
          }, 100);
    }
    render() {
        const {data} = this.state;
        return (
            <Carousel
            autoplay
            autoplayInterval={1000}
            infinite
            >
                {
                    data.map((val, index)=>{
                        console.log(val);
                        return (
                            <a
                            key={index}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                            src={val}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                            />
                        </a>
                        );
                    })
                }
            </Carousel>
        );
    }

}
 

export default CarouselBox;