import React, {PureComponent} from 'react'
import { Tabs } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './Home.scss';
import HomeN from './HomeN.js';
import Manage from '../manage/Manage.js';
import { Provider } from './context' // 引入Provider
import Mine from '../mine/Mine.js';

const tabs = [
    { title: '首 页', sub: '1' },
    { title: '管 理', sub: '2' },
    { title: '我 的', sub: '3' },
];

class Home extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            fruit: 'apple',
            count: 0,
        }
    }
    componentDidMount(){
        document.title="首页1";
    }
    getContext = () => {
        const { fruit, count } = this.state
        return {
          fruit,
          countUtil: {
            addCount: num => {
              this.setState({
                count: count + num,
              })
            },
            delCount: num => {
              this.setState({
                count: count - num,
              })
            },
          },
        }
      }
    render() {
        const {info}= this.state;
        return (
            <div className="homeBox">
                <div>{info}</div>
                <Tabs tabs={tabs}
                initialPage={0}
                tabBarPosition="bottom"
                useOnPan={true}
                swipeable={false}
                renderTab={tab => <span>{tab.title}</span>}
                >
                    <div>
                    <Provider value={this.getContext()}>
                        <HomeN {...this.props}></HomeN>
                    </Provider>
                    </div>
                    <div>
                        <Manage {...this.props}></Manage>
                    </div>
                    <div>
                        <Mine {...this.props}></Mine>
                    </div>
                </Tabs>
            </div>
        )
    }

}
 

export default Home;