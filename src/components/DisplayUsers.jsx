import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/UserSlice';
export const DisplayUsers = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => {
        return state.user;
    });
    console.log(data,"display users");

    const deleteUser = (id) => {
        dispatch(removeUser(id))
    }

    console.log(data);
    return (
        <div>{data.map((item, id) => {
            return (
                <li key={item.id}>
                    {item}
                    <button onClick={() => deleteUser(id)}>x</button>
                </li>
            )
        })}</div>
    )
}
