import React from "react";
import { connect } from "react-redux";
import { RankingList_Style } from "./styled"
import { Switch } from "antd";
class RankingList_Detail extends React.Component {
    render() {
        let { RankingList_Detail_Value } = this.props
        console.log(RankingList_Detail_Value)
        return (
            <RankingList_Style>
                <div className="RankingList_Detail">
                    <span className="iconfont" onClick={this.props.GoBackClick.bind(this)}>&#xe682;</span>
                </div>
                <h4 className="RankingList_Detail_HFour">{RankingList_Detail_Value.topList.name}</h4>
                <p className="RankingList_Detail_p">{RankingList_Detail_Value.topList.summary}</p>
                <ul className="RankingList_Detail_connect">
                    {
                        RankingList_Detail_Value.movies.map((item, index) => {
                            switch (index) {
                                case 0:
                                    return <li key={index}>
                                        <div className="RankingList_Detail_Film">
                                            <div className="RankingList_Detail_Film_left">
                                                <img src={item.posterUrl} alt="" />
                                            </div>
                                            <div className="RankingList_Detail_Film_right">
                                                <h5>{item.name}({item.decade}) <span>8.4</span></h5>
                                                <h6>Battle Royale</h6>
                                                <p>导演：{item.director}</p>
                                                <p>主演：{item.actor}&nbsp;{item.actor2}</p>
                                                <p>{item.releaseDate} &nbsp;  {item.releaseLocation}</p>
                                            </div>
                                        </div>
                                        <p>{item.remark}</p>
                                        <span style={{ background: '#ff8600' }}>
                                            {index + 1}
                                        </span>
                                    </li>
                                case 1:
                                    return <li key={index}>
                                        <div className="RankingList_Detail_Film">
                                            <div className="RankingList_Detail_Film_left">
                                                <img src={item.posterUrl} alt="" />
                                            </div>
                                            <div className="RankingList_Detail_Film_right">
                                                <h5>{item.name}({item.decade}) <span>8.4</span></h5>
                                                <h6>Battle Royale</h6>
                                                <p>导演：{item.director}</p>
                                                <p>主演：{item.actor}&nbsp;{item.actor2}</p>
                                                <p>{item.releaseDate} &nbsp;  {item.releaseLocation}</p>
                                            </div>
                                        </div>
                                        <p>{item.remark}</p>
                                        <span style={{ background: '#76c62f' }}>
                                            {index + 1}
                                        </span>
                                    </li>
                                    case 2:
                                            return <li key={index}>
                                                <div className="RankingList_Detail_Film">
                                                    <div className="RankingList_Detail_Film_left">
                                                        <img src={item.posterUrl} alt="" />
                                                    </div>
                                                    <div className="RankingList_Detail_Film_right">
                                                        <h5>{item.name}({item.decade}) <span>8.4</span></h5>
                                                        <h6>Battle Royale</h6>
                                                        <p>导演：{item.director}</p>
                                                        <p>主演：{item.actor}&nbsp;{item.actor2}</p>
                                                        <p>{item.releaseDate} &nbsp;  {item.releaseLocation}</p>
                                                    </div>
                                                </div>
                                                <p>{item.remark}</p>
                                                <span style={{ background: '#36b2ec' }}>
                                                    {index + 1}
                                                </span>
                                            </li>
                                    default:
                                            return <li key={index}>
                                            <div className="RankingList_Detail_Film">
                                                <div className="RankingList_Detail_Film_left">
                                                    <img src={item.posterUrl} alt="" />
                                                </div>
                                                <div className="RankingList_Detail_Film_right">
                                                    <h5>{item.name}({item.decade}) <span>8.4</span></h5>
                                                    <h6>Battle Royale</h6>
                                                    <p>导演：{item.director}</p>
                                                    <p>主演：{item.actor}&nbsp;{item.actor2}</p>
                                                    <p>{item.releaseDate} &nbsp;  {item.releaseLocation}</p>
                                                </div>
                                            </div>
                                            <p>{item.remark}</p>
                                            <span style={{ background: '#ccc' }}>
                                                {index + 1}
                                            </span>
                                        </li>
                            }

                        })
                    }
                </ul>
            </RankingList_Style>
        )
    }
}
const mapStateToProps = (state) => ({
    RankingList_Detail_Value: state.detail.RankingList_Detail_Value
})
const mapDispacthToProps = (dispatch) => ({
    GoBackClick() {
        this.props.history.goBack()
    }
})
export default connect(mapStateToProps, mapDispacthToProps)(RankingList_Detail) 