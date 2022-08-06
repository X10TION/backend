const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: "mongodb+srv://eCommerce:eCommerce@cluster0.yl7rwms.mongodb.net/?retryWrites=true&w=majority",
    api_key: "obittechnology",
    api_secret: "0LQgwYZ_gniRi7jD_EiJ56M6fTU"
}) 
module.exports = cloudinary;