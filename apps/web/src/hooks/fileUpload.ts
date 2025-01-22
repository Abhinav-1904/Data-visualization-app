import axios from 'axios'
interface handleFileUploadProps{
  e:React.ChangeEvent<HTMLInputElement>
  setFile:(file:File)=>void,
  setNumericColumns:(columns:string[])=>void,
  setCategoricColumns:(columns:string[])=>void,
  setNumericSelectedColumns:(columns:string[])=>void,
  setCategoricSelectedColumns:(columns:string[])=>void,
  time?:boolean
}
export const handleFileUpload=async({
  e,
  setFile,
  setNumericColumns,
  setCategoricColumns,
  setNumericSelectedColumns,
  setCategoricSelectedColumns,
  time}: handleFileUploadProps)=>{
  const uploadFile=e.target.files?.[0];
  if (!uploadFile) {
    alert("Please upload a file");
    return;
  }
  setNumericSelectedColumns([]);
  setCategoricSelectedColumns([]);
  setFile(uploadFile);
  const formData=new FormData();
  formData.append('file',uploadFile);

  let categoricResponse;
  let categoricData;
  
  const numericResponse = await axios.post(`${process.env.NEXT_PUBLIC_Backend_URL}/get-columns_numeric`,formData);
  if(time){
    categoricResponse = await axios.post(`${process.env.NEXT_PUBLIC_Backend_URL}/get-columns_time_numeric`,formData);
    console.log('hi')
  }else{
    categoricResponse = await axios.post(`${process.env.NEXT_PUBLIC_Backend_URL}/get-columns_categorical`,formData);
  }
  const numericData=await numericResponse.data;
  if(numericData.columns){
    setNumericColumns(numericData.columns);
  } else{
    console.error(numericData.error);
  }
  if(categoricResponse){
    categoricData=await categoricResponse.data;
  }
  if(categoricData.columns){
    setCategoricColumns(categoricData.columns);
  } else{
    console.error(categoricData.error);
  }
}