// import "./Sidebar.css";
// import { Link } from "react-router-dom";
// import logo from '../Assets/admin-logo.jfif';
// import sonatalogo from '../Assets/sonata-logo.png';
// import { useLocation } from 'react-router-dom';

// function Sidebar() {
//     function handleLogout() {
//     }
//     const location = useLocation();
//     let userinfo = localStorage.getItem("user-info");
//     const obj = JSON.parse(userinfo);

//     return (
//         <>
//             <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
//                 <div className="d-flex flex-column align-items-center px-2 pt-2 text-white min-vh-100">
//                     <span>    {sonatalogo && <img className='sonata-logo' src={sonatalogo} />}    </span><br />

//                     <span >
//                         {logo && <img className='image-logo' src={logo} />}
//                     </span>
//                     <span className='name pt-1 px-2'>
//                         {obj.firstName}&nbsp;{obj.lastName}
//                     </span><br />

//                     {(location && location.pathname === "/dashboard") || (location && location.pathname === "/TransactionHistory") ?
//                         <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center" id="menu">
//                             <li className="nav-item">
//                                 <Link to="/dashboard" className='remove-under-line'>
//                                     Dashboard
//                                 </Link>
//                             </li>

//                             {/* <li className="nav-item">
//                                 <Link to="/TransactionHistory" className='remove-under-line'>
//                                     Transactions
//                                 </Link>
//                             </li> */}

//                             <li className="nav-item">
//                                 <Link to="/" className="remove-under-line">
//                                     <span onClick={handleLogout}>Logout</span>
//                                 </Link>
//                             </li>
//                         </ul>

//                         // : (location && location.pathname === "/user") ?
//                         //     <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center " id="menu">
//                         //         <br />
//                         //         <li className="nav-item">
//                         //             <Link to="/" className="remove-under-line">
//                         //                 <span onClick={handleLogout}>Logout</span>
//                         //             </Link>
//                         //         </li>
//                         //     </ul>
//                         //     : ""}
//                 </div>
//             </div>
//         </>
//     )
// }
// export default Sidebar;




import "./OrderSidebar.css";
import { Link } from "react-router-dom";
import logo from '../Assets/admin-logo.jfif';
import sonatalogo from '../Assets/sonata-logo.png';
import { useLocation } from 'react-router-dom';
import ReactDOM from 'react-dom'
import React from 'react'
function Sidebar() {
    function handleLogout() {
        // alert();

    }
    const location = useLocation();
    let userinfo = localStorage.getItem("user-info");
    const obj = JSON.parse(userinfo);
    let data = obj.data;
    return (
        <>
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">

                    {/* <span>
                        {sonatalogo && <img className='sonata-logo' src={sonatalogo} />
                        }
                        </span><br /> */}
                    <br /><br /><br />
                    <div className='profile-sewction'>
                        <span >
                            {logo && <img className='image-logo' src={logo} />}
                        </span>&nbsp;<br />
                        {/* <span className='name'>{data && data.Name}</span> */}
                        <span>Trupti Thakur</span>
                    </div>
                    {(location && location.pathname === "/dashboard") || (location && location.pathname === "/nfts") ?
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li className="nav-item">

                                <Link to="/dashboard" className='remove-under-line'>
                                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                            <Link to="/nfts" className="nfts">
                                <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">NFT</span>
                            </Link>
                        </li> */}
                            {/* <li className="nav-item">
                                <Link to="/" className="nfts">
                                    <p onClick={handleLogout}>Logout</p>
                                </Link>
                            </li> */}





                            {/* </ul>:(location && location.pathname === "/usernft")?
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <Link to="/usernft" className="usernft">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline"> UserNFT</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                    <Link to="/" className="nfts">
                        <p onClick={handleLogout}>Logout</p>
                        </Link>   
                    </li> */}



                        </ul> : ""
                    }

                </div>
            </div>
        </>
    )
}
export default Sidebar;