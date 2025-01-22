'use client'
import { Button, Input } from "@repo/ui"
import { Label } from "@repo/ui"
import Image from "next/image";
import { useState } from "react"
import { DropdownColumns } from "../../../components/multi-col-select";
import { handleFileUpload } from "../../../hooks/fileUpload";
import { handleSubmission } from "../../../hooks/fileSubmission";

export default function Scatterplot(){
  const [file,setFile]=useState<File|null>(null);
  const [imageData, setImageData] = useState<string | null>(null);
  const [numericColumns, setNumericColumns] = useState<string[]>([])
  const [timeColumns, setTimeColumns] = useState<string[]>([])
  const [numericSelectedColumns, setNumericSelectedColumns] = useState<string[]>([])
  const [timeSelectedColumns, setTimeSelectedColumns] = useState<string[]>([])

  return(
    <div className="grid grid-cols-2">
      <div className="grid-cols-1 ml-4 mt-6"> 
        <div className="text-green-400 text-5xl font-bold">
          Line Chart 
        </div>
        <div className="text-white text-lg mt-4">
          <div className="text-justify">
            A line chart is ideal for illustrating trends, patterns, and changes in data over time. It connects 
            data points with straight lines, providing a clear visualization of how values increase, decrease, 
            or remain consistent.
          </div>
          <div className="text-justify">
            To create a line chart, upload a dataset in CSV format containing a numerical column for values and 
            another column for time or categories. This chart is effective for analyzing progress, comparisons, 
            and variations within your dataset.
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 pt-4">
            <Label htmlFor="csv" className="text-green-400">Upload File</Label>
            <div className="w-56">
              <Input id="csv" type="file" accept=".csv" className="bg-white text-black hover:cursor-pointer"
                    onChange={(e)=>handleFileUpload({e,setNumericColumns,setCategoricColumns:setTimeColumns,setFile,time:true,setNumericSelectedColumns,
                      setCategoricSelectedColumns:setTimeSelectedColumns})}/>
            </div>
            <Label className="text-green-400">Columns</Label>
            <div className="flex gap-3">
              <DropdownColumns columns={numericColumns} onColChange={setNumericSelectedColumns} d_type="Numerical"></DropdownColumns>
              <DropdownColumns columns={timeColumns} onColChange={setTimeSelectedColumns} d_type="Categorical"></DropdownColumns>
            </div>
            <Button onClick={()=>handleSubmission({
              chartType:'lineChart',
              paramsNames:['x','y'],
              file,
              numericColumns,
              numericSelectedColumns,
              categoricSelectedColumns:timeSelectedColumns,
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