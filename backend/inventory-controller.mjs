import 'dotenv/config';
import express from 'express';
import * as drugs from './inventory-model.mjs';

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.post('/drugs', (req, res) => {
    const { name, expiration, quantity } = req.body;
    drugs.createDrug(name, expiration, quantity)
        .then(drug => {
            console.log(`"${drug.name}" was added to the collection.`);
            res.status(201).json(drug);
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Error occurred while adding the drug to the collection.' });
        });
});

app.get('/drugs', (req, res) => {
    drugs.retrieveDrugs()
        .then(drugs => {
            if (drugs.length > 0) {
                console.log('All drugs were retrieved from the collection.');
                res.status(200).json(drugs);
            } else {
                res.status(404).json({ Error: 'No drugs found in the collection.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Error occurred while retrieving the drugs from the collection.' });
        });
});

app.get('/drugs/:_id', (req, res) => {
    drugs.retrieveDrugByID(req.params._id)
        .then(drug => {
            if (drug) {
                console.log(`"${drug.name}" was retrieved based on its ID.`);
                res.status(200).json(drug);
            } else {
                res.status(404).json({ Error: 'No drug found with the provided ID.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Error occurred while retrieving the drug by ID.' });
        });
});

app.put('/drugs/:_id', (req, res) => {
    const { name, expiration, quantity } = req.body;
    drugs.updateDrug(req.params._id, name, expiration, quantity)
        .then(drug => {
            if (drug) {
                console.log(`"${drug.name}" was updated.`);
                res.status(200).json(drug);
            } else {
                res.status(404).json({ Error: 'No drug found with the provided ID.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Error occurred while updating the drug.' });
        });
});

app.delete('/drugs/:_id', (req, res) => {
    drugs.deleteDrugById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Drug with ID ${req.params._id} was deleted.`);
                res.status(200).json({ Success: 'The drug was successfully deleted.' });
            } else {
                res.status(404).json({ Error: 'No drug found with the provided ID to delete.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Error occurred while deleting the drug.' });
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
