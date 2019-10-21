import React, { Fragment } from "react";
import TabBar from "@common/tabBar"
import FindLists from "@common/FindList"
import Find_Bottoms from "@common/Find_Bottom"
export default class Layout extends React.Component {
    render() {
        let { flag, FindList, Find_Bottom } = this.props.meta

        return (
            <Fragment>
                {flag ? <TabBar /> : ''}
                {FindList ? <FindLists /> : ''}

                <div style={{height:"100%",overflow:"auto"}}>
                    {this.props.children}
                    {Find_Bottom ? <Find_Bottoms /> : ''}
                </div>
            </Fragment>
        )
    }
}