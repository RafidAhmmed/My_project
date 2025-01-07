// "use client";
import {Input} from "./component/input";
// import React,{useState} from "react";

export default function Page(){
    return(
        <>
        <Input/>
        </>
    );

    
    // const [isFocused, setFocused] = useState(false);

    // const handleFocus = () => {
    //     setFocused(true);
    // };

    // const handleBlur = () => {
    //     setFocused(false);
    // };

    
}
// 
// 
// 
// 
// export default function Page(){
//     const [inputfirstvalue, setFirstInputValue] = useState('');
//     const firsthandleInputchange = (event) => {
//         setFirstInputValue(event.target.value);
//     };

//     const [inputlastvalue, setLastInputValue] = useState('');
//     const lasthandleInputchange = (event) => {
//         setLastInputValue(event.target.value);
//     };

//     const [inputemailvalue, setInputEmailValue] = useState('');
//     const mailhandleInputchange = (event) => {
//         setInputEmailValue(event.target.value);
//     };

//     return(
//         <>
//         <p className="text-lg pt-2 pl-6">Form</p>
//         <Input 
//         place_holder={"Enter your first_name"}
//         type={"text"}
//         value={inputfirstvalue}
//         onchange={firsthandleInputchange}
//         />
//         <Input
//         place_holder={"Enter your last_name"}
//         type={"text"}
//         value={inputlastvalue}
//         onchange={lasthandleInputchange}
//         />
//         <Input
//         place_holder={"Enter your email"}
//         type={"email"}
//         value={inputemailvalue}
//         onchange={mailhandleInputchange}
//         />
//         <Input
//         place_holder={"Confirm your email"}
//         type={"email"}
//         value={inputemailvalue}
//         onchange={mailhandleInputchange}
//         />
//         </>
//     )
// }






















// import { Product } from "./component/product";
// import { Exam_props } from "./component/exam_props";

// export default function Exam() {
//     return (
//         <>
//             <Product>
//                 <Exam_props
//                     name="Laptop"
//                     price="999"
//                     description="A high-performance laptop for all your computing needs"
//                 />
//                 <Exam_props
//                     name="Smartphone"
//                     price="499"
//                     description="Stay connected with the latest technology in your hand"
//                 />
//                 <Exam_props
//                     name="Headphones"
//                     price="199"
//                     description="Experience high-quality sound with noise cancellation"
//                 />
//                 <Exam_props
//                     name="Smartwatch"
//                     price="299"
//                     description="Track your health and notifications on the go"
//                 />
//             </Product>
//         </> 
//     )
// }













// import { Header } from "./component/header";
// import { Footer } from "./component/footer";
// import { Background } from "./component/background";
// import { ContactUs } from "./component/contact";
// import { PricingPlans } from "./component/pricing_plan";
// import { PopularDestinations } from "./component/popular_destination";
// import { Card } from "./component/card";
// import { Button } from "./component/header_button";
// import { NewPricing } from "./component/new_pricing";

// export default function Home() {
//     return (
//         <>
//             <Header>
//                 <Button
//                     title="Home"
//                     link="#home"
//                 />
//                 <Button
//                     title="Destination"
//                     link="#destination"
//                 />
//                 <Button
//                     title="Price"
//                     link="#pricing"    
//                 />
//                 <Button
//                     title="Contact"
//                     link="#contact"    
//                 />
//             </Header>
//             <Background/> 
//             <PopularDestinations>
//                 <Card
//                     image="sea.jpg"
//                     title="Tropical Beach"
//                     description="Relax on white sands and enjoy crystal-clear waters."
//                 />
//                 <Card
//                     image="mountain.jpg"
//                     title="Mountains"
//                     description="Explore and create adventure."
//                 />
//                 <Card
//                     image="sea.jpg"
//                     title="Tropical Beach"
//                     description="Relax on white sands and enjoy crystal-clear waters."
//                 />
//             </PopularDestinations>
//             <PricingPlans/>
//             <NewPricing/>
//             <ContactUs/>
//             <Footer/>
//         </> 
//     )
// }