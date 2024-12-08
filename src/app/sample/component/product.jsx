export function Product({children}){
    return(
        <div id="product" className="w-full h-screen bg-gray-100">
            <h1 className="text-2xl md:text-3xl font-bold text-center pt-8">Product List</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 p-6 md:p-10 px-30 md:px-48">
            {children}
            </div>
        </div>
    );
}