import axios from "axios";
import React, { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("/category/");
      setCategories(res.data["msg"]);
      console.log(res);
    };
    fetchCategories();
  }, []);

  return (
    <>
      <div className="container dashboard-container p-4">
        <div className="database-info">
          <div className="p-2 count-box">
            <p>Categories Count</p>
            <h1>5</h1>
          </div>
        </div>
        <div className="category-list mt-5">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3>Listed Categories</h3>
            {/* Trigger Modal */}
            <a
              className="btn btn-outline-success btn-add-product"
              data-toggle="modal"
              data-target="#addModal"
            >
              Add Category
            </a>
            {/* Modal */}
            <div
              className="modal fade"
              id="addModal"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="addModal"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="documnet">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="addModal">
                      Add Categories
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form action="">
                      <input type="text" name="" id="" placeholder="Category" />
                      <input
                        type="submit"
                        className="btn btbn-primary"
                        name="add_product"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <table className="table table-hover mt-3 products-table">
            <thead>
              <tr>
                <th scope="col">Category ID</th>
                <th scope="col">Category Name</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" style={{ fontWeight: 400 }}>
                  Category ID
                </th>
                <th style={{ fontWeight: 400 }}>Category Name</th>
                <td>
                  <input
                    type="submit"
                    className="btn btn-block btn-sm btn-outline-danger mt-1"
                    name="remove_product"
                    value="Delete"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Categories;
