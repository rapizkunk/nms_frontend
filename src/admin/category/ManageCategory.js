import React, { useEffect, useState } from "react";
import { Drawer, Card, Table } from "antd";

import { Link } from "react-router-dom";

import { isAuthenticated } from "../../auth";
import { getCategories, deleteCategory } from "../apiAdmin";
import "../Menu/ManageStyle.css";
import AddCategory from "./AddCategory";

const ManageCategory = () => {
  const [categories, setCategories] = useState([]);

  const { user, token } = isAuthenticated();

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const loadCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  const delCategory = (categoryId) => {
    deleteCategory(categoryId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        loadCategories();
      }
    });
  };

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      width: 150,
    },
    {
      title: "Name",
      dataIndex: "name",
      width: 150,
    },
    {
      title: "manage",
      dataIndex: "manage",
      width: 150,
    },
  ];

  const tableData = [];
  {
    categories.map((data, index) => {
      tableData.push({
        key: index,
        id: `${data._id}`,
        name: `${data.name}`,
        manage: (
          <>
            <Link to={`/Manage/category/update/${data._id}`}>
              <span
                type="button"
                className="btn btn-primary"
                style={{ marginRight: 10 }}
              >
                Edit
              </span>
            </Link>
            <button
              onClick={() => delCategory(data._id)}
              type="button"
              className="btn btn-danger"
            >
              Delete
            </button>
          </>
        ),
      });
    });
  }

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <div>
      <Drawer
        title="Category"
        placement="right"
        closeable={false}
        onClose={onClose}
        visible={visible}
        getContainer={false}
        store={{ position: "absolute" }}
      >
        <div>
          <AddCategory />
        </div>
      </Drawer>
      <Card
        title={`Total ${categories.length} Categories`}
        extra={
          <div style={{ margin: 10 }}>
            <span
              type="button"
              className="btn btn-outline-success"
              style={{ marginLeft: 10 }}
              onClick={showDrawer}
            >
              Add Category
            </span>
          </div>
        }
        style={{ borderColor: "#eee", borderRadius: 30, margin: 10 }}
      >
        <Table
          columns={columns}
          dataSource={tableData}
          pagination={{ pageSize: 5 }}
          style={{ margin: 5 }}
        />
      </Card>
    </div>
  );
};

export default ManageCategory;
