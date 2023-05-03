import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Update = () => {
    const [book, setBook] = useState({
        title: "",
        description: "",
        price: null,
        cover: "",
    });
    const navigate = useNavigate();
    const params = useParams();
    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8800/books/${params.id}`, book);
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div className='form'>
            <h1>Update Book</h1>
            <input
                type='text'
                placeholder='title'
                onChange={handleChange}
                name='title'
            />
            <input
                type='text'
                placeholder='description'
                onChange={handleChange}
                name='description'
            />
            <input
                type='number'
                placeholder='price'
                onChange={handleChange}
                name='price'
            />
            <input
                type='text'
                placeholder='cover'
                onChange={handleChange}
                name='cover'
            />
            <button className='formButton' onClick={handleClick}>
                Update
            </button>
        </div>
    );
};

export default Update;
