const { model } = require("mongoose");
const { OrdersSchema } = require("../schemas/OrdersSchema");

const OrdersModel = model("orders", OrdersSchema); // ✅ Correct Model Creation

module.exports = { OrdersModel };
