import React from "react";
import { connect } from "react-redux";
import { FilmReview_Div } from "./styled";
import { Find_FilmReview } from "@actions/week.js"
class FilmReview extends React.Component {
    render() {
        let { Find_FilmReview_Value } = this.props
     
        return (
            <FilmReview_Div>
                <div className="FilmReview_Img">
                    <p>那些荣获奥斯卡的LGBT电影</p>
                    <img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F03%2F01%2F173620.86296561.jpg&width=640&height=360&clipType=3"></img>
                </div>
                <div className="FilmReview_Connect">
                    <ul>
                        {
                            Find_FilmReview_Value.map((item, index) => {
                                return <li key={index}>
                                    <div className="FilmReview_Connect_left">
                                        <span className="iconfont" style={{
                                            position: "absolute", right: ".04rem",
                                            bottom: ".04rem",
                                            color: "#fff",
                                        }}>&#xe616;</span>
                                        <img src={item.coverImg}></img>
                                    </div>
                                    <div className="FilmReview_Connect_right">
                                        <h4>{item.videoTitle}</h4>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </FilmReview_Div>
        )
    }
    componentDidMount() {
        this.props.InitHandler()
    }
}
const mapStateToProps = (state) => ({
    Find_FilmReview_Value: state.Find.Find_FilmReview_Value
})
const mapDisPathToProps = (dispatch) => ({
    InitHandler() {
        dispatch(Find_FilmReview())
    }
})
export default connect(mapStateToProps, mapDisPathToProps)(FilmReview)