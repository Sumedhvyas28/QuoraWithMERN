import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import {
  AssignmentTurnedInOutlined,
  NotificationsOutlined,
  PeopleAltOutlined,
  Search,
} from "@mui/icons-material";
import { Modal } from 'react-responsive-modal';
import { Avatar,Button } from "@mui/material";
import './css/QuoraHeader.css';

function QuoraHeader() {

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  
  return (
    <div className="qHeader">
      <div className="qHeader-content">
        <div className="qHeader__logo">
          <img
            src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif"
            alt="logo"
          />
        </div>
        <div className="qHeader__icons">
          <div className="qHeader__icon">
            <HomeIcon />{" "}
          </div>
          <div className="qHeader__icon">
            <FeaturedPlayListOutlinedIcon />{" "}
          </div>
          <div className="qHeader__icon">
            <AssignmentTurnedInOutlined />{" "}
          </div>
          <div className="qHeader__icon">
            <PeopleAltOutlined />{" "}
          </div>
          <div className="qHeader__icon">
            <NotificationsOutlined />{" "}
          </div>
        </div>
        <div className="qHeader__input">
          <Search />
          <input type={"text"} placeholder="Search quora"></input>
        </div>
        <div className="qHeader__Rem">
          <Avatar />
        </div>
        <Button onClick={onOpenModal}  >Add a question</Button>
        <Modal open={open} onClose={onCloseModal} center>
        <h2>Simple centered modal</h2>
      </Modal>
      </div>
    </div>
  );
}

export default QuoraHeader;