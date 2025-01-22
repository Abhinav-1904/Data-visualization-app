'use client'
import { Button, Input } from "@repo/ui"
import { Label } from "@repo/ui"
import axios from "axios";
import Image from "next/image";
import { useState } from "react"
import { DropdownColumns } from "../../../components/multi-col-select";
import { handleFileUpload } from "../../../hooks/fileUpload";
import { handleSubmission } from "../../../hooks/fileSubmission";


export default function Scatterplot(){
  const [file,setFile]=useState<File|null>(null);
  const [imageData, setImageData] = useState<string | null>(null);
  const [numericColumns, setNumericColumns] = useState<string[]>([])
  const [categoricColumns, setCategoricColumns] = useState<string[]>([])
  const [numericSelectedColumns, setNumericSelectedColumns] = useState<string[]>([])
  const [categoricSelectedColumns, setCategoricSelectedColumns] = useState<string[]>([])

  
  return(
    <div className="grid grid-cols-2">
      <div className="grid-cols-1 ml-4 mt-6"> 
        <div className="text-green-400 text-5xl font-bold">
          Heat Map 
        </div>
        <div className="text-white text-lg mt-4">
          <div className="text-justify">
          A heatmap is a powerful tool for visualizing data density, relationships, and patterns through color variations. 
          It uses a grid of colors to represent numerical values, making it easy to spot trends and anomalies in large datasets.
          </div>
          <div className="text-justify">
          To create a heatmap, upload a CSV dataset with two categorical columns for axes and a numerical column for values. 
          This chart is excellent for identifying correlations, clustering, and areas of high or low activity in your data.
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 pt-4">
            <Label htmlFor="csv" className="text-green-400">Upload File</Label>
            <div className="w-56">
              <Input id="csv" type="file" accept=".csv" className="bg-white text-black hover:cursor-pointer"
                    onChange={(e)=>handleFileUpload({e,setNumericColumns,setCategoricColumns,setFile,setNumericSelectedColumns,
                      setCategoricSelectedColumns})}/>
            </div>
            <Label className="text-green-400">Columns</Label>
            <div className="flex gap-3">
              <DropdownColumns columns={numericColumns} onColChange={setNumericSelectedColumns} d_type="Numerical"></DropdownColumns>
              <DropdownColumns columns={categoricColumns} onColChange={setCategoricSelectedColumns} d_type="Categorical"></DropdownColumns>
            </div>
            <Button onClick={()=>handleSubmission({
              chartType:'pieChart',
              paramsNames:['names','values'],
              file,
              numericColumns,
              numericSelectedColumns,
              categoricSelectedColumns,
              setImageData
              })} className="w-fit bg-green-500 mt-2 hover:bg-green-600">
                Generate
            </Button>
          </div>
        </div>
      </div>
        {imageData?
        <div className="flex justify-center items-center">
          <Image src={imageData} alt={'Visualized Image'} width="500" height="500"/>
        </div>:
        <div className="font-medium text-xl text-green-400">
          Upload Image to display
        </div>}
      </div>
  )
}