import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";

export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    maxPrice,
    minPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

  // Get all unique values
  const getUnique = (items, value) => {
    return [...new Set(items.map((item) => item[value]))];
  };

  // Get Unique types
  let types = getUnique(rooms, "type");

  // Add all
  types = ["all", ...types];

  // map to jsx
  types = types.map((item, index) => (
    <option value={item} key={index}>
      {item}
    </option>
  ));

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/*select type*/}
        {/*end select type*/}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            onChange={handleChange}
            className="form-control"
          >
            {types}
          </select>
          <option value="single">single</option>
        </div>
      </form>
    </section>
  );
}
