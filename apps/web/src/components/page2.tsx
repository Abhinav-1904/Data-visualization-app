'use client'
import { FeatureCard } from "@repo/ui";
import CardReveal from "../../../../packages/ui/src/components/cardReveal";
import Image from "next/image"
import { useRouter } from "next/navigation";


export default function Page2(){
  const router = useRouter();

  const handleOnClick=(chartType:String)=>{
    router.push(`/${chartType}`);
  }

  return (
    <div className="grid grid-cols-3 grid-rows-2 h-screen">
      <CardReveal>
        <div className="ml-10 hover:cursor-pointer">
          <FeatureCard 
            Title="Line Chart"
            Image={<Image src='/LineChart.jpeg' alt='Line Chart Image' height={200} width={200}></Image>}>
          </FeatureCard>
        </div>
      </CardReveal>

      <CardReveal>
        <div className="ml-10 hover:cursor-pointer" onClick={()=>handleOnClick('barChart')}>
          <FeatureCard 
            Title="Bar Chart"
            Image={<Image src='/BarChart.jpeg' alt='Bar Chart Image' height={200} width={200}></Image>}>
          </FeatureCard>
        </div>
      </CardReveal>

      <CardReveal>
        <div className="ml-10 hover:cursor-pointer" onClick={()=>handleOnClick('scatterPlot')}>
          <FeatureCard 
            Title="Scatter Plot"
            Image={<Image src='/Scatterplot.jpeg' alt='Scatter Plot Image' height={200} width={200}></Image>}>
          </FeatureCard>
        </div>
      </CardReveal>

      <CardReveal>
        <div className="ml-10 hover:cursor-pointer">
          <FeatureCard 
            Title="Heat Map"
            Image={<Image src='/Heatmap.png' alt='Heat Map' height={173} width={173}></Image>}>
          </FeatureCard>
        </div>
      </CardReveal>
      
      <CardReveal>
        <div className="ml-10 hover:cursor-pointer" onClick={()=>handleOnClick('pieChart')}>
          <FeatureCard 
            Title="Pie Chart"
            Image={<Image src='/PieChart.jpeg' alt='Pie Chart Image' height={200} width={200}></Image>}>
          </FeatureCard>
        </div>
      </CardReveal>

      <CardReveal>
        <div className="ml-10 hover:cursor-pointer" onClick={()=>handleOnClick('donutChart')}>
          <FeatureCard 
            Title="Donut Chart"
            Image={<Image src='/DonutChart.jpeg' alt='Donut Chart Image' height={200} width={200}></Image>}>
          </FeatureCard>
        </div>
      </CardReveal>
    </div>
  )
}