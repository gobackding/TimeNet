import React from "react"

import {connect} from "react-redux"
 class Home extends React.Component {
    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}
const mapStateToProps=(state)=>({

})
const mapDispacthToProps=(dispatch)=>({

})
 
export default connect(mapStateToProps,mapDispacthToProps)(Home)
