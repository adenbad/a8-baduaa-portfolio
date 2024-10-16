import React from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

const DrugList = ({ drugs, onEdit, onDelete }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Drug Name</th>
                    <th>Quantity</th>
                    <th>Expiration Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {drugs.length > 0 ? (
                    drugs.map((drug, index) => (
                        <tr key={index}>
                            <td>{drug.name}</td>
                            <td>{drug.quantity}</td>
                            <td>{new Date(drug.expiration).toLocaleDateString()}</td>
                            <td>
                                <AiFillEdit onClick={() => onEdit(drug)} />
                                <AiFillDelete onClick={() => onDelete(drug._id)} />
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4">No drugs available</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default DrugList;
