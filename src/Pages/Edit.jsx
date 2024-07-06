import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Edit = ({ id }) => {
    const navigate =useNavigate()
  const [editdata, seteditdata] = useState({
    id: '',
    name: '',
    username: '',
    phone: '',
    email: '',
    website: '',
  });
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get(`https://6688e24d0ea28ca88b864e7c.mockapi.io/api/users/${id}`)
      .then((res) => seteditdata(res.data))
      .catch((error) => console.log(error));
  };
  const handlechange = (e) => {
    const {name, value}= e.target
    seteditdata((preData) => ({
      ...preData,
      [name]: value
    }));
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(`https://6688e24d0ea28ca88b864e7c.mockapi.io/api/users/${id}`,editdata)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));

      navigate('/products')
  };
  return (
    <div className="m-5">
      <form onSubmit={handlesubmit}>
        <p>
          <label>
            Id:
            <input
              className="form-control"
              type="text"
              name="id"
              value={editdata.id}
              onChange={handlechange}
            />
          </label>
        </p>
        <br />
        <br />
        <p>
          <label>
            Name
            <input
             className="form-control"
              type="text"
              name="name"
              value={editdata.name}
              onChange={handlechange}
            />
          </label>
        </p>
        <br />
        <br />
        <p>
          <label>
            UserName
            <input
             className="form-control"
              type="text"
              name="username"
              value={editdata.username}
              onChange={handlechange}
            />
          </label>
        </p>
        <br />
        <br />
        <p>
          <label>
            Phone No
            <input
             className="form-control"
              type="text"
              name="phone"
              value={editdata.phone}
              onChange={handlechange}
            />
          </label>
        </p>
        <br />
        <br />
        <p>
          <label>
            Email
            <input
             className="form-control"
              type="text"
              name="email"
              value={editdata.email}
              onChange={handlechange}
            />
          </label>
        </p>
        <br />
        <br />
        <p>
          <label>
            Address
            <input
             className="form-control"
              type="text"
              name="website"
              value={editdata.address}
              onChange={handlechange}
            />
          </label>
        </p>
        <br />
        <br />
        <p>
          <button className="btn btn-danger" type='submit'>
            update
          </button>
        </p>
      </form>
    </div>
  );
};

export default Edit;
