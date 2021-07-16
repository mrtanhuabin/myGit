import React, {PureComponent} from 'react';
import {withRouter} from "react-router-dom";
import {List } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './Manage.scss';

const Item = List.Item;
const Brief = Item.Brief;

class Manage extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            dataList: [
                {id:1,name:"张三",Grade:"师傅",ApprenticeNum:10},
                {id:2,name:"李四",Grade:"徒弟",ApprenticeNum:6},
                {id:3,name:"王五",Grade:"徒弟",ApprenticeNum:2}
            ],
        }
        this.clickPush=this.clickPush.bind(this);
    }
    componentDidMount(){
        document.title="管理";
        // mykeyvalue表示符  msg报错信息  data传递过来的数据
    }
    clickPush(){
        this.props.history.push("/pageA");
    }
    render() {
        const dataList = this.state.dataList;
        return (
            <div className="manageBox">
                {
                    dataList.map((item, index)=>{
                        console.log(item);
                        return (
                            <List key={item.id} renderHeader={() => ''} className="my-list" onClick={this.clickPush}>
                                <Item multipleLine extra={item.Grade}>
                                    {item.name} <Brief>{item.ApprenticeNum}</Brief>
                                </Item>
                            </List>
                        );
                    })
                }
            </div>
        )
    }
}
 
export default withRouter(Manage);