import React, {PureComponent} from 'react';
import { withRouter} from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';
import './Home.scss';
import CarouselBox from './Carousel.js';
import { Consumer } from './context' // 引入Consumer
import GrandSon from './GrandSon' // 引入Consumer

class HomeN extends PureComponent {
    constructor(props){
        super(props);
        this.derctPagea= this.derctPagea.bind(this);
        this.derctPageb= this.derctPageb.bind(this);
    }
    componentDidMount(){
        document.title="首页";
    }
    derctPagea=()=>{
        console.log(this.props.history);
        this.props.history.push("/pageA");
    }
    derctPageb=()=>{
        console.log(this.props.history);
        this.props.history.push("/demoa");
    }
    derctPagec=()=>{
        console.log(this.props.history);
        this.props.history.push("/democ");
    }
    render() {
        const imgUrla = require("./img/a.png");
        const imgUrlb = require("./img/b.png");
        const imgUrlc = require("./img/c.png");
        return (
            <div className="imgBox">
                <Consumer>
                    {context => (
                    <div>
                        子组件 fruit={context.fruit}
                        <hr />
                        子组件 fruit={context.count}
                        <GrandSon />
                    </div>
                    )}
                </Consumer>
                <CarouselBox></CarouselBox>
                <div onClick={this.derctPagea}><img src={imgUrla}/></div>
                <div onClick={this.derctPageb}><img src={imgUrlb}/></div>
                <div onClick={this.derctPagec}><img src={imgUrlc}/></div>
            </div>
        );
    }

}
 

export default HomeN;