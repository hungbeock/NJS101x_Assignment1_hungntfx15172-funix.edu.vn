const mongoose = require('mongoose');

const Staff = require('../models/staff');

async function connect() {
    try {
        mongoose.connect(
            'mongodb+srv://hung:123456789a@cluster0.qxpusgq.mongodb.net/emoloyee?retryWrites=true&w=majority'
        );
        console.log('Connected to MongoDB');
    } catch (err) {
        console.log(err);
    }
}

Staff.findOne()
    .then((staff) => {
        if (!staff) {
            const newStaff = new Staff({
                name: 'Nguyễn Trọng Hưng',
                dOB: new Date(2000, 03, 11),
                salaryScale: 1.2,
                startDate: new Date(2020, 01, 01),
                department: 'IT',
                annualLeave: 14,
                image: 'https://cdngarenanow-a.akamaihd.net/webmain/static/pss/lol/items_splash/yasuo_55.jpg',
                workTimes: [],
                listInfoList: [],
                bodyTemperature: [],
                vaccineInfo: [],
                infectCovidInfo: [],
            });
            newStaff.save();
        }
    })
    .catch((error) => {
        console.log(error);
    });

module.exports = connect;
