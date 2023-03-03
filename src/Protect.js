import React, { Component } from 'react'
import { Route,Redirect} from 'react-router-dom'

function Protect({ component, ...rest }) {
    const RenderComponents = component;
    return (
        <Route
            {...rest}
            render={
                props => {
                     return true ? (
                        < RenderComponents {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/"
                            }}
                        />

                    )
                }
            }
        />

    )
}

export default Protect