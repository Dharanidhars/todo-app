import React from 'react'
import './AddItem.css'
import { FaPlus } from "react-icons/fa";
import { useRef } from 'react';

const AddItem = ({newItem,setNewItem,handleSubmit}) => {
    const inputRef = useRef()
  return (
    <form className='addForm' onSubmit={handleSubmit} >
        <label htmlFor="addItem">Add Item</label>
        <input type="text"
            autoFocus
            id='addItem'
            placeholder='Add Item'
            required
            value={newItem}
            onChange={ (e)=> setNewItem(e.target.value) }
            ref={inputRef}
        />
        <button type='submit'
            aria-label='Add Item'
            onClick={()=> inputRef.current.focus()}
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default AddItem