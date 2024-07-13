import React, { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../assets/assets";
import { toast } from "react-toastify";
function List() {
  const [item, setItem] = useState([]);

  const fechData = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      console.log(response);
      if (response.status === 200) {
        return setItem(response.data.data);
      }
    } catch (e) {
      console.log(e);
      toast.error(e.message);
    }
  };
  useEffect(() => {
    fechData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const deleteId = id;
      const deleteItem = await axios.delete(
        `${url}/api/food/delete/` + deleteId
      );
      fechData();
      // alert(`you are delted the item for ${deleteId}`);
      toast.success("Item Deleted Sucessfully")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="tabl px-[20px]">
      <h1 className="font-bold my-[10px]">All Food List</h1>
      <table className="min-w-full bg-white border-[2px] border-gray-300">
        <thead>
          <tr className="bg-gray-100 ">
            <th className="py-2 px-4 border-b border-r-[3px]">Image</th>
            <th className="py-2 px-4 border-b border-r-[3px]">Name</th>
            <th className="py-2 px-4 border-b border-r-[3px]">Category</th>
            <th className="py-2 px-4 border-b border-r-[3px]">Price</th>
            <th className="py-2 px-4 border-b ">Action</th>
          </tr>
        </thead>
        <tbody>
          {item.map((item, index) => {
            return (
              <tr className="border-b-2" key={index + 1}>
                <td className="border-r-[3px] p-[5px] px-[8px]">
                  {
                    <img
                      src={`${url}/images/` + item.image}
                      alt=""
                      className="w-[50px]"
                    />
                  }
                </td>
                <td className="border-r-[3px] p-[3px] px-[8px]">{item.name}</td>
                <td className="border-r-[3px] p-[3px] px-[8px]">
                  {item.category}
                </td>

                <td className="border-r-[3px] p-[3px] px-[8px]">
                  {item.price}
                </td>
                <td className="border-r-[0] p-[3px] px-[8px]">
                  <button onClick={() => handleDelete(item._id)}>x</button>
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
