import React from "react";
import { connect } from "react-redux"
import {ConditionalQuery_Style} from "./styled"
class ConditionalQuery extends React.Component {

    render(){
        return(
            <ConditionalQuery_Style>
                <ul>
                    <li>离我最近</li>|
                    <li>全程</li>|
                    <li>影厅特效</li>
                </ul>
            
            </ConditionalQuery_Style>
        )
    }
}





const mapStateToProps = (state) => ({

})
const mapDispatchTPropos = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchTPropos)(ConditionalQuery)