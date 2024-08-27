
// pros and cons of INmemory storage 
//pros
//1  easy toacces data 
//2  fast and easy to setup 

//cons
//1  if the server shut down we lose our data
//2 doesn't scale beoyond one server


interface storage{
    newStorage:string[]
}
const ObjectStorage: storage = {
    newStorage:[]
}
function inMemory(req:Request){
    const url = req.url
    ObjectStorage.newStorage.push(url)
    ObjectStorage.newStorage.push("125")
    console.log(ObjectStorage);
    ObjectStorage.newStorage.pop()
    console.log(ObjectStorage);
    
    
    return new Response("hello")

}

Deno.serve(inMemory)

