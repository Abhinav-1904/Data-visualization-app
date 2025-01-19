import { FeatureCard } from "@repo/ui";
import CardReveal from "../../../../packages/ui/src/components/cardReveal";
import Image from "next/image"

export default function Page2(){
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
        <div className="ml-10 hover:cursor-pointer">
          <FeatureCard 
            Title="Bar Chart"
            Image={<Image src='/BarChart.jpeg' alt='Bar Chart Image' height={200} width={200}></Image>}>
          </FeatureCard>
        </div>
      </CardReveal>

      <CardReveal>
        <div className="ml-10 hover:cursor-pointer">
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
        <div className="ml-10 hover:cursor-pointer">
          <FeatureCard 
            Title="Pie Chart"
            Image={<Image src='/PieChart.jpeg' alt='Pie Chart Image' height={200} width={200}></Image>}>
          </FeatureCard>
        </div>
      </CardReveal>

      <CardReveal>
        <div className="ml-10 hover:cursor-pointer">
          <FeatureCard 
            Title="Dougnut Chart"
            Image={<Image src='/DougnutChart.jpeg' alt='Dougnut Chart Image' height={200} width={200}></Image>}>
          </FeatureCard>
        </div>
      </CardReveal>
    </div>
  )
}