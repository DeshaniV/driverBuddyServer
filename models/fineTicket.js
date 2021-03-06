const mongoose=require('mongoose');
const Schema =mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/driverbuddy',{ useNewUrlParser: true });

mongoose.connection.once('open',function()
{
    console.log('Connection has been made');
}).on('error',function(error)
{
    console.log('Connection error:',error);
});


var Driver=require('mongoose').model('Driver').schema
var Police = require('mongoose').model('Police').schema
var SpotFine=require('mongoose').model('SpotFine').schema

var fineSchema= new Schema(
    {
        vehicleNumber: String,
        Amount: Number, 
        fine:[SpotFine],
        driver:[Driver],
        police:[Police],
        timeStamp:{ type : Date, default: Date.now }
    }
);

module.exports= mongoose.model('FineTicket',fineSchema);