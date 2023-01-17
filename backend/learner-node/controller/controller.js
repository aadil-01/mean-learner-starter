const model = require('../model/model.js');

//to insert data into db
exports.insertData = async (req, res) => {
    try {
        const data = new model({
            task: req.body.task,
            status: req.body.status
        })
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (e) {
        res.json({ error: e.message });
    }
}

//to fetch all data from db
exports.fetchAllData = async (req, res) => {
    try {
        const data = await model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//to fetch single data from db by id
exports.fetchData = async (req, res) => {
    try {
        const data = await model.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//to update data in db by id
exports.updateData = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        const result = await model.findByIdAndUpdate(
            id, updatedData, options
        )
        res.json(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

//to delete data in db by id
exports.deleteData = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await model.findByIdAndDelete(id)
        res.json(data)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}