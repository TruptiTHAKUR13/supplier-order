import Content from "./OrderContent";
import Sidebar from "./OrderSidebar";
import React from 'react';

function Landingpage() {
    return (
        <>
            <div class="container1-fluid">
                <div class="row flex-nowrap">
                    <Sidebar />
                    <div class="col py-3">
                        <Content />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landingpage;