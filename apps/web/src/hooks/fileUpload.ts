import axios from 'axios'
interface handleFileUploadProps{
  e:React.ChangeEvent<HTMLInputElement>
  setFile:(file:File)=>void,
  setNumericColumns:(columns:string[])=>void,
  setCategoricColumns:(columns:string[])=>void,
}
export const handleFileUpload=async({e,setFile,setNumericColumns,setCategoricColumns}: handleFileUploadProps)=>{
  const uploadFile=e.target.files?.[0];
  if (!uploadFile) {
    alert("Please upload a file");
    return;
  }
  setFile(uploadFile);
  const formData=new FormData();
  formData.append('file',uploadFile);
  
  const numericResponse = await axios.post(`${process.env.NEXT_PUBLIC_Backend_URL}/get-columns_numeric`,formData);
  const categoricResponse = await axios.post(`${process.env.NEXT_PUBLIC_Backend_URL}/get-columns_categorical`,formData);
  const numericData=await numericResponse.data;
  if(numericData.columns){
    setNumericColumns(numericData.columns);
  } else{
    console.error(numericData.error);
  }
  const categoricData=await categoricResponse.data;
  if(categoricData.columns){
    setCategoricColumns(categoricData.columns);
  } else{
    console.error(categoricData.error);
  }
}