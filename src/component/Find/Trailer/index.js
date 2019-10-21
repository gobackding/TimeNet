import React from "react";
import { connect } from "react-redux"
import { Trailer_Style } from "./styled"
import { Find_Trailer_List } from "@actions/week"
class Trailer extends React.Component {
    render() {
        let { Find_Trailer_value } = this.props
        console.log(Find_Trailer_value, "888")
        return (
            <Trailer_Style>
                <div className="Trailer_img">
                    <div className="Trailer_context">
                        <h4>仲夏夜惊魂</h4>
                        <p>他被塞入熊腔子里，成了祭品！</p>
                        <div className="Trailer_context_position">
                            <img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F05%2F09%2F113805.41496750_1280X720X2.jpg&width=125&height=190&clipType=4" />
                        </div>
                    </div>
                    <img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F03%2F01%2F173620.86296561.jpg&width=640&height=360&clipType=3" />
                </div>
                <ul className="Trailer_List">
                    {
                        Find_Trailer_value.map((item, index) => {
                            return <li key={index}>
                                <h5>{item.title}</h5>
                                <p>
                                    <span className="HeadPortrait">
                                        <img src={item.userImage} />
                                    </span>
                                    <span className="username">{item.nickname}-评分</span>
                                    <i>《{item.relatedObj.title}》</i>
                                    <em>{item.rating}</em>
                                </p>
                            </li>
                        })
                    }
                </ul>
            </Trailer_Style>
        )
    }
    componentDidMount() {
        this.props.HandlerValue()
    }
}
const mapStateToProps = (state) => ({
    Find_Trailer_value: state.Find.Find_Trailer_value
})
const mapDisPathToProps = (dispatch) => ({
    HandlerValue() {
        dispatch(Find_Trailer_List())
    }
})

export default connect(mapStateToProps, mapDisPathToProps)(Trailer)