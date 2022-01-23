import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import * as Bs from "react-icons/bs";
import * as Fi from "react-icons/fi";
import userimg from "../assets/images/login.png";
import background from "../assets/images/dummy_img.jpg";

const Post = () => {
  const location = useLocation();
  console.log(location.pathname.split("/")[2]);
  return (
    <>
      <div className="container-fluid p-5">
        <div
          className="text-center text-white p-3"
          style={{
            backgroundImage: `url(${background})`,
            opacity: "0.5",
            borderRadius: "10px",
          }}
        >
          <Dropdown className="post-dropdown">
            <Dropdown.Toggle variant="link" bsPrefix="p-0">
              <Bs.BsThreeDots />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="#">
                  <Fi.FiEdit3 />
                  Edit
                </Link>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                <Link to="#">
                  <Fi.FiTrash />
                  Delete
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <p>MUSIC</p>
          <h1>React</h1>
          <div>
            <img src={userimg} alt="" className="post-user-image" />
            <p>Bibek Ghimire</p>
            <p>2:30 Thursday</p>
          </div>
        </div>
        <div className="px-4 py-5 post-desc-cont">
          <img src={background} alt="" className="post-img-main" />
          <p className="px-5 post-desc-main font-serifpp">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            expedita sunt est pariatur assumenda minus et vel. Corrupti aliquam
            cumque magni similique delectus libero mollitia accusantium commodi
            blanditiis! Libero, voluptas! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Fuga expedita sunt est pariatur assumenda minus et
            vel. Corrupti aliquam cumque magni similique delectus libero
            mollitia accusantium commodi blanditiis! Libero, voluptas! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Fuga expedita
            sunt est pariatur assumenda minus et vel. Corrupti aliquam cumque
            magni similique delectus libero mollitia accusantium commodi
            blanditiis! Libero, voluptas!
          </p>
        </div>
      </div>
    </>
  );
};

export default Post;
