export function Exam_props({ count, name , price , description }){
    return(
    <div className="bg-white w-full h-full p-4 shadow-lg  rounded-md">
        <h1 className="text-center text-5xl font-bold">{count}</h1>
    </div>  
    );
}