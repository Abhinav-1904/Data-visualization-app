'use client'
import { Button, Input } from "@repo/ui"
import { Label } from "@repo/ui"
import axios from "axios";
import Image from "next/image";
import { useState } from "react"

export default function Scatterplot(){
  const [column1,setColumn1]=useState('');
  const [column2,setColumn2]=useState('');
  const [file,setFile]=useState<File|null>(null);
  const [imageData, setImageData] = useState<string | null>(null);
  
  const handleFileUpload=(e: React.ChangeEvent<HTMLInputElement>)=>{
    const uploadFile=e.target.files?.[0];
    if(uploadFile){
      setFile(uploadFile);
    }
  }
  const handleSubmission=async()=>{
    if(!column1 || !column2 || !file){
      alert("Please upload both column names and file");
      return 
    }

    const formData = new FormData();
    formData.append('file',file);

    const params = {
      column1: column1,
      column2: column2,
    };

    try{
      const response = await axios.post(`${process.env.NEXT_PUBLIC_Backend_URL}/visualize-barPlot`,formData,
                       {params:params});
      const imageData = response.data;
      if(imageData.image){
        setImageData(imageData.image);
      }


    }catch(error){
      console.log('Error fetching image: ',error);
    }
  }

  return(
    <div className="grid grid-cols-2">
      <div className="grid-cols-1 ml-4 mt-6"> 
        <div className="text-green-400 text-5xl font-bold">
          Bar Chart 
        </div>
        <div className="text-white text-lg mt-4">
          <div className="text-justify">
            A bar plot is an effective way to compare categorical data by representing values with rectangular bars. 
            It is ideal for summarizing data distributions, showing counts, or visualizing comparisons among groups.
          </div>
          <div className="text-justify">
            To generate the bar Chart, simply upload a dataset in CSV format. The file should contain at least 
            one categorical and one numerical columns that will be plotted on the X and Y axes.
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 pt-4">
            <Label htmlFor="csv" className="text-green-400">Upload File</Label>
            <div className="w-56">
              <Input id="csv" type="file" accept=".csv" className="bg-white text-black hover:cursor-pointer"
                     onChange={handleFileUpload}/>
            </div>
            <Label className="text-green-400">Columns</Label>
            <div className="flex w-full">
              <Input id="Column1" type="text" accept=".csv" 
                    placeholder='Enter 1st column' className="bg-white text-black mr-2"
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setColumn1(e.target.value)}}/>
              <Input id="Column2" type="text" accept=".csv" 
                    placeholder='Enter 2nd column' className="bg-white text-black"
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setColumn2(e.target.value)}}/>
            </div>
            <Button onClick={handleSubmission} className="w-fit bg-green-500 mt-2 hover:bg-green-600">
                Generate
            </Button>
          </div>
        </div>
      </div>
        {imageData?
        <div className="flex justify-center items-center">
          <Image src={imageData} alt={'Visualized Image'} width="500" height="500">
            
          </Image>
        </div>:
        <div className="font-medium text-xl text-green-400">
          Upload Image to display
        </div>}
      </div>
  )
}