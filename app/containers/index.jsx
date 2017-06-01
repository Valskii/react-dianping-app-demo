import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import * as userinfoActions from '../actions/userinfo.js'
import {CITYNAME} from '../config/LocalStorageKey.js'
import LocalStorage from '../util/LocalStorage.js'
class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
    componentDidMount(){
        let cityName = LocalStorage.getItem(CITYNAME);
        if(cityName == null){
            cityName = '哈尔滨';
        }
        this.props.userinfoActions.update({
            cityName:cityName
        });
    }
}
function mapStateToProps(state){
    return{

    }
}
function mapDispatchToProps(dispatch){
    return{
        userinfoActions:bindActionCreators(userinfoActions,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
