
import schema from "./user.model.js"
import Admin_schema from './user.model.js'
import bcrypt from "bcrypt";
import pkg from "jsonwebtoken";
const {sign}=pkg;


    


export function addUser(req,res)
{
    
   try {
    console.log(req.body);
    const {name,username,password}=req.body;
    console.log(name,username,password);
    if(!(name&&username&&password))
    return res.status(404).send("fields are empty")

    bcrypt.hash(password,10)
    .then((hashedPwd)=>{
        Admin_schema.create({name,username,password:hashedPwd});
    })
    .then(()=>{
        res.status(201).send("sucessfully registered")
    })
  .catch((error)=>{
    res.status(500).send(error)
   })
    
   } catch (error) {
    console.log(error);
    
   }
    
}



export async function login(req, res) {
    try {
     console.log(req.body);
     const { username, password } = req.body;
     const usr = await Admin_schema.findOne({ username })
     console.log(usr);
     if (usr === null) return res.status(404).send("username or password doesnot exist");
     const success =await bcrypt.compare(password, usr.password)
     console.log(success);
     if (success !== true) return res.status(404).send("username or password doesnot exist");
     const token = await sign({ username }, process.env.JWT_KEY, { expiresIn: "24h" })
     console.log(token);
     res.status(200).send({ msg: "successfullly login", token })
     res.end();
     
    } catch (error) {
     console.log(error);
     
    }
   }

   
 export async function home(req,res){
    try {
      console.log(req.user);
      const username=req.user.user
      console.log(username);
      res.status(200).send({msg:`hello ${username}`})
      
    } catch (error) {
      res.status(404).send(error)
      
    }
  
   }


