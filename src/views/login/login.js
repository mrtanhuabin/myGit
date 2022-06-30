import React, {PureComponent, useState } from 'react';
import * as echarts from 'echarts';
import { Input, Button, Form, Checkbox, message, DatePicker } from 'antd';
import 'antd/dist/antd.css';
import './Login.scss';
import echartsaData from '../dataSource/echartsa.js';
import echartsaDatb from '../dataSource/echartsb.js';
import echartsaDatc from '../dataSource/echartsc.js';
import moment from 'moment';

const { RangePicker } = DatePicker;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
class Login extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            listitem:"我是从一个组件的 跑过来的",
            checked: false,
            echartsaData: echartsaData, // options配置
            echartsaDatb: echartsaDatb,
            echartsaDatc: echartsaDatc,
            time: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeChec = this.onChangeChec.bind(this);
        this.inputChangeHandle = this.inputChangeHandle.bind(this);
    }
    componentDidMount(){
        document.title="登录";
        // // 基于准备好的dom，初始化echarts实例
        // // 111111111111111111
        // var myChart1 = echarts.init(document.getElementById('main1'));
        // // 绘制图表
        // console.log(this.state.echartsaData);
        // myChart1.setOption(this.state.echartsaData, true);
        // // 2222222222222
        // var myChart2 = echarts.init(document.getElementById('main2'));
        // // 绘制图表
        // console.log(this.state.echartsaDatb);
        // myChart2.setOption(this.state.echartsaDatb, true);
        // // 33333333333
        // var myChart3 = echarts.init(document.getElementById('main3'));
        // // 绘制图表
        // console.log(this.state.echartsaDatc);
        // myChart3.setOption(this.state.echartsaDatc, true);
    }
    handleData =(time)=>{
        // const { time } =this.state;
        console.log(time);
        if(!time){
            return false
        }else{
        // 大于当前日期不能选 time > moment()
        // 小于当前日期不能选 time < moment().subtract(1, "days")
        // 只能选前7后7 time < moment().subtract(7, "days") || time > moment().add(7, 'd')
            return time < moment().subtract(7, "days") || time > moment().add(7, 'd')
        }
    }
    onCalendarChange =(val)=>{
        this.setState({ time: val });
        // return val;
    }
    render() {
        return (
            <div>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onSubmit = {this.handleSubmit}
                    className="formBox"
                    >
                        {/*<RangePicker
                            disabledDate={this.handleData}
                            onCalendarChange={this.onCalendarChange}
                        />
                        <div id="main1" style={{ width: 800, height: 400 }}></div>
                        <div id="main2" style={{ width: 400, height: 400 }}></div>
                        <div id="main3" style={{ width: 800, height: 400 }}></div> 

                        <div className='loginTxt'>登录</div>
                        <Input placeholder='测试1' onChange={e => this.inputChangeHandle(e, "test1")}/>
                        <Input placeholder='测试2' onChange={e => this.inputChangeHandle(e, "test2")} /> */}
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input placeholder='请输入用户名'/>
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password placeholder='请输入密码' />
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox onChange={this.onChangeChec}>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                            Submit
                            </Button>
                        </Form.Item>
                </Form>
                <div className="divBox">
                    <div className="divBoxLeft">
                        <div className="divBoxCon">
                            <p>知识一</p>
                            <p>知识一</p>
                            <p>知识一</p>
                        </div>
                        <div className="divBoxCon">
                            <p>知识一</p>
                            <p>知识一</p>
                        </div>
                        <div className="divBoxCon">
                            <p>知识一</p>
                            <p>知识一</p>
                            <p>知识一</p>
                        </div>
                    </div>
                    <div className="divBoxRight">
                    
                    </div>
                </div>
            </div>
        )
    }
    inputChangeHandle =(e, fieldName)=> {
        console.log(e.target.value);
    }
    onChangeChec(e){
        console.log('Success:', e.target.checked);
        this.setState({
            checked: e.target.checked,
        })
    }
    handleSubmit (e) {
        e.preventDefault();
        console.log('Success:', e.target);
        // if(e.target[0].value == ""){
        //     message.info("请输入用户名");
        //     return false;
        // }
        // if(e.target[1].value == ""){
        //     message.info("请输入密码");
        //     return false;
        // }
        // if(!this.state.checked){
        //     message.info("请勾选协议");
        //     return false;
        // }
        let {listitem}=this.state; //结果
        this.props.history.push("/home");
    };
}



export default Login