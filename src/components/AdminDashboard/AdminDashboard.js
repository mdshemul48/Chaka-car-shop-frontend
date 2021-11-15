import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import AddProduct from './AddProduct/AddProduct';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageProducts from './ManageProducts/ManageProducts';

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
            <Route exact path={`${path}/add-new-product`}>
              <AddProduct />
            </Route>

            <Route exact path={`${path}/manage-product`}>
              <ManageProducts />
            </Route>
            <Route exact path={`${path}/make-admin`}>
              <MakeAdmin />
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
