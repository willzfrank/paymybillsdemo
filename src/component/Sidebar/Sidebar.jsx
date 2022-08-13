import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PaymentsIcon from '@mui/icons-material/Payments';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar--container">
      <div className="sidebar--container--header">
        <h1>PayMyBills</h1>
        <span className="sidebar--container--small--text">lorem </span>
      </div>
      <div className="sidebar--navcontainer">
        <ul>
          <li>
            <DashboardIcon className="nav--icon" />
            Dashboard
          </li>
          <li>
            <MiscellaneousServicesIcon className="nav--icon" />
            Services
          </li>
          <li>
            <PaymentsIcon className="nav--icon" />
            Transactions
          </li>
          <li>
            <AccountCircleIcon className="nav--icon" />
            Account
          </li>
          <li>
            <MiscellaneousServicesIcon className="nav--icon" />
            Settings
          </li>
        </ul>
      </div>
      <div className="navfooter--event">
        <p>
          <span className="bold">PayMyBills</span> Event
        </p>
      </div>
      <div className="navfooter--event--img">image is here</div>
      <>
        <span className="hover">
          <LogoutIcon className="nav--icon" />
          Log out
        </span>
      </>
    </div>
  );
};

export default Sidebar;
