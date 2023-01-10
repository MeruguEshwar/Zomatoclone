import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Autherization from "../Service/Autherization";

function List() {
  const [students, setStudents] = useState([]);

  const navigate = useNavigate();

  const getAllStudents = async () => {
    const arrdata = await Autherization.getAllusers();
    setStudents(arrdata.data);
  };

  useEffect(() => {
    getAllStudents();
  }, []);

  const editstudent = (productId) => {
    // alert("hi...");
    navigate(`/update/${productId}`);
  };

  const deleteData = async (productId) => {
    alert("delete"+`${productId}`);
    await Autherization.deleteuser(productId);
    getAllStudents(); //to c remaining records..
  };

  return (
    <div className="container">
      <h1>Product List</h1>
      <table className="table table-striped border border-1">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th colSpan={"2"}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((std) => {
            return (
              <tr key={std.productId}>
                <td>{std.productId}</td>
                <td>{std.productName}</td>
                <td>{std.productprice}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => editstudent(std.productId)}
                  >
                    edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteData(std.productId)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default List;
