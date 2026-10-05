const mongoose=require('mongoose');
const initData=require("./data.js");
const Listing=require("../models/listing.js");

const MONGO_URL="mongodb://127.0.0.1:27017/Wanderlust";
main().then(()=>{
    console.log("connected to db");
})
.catch(()=>{
    console.log("error");
})

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB=async()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,
        owner: new mongoose.Types.ObjectId('6ab29502d359ce230a0ee24a')}));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
};
initDB();