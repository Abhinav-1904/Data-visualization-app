
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card"

interface CardPorps{
  Title:string,
  Image?:JSX.Element
}
export function FeatureCard({Title,Image}:CardPorps){
  return (
    <Card className="bg-white " style={{width:350}}>
    <CardHeader>
      <CardTitle>{Title}</CardTitle>
    </CardHeader>
    <CardContent className="items-center flex flex-col mt-1">
      {Image}
    </CardContent>
  </Card>
  )
}