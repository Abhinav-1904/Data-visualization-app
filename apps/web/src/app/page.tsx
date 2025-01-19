import Page1 from "../components/page1";
import  Page2  from "../components/page2";
import Page3 from "../components/page3";
import UserAppbar from "../components/UserAppar";

export default function Page(): JSX.Element {
  return (
  <div className="">
    <UserAppbar dashboard="false"/>
    <section className="h-screen">
      <Page1></Page1>
    </section>
    <section id='Section 2' className="h-screen">
      <Page2></Page2>
    </section>
    <section id='Section 3' className="h-screen">
      <Page3></Page3>  
    </section>
  </div> 
  )
}
