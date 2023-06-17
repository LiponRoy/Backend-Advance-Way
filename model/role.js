import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema(
	{
		roleName: { type: String, required: true },
	},
	{ timestamps: true },
);

const role = mongoose.model('role', roleSchema);
export default role;
