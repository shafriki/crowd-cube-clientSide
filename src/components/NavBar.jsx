import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import logo from '../assets/crowd.png';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleToggle = (e) => {
    setTheme(e.target.checked ? 'dark' : 'light');
  };

  const links = (
    <>
      <NavLink to="/home" className={({ isActive }) => isActive ? 'font-bold text-[#E74C3C]' : 'text-[#ECF0F1]' }> Home </NavLink>
      
      <NavLink to="/allcampaign" className={({ isActive }) => isActive ? 'font-bold text-[#E74C3C]' : 'text-[#ECF0F1]'}> All Campaign </NavLink>
      
      <NavLink to="/addCampaign" className={({ isActive }) =>isActive ? 'font-bold text-[#E74C3C]' : 'text-[#ECF0F1]'}>Add New Campaign</NavLink>
      
      {user && (
        <NavLink to={`/myCampaign/${user.email}`} className={({ isActive }) => isActive ? 'font-bold text-[#E74C3C]' : 'text-[#ECF0F1]'}> My Campaign
        </NavLink>
      )}

      <NavLink to="/donation" className={({ isActive }) => isActive ? 'font-bold text-[#E74C3C]' : 'text-[#ECF0F1]'}>My Donations
      </NavLink>
    </>
  );

  const handleLogOut = async () => {
    await logOut();
    navigate('/home');
  };

  return (
    <div className="bg-[#1B3D2F] text-[#ECF0F1] py-1 sticky top-0 z-50 backdrop-blur opacity-90">

      <div className="navbar max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#1B3D2F] rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <img src={logo} alt="CrowdCube Logo" className="w-5 md:w-10" />
          <a className="md:text-xl">CrowdCube</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-12">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
        <label className="cursor-pointer grid place-items-center">
  <input type="checkbox" onChange={handleToggle} checked={theme === "dark"}value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  
  <svg
    className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>

  <svg
    className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>

</label>

          {!user ? (
            <>
              <Link to="/login" className="btn text-xs md:text-base" id="login">
                Login
              </Link>

              <Link to="/register" className="btn text-xs md:text-base" id="register">Register
              </Link>
            </>
          ) : (
            <div className="relative group">
              <img src={user?.photoURL || '/default-avatar.png'} alt="User"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#E74C3C] object-cover cursor-pointer" title={user?.displayName || 'User'}/>

              <div className="absolute z-50 hidden group-hover:block backdrop-blur opacity-90 bg-gray-600 text-[#ECF0F1] p-3 rounded shadow-xl"
              style={{ top: '110%', right: 0, minWidth: '150px' }}>
                
              <p className="text-xs md:text-sm text-white text-center font-bold truncate">{user?.displayName || 'User'}
              </p>

              <button onClick={handleLogOut} className="btn border-none btn-sm text-xs mt-2 w-full bg-[#E74C3C] hover:bg-[#C0392B] text-white">
              Log out</button>
              </div>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default NavBar;
