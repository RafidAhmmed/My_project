import { Product } from "./component/product";
import { Exam_props } from "./component/exam_props";

export default function Exam() {
    return (
        <>
            <Product>
                <Exam_props
                    name="Laptop"
                    price="999$"
                    description="A high-performance laptop for all your computing needs"
                />
                <Exam_props
                    name="Smartphone"
                    price="499$"
                    description="Stay connected with the latest technology in your hand"
                />
                <Exam_props
                    name="Headphones"
                    price="199$"
                    description="Experience high-quality sound with noise cancellation"
                />
                <Exam_props
                    name="Smartwatch"
                    price="299$"
                    description="Track your health and notifications on the go"
                />
            </Product>
        </> 
    )
}