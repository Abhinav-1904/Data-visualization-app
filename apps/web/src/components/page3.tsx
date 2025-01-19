import { EnvelopeClosedIcon, HomeIcon } from "@radix-ui/react-icons";
import { Faqs, Reveal } from "@repo/ui";

const FAQs = [
  {
    question: 'What is Graph Hive?',
    answer: 'Graph Hive is an interactive data visualization dashboard to help you analyze and present your data effectively.',
  },
  {
    question: 'How can I sign up?',
    answer: 'Click on the "Sign Up" button at the top right corner to create your account.',
  },
  {
    question: 'Is Graph Hive free?',
    answer: 'Yes, we provide our services free of charge to all users.',
  },
  {
    question: 'How is my data secured?',
    answer: 'We follow best practices in data security, including encryption and regular audits to protect your data.',
  },
];


export default function Page3(){
  return (
    <div className="">
      <div className="pt-20 pl-20 pr-20 text-white justify-center">
        <Reveal>
          <div className="text-green-400 text-5xl font-bold pb-5 w-fit">
            FAQs
          </div>
        </Reveal>
        <div className="text">
          <Faqs FAQ={FAQs}></Faqs>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-white mb-2 mt-10">
          For any queries, contact us:
        </div>
        <div className="justify-center flex">
          <HomeIcon className="w-5 h-5 text-green-400 mb-2 mr-2" />
          <span className="text-blue-500 mr-2">+1-234-567-890</span>
          <EnvelopeClosedIcon className="w-5 h-5 text-green-400 flex flex-col justify-center mr-2" />
          <span className="text-blue-500 ">abhinavpandey1322@gmail.com</span>
        </div>
      </div>
    </div>
  ) 
}