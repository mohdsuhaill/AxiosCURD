import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get("https://6688e24d0ea28ca88b864e7c.mockapi.io/api/users")
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {products.map((element, index) => {
          return (
            <div key={index}>
              <div className="col">
                <div className="card">
                  <div className="card-header">
                    <h1>{element.id}</h1>
                    <h1>{element.name}</h1>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{element.username}</h5>
                    <h5 className="card-title">{element.email}</h5>
                    <p className="card-tect"> ph.{element.phone}</p>
                    <p>
                      <h5>Address: {element.address}</h5>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
