import mongoose from "mongoose";

const Schema = mongoose.Schema;


const OrderSchema = new Schema(
    {
        UserId:{
            type: String
        },
        items:[
            {
                productId:{
                    type: String
                },
                name:{
                    type: String
                },
                quantity:{
                    type: Number,
                    required: true,
                    min: [1, 'Quantity cannot be less than 1.'],
                    default: 1
                },
                price: Number
            }
        ],
        bill: {
            type: Number,
            required: true
        },
        date_added:{
            type: Date,
            default: Date.now()
        }
    }
);

const Order = mongoose.model('order', OrderSchema);

export default Order;