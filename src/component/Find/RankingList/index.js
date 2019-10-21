import React from "react";
import { connect } from "react-redux"
import { RankingLists } from "./styled"
import { Find_RankingList } from "@actions/week"
import { Ranking_List_Value } from "@actions/Detail"


class RankingList extends React.Component {
    render() {
        let { Find_RankingList_Value } = this.props
        return (
            <RankingLists>
                <div className="RankingList">
                    <p className="title">《复仇者联盟4》重要彩蛋全解析</p>
                    <img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F03%2F01%2F173620.86296561.jpg&width=640&height=360&clipType=3" />
                </div>
                <ul className="RankingList_List">
                    <li>
                        <img src="http://static1.mtime.cn/html5/20190925185453/images/2014/top01.png" />
                        <span className="Time">时光Top100</span>
                    </li>
                    <li>
                        <img src="http://static1.mtime.cn/html5/20190925185453/images/2014/top02.png" />
                        <span className="Chinese">华语Top100</span>
                    </li>
                    <li>
                        <img src="http://static1.mtime.cn/html5/20190925185453/images/2014/top03.png" />
                        <span className="Global">全球票房榜</span>
                    </li>
                </ul>
                <ul className="Recommended_List">
                    {
                        Find_RankingList_Value.map((item, index) => {
                            return <li key={index} onClick={this.props.ClickHandlerValue.bind(this, item)}>
                                <div className="Recommended_List_left">
                                    <h4>{item.topListNameCn}</h4>
                                    <p>{item.summary}</p>
                                </div>
                                <span className="iconfont">></span>
                            </li>
                        })
                    }
                </ul>
            </RankingLists>
        )
    }
    componentDidMount() {
        this.props.InitkHandler()
    }
}
const mapStateToProps = (state) => ({
    Find_RankingList_Value: state.Find.Find_RankingList_Value
})
const mapDisPathToProps = (dispatch) => ({
    InitkHandler() {
        dispatch(Find_RankingList())
    },
   async ClickHandlerValue(val) {
        let data= await dispatch(Ranking_List_Value(val.id))
        console.log(data)
        if(data){
            this.props.history.push("/RankingList_Detail")
        }
    }
})

export default connect(mapStateToProps, mapDisPathToProps)(RankingList)