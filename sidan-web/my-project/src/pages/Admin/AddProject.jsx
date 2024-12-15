import { useState } from 'react'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import AdminNavbar from './AdminNavbar'
import { app } from "../../firebase";

 
const AddProject = () => {
  
    const [formData, setFormData] = useState({
        title: '',
        imageUrls: [],
        description: [],
        skills: [],
        liveLink: '',
        githubLink: ''
    })
    

    const [files, setFiles] = useState([])
    const [imageUploadError, setImageUploadError] = useState(false)
    const [uploading, setUploading] = useState(false)

    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

     console.log(files, formData)

    const handleImageSubmit = () => {
      if( files.length > 0 && files.length + formData.imageUrls.length < 7 ){
          setUploading(true);
          setImageUploadError(false)
          const promises = [];

          for (let i=0; i<files.length; i++){
              promises.push(storeImage(files[i]))
          }

          
          Promise.all(promises).then((urls) => {
              setFormData({ ...formData, imageUrls: formData.imageUrls.concat(urls) })
              setImageUploadError(false)
              setUploading(false);
              setFiles([])

          }).catch((err)=>{
              setImageUploadError('Image upload failed (2 mb max per image ) ')
              setUploading(false);
          })
        
      }else{
          setImageUploadError('You can only upload 6 images per listing ')
          setUploading(false);
      }
  }

  const storeImage = async (file) => {
      return new Promise((resolve, reject) => {
          const storage = getStorage(app);
          const fileName = new Date().getTime() + file.name;
          const storageRef = ref(storage, fileName)
          const uploadTask = uploadBytesResumable(storageRef, file);

          uploadTask.on(
              'state_changed',
              (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes ) * 100 ;
                    console.log(progress,'% done')
              },
              (error) => {
                  reject(error);
              },
              () => {
                  getDownloadURL(uploadTask.snapshot.ref)
                  .then((downloadURL) => {
                      resolve(downloadURL)
                  })
              }
          )
      })
  }
    

    const handleChange = (e) => {
        const { id, value } = e.target;

        const removeQuotes = (str) => str.replace(/['"]/g, '');

        if( id === 'skills' ){
            setFormData({
                ...formData,
                [id] :  value
                         .split(',')
                         .map(item => removeQuotes(item.trim()))
            })
        } 
        else if(  id === 'description'  ){
          setFormData({
              ...formData,
              [id] :  value
                       .split('\n')
                       .map(item => item.trim())
            })
        } 
        else {
            setFormData({
             ...formData,
             [id] :  removeQuotes(value.trim())
            })
        }

     
    }

    const handleRemoveImage = (index) => {
          setFormData({
            ...formData,
            imageUrls: formData.imageUrls.filter((_, i)=> i !== index)
          })
    };
        
    const handleSubmit = async(e) => {
      
        e.preventDefault();
      
          try {
            if(formData.imageUrls.length < 1 ) return setError('You must upload 1 image')
            if(formData.skills.length < 1 &&  formData.description.length < 1  ) return setError('You must add more than 1 content')
            setError(false)
            setLoading(true);

            const response = await fetch('/api/project/create', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                     ...formData
                })
                
            });
      
            const data = await response.json();
            setLoading(false);

            if(data.success === false){
                  setError(data.message)
                  setLoading(false);
            }


            setFormData({
              title: '',
              imageUrls: [],
              description: [],
              skills: [],
              liveLink: '',
              githubLink: ''
            });
            setFiles([])
            

          } catch (error) {
            console.error('Error submitting the form:', error);
            setError(error.message)
          }
    }

    console.log(formData,'<=== Data')

  
  return (
    <div className='flex flex-col w-full dark:text-white'>  
         <AdminNavbar /> 
      

         <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full gap-10 mt-20 mb-10">
        {/* Left Column */}
        <div className="flex flex-col gap-5 flex-1">
            <input
            onChange={handleChange}
            value={formData.title}
            type="text"
            placeholder="Title"
            className="border p-4 rounded-2xl border-gray-300 dark:border-gray-700 bg-lightGray dark:bg-lgBackgroundDark dark:text-white"
            id="title"
            maxLength="80"
            minLength="10"
            required
            />
            <input
            onChange={handleChange}
            value={formData.skills}
            type="text"
            placeholder="Skills"
            className="border p-4 rounded-2xl border-gray-300 dark:border-gray-700 bg-lightGray dark:bg-lgBackgroundDark dark:text-white"
            id="skills"
            required
            />
            <textarea
            onChange={handleChange}
            value={formData.description.join('\n')} 
            type="text"
            placeholder="Description"
            className="border p-3 rounded-2xl border-gray-300 dark:border-gray-700 bg-lightGray dark:bg-lgBackgroundDark dark:text-white h-52"
            id="description"
            required
            />
            <input
            onChange={handleChange}
            value={formData.liveLink}
            type="text"
            placeholder="Live Link"
            className="border p-4 rounded-2xl border-gray-300 dark:border-gray-700 bg-lightGray dark:bg-lgBackgroundDark dark:text-white"
            id="liveLink"
            required
            />
           <input
            onChange={handleChange}
            value={formData.githubLink}
            type="text"
            placeholder="GitHub Link"
            className="border p-4 rounded-2xl border-gray-300 dark:border-gray-700 bg-lightGray dark:bg-lgBackgroundDark dark:text-white"
            id="githubLink"
            required
            />
        </div>

        {/* Right Column */}
        <div className="flex flex-col flex-1 gap-4 mt-5 sm:mt-0">
              
                <p className="font-semibold font-nunito">
                    Images:
                    <span className="font-normal text-gray-600 ml-2">
                        The first image will be the cover (max 6)
                    </span>
                </p>
               
                <div className="flex gap-4">
               
                      <input
                          onChange={(e) => setFiles(e.target.files)}
                          id="images"
                          className="border font-nunito p-4 rounded-2xl w-full  border-gray-300 dark:border-gray-700 bg-lightGray dark:bg-lgBackgroundDark dark:text-white "
                          type="file"
                          name='files'
                          accept="image/*"
                          multiple
                      />
                     <button disabled={uploading} type="button" onClick={handleImageSubmit} className=" p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80">
                        {uploading ? 'Uploading...' : 'Upload'}
                    </button>
                 </div>
              
                 <p className="text-red-700 text-sm">{imageUploadError && imageUploadError }</p>
                 {
                    formData.imageUrls.length > 0 && formData.imageUrls.map((url,index)=> (
                        <div key={url} className="flex justify-between p-3 border border-gray-600 items-center   rounded-2xl">
                           <img src={url} alt="listing image" className=" rounded-xl w-20 h-20 object-contain" />
                           <button type="button" onClick={() => handleRemoveImage(index)} className="p-3 text-red-700 uppercase rounded-lg hover:opacity-70 ">Delete</button>
                        </div>
                    ))
                 }

                 

            
            <button disabled={loading || uploading} className="bg-slate-700 mt-3 rounded-lg text-white p-3 uppercase hover:opacity-95 disabled:opacity-80">Submit</button>
            {error && <p className="text-red-700 text-sm">{error}</p>}
        </div>
      </form>

      

    </div>
  )
}

export default AddProject