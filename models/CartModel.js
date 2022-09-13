import mongoose from "mongoose";

const Schema = mongoose.Schema;


const CartSchema = new Schema(
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
            required: true,
            default: 0
        }
    }
);

const Cart = mongoose.model('cart', CartSchema);

export default Cart;