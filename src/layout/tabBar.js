import React, { Fragment } from "react";
import TabBar from "@common/tabBar"
import FindLists from "@common/FindList"
export default class Layout extends React.Component {
    render() {
        console.log(this.props, "999")
        let { flag, FindList } = this.props.meta

        return (
            <Fragment>
                {flag ? <TabBar /> : ''}
                {FindList ? <FindLists /> : ''}

                {this.props.children}
            </Fragment>
        )
    }
}