import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const AddDrugPageTable = () => {
    const [drugName, setDrugName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [expirationDate, setExpirationDate] = useState('');

    const navigate = useNavigate();

    const addDrug = async () => {
        const newDrug = { name: drugName, expiration: expirationDate, quantity };
        const response = await fetch('/drugs', {
            method: 'POST',
            body: JSON.stringify(newDrug),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.status === 201) {
            alert('Drug added successfully');
        } else {
            const errMessage = await response.json();
            alert(`Failed to add drug. Status code: ${response.status}. ${errMessage.Error}`);
        }
        navigate("/drugs");
    };

    return (
        <>
            <article>
                <h2>Add a Drug</h2>
                <p>Enter the details of the new drug.</p>
                <table id="drugs">
                    <caption>Drug Details</caption>
                    <thead>
                        <tr>
                            <th>Drug Name</th>
                            <th>Quantity</th>
                            <th>Expiration Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="drugName">Drug Name</label>
                                <input
                                    type="text"
                                    placeholder="Name of the drug"
                                    value={drugName}
                                    onChange={e => setDrugName(e.target.value)}
                                    id="drugName"
                                />
                            </td>
                            <td>
                                <label htmlFor="quantity">Quantity</label>
                                <input
                                    type="number"
                                    placeholder="Quantity"
                                    value={quantity}
                                    onChange={e => setQuantity(e.target.value)}
                                    id="quantity"
                                />
                            </td>
                            <td>
                                <label htmlFor="expirationDate">Expiration Date</label>
                                <input
                                    type="date"
                                    value={expirationDate}
                                    onChange={e => setExpirationDate(e.target.value)}
                                    id="expirationDate"
                                />
                            </td>
                            <td>
                                <label htmlFor="submit">Commit</label>
                                <button
                                    type="submit"
                                    onClick={addDrug}
                                    id="submit"
                                >Add</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );
};

export default AddDrugPageTable;
