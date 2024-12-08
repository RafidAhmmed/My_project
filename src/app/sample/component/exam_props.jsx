export function Exam_props({ name , price , description }){
    return(
    <div className="bg-white w-full h-full p-4 shadow-lg  rounded-md">
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="text-lg">{price}</p>
        <p className="text-base">{description}</p>
    </div>  
    );
}