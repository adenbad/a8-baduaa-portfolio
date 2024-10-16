import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DrugList from '../components/DrugList';
import { Link } from 'react-router-dom';

function DrugsPage({ setDrug }) {
    // Use the Navigate for redirection
    const navigate = useNavigate();

    // Use state to bring in the data
    const [drugs, setDrugs] = useState([]);

    // RETRIEVE the entire list of drugs
    const loadDrugs = async () => {
        const response = await fetch('/drugs');
        const drugs = await response.json();
        setDrugs(drugs);
    }

    // UPDATE a single drug
    const onEditDrug = (drug) => {
        setDrug(drug);
        navigate("/update");
    }

    // DELETE a single drug  
    const onDeleteDrug = async (_id) => {
        const response = await fetch(`/drugs/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            loadDrugs();
        } else {
            console.error(`Failed to delete drug with id = ${_id}, status code = ${response.status}`);
        }
    }

    // LOAD all the drugs
    useEffect(() => {
        loadDrugs();
    }, []);

    // DISPLAY the drugs
    return (
        <>
            <h2>List of Drugs</h2>
            <p>Paragraph about this page.</p>
            <Link to="/create">Add Drug</Link>
            <DrugList 
                drugs={drugs} 
                onEdit={onEditDrug} 
                onDelete={onDeleteDrug} 
            />
        </>
    );
}

export default DrugsPage;
