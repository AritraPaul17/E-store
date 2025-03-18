const url = `https://api.cloudinary.com/v1_1/dndr1afum/image/upload`
const UploadImageCloudinary = async(image)=>{
    let formdata = new FormData()
    formdata.append("file",image)
    formdata.append("upload_preset","ECommerce_product")
    const res = await fetch(url,{
        method:"post",
        body : formdata
    })

    return res.json();
}

export default UploadImageCloudinary;