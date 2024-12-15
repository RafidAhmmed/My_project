export function Product({children}){
    return(
        <div id="product" className="w-full h-screen bg-gray-100 relative">
            <h1 className="text-2xl md:text-3xl font-bold text-center pt-8">Product List</h1>
            <div className="justify-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 p-6 md:p-8 lg:p-10 px-16 lg:px-28">
            {children}
            </div>
            <button className="absolute bottom-4 right-4 p-2 px-4 rounded-full bg-slate-400">+</button>
        </div>
    );
}