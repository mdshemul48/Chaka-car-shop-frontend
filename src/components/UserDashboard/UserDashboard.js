import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import SideBar from './SideBar/SideBar';
const UserDashboard = () => {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <Row className='g-0'>
        <Col lg={2}>
          <SideBar url={url} />
        </Col>
        <Col lg={10}>
          <main className='ms-2'>
            <Switch>
              <Route exact path={path}>
                productPage
              </Route>
              <Route path={`${path}/pay`}>PayNow</Route>
              <Route path={`${path}/review`}>review page</Route>
            </Switch>
          </main>
        </Col>
      </Row>
    </div>
  );
};

export default UserDashboard;
