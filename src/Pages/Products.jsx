import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = ({setId}) => {
  const [products, setProducts] =useState([]);
  const [deleteData,setDeleteData]=useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    fetchData();
  }, [deleteData]);
  const fetchData = async () => {
    await axios
      .get("https://6688e24d0ea28ca88b864e7c.mockapi.io/api/users")
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
  };
  const handleEdit=(id)=>{
 setId(id)
  navigate(`/edit/${id}`)
  }

  const handleDelete =async(id)=>{
   await axios
   .delete(`https://6688e24d0ea28ca88b864e7c.mockapi.io/api/users/${id}`)
   .then(()=>{
    setProducts(products.filter((ele)=>ele.id !==id))
   })
   .catch((error)=>console.log(error))
  }

  return (
    <div>
      <table className="table table-success">
        <thead>
          <tr>
            <th scope="col">Num</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Phone No</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col" colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((ele, index) => {
            return (
              <tr key={index}>
                <th scope="row">{ele.id}</th>
                <td>{ele.name}</td>
                <td>{ele.username}</td>
                <td>{ele.phone}</td>
                <td>{ele.email}</td>
                <td>{ele.address}</td>
                <td><button className="btn btn-primary" onClick={()=>{handleEdit(ele.id)}}>Edit</button></td>
                <td><button className="btn btn-danger" onClick={()=>{handleDelete(ele.id)}}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="btn btn-success mb-3" onClick={()=>{navigate('/create')}}>Create</button>
    </div>
  );
};

export default Products;
