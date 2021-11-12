import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsLayoutSidebarInset } from 'react-icons/bs';
import {
  MdOutlineRateReview,
  MdProductionQuantityLimits,
} from 'react-icons/md';
import { CgPaypal } from 'react-icons/cg';

const SideBar = ({ url }) => {
  return (
    <div
      className='d-flex flex-column flex-shrink-0 p-3 text-white bg-dark'
      style={{ minHeight: '80vh' }}
    >
      <Link
        to='/'
        className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none fs-2'
      >
        {' '}
        <BsLayoutSidebarInset className='me-2' />
        CHAKA
      </Link>

      <hr />
      <ul className='nav nav-pills flex-column mb-auto'>
        <li className='nav-item'>
          <NavLink
            to={url}
            className='nav-link text-white'
            aria-current='page'
            activeClassName='active'
            exact
          >
            <MdProductionQuantityLimits className='me-2' />
            My Orders
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            to={`${url}/pay`}
            className='nav-link text-white'
            aria-current='page'
            activeClassName='active'
            exact
          >
            <CgPaypal className='me-2' /> Pay Bills
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${url}/review`}
            className='nav-link text-white'
            aria-current='page'
            activeClassName='active'
          >
            <MdOutlineRateReview className='me-2' />
            Review
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
