import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const navigate =useNavigate()
    const [createdata, setcreatedata] = useState({
      id: '',
      name: '',
      username: '',
      phone: '',
      email: '',
      website: '',
    });
    const handlechange = (e) => {
        const {name, value}= e.target
        setcreatedata((preData) => ({
          ...preData,
          [name]: value
        }));
      };
      const handlesubmit = async (e) => {
        e.preventDefault();
        await axios
          .post(`https://6688e24d0ea28ca88b864e7c.mockapi.io/api/users/`,createdata)
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
                value={createdata.id}
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
                value={createdata.name}
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
                value={createdata.username}
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
                value={createdata.phone}
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
                value={createdata.email}
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
                value={createdata.address}
                onChange={handlechange}
              />
            </label>
          </p>
          <br />
          <br />
          <p>
            <button className="btn btn-danger" type='submit'>
              Create
            </button>
          </p>
        </form>
      </div>
    );
};

export default Create;