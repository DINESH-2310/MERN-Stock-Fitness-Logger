import React from 'react'
import  Nav from './Navbar/Nav'
import { Outlet } from 'react-router-dom'


function Portal() {
    return (
        <div>
            <div id="wrapper">
               
                <div id="content-wrapper" class="d-flex flex-column">
                    <Nav/>
                    <div class="container-fluid">
                        <Outlet></Outlet>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Portal