import React from "react";
import { NavLink } from "react-router-dom"
import { Find_Bottm_Style } from "./sytled"
export default class Find_Bottom extends React.Component {
    render() {
        return (
            <Find_Bottm_Style>
                <div className="Bottom_URL">
                    <NavLink to="/Home" >首页</NavLink>
                    <NavLink to="/Home" >购票</NavLink>
                    <NavLink to="/Home" >商城</NavLink>
                    <NavLink to="/Home" >发现</NavLink>
                    <NavLink to="/Home" >我的</NavLink>
                </div>
                <div className="justify_connect">
                    <NavLink to="/Home">PC版</NavLink>|
                    <NavLink to="/Home">客户端下载</NavLink>|
                    <NavLink to="/Home">意见反馈</NavLink>|
                    <NavLink to="/Home">帮助中心</NavLink>
                </div>

            </Find_Bottm_Style>
        )
    }
}