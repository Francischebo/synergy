const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect(mongodb+srv://Francischebo:<Fr_38998653>@ysn-website.wcjg1tt.mongodb.net/?retryWrites=true&w=majority&appName=ysn-website);
        console.log('✅ MongoDB connected successfully');
    } catch (err) {
        console.error('❌ MongoDB connection error:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
