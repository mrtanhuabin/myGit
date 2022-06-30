import React, {PureComponent} from 'react';
import { withRouter} from 'react-router-dom';
import { Row, Col, Input, Button, Form, Checkbox, message, Table } from 'antd';
import 'antd-mobile/dist/antd-mobile.css';

class Demoa extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            columns : [
                {
                  title: 'id',
                  dataIndex: 'id',
                  key: 'id',
                  render: text => <Input/>,
                },
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                    render: text => <Input/>,
                  },
            ],
            data : [
                {
                  key: '1',
                  name: 'John Brown',
                  age: 32,
                  address: 'New York No. 1 Lake Park',
                  tags: ['nice', 'developer'],
                }, 
                {
                    key: '1',
                    name: 'John Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                    tags: ['nice', 'developer'],
                  },    
            ]     
        }
        this.onpastefun=this.onpastefun.bind(this)
    }
    componentDidMount(){
        document.title="首页";

    }
    onpastefun(e){
        debugger
        e.preventDefault(); //消除默认粘贴
        //获取粘贴板数据
        let data = null;  
        let clipboardData =e.originalEvent.clipboardData; // IE || chrome  
        data = clipboardData.getData('Text');
        console.log(data.replace(/\t/g, '\\t').replace(/\n/g, '\\n')); //data转码
        //解析数据
        let arr = data.split('\n')
            .filter(function(item) {    //兼容Excel行末\n，防止出现多余空行
                return (item !== "")
            }).map(function(item) {
                return item. split("\t");
            });
        //输出至网页表格
        let tab = this;  //表格DOM
        let td = e.target.parents('td');
        let startRow = td.parents('tr')[0].rowIndex; 
        let startCell = td[0].cellIndex; 
        let rows = tab.rows.length;  //总行数
        for (let i = 0; i < arr.length && startRow + i < rows; i++) {
            let cells = tab.rows[startRow + i].cells.length;  //该行总列数
            for(let j = 0; j < arr[i].length && startCell + j < cells; j++) {
            let cell = tab.rows[startRow + i].cells[startCell + j];
            cell.find(':text').val(arr[i][j]);  //找到cell下的input:text，设置value
            }
        }
    }
    render() {
       const { columns, data} =this.state;
        return (
            <div>
                <Table columns={columns} dataSource={data} 
                    onRow={record => {
                        return {
                            onPaste: event => { this.onpastefun(event)}, // 点击行
                            onDoubleClick: event => {},
                            onContextMenu: event => {},
                            onMouseEnter: event => {}, // 鼠标移入行
                            onMouseLeave: event => {},
                        };
                    }}
                />
            </div>
        );
    }

}
 

export default Demoa;