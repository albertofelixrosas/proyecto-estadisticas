const controller = {};

const conn = require("../db/connection");

controller.index = async (req, res) => {
    try {
        const data = {
            labels: [
                "00:00",
                "01:00",
                "02:00",
                "03:00",
                "04:00",
                "05:00",
                "06:00",
                "07:00",
                "08:00",
                "09:00",
                "10:00",
                "11:00",
                "12:00",
            ],
            series: [[30, 31, 33, 32, 31, 34, 32, 34, 33, 31, 30, 32, 33]],
        };
        await conn();
        console.log("DB SUCCESS CONNECTION!");
        res.render("rotadiscos", { data });
    } catch (error) {
        console.error(error);
    }
};

module.exports = controller;
