import React, { useState } from "react";
import { assets } from "../assets/assets";

function Add() {
  const[image, setImage] = useState("");
  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(image)
  }
  return (
    <div className="add w-[70%] ml-[5vw] mt-[50px] text-gray-400 text-[16px]">
      <form className="flx-col gap-[20px] ">
        <div className="add-image flx-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img className="w-[120px]" src={image? URL.createObjectURL(image):assets.upload_area} alt="upload" />
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
            className=" border focus:outline-none focus:shadow-outline py-[8px] px-[8px] rounded-md shadow outline-slate-300"
            type="text"
            name="name"
            placeholder="Type Here"
          />
        </div>
        <div className="product-discription flx-col w-[40%]">
          <p>Product discription</p>
          <textarea
            className="p-[10px] border rounded-md shadow focus:outline-none "
            name="description"
            rows={"6"}
            placeholder="Write content here"
          ></textarea>
        </div>
        <div className="flex gap-2 w-[40%] ">
          <div className="catogoryprice flx-col ">
            <p>Product category</p>
            <select
              className="border rounded-md p-[10px] focus:outline-none shadow max-w-[120px] "
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
          </div>
          <div className="price flx-col">
            <p>Product Price</p>
            <input
              className="border p-[10px] rounded-md shadow focus:outline-none max-w-[120px] "
              type="number"
              name="price"
              placeholder="$30"
            />
          </div>
        </div>
        <button
          onClick={handleSubmit}
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
