import React, {PureComponent} from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import $ from 'jquery';
import 'orgchart';
import 'orgchart/dist/css/jquery.orgchart.css';
// import 'font-awesome/css/font-awesome.css';
var datascource = {
    'name': '浙商银行股份有限公司',
    'title': 'general manager',
    'children': [
      { 'name': '公司股东', 'title': '', 'direction': "l2r",
        'children': [
            { 'name': '瀚华金控股有限公司', 'title': 'senior engineer' },
            { 'name': '宗申产业集团有限公司', 'title': 'senior engineer' },
            { 'name': '福安药业（集团）股份有限公司', 'title': 'senior engineer' },
            { 'name': '重庆渝江压铸有限公司', 'title': 'senior engineer' }
        ]
      },
      { 'name': '控股公司', 'title': '',
        'children': [
            { 'name': '瀚华金控股有限公司', 'title': 'senior engineer' },
            { 'name': '宗申产业集团有限公司', 'title': 'senior engineer' },
            { 'name': '福安药业（集团）股份有限公司', 'title': 'senior engineer' },
            { 'name': '重庆渝江压铸有限公司', 'title': 'senior engineer' }
        ]
      },
    ]
  };
class Demoa extends PureComponent {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        const options = {
            data: datascource, // 数据源
            depth: 20,
            nodeContent: 'title',
            createNode: this.addClick, // 当渲染节点时添加点击事件
            toggleSiblingsResp: true, // 允许用户收缩展开兄弟节点
            visibleLevel: 3, // 默认展开两级
            direction: "t2b", // l2r从左往右  r2l从右往左 t2b上往下 b2t下往上
            toggleSiblingsResp: false
        };
        $(this.orgTree).orgchart(options);
    }
    addClick = ($node, data) => {
        $($node).click(() => this.handleClick(data));
    };
    handleClick = data => {
        console.log(data);
    };
    
    render() {
        return (
            <div>
                <div ref={ref => (this.orgTree = ref)} />
            </div>
        );
    }

}
 

export default Demoa;