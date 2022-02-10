import axios from "axios";
import React, { useEffect, useState } from "react";
import * as Fi from "react-icons/fi";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("/category/");
      setCategories(res.data["msg"]);
      console.log(res.data["msg"]);
    };
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = categoryName;
    const newCategory = {
      name,
    };
    await axios.post("/category/create", newCategory);
    window.location.reload();
  };

  async function handleDelete(category_id) {
    console.log("/category/delete/" + category_id);
    await axios.delete("/category/delete/" + category_id);

    window.location.reload();
  }

  return (
    <>
      <div className="container dashboard-container p-4">
        <div className="database-info">
          <div className="p-2 count-box">
            <p>Categories Count</p>
            <h1>{categories.length}</h1>
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
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Category Name"
                          className="form-control"
                          onChange={(e) => setCategoryName(e.target.value)}
                        />
                      </div>
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary ml-5">
                          <Fi.FiPlus />
                        </button>
                      </div>
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
              {categories.map((category, index) => (
                <tr key={category._id}>
                  <th scope="row" style={{ fontWeight: 400 }}>
                    {index + 1}
                  </th>
                  <th style={{ fontWeight: 400 }}>{category.name}</th>
                  <td>
                    <button
                      type="submit"
                      className="btn btn-block btn-sm btn-outline-danger mt-1"
                      value={category._id}
                      onClick={() => handleDelete(category._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Categories;
