
// const MonthlyRevenue = mongoose.model('monthlyRevenue');
import MonthlyRevenue from '../model/monthlyRevenueModel.js';

const getMonthlyRevenue = async (req, res) => {
    try {
        const result = await MonthlyRevenue.aggregate([
            {
                $match: {
                    month: { $gte: new Date().toISOString().slice(0, 7) + '-01' } 
                }
            },
            {
                $group: {
                    _id: null,
                    totalRevenue: { $sum: "$revenue" }
                }
            }
        ]);

        res.status(200).json({ totalRevenue: result[0]?.totalRevenue || 0 });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export {getMonthlyRevenue};
