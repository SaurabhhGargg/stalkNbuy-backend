const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const productModel = new Schema(
    {
        //SERIAL_NO: {type:Number, required:true},
        NAME: {type:String, required:true},
        CATEGORY: {type:String, required:true},
        DESCRIPTION_COLOR: {type:String, required:true},
        FABRIC: {type:String},
        IMAGE: {type:String, required:true},
        PRICE: {type:Number, required:true,index:true},
        SIZE: {type:String},
        PRODUCT_ID: {type:Number, required:true, Unique:true},
        BRAND:{type:String},
        SUBCATEGORY:{type:String},
        SEARCH_TEXT:{type:String},
        RATING:{type:Number,index:true},
        COLOR:{type:String},
        PRICE_RANGE:{type:String},
        QTY:{type:Number}

      }

)
productModel.index({SEARCH_TEXT: 'text'});
module.exports = Mongoose.model('products',productModel);