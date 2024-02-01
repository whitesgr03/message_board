const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookInstanceSchema = new Schema(
	{
		book: { type: String, required: true },
		imprint: { type: String, required: true },
		status: {
			type: String,
			required: true,
			enum: ["Available", "Maintenance", "Loaned", "Reserved"],
			default: "Maintenance",
		},
		due_back: { type: Date, default: Date.now },
	},
	{
		virtuals: {
			url: {
				get() {
					return `/catalog/bookinstance/${this._id}`;
				},
			},
		},
	}
);

const BookInstanceModel = mongoose.model("BookInstance", BookInstanceSchema);

module.exports = BookInstanceModel;