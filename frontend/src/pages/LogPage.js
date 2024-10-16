import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DrugList from '../components/DrugList';
import { AiOutlinePlus } from 'react-icons/ai'; // Import the add icon

function LogPage({ setDrugToEdit }) {
    const navigate = useNavigate();
    const [drugs, setDrugs] = useState([]); // Initialize as an empty array

    // Function to load drugs from the backend
    const loadDrugs = async () => {
        try {
            const response = await fetch('/drugs');
            if (response.ok) {
                const drugs = await response.json();
                if (Array.isArray(drugs)) {
                    setDrugs(drugs);
                } else {
                    console.error('Fetched data is not an array');
                }
            } else {
                console.error('Failed to fetch drugs:', response.status);
            }
        } catch (error) {
            console.error('Error fetching drugs:', error);
        }
    }

    // Function to handle editing a drug
    const onEditDrug = (drug) => {
        setDrugToEdit(drug);
        navigate("/update");
    }

    // Function to handle deleting a drug
    const onDeleteDrug = async (_id) => {
        const response = await fetch(`/drugs/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            // Update the state by filtering out the deleted drug
            setDrugs(drugs.filter(drug => drug._id !== _id));
        } else {
            console.error(`Failed to delete drug with id = ${_id}, status code = ${response.status}`);
        }
    }

    // Load drugs when the component mounts
    useEffect(() => {
        loadDrugs();
    }, []);

    return (
        <>
            <h2>Drug Log</h2>
            <p>Manage your drug collection.</p>
            <div className="add-drug-button">
                <AiOutlinePlus size={30} onClick={() => navigate("/create")} title="Add Drug" />
            </div>
            <DrugList 
                drugs={drugs} 
                onEdit={onEditDrug} 
                onDelete={onDeleteDrug} 
            />
        </>
    );
}

export default LogPage;
