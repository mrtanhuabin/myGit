import React, {PureComponent} from 'react';
import { Row, Col, Input, Button, Form, Checkbox, message } from 'antd';
import 'antd/dist/antd.css';
import 'antd-mobile/dist/antd-mobile.css';
import './Home.scss';
import './pageA.scss';
import Conpment from "./Conpment";
import Operation from "./Operation";
import AddTool from "./AddTool";
class pageA extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            message:""
        }
    }
    componentDidMount(){
        document.title="pageA"
    }
    // 声明一个方法用来接收Son1传来的值
    message(msg){
        this.setState({
             message:msg  //把Son1传来的值给message
        })
    } 
    render() {
        debugger
        console.log(this.state.message);
        return (
            <div className="main">
                <Row className="header">
                    <Col span={6} className="logo">自定义网页制作</Col>
                    <Col span={18} className="tool">
                        <ul>
                            <li>撤销</li>
                            <li>重置</li>
                            <li>预览</li>
                            <li>保存</li>
                            <li>发布</li>
                            <li>退出</li>
                        </ul>
                    </Col>
                </Row>
                <Row className="content">
                    <Col span={4} className="conpment">
                        <Conpment {...this.props} callback={this.message.bind(this)}></Conpment>
                    </Col>
                    <Col span={13} className="operation">
                        <Operation {...this.props} str={this.state.message}></Operation>
                    </Col>
                    <Col span={6} className="addTool">
                        <AddTool {...this.props}></AddTool>
                    </Col>
                </Row>
            </div>
        )
    }

}
 
export default pageA;