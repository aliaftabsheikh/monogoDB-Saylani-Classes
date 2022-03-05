const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
    amount : {
        type: Number,
        validate: {
             validator : (val)=>{
                return val > 0;
            }, 
            message : 'Amount cannot be less then 0'
        }
    },
    products :[
        {
            type : mongoose.Types.ObjectId,
            ref: "Product"
        }
    ]
});

productSchema.static('findByTitle', function (title) {
    return this.find({ title });
});


const Order = mongoose.model('Order', orderSchema);


module.exports = Order;