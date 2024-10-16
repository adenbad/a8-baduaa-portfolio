import mongoose from 'mongoose';
import 'dotenv/config';

// Use the connection string from the .env file
const MONGODB_CONNECT_STRING = process.env.MONGODB_CONNECT_STRING;

if (!MONGODB_CONNECT_STRING) {
    throw new Error('MONGODB_CONNECT_STRING is not defined in .env file');
}

mongoose.connect(MONGODB_CONNECT_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once("open", () => {
    console.log('Success: Connected to the MongoDB server.');
});

db.on('error', (err) => {
    console.error('Error: Connection to the MongoDB server failed.', err);
});

// SCHEMA: Define the collection's schema.
const drugSchema = new mongoose.Schema({
    name: { type: String, required: true },
    expiration: { type: Date, required: true },
    quantity: { type: Number, required: true, min: 0 }
});

// Compile the model from the schema
const Drug = mongoose.model('Drug', drugSchema);

// CREATE model *****************************************
const createDrug = async (name, expiration, quantity) => {
    const drug = new Drug({ name, expiration, quantity });
    return drug.save();
}

// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveDrugs = async () => {
    return Drug.find().exec();
}

// RETRIEVE by ID
const retrieveDrugByID = async (_id) => {
    return Drug.findById(_id).exec();
}

// DELETE model based on _id *****************************************
const deleteDrugById = async (_id) => {
    const result = await Drug.deleteOne({ _id }).exec();
    return result.deletedCount;
};

// UPDATE model *****************************************************
const updateDrug = async (_id, name, expiration, quantity) => {
    return Drug.findByIdAndUpdate(
        _id,
        { name, expiration, quantity },
        { new: true, runValidators: true }
    ).exec();
}

// EXPORT the variables for use in the controller file.
export { createDrug, retrieveDrugs, retrieveDrugByID, updateDrug, deleteDrugById }
