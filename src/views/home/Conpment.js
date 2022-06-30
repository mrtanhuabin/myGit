import React, {PureComponent} from 'react';
import { Row, Col, Input, Button, Form, Checkbox, message } from 'antd';
import 'antd/dist/antd.css';
import 'antd-mobile/dist/antd-mobile.css';
import './pageA.scss';
class Conpment extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            conpmentListA:[
                {id:0, name:"文字", type:"txt"},
                {id:0, name:"图片", type:"image"},
                {id:0, name:"按钮", type:"button"},
                {id:0, name:"矩形边框", type:"rec-bor"},
                {id:0, name:"分割线", type:"divid-line"},
                {id:0, name:"图片轮播", type:"img-wheel"},
                {id:0, name:"视频", type:"vedio"},
            ],
            conpmentListB:[
                {id:0, name:"文本框", type:"txt-bor"},
                {id:0, name:"单选框", type:"radio"},
                {id:0, name:"复选框", type:"checkbox"},
                {id:0, name:"日期选择器", type:"date-choic"},
                {id:0, name:"时间选择器", type:"time-choic"},
                {id:0, name:"日期时间", type:"date-time"},
                {id:0, name:"表格", type:"table"},

            ]

        }
        this.checkCopentA=this.checkCopentA.bind(this);
        this.checkCopentB=this.checkCopentB.bind(this);
    }
    componentDidMount(){
        document.title="Conpment"
    }
    checkCopentA(index){
        const { conpmentListA }=this.state;
        let signCon=conpmentListA[index];
        this.props.callback(signCon.type)
    }
    checkCopentB(index){
        const { conpmentListB }=this.state;
        let signCon=conpmentListB[index];
        this.props.callback(signCon.type)
    }
    render() {
        const {conpmentListA, conpmentListB}=this.state;
        return (
            <div className="main-conp">
                <div className="tit">组件库</div>
                <div className="conp">
                    <p className="conp-tit">基础组件</p>
                    <Row className="conpArr">
                        {
                            conpmentListA.map((item, index) =>{
                                return(
                                    <Col span={12} className="conDiv" key={index}>
                                             <div onClick={ e => this.checkCopent(index)}>{item.name}</div>               
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>
                <div className="conp">
                    <p className="conp-tit">基础组件</p>
                    <Row className="conpArr">
                        {
                            conpmentListB.map((item, index) =>{
                                return(
                                    <Col span={12} className="conDiv" key={index}>
                                             <div onClick={ e => this.checkCopentB(index)}>{item.name}</div>               
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>
            </div>
        )
    }

}
 
export default Conpment;