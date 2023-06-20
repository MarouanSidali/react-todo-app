import React from 'react'
import { useState } from "react";

const Form = ({onSubmit}) => {
  const [newItem, setNewItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem === "") return
    onSubmit(newItem)
    
    setNewItem('')
  };
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New item</label>
          <input
            type="text"
            id="item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            required
          />
        </div>
        <button className="btn"> Add</button>
      </form>
  )
}

export default Form