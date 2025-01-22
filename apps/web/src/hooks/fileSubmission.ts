import axios from 'axios'
import qs from 'qs'


interface fileSubmissionProps{
  file : File|null,
  numericColumns : string[],
  categoricSelectedColumns : string[],
  numericSelectedColumns : string[],
  setImageData : (imageData:string|null)=>void,
  paramsNames:string[],
  chartType:string
}

export const handleSubmission=async({
  chartType,
  file, 
  numericColumns, 
  categoricSelectedColumns,
  numericSelectedColumns,
  setImageData,
  paramsNames}:fileSubmissionProps)=>{
  if(!numericColumns || !file){
    alert("Please upload both column names and file");
    return 
  }

  const formData = new FormData();
  formData.append('file',file);
  
  const params = {
    [paramsNames[0]]:categoricSelectedColumns[0],
    [paramsNames[1]]:numericSelectedColumns,
  };
  try{
    const response = await axios.post(`${process.env.NEXT_PUBLIC_Backend_URL}/visualize-${chartType}`,formData,
                     {params,
                      paramsSerializer: (params) =>
                      qs.stringify(params, { arrayFormat: "repeat" })});
    const imageData = response.data;
    if(imageData.image){
      setImageData(imageData.image);
    }

  }catch(error){
    console.log('Error fetching image: ',error);
  }
}