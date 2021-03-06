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


var insuranceSchema= new Schema(
    {
        nic:String,
        firstName:String,
        lastName:String,
        mobile:Number,
        email: String,
        agentId:String
    }
);

module.exports= mongoose.model('Insurance',insuranceSchema);