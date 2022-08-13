import { CardBox } from '../CardBox/CardBox';
import './Rightbar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PaymentsIcon from '@mui/icons-material/Payments';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import profile from '../../avatar1.png';
import Piechart from '../Piechart/Piechart';

const Rightbar = () => {
  return (
    <div className="rightbar--container">
      <div className="rightbar--container--top">
        <p className="rightbar--marginleft ">#500.00 </p>
        <p className="rightbar--marginleft">
          <PaymentsIcon />
        </p>
        <img src={profile} alt="profile" className="rightbar--marginleft" />
      </div>
      <div className="rightbar--center">
        <p className="top--text">Total Spending ...</p>
        <p className="middle--text">N 1, 000, 000</p>
        <p className="bottom--text">12 Months</p>
      </div>
      <div className="rightbar--center--chart">
        <Piechart />
      </div>
      <div className="rightbar--center--footer">
        <strong>Today</strong>
        <div className="rightbar--center--footer--body">
          <p className="icon--circle">icon</p>
          <div>
            <strong>Airtime</strong>
            <p>6 transactions</p>
          </div>
          <strong>N 10.506</strong>
          <p>right arrow icon</p>
        </div>
      </div>
      <div>
        <strong>Yesterday</strong>
        <div>
          <CardBox />
          <CardBox />
          <CardBox />
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
