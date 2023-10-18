import React from "react";
const Navbar = (props) => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/userList">
            {props.title}
          </a>


          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/userList">
                  UserList
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/adduser">
                  AddUser
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <h3 >Here in this project we are building a react app witch can add user in the firebase database </h3> */}
    </>
  );
};

export default Navbar;
