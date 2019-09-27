import React, { Fragment } from "react";
import { Switch, Redirect, Route } from "react-router-dom"
import Layout from "../layout/tabBar"

export default (rencers) => {
    const routesForEach = (params) => {
        return <Route path={params.path} key={params.key} render={() => (
             <Fragment>
                <Route component={params.component}  />
                <Redirect to={params.children[0].path} />
                <Switch>
                    {
                        params.children.map(child => {
                            if (child.children) {
                                return routesForEach(child)
                            } else {
                                return <Layout {...child}>
                                    <Route path={child.path} component={child.component} key={child.key}></Route>
                                </Layout>
                            }
                        })
                    }
                </Switch>
            </Fragment>

        )} />
    }


    return rencers.map(item => {
        if (item.children) {
            return routesForEach(item)
        } else {
            return <Layout {...item}>
                <Route path={item.path} component={item.component} key={item.key}></Route>
            </Layout>
        }
    })
}