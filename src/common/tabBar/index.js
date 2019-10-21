import React from "react";
import { TabBar } from "@router/index.js"
import { NavLink } from "react-router-dom"
import { TabBarDiv } from "./styled"
export default class Home extends React.Component {
    render() {
        return (
            <TabBarDiv>
                <img src="http://static1.mtime.cn/html5/20190925185453/images/2014/logo_mtime.png" />
                <ul>
                    {
                        TabBar.map(item => (
                            <li key={item.key}>
                                <NavLink to={item.path}>{item.name}</NavLink>
                            </li>
                        ))
                    }
                </ul>
                <span className="iconfont">&#xe60e;</span>
            </TabBarDiv>
        )
    }
}