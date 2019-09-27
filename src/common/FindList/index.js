import { TabBar } from "@router/index.js"
import React, { Fragment } from "react"
import { NavLink } from "react-router-dom"
import {FindLists} from "./styled.js"
export default class FindList extends React.Component {
    render() {
        console.log(this.props, "777")
        return (
            <FindLists>
                <ul>
                    {
                        TabBar.map(item => {
                            if (item.name === "发现") {
                                return item.children.map((item) => (
                                    <li key={item.key}>
                                        <NavLink to={item.path}>{item.name}</NavLink>
                                    </li>
                                ))
                            }
                        })
                    }
                </ul>
            </FindLists>
        )
    }
}

