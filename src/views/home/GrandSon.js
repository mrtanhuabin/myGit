import React, {PureComponent} from 'react';
import { Consumer } from './context' // 引入Consumer

class GrandSon extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    componentDidMount(){
        document.title="属性"
    }
    
    render() {
        return (
            <div className="main-addT">
                <Consumer>
                    {context => (
                    <div>
                        子子组件 fruit={context.fruit}
                        <br />
                        <button type="button" onClick={() => context.countUtil.addCount(2)}>
                        加2
                        </button>
                        &nbsp;
                        &nbsp;
                        <button type="button" onClick={() => context.countUtil.delCount(3)}>
                        减3
                        </button>
                        <hr />
                    </div>
                    )}
                </Consumer>
            </div>
        )
    }

}
 
export default GrandSon;