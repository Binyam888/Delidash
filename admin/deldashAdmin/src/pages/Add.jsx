import React, { useState } from "react";
import { assets, url } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

function Add() {
  const [image, setImage] = useState("");
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const [error, setError] = useState({});

  const handleChange = (event) => {
    //destucturing name and value from target

    const { name, value } = event.target;
    // name is used to identify which feild is need to change based on that the inputed value will be added
    setData((data) => ({ ...data, [name]: value }));

    // validateForm()   real time form validation
  };

  const validateForm = () => {
    let newError = {}; // to store error

    // name
    if (!data.name) {
      newError.name = "Please enter the name";
    } else if (data.name.length < 3) {
      newError.name = "Name should be altleaste 4 letter";
    }

    // description

    if (!data.description) {
      newError.description = "Please provide the description";
    } else if (data.description.length < 10) {
      newError.description = "Description should be atleast 10 letters";
    }
    //price
    if (!data.price) {
      newError.price = "Please Enter the price";
    }
    // cetegory
    if (!data.category) {
      newError.category = "Please choose the category";
    }
    if (!image) {
      newError.image = "Image required";
    }

    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("image", image);

    if (validateForm()) {
      try {
        const response = await axios.post(`${url}/api/food/add`, formData);

        if (response.status === 200) {
          setData({
            name: "",
            description: "",
            price: "",
            category: "Salad",
          });
          setImage("");
          return toast.success(response.data.message);
        }
      } catch (error) {
        toast.error("error");
      }
    }
    toast.error("please fill all the area");
  };
  return (
    <div className="add w-[70%] ml-[5vw] mt-[50px] text-gray-400 text-[16px]">
      <form className="flx-col gap-[20px] " onSubmit={handleSubmit}>
        <div className="add-image flx-col">
          <p>Upload Image</p>
          {!image && <p className="text-red-500">{error.image}</p>}
          <label htmlFor="image">
            <img
              className="w-[120px]"
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="upload"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flx-col w-[40%] ">
          <p>Product Name</p>
          <input
            onChange={handleChange}
            className=" border focus:outline-none focus:shadow-outline py-[8px] px-[8px] rounded-md shadow outline-slate-300"
            type="text"
            name="name"
            value={data.name}
            placeholder="Type Here"
          />
          {error.name && <p className="text-red-500">{error.name}</p>}
        </div>
        <div className="product-discription flx-col w-[40%]">
          <p>Product description</p>
          <textarea
            onChange={handleChange}
            className="p-[10px] border rounded-md shadow focus:outline-none "
            value={data.description}
            name="description"
            rows={"6"}
            placeholder="Write content here"
          ></textarea>
          {error.description && (
            <p className="text-red-500">{error.description}</p>
          )}
        </div>
        <div className="flex gap-2 lg:w-[40%] ">
          <div className="catogoryprice flx-col ">
            <p>Product category</p>
            <select
              onChange={handleChange}
              className="border rounded-md p-[10px] focus:outline-none shadow max-w-[120px] "
              value={data.category}
              name="category"
              id=""
            >
              <option value="salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
            {error.category && <p className="text-red-500">{error.category}</p>}
          </div>
          <div className="price flx-col">
            <p>Product Price</p>
            <input
              onChange={handleChange}
              className="border p-[10px] rounded-md shadow focus:outline-none max-w-[120px] "
              value={data.price}
              type="number"
              name="price"
              placeholder="$30"
            />
            {error.price && <p className="text-red-500">{error.price}</p>}
          </div>
        </div>
        <button
          type="submit"
          className="add-buttn max-w-[120px] border-none p-[10px] bg-black text-white cursor-pointer rounded-md shadow "
        >
          ADD
        </button>
      </form>
    </div>
  );
}

export default Add;
