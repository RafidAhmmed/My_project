export function Background() {
    return (
        <div style={{backgroundImage: "url('./sea.jpg')", backgroundSize: "cover", backgroundPosition: "center",}}
            className="h-[500px] md:h-[650px] text-5xl">
            <div id="home" className="bg-black h-full w-full bg-opacity-60 flex flex-col justify-center items-center">
                <h1 className="text-white text-5xl md:text-7xl tracking-wide pb-5 font-bold text-center">
                    Discover Your Next Adventure
                </h1>
                <p className="text-white text-xl md:text-3xl tracking-wider text-center">
                    Plan your dream vacation with us
                </p>
                <button className="mt-10 px-4 md:px-8 py-2 md:py-4 bg-white text-blue-600 text-lg md:text-xl font-semibold hover:bg-blue-600 hover:text-white transition duration-300 rounded-full">
                    <a href="#destination">Explore Now</a>
                </button>
            </div>
        </div>
    );
}