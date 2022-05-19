const mongoose=require('mongoose')
const path=require('path')
const multer=require('multer')
const AVATAR_PATH=path.join('/uploads/avatars')

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    phoneno:{
        type:Number,
        required:true

    },
    // dob:{
    //    type:Number,
    //    required:true,  
    // },
    gender:{
        type:String,
        required:true


    },
    married:{
        type:String,
        required:true,

    },
    language:{
      type:String,
      required:true
    },
    
    avatar:{
        type:String,
    }
},{
    timestamps:true
})
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,"..",AVATAR_PATH));
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
  userSchema.statics.UploadedAvatar=multer({
    storage,
    fileFilter:(req,file,cb)=>{
        if(
            file.mimetype=='image/png' ||
            file.mimetype=='image/jpg' || 
            file.mimetype=='image/jpeg'
        ){
            cb(null,true)
        }else{
            cb(null,false)
             return cb(new Error("Sorry You cannot Upload it , Only png,jpg,jpeg"))
           
        }
    },
    

}).single('avatar')
const User = mongoose.model('User', userSchema);

module.exports = User;
