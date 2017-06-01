import React from 'react'
import {connect} from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader/index.jsx'
import Catogary from '../../components/Catogary/index.jsx'
class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
               <HomeHeader cityName={this.props.cityName}/>
               <Catogary/>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        cityName:state.userinfo.cityName
    }
}
function mapDispatchToProps(dispatch){
    return{

    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
