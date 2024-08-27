import {MongoClient} from "https://deno.land/x/mongo@v0.33.0/mod.ts";

const client = new MongoClient()
await client.connect("mongodb://127.0.0.1:27017/restApi");

// Defining schema interface
interface UserSchema {
    _id: Object;
    username:{
        type: string,
        required:true
    } 
    email:{
        type: string,
        required: true,
        unique: true,
      
    }
    password:{ type:string,
        required: true,
        unique: true

    }
  }
  const db = client.database("test");
//   const users = db.collection<UserSchema>("users");


  //insert one 
//   const insertOne = await users.insertOne({
//      username:"akash",
//      email:"neru@12123",
//      password:"pit"
//   });

//insert many 
// const insertMany = await users.insertMany([
//     {
//         username:"gotya",
//         email:"kyu@12",
//         password:"kuy@1344"
//     },
//     {
//         username:"gotya",
//         email:"kyu@12",
//         password:"kuy@1344"
//     }])

//find only one user in the database
// const user1 = await users.findOne({email:"sh@123"})
// console.log(user1);

// find All the user in the database
// const All_user = await users.find({}).toArray()
// console.log(All_user);


//Count 
// const userCount = await users.estimatedDocumentCount({
//     username: {$ne: null}
// })
// console.log(userCount);

//update the user

// const updateUser = await users.updateOne({username:{ $ne:"hyrtrr"}},
//    {$set:{username: "gangotiya"}}
// ) 
// console.log(updateUser);


//delete the user
// const deleteUser = await users.deleteOne({password:"pit"})
// console.log(deleteUser);








