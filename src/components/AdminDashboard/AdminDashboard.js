import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

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
              <h1>Manage All Orders</h1>
            </Route>
            <Route path={`${path}/add-new-product`}>
              <h1 className='text-center mt-5'>Add A Product</h1>
            </Route>
            <Route path={`${path}/make-admin`}>
              <h1>Make Admin</h1>
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
