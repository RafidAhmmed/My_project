import { Product } from "./component/product";
import { Exam_props } from "./component/exam_props";

export default function Exam() {
    return (
        <>
            <Product>
                <Exam_props
                    name="Laptop"
                    price="999"
                    description="A high-performance laptop for all your computing needs"
                />
                <Exam_props
                    name="Smartphone"
                    price="499"
                    description="Stay connected with the latest technology in your hand"
                />
                <Exam_props
                    name="Headphones"
                    price="199"
                    description="Experience high-quality sound with noise cancellation"
                />
                <Exam_props
                    name="Smartwatch"
                    price="299"
                    description="Track your health and notifications on the go"
                />
            </Product>
        </> 
    )
}













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