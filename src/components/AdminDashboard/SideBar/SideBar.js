import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsLayoutSidebarInset } from 'react-icons/bs';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { AiOutlineFileAdd, AiOutlineUserAdd } from 'react-icons/ai';
import { SiGooglemybusiness } from 'react-icons/si';

const SideBar = ({ url }) => {
  return (
    <div
      className='d-flex flex-column flex-shrink-0 p-3 text-white bg-dark'
      style={{ height: '100%' }}
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
            <MdOutlineProductionQuantityLimits className='me-2' />
            Manage All Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${url}/manage-product`}
            className='nav-link text-white'
            aria-current='page'
            activeClassName='active'
          >
            <SiGooglemybusiness className='me-2' />
            Manage Products
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            to={`${url}/add-new-product`}
            className='nav-link text-white'
            aria-current='page'
            activeClassName='active'
            exact
          >
            <AiOutlineFileAdd className='me-2' /> Add A Product
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${url}/make-admin`}
            className='nav-link text-white'
            aria-current='page'
            activeClassName='active'
          >
            <AiOutlineUserAdd className='me-2' />
            Make Admin
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
