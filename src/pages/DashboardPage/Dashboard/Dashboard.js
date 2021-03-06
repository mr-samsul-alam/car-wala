import React from "react";
import { Col, Nav, Row } from "react-bootstrap";
import {
    Switch,
    Route,
    Link,
    useHistory,
    useRouteMatch,
} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

import AddReview from "../AddReview/AddReview";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";
import ManageProducts from "../ManageProducts/ManageProducts";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";
import NotFound from "../../NotFound/NotFound";
import "./Dashboard.css";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import AddProduct from "../AddProduct/AddProduct";



const Dashboard = () => {
    const { user } = useAuth();
    const history = useHistory();
    let { path, url } = useRouteMatch();
    const { admin, logOut } = useAuth();
    const handleLogOut = () => {
        logOut(history);
    };
    return (
        <div >
            <div className="headerColor">
                <h1 className="text-center">DASHBOARD</h1>
            </div>
            <Row className="w-100">
                <Col xs={12} md={2}>
                    <div className="bg-light shadow">
                        <Nav className="dash-nav">
                            <Nav.Link
                                as={Link}
                                to="/"
                                className="dashboad-style"
                            >
                                <h4>Home Page</h4>
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to={`${url}`}
                                className="dashboad-style"
                            >
                                Dashboard
                            </Nav.Link>
                            {!admin && (
                                <>
                                    <Nav.Link
                                        as={Link}
                                        to={`${url}/pay`}
                                        className="dashboad-style"
                                    >
                                        Payment Method
                                    </Nav.Link>
                                    <Nav.Link
                                        as={Link}
                                        to={`${url}/myorders`}
                                        className="dashboad-style"
                                    >
                                        My Orders
                                    </Nav.Link>
                                    <Nav.Link
                                        as={Link}
                                        to={`${url}/review`}
                                        className="dashboad-style"
                                    >
                                        Add Review
                                    </Nav.Link>
                                </>
                            )}
                            {admin && (
                                <>
                                    <Nav.Link
                                        as={Link}
                                        to={`${url}/manageorder`}
                                        className="dashboad-style"
                                    >
                                        Manage All Orders
                                    </Nav.Link>
                                    <Nav.Link
                                        as={Link}
                                        to={`${url}/addproduct`}
                                        className="dashboad-style"
                                    >
                                        Add A Car
                                    </Nav.Link>
                                    <Nav.Link
                                        as={Link}
                                        to={`${url}/makeadmin`}
                                        className="dashboad-style"
                                    >
                                        Make Admin
                                    </Nav.Link>
                                    <Nav.Link
                                        as={Link}
                                        to={`${url}/manageproduct`}
                                        className="dashboad-style"
                                    >
                                        Manage Product
                                    </Nav.Link>
                                </>
                            )}
                            <button onClick={handleLogOut} className="btn btn-outline-primary">
                                LogOut
                            </button>
                        </Nav>
                    </div>
                </Col>
                <Col className="d-flex justify-content-center
    align-items-center" xs={12} md={10}>
                    <Switch>
                        <Route exact path={path}>
                            <div className="bg-dark p-5 border  border-c border-4 border-warning d-flex flex-column justify-content-center
    align-items-center">
                                <img className="w-50 border border-2 border-primary rounded-circle" src={user.photoURL} alt="" />
                                <span className="text-info fs-1 ">{user.displayName}</span>
                                <button onClick={handleLogOut} className="btn btn-outline-primary">
                                    LogOut
                                </button>

                            </div>
                        </Route>
                        <Route path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                        <Route path={`${path}/myorders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/review`}>
                            <AddReview></AddReview>
                        </Route>
                        <AdminRoute path={`${path}/manageorder`}>
                            <ManageAllOrder></ManageAllOrder>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addproduct`}>
                            <AddProduct></AddProduct>
                        </AdminRoute>
                        <AdminRoute path={`${path}/makeadmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageproduct`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>
                        <Route path={`${path}/*`}>
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
