import React, {PureComponent} from 'react'
import { Tabs } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './Home.scss';
class pageA extends PureComponent {
    componentDidMount(){
        document.title="首页"
    }
    render() {
        return (
            <div className="homeBox">
                pageA
            </div>
        )
    }

}
 

export default pageA;