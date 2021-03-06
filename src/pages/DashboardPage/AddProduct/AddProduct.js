import React from "react";
import { useForm } from "react-hook-form";

import "./AddProduct.css";

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {

        const uri = `https://still-inlet-59665.herokuapp.com/products`;
        fetch(uri, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert("added drone successfully");
                    reset();
                }
            });
    };
    return (
        <div className="add-services">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-50 mx-auto for-shadow py-3"
            >
                <h2 className="text-center">Add a Car</h2>
                <input
                    {...register("name", {
                        required: true,
                        maxLength: 50,
                    })}
                    placeholder="Place Name"
                    required
                />
                <textarea
                    {...register("description")}
                    placeholder="Place description"
                    required
                />
                <input
                    type="number"
                    {...register("price")}
                    placeholder="Price"
                    required
                />
                <input {...register("img")} placeholder="Image Url" required />

                <input type="submit" value="submit" className="submit-form" />
            </form>
        </div>
    );
};

export default AddProduct;
