import React from "react";
import { Card, Row, Col } from "antd";
import { Link } from "react-router-dom";

import MenuFood from "../image/Menu.png";
import Promotion from "../image/tag.png";
import Table from "../image/chair.png";
import Report from "../image/dashboard.png";
import Staff from "../image/user.png";
import Guide from "../image/guide.png";

import MangeCetagories from "./category/ManageCategory";
import ManageStaff from "./user/ManageUser";
import ManageMenu from "./Menu/ManageProduct";

const AdminPage = () => {
  const Rowler = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  };

  const card = {
    width: 200,
    height: 230,
    textAlign: "center",
    borderRadius: "40px",
    border: "1px solid",
    margin: "10px",
  };

  const Allmenu = () => (
    <>
      <div className="row" style={Rowler}>
        <div>
          <Link to="/admin/product">
            <Card style={card}>
              <img className="d-block w-100" src={MenuFood} alt="First slide" />
              <h5>Catagory & Menu</h5>
            </Card>
          </Link>
        </div>

        <div>
          <Link to="/signup">
            <Card style={card}>
              <img className="d-block w-100" src={Table} alt="First slide" />
              <h5>table</h5>
            </Card>
          </Link>
        </div>

        <div>
          <Card style={card}>
            <img className="d-block w-100" src={Promotion} alt="First slide" />
            <Link to="/Menu">
              <h5>Promotion</h5>
            </Link>
          </Card>
        </div>
      </div>

      <div className="row" style={Rowler}>
        <div>
          <Link to="/users">
            <Card style={card}>
              <img className="d-block w-100" src={Staff} alt="First slide" />
              <h5>Staff</h5>
            </Card>
          </Link>
        </div>

        <div>
          <Link to="/create/product">
            <Card style={card}>
              <img className="d-block w-100" src={Report} alt="First slide" />
              <h5>Report</h5>
            </Card>
          </Link>
        </div>

        <div>
          <Link to="/create/product">
            <Card style={card}>
              <img className="d-block w-100" src={Guide} alt="First slide" />
              <h5>Guide</h5>
            </Card>
          </Link>
        </div>
      </div>
    </>
  );

  return (
    <div>
      <Row>
        <Col>
          <Card style={{ borderRadius: 10, width: "auto" , margin:10}}>
            <h5>ยอดขายรายวัน</h5>
            <p>0</p>
          </Card>
        </Col>

        <Col>
          <Card style={{ borderRadius: 10, width: "auto", margin:10  }}>
            <h5>ยอดขายรายเดือน</h5>
            <p>0</p>
          </Card>
        </Col>

        <Col>
          <Card style={{ borderRadius: 10, width: "auto", margin:10  }}>
            <h5>ยอดขายรายปี</h5>
            <p>0</p>
          </Card>
        </Col>
      </Row>

      <MangeCetagories />
      <ManageMenu />
      <ManageStaff />
    </div>
  );
};

export default AdminPage;
