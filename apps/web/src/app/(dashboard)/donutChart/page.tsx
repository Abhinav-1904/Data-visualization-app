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
  const [categoricColumns, setCategoricColumns] = useState<string[]>([])
  const [numericSelectedColumns, setNumericSelectedColumns] = useState<string[]>([])
  const [categoricSelectedColumns, setCategoricSelectedColumns] = useState<string[]>([])
  

  return(
    <div className="grid grid-cols-2">
      <div className="grid-cols-1 ml-4 mt-6"> 
        <div className="text-green-400 text-5xl font-bold">
          Donut Chart 
        </div>
        <div className="text-white text-lg mt-4">
          <div className="text-justify">
            A donut chart is a variation of a pie chart, featuring a hollow center. It helps you visualize 
            proportions or percentages of categories in your dataset while providing space for additional 
            information in the center.
          </div>
          <div className="text-justify">
            To generate the donut chart, upload a dataset in CSV format with at least one categorical column and a 
            corresponding numerical column. The chart will display the relative sizes of different segments while 
            allowing the center to be used for additional context or labels.
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 pt-4">
            <Label htmlFor="csv" className="text-green-400">Upload File</Label>
            <div className="w-56">
              <Input id="csv" type="file" accept=".csv" className="bg-white text-black hover:cursor-pointer"
                    onChange={(e)=>handleFileUpload({e,
                    setNumericColumns,
                    setCategoricColumns,
                    setFile,
                    setNumericSelectedColumns,
                    setCategoricSelectedColumns})}/>
            </div>
            <Label className="text-green-400">Columns</Label>
            <div className="flex gap-3">
              <DropdownColumns columns={numericColumns} onColChange={setNumericSelectedColumns} d_type="Numerical"></DropdownColumns>
              <DropdownColumns columns={categoricColumns} onColChange={setCategoricSelectedColumns} d_type="Categorical"></DropdownColumns>
            </div>
            <Button onClick={()=>handleSubmission({
              chartType:'donutChart',
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