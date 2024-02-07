import mongoose from 'mongoose';

const monthlyRevenueSchema = new mongoose.Schema({
    month: { type: String, required: true }, 
    revenue: { type: Number, required: true },
}, { timestamps: true });

const MonthlyRevenue = mongoose.model('monthlyRevenue', monthlyRevenueSchema);

export default MonthlyRevenue;
