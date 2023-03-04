import React from 'react'
import { useDispatch } from 'react-redux';
import { DeleteAllUser } from '../store/UserSlice';

const DeleteAllUsers = () => {
  const dispatch = useDispatch();
  const removeAll = ()=>{
    dispatch(DeleteAllUser());
  }
  return (
    <div>
      <button onClick={()=> removeAll()}>Delete All</button>
    </div>
  )
}

export default DeleteAllUsers