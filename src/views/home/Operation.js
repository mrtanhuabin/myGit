import React, {PureComponent} from 'react';
import { Row, Col, Input, Button, Form, Checkbox, message } from 'antd';
import { getconpfun } from './ConpmentDemo';
import 'antd/dist/antd.css';
import 'antd-mobile/dist/antd-mobile.css';
import './pageA.scss';
class Operation extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            cpnType: null
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            cpnType :nextProps.str
        })
    }
    componentDidMount(){
        document.title="组件排版";
    }
    render() {
        const { cpnType }=this.state;
        return (
            <div className="main-opera">
                <div className="opera-con">
                    {getconpfun()}
                </div>
            </div>
        )
    }

}
 
export default Operation;