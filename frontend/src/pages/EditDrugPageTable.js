import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export const EditDrugPageTable = ({ drugToEdit }) => {
    const [drugName, setDrugName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [expirationDate, setExpirationDate] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (drugToEdit) {
            setDrugName(drugToEdit.name || '');
            setQuantity(drugToEdit.quantity || '');
            setExpirationDate(drugToEdit.expiration ? drugToEdit.expiration.slice(0, 10) : '');
        }
    }, [drugToEdit]);

    const editDrug = async () => {
        if (!drugToEdit || !drugToEdit._id) {
            console.error("Drug to edit is not defined");
            return;
        }

        const response = await fetch(`/drugs/${drugToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ name: drugName, expiration: expirationDate, quantity }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.status === 200) {
            alert('Drug updated successfully');
        } else {
            const errMessage = await response.json();
            alert(`Failed to update drug. Status code: ${response.status}. ${errMessage.Error}`);
        }
        navigate("/drugs");
    }

    if (!drugToEdit) {
        return <p>Loading...</p>; // Show loading state if drugToEdit is not available
    }

    return (
        <>
            <article>
                <h2>Edit a Drug</h2>
                <p>Edit the details of the selected drug.</p>
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
                                    onClick={editDrug}
                                    id="submit"
                                >Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );
};

export default EditDrugPageTable;
