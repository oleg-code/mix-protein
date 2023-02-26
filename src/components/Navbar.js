import React, { useState } from "react";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import Modal from "./Modal";

const Navbar = ({ navbarLinks }) => {
  const [menuClicked, setMenuClicked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  const openModal = (url) => {
    setModalOpen(true);
    console.log(`Opening modal for ${url}`);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <nav className="navbar">
      <span className="navbar__logo">pink mandarin</span>
      {menuClicked ? (
        <FiX size={25} className={"navbar__menu"} onClick={toggleMenuClick} />
      ) : (
        <FiMenu
          size={25}
          className={"navbar__menu"}
          onClick={toggleMenuClick}
        />
      )}
      <ul
        className={
          menuClicked ? "navbar__list navbar__list--active" : "navbar__list"
        }
      >
        {navbarLinks.map((item, index) => {
          return (
            <li className="navbar__item" key={index}>
              <a
                className="navbar__link"
                href={item.url}
                onClick={() => openModal(item.url)}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      {modalOpen && <Modal onClose={closeModal} />}
    </nav>
  );
};

export default Navbar;





