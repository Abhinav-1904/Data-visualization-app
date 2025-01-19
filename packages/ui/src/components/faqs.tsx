import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
import { Reveal } from "./reveal"

type F={
  question:string,
  answer:string
}
interface FAQprops{
  FAQ:F[]
}
export function Faqs({FAQ}:FAQprops){
  return (
    <div className="">
      {FAQ.map((FAQ,index)=>(
        <Reveal width="100%" key={index}>
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-2xl">{FAQ.question}</AccordionTrigger>
                <AccordionContent>
                  {FAQ.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Reveal>
      ))}
    </div>
  )
}