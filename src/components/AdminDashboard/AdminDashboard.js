import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import AddProduct from './AddProduct/AddProduct';
import MakeAdmin from './MakeAdmin/MakeAdmin';

import Orders from './Orders/Orders';
import SideBar from './SideBar/SideBar';

const AdminDashboard = () => {
  const { path, url } = useRouteMatch();
  return (
    <main>
      <Row className='g-0'>
        <Col lg={2}>
          <SideBar url={url} />
        </Col>
        <Col lg={10}>
          <Switch>
            <Route exact path={path}>
              <Orders />
            </Route>
            <Route path={`${path}/add-new-product`}>
              <AddProduct />
            </Route>
            <Route path={`${path}/make-admin`}>
              <MakeAdmin />
            </Route>
            <Route path={`${path}/manage-product`}>
              <h1>Manage Products</h1>
            </Route>
            <Route path={'*'}>
              <Redirect to='/' />
            </Route>
          </Switch>
        </Col>
      </Row>
    </main>
  );
};

export default AdminDashboard;
