import React from "react";
import { Search_Top } from "./styled";
import { SearchBar } from 'antd-mobile';
import { connect } from "react-redux";
import {SEARCH_LIST_VALUE} from "@actions/Search"
class Search extends React.Component {
    render() {
        let {Recommend_Value}=this.props
        return (
            <Search_Top>
                <div className="Search_Top">
                    <span onClick={this.ClickHandler.bind(this)}>></span>
                    <SearchBar className="Search_Top_form" placeholder="影片/影院/影人，任你选"
                     ref={ref => this.autoFocusInst = ref}
        
                     />
                </div>
                <ul className="Popular_Search">
                    <li className="Popular_Search_top">热门搜索</li>
                   
                    {
                        Recommend_Value.map((item,index)=>{
                            return  <li className="Popular_Search_context" key={index}>{item}</li>
                        })
                    }

                </ul>
            </Search_Top>
        )
    }
    componentDidMount(){
        this.props.HandlerValue();
       
    }
    ClickHandler(){
        this.props.history.push("/Home")
    }
}
const mapStateToProps = (state) => ({
    Recommend_Value:state.Find.Recommend_Value
})
const mapDispatchTPropos = (dispatch) => ({
    HandlerValue(){
        dispatch(SEARCH_LIST_VALUE())
    }
})
export default connect(mapStateToProps, mapDispatchTPropos)(Search);