import React from "react";
import { connect } from "react-redux";
import { Detail_Style } from "./styled"
import { } from "@actions/Detail"
class Detail_One extends React.Component {
    render() {
        let { Detail_List_Value, Movie_Id } = this.props
        let time = this.props.val.index
        console.log(this.props, "8888")
        return (
            <Detail_Style>
                <ul>
                    {
                        Detail_List_Value.map((item, index) => {
                            let data = Movie_Id + '_' + time
                            if (data == item.moviekey) {
                              return  item.list.map((child, idx) => {
                                    return <li key={idx}>
                                        <h4>11:15</h4>
                                        <div>
                                            <p><span>{child.versionDesc}</span>/<span>{child.language}</span></p>
                                            <p>{child.hall}</p>
                                        </div>
                                        <p>¥<span>{child.price}</span></p>
                                        <span>购票</span>
                                    </li>
                                })
                            }
                        })
                    }
                </ul>
            </Detail_Style>
        )
    }
}
const mapStateToProps = (state) => ({
    Detail_List_Value: state.detail.Detail_List_Value,
    Movie_Id: state.detail.Movie_Id
})
const mapDispatchTPropos = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchTPropos)(Detail_One)

