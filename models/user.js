const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../middlewares");

const userSchema = new Schema(
    {
        password: {
            type: String,
            required: [true, "Set password for user"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
        },
        token: String,
        avatarURL: {
        type: String,
        required: true,
        },
        verify: {
        type: Boolean,
        default: false,
        },
        verificationToken: {
        type: String,
        required: [true, 'Verify token is required'],
        },
    },
    { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

module.exports = model("user", userSchema);
