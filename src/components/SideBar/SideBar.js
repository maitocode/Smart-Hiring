import React, { useEffect, useState } from "react";
import logo from "assets/images/logo_smd.svg";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "store/user";
import { useSelector } from "react-redux";
import { USER_ROLE } from "core/constants";

import "./SideBar.scss";

const first_menu_personal = [
  {
    label: "Profile creation",
    path: "/profile-creation",
    icon: "profile-creation"
  }
];

const first_menu_manage = [
  {
    label: "Profile creation",
    path: "/general-information",
    icon: "profile-creation"
  }
  // {
  //   label: "Project creation",
  //   path: "/project-first-creation",
  //   icon: "my-projects"
  // }
];

const menu_personal = [
  {
    label: "Explore projects",
    path: "/explore-projects?page=1&size=3",
    icon: "explore-projects"
  },
  {
    label: "My favorite",
    path: "/my-projects",
    icon: "my-projects"
  },
  {
    label: "My profile",
    path: `/my-profile/${JSON.parse(localStorage.getItem("user"))?.id}`,
    icon: "my-profile"
  },
  {
    label: "Messages",
    path: "/messages",
    icon: "messages"
  }
];

const menu_manage = [
  {
    label: "Manage projects",
    path: "/manage-projects",
    icon: "manage-projects"
  },
  {
    label: "View Profile",
    path: "/view-profile",
    icon: "my-profile"
  },
  {
    label: "Messages",
    path: "/messages",
    icon: "messages"
  }
];

const SideBar = () => {
  const history = useHistory();
  const [curentPath, setCurentPath] = useState("");
  const [show, setShow] = useState(false);
  const [menu, setMenu] = useState([]);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const onLogOut = () => {
    dispatch(logout());
  };

  useEffect(() => {
    let path = history?.location?.pathname;
    setCurentPath(path);

    let role = user?.roles[0];

    if (role == USER_ROLE.DEVELOP) {
      if (path == "/profile-creation") {
        setMenu(first_menu_personal);
      } else setMenu(menu_personal);
    } else {
      if (path == "/general-information" || path == "/project-first-creation") {
        setMenu(first_menu_manage);
      } else setMenu(menu_manage);
    }
  }, []);

  return (
    <div className="sidebar-wrapper">
      <p
        className={show ? "ic-menu-show" : "ic-menu"}
        onClick={() => {
          setShow(!show);
        }}
      >
        <i className="fas fa-bars"></i>
      </p>
      <nav className={show ? "showSidebar sidebar" : "sidebar"}>
        <div>
          <div className="sidebar-header">
            <img src={logo} alt="logo" />
          </div>
          <ul className="sidebar-list list-unstyled components">
            {menu?.map((item, key) => {
              return (
                <li
                  className={
                    curentPath == item.path
                      ? "sidebar-list-item active"
                      : "sidebar-list-item "
                  }
                  key={key}
                >
                  <Link to={item.path}>
                    <i className={item?.icon ? item.icon : ""} />
                    <span>{item?.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="sidebar-footer">
          <div className="d-flex align-items-center justify-content-between">
            <span className="mr-2 user-name">{user?.name?.toUpperCase()}</span>
            <i className="fas fa-sign-out-alt" onClick={() => onLogOut()}></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
