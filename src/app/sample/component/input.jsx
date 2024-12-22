export function Input ({place_holder, onchange,value,type}) {
    return(
        <div className="p-2 pl-4">
            <input className="h-10 w-56 p-1 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none focus:bg-slate-300 hover:cursor-pointer"
            type={type}
            placeholder={place_holder}
            value={value}
            onChange={onchange}
            >
            </input>
        </div>
    );
}