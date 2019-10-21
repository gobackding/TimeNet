import React from "react";
import { connect } from "react-redux"
import { FIND_NEWS_VALUE } from "@actions/week.js"
import { NewsDiv } from "./styled"
class News extends React.Component {
    render() {
        let { Find_News_Value } = this.props
        return (
            <NewsDiv>
                <div className="News_connect">
                    <div className="News_top">
                        <p className="title">《复仇者联盟4》重要彩蛋全解析</p>
                        <img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F07%2F18%2F102211.29411290.jpg&width=640&height=360&clipType=3" />
                    </div>
                    <ul className="News_List">
                        {
                            Find_News_Value.map((item, index) => {
                                if (item.images.length > 1) {
                                    return <li className="News_threeImg" key={index}>
                                        <div className="News_threeImg_right">
                                            <h4>{item.title}</h4>
                                        </div>
                                        <div className="News_threeImg_left">
                                            {
                                                item.images.map((child, idx) => {
                                                    return <img src={child.url1} key={idx}/>
                                                })
                                            }
                                        </div>
                                        <div className="News_threeImg_bottom">
                                            <p><span>昨天</span><i>08:12</i>&nbsp;评论：<span>{item.commentCount}</span></p>
                                        </div>

                                    </li>
                                } else {
                                    return <li className="News_OneImg" key={index}>
                                        <div className="News_OneImg_left">
                                            <img src={item.image} />
                                        </div>
                                        <div className="News_OneImg_right">
                                            <h4>{item.title}</h4>
                                            <span>9小时前</span>
                                        </div>
                                    </li>
                                }
                            })
                        }
                    </ul>

                </div>
            </NewsDiv>
        )
    }
    componentDidMount() {
        this.props.HandlerValue()
    }
}
const mapStateToProps = (state) => ({
    Find_News_Value: state.Find.Find_News_Value
})
const mapDisPathToProps = (dispatch) => ({
    HandlerValue() {
        dispatch(FIND_NEWS_VALUE())
    }
})
export default connect(mapStateToProps, mapDisPathToProps)(News)