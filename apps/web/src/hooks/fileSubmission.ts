import axios from 'axios'
interface fileSubmissionProps{
  file : File|null,
  numericColumns : string[],
  categoricSelectedColumns : string[],
  numericSelectedColumns : string[],
  setImageData : (imageData:string|null)=>void
}

export const handleSubmission=async({
  file, 
  numericColumns, 
  categoricSelectedColumns,
  numericSelectedColumns,
  setImageData}:fileSubmissionProps)=>{
  if(!numericColumns || !file){
    alert("Please upload both column names and file");
    return 
  }

  const formData = new FormData();
  formData.append('file',file);

  const params = {
    names:categoricSelectedColumns[0],
    values:numericSelectedColumns[0],
  };
  try{
    const response = await axios.post(`${process.env.NEXT_PUBLIC_Backend_URL}/visualize-pieChart`,formData,
                     {params:params});
    const imageData = response.data;
    if(imageData.image){
      setImageData(imageData.image);
    }

  }catch(error){
    console.log('Error fetching image: ',error);
  }
}