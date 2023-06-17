import userModel from '../model/userModel.js';

//Create new data

export const addUser = async (req, res, next) => {
	const { name, email, phone, role } = req.body;
	try {
		const userData = new userModel({ name, email, phone, role });
		const savedData = await userData.save();
		res.status(200).send(savedData);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};

// getting all of data
export const getAll = async (req, res, next) => {
	try {
		const All = await userModel.find();
		if (!All) {
			res.status(400).json({ message: 'data not found' });
		}
		res.status(200).send(All);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};
// getting single data
export const getOneData = async (req, res, next) => {
	try {
		const oneData = await instructorModel.findById(req.params.id);
		if (!oneData) {
			res.status(400).json({ message: 'data not found' });
		}
		res.status(200).send(oneData);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};
// Update data
export const updateData = async (req, res) => {
	const data = await instructorModel.findById(req.params.id);
	if (!data) {
		res.status(400).json({ message: 'data not found' });
	}
	const updateData = await instructorModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
	if (!updateData) {
		res.status(400).json({ message: 'do not updated' });
	}
	if (updateData) {
		res.status(201).json({ message: 'data updated' });
	}
};

export const deleteData = async (req, res) => {
	try {
		const deleteData = await instructorModel.findByIdAndDelete(req.params.id);
		res.json({
			message: 'deleted successful .',
			deleteData,
		});
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};
