import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import SideBar from './SideBar/SideBar';
import MyOrders from './MyOrders/MyOrders';
import AddReview from './AddReview/AddReview';
const UserDashboard = () => {
  const { path, url } = useRouteMatch();

  return (
    <Row className='g-0'>
      <Col lg={2}>
        <SideBar url={url} />
      </Col>
      <Col lg={10}>
        <main className='ms-2'>
          <Switch>
            <Route exact path={path}>
              <MyOrders />
            </Route>
            <Route path={`${path}/pay`}>
              <h1 className='text-center mt-5'>coming soon</h1>
            </Route>
            <Route path={`${path}/review`}>
              <AddReview />
            </Route>
            <Route path={'*'}>
              <Redirect to='/' />
            </Route>
          </Switch>
        </main>
      </Col>
    </Row>
  );
};

export default UserDashboard;
