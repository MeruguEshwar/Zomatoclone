import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Autherization from "../Service/Autherization";
import { useParams } from "react-router-dom";

function Update(props) {
  const [productId, setproductId] = useState();
  const [productName, setproductName] = useState();
  const [productprice, setproductprice] = useState();
  const [user, setuser] = useState([]);

  let navigate = useNavigate();
  let params = useParams();

  let updateUser = {
    productId: productId,
    productName: productName,
    productprice: productprice,
  };

  const updateProduct = (e) => {
    e.preventDefault();
    Autherization.UpdateUser(updateUser).then((res) => {
      console.log("update" + res.data);
    });
  };

  useEffect(() => {
    Autherization.getByProductid(params.productId).then((res) => {
      setproductId(res.data.productId);
      setproductName(res.data.productName);
      setproductprice(res.data.productprice);
    });
  }, []);

  return (
    <div className="container">
      <div
        className="card text-bg-light mt-4"
        style={{ maxWidth: "35rem" }}
        id="logincard"
      >
        <div className="card-header text-center">Update Product</div>
        <div className="card-body">
          <div className="mb-3">
            <label
              htmlFor="formGroupExampleInput"
              className="form-label float-start"
            >
              Enter your productId:
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              value={productId}
              onChange={(e) => setproductId(e.target.value)}
              placeholder="Enter your productId"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="formGroupExampleInput2"
              className="form-label float-start"
            >
              Enter Your productName:
            </label>
            <input
              type="productName"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Enter your productName"
              value={productName}
              onChange={e => setproductName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="formGroupExampleInput2"
              className="form-label float-start"
            >
              Enter Your productprice:
            </label>
            <input
              type="productprice"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Enter your productprice"
              value={productprice}
              onChange={e => setproductprice(e.target.value)}
            />
          </div>
          <div className="col-12 d-flex justify-content-between">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={updateProduct}
            >
              Update
            </button>
            {/* <button className="btn btn-primary" onClick={forgot}>
              Forgot Password
            </button> */}
          </div>
        </div>
        <div className="card-footer text-muted text-center">
          Design & Developed By Eshwar Merugu
        </div>
      </div>
    </div>
  );
}

export default Update;
