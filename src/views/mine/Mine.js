import React, {PureComponent} from 'react'
import 'antd-mobile/dist/antd-mobile.css';
import './Mine.scss';
// const tabs = [
//     { title: '首 页', sub: '1' },
//     { title: '管 理', sub: '2' },
//     { title: '我 的', sub: '3' },
// ];

class Mine extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            dataList: [
                {id:1,project:"项目一"},
                {id:2,project:"项目二"},
                {id:3,project:"项目三"},
                {id:1,project:"项目四"},
                {id:2,project:"项目五"},
                {id:3,project:"项目六"}
            ],
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        document.title="首页"
    }
    render() {
        const imgUrlc = require("./img/c.png");
        const dataList = this.state.dataList;
        return (
            <div className="mineBox">
                <div className="userInfo">
                    <div className="portrait">
                        <img src={imgUrlc} />
                    </div>
                    <div className="infoBox">
                        <p>姓名：<span className="username">张三</span></p>
                        <p>电话：136xxxx5678</p>
                        <p>等级：<span className="gradeTxt">大师傅</span></p>
                    </div>
                </div>
                <div className="otherBox">
                {
                    dataList.map((item, index)=>{
                        console.log(item);
                        return (
                            <div key={item.id}>{item.project}</div>
                        );
                    })
                }        
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    名字:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">葡萄柚</option>
                        <option value="lime">酸橙</option>
                        <option value="coconut">椰子</option>
                    </select>
                    <input type="submit" value="提交" />
               </form>
            </div>
        )
    } 
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    handleSubmit(event) {
        alert('提交的名字: ' + this.state.value);
        event.preventDefault();
    }
}
 

export default Mine