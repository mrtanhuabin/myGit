import React, {PureComponent} from 'react';
import { Row, Col, Menu , Button, Form, Checkbox, message, Input } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import 'antd-mobile/dist/antd-mobile.css';
import './pageA.scss';

const { SubMenu } = Menu;

class AddTool extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    componentDidMount(){
        document.title="属性"
    }
    handleClick = e => {
        console.log('click ', e);
      };
    
    render() {
        return (
            <div className="main-addT">
                <div className="tit">属性</div>
                <div className="conp">
                    <p className="add-tit">基础样式</p>
                    <div className="ck-box">
                        <p className="ck-tit">尺寸与位置</p>
                        <div className="ck-con">
                            <div className="quick">
                                快捷定位 ：
                                <span>左上</span>
                                <span>右上</span>
                                <span>中间</span>
                                <span>左下</span>
                                <span>右下</span>
                            </div>
                            <div className="size-box">
                                <Row>
                                    <Col span={3}>尺寸 ：</Col>
                                    <Col span={21}>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={5} className="txt-rig">宽度：</Col>
                                    <Col span={19}>
                                        <p>
                                            <span>-</span><input type="number"/><span>+</span>
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={5} className="txt-rig">高度：</Col>
                                    <Col span={19}>
                                        <p>
                                            <span>-</span><input type="number"/><span>+</span>
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                            <div className="size-box">
                                <Row>
                                    <Col span={3}>位置 ：</Col>
                                    <Col span={21}>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={5} className="txt-rig">X：</Col>
                                    <Col span={19}>
                                        <p>
                                            <span>-</span><input type="number"/><span>+</span>
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={5} className="txt-rig">Y：</Col>
                                    <Col span={19}>
                                        <p>
                                            <span>-</span><input type="number"/><span>+</span>
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
 
export default AddTool;