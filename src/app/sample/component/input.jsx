"use client";

import React, { useState } from "react";

export function Input() {
    const [currentDate, setCurrentDate] = useState(new Date(2025, 0, 1)); 

    const [selectedDate, setSelectedDate] = useState(new Date(2025, 0, 1));

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    const startDayOffset = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const monthName = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    const goToPreviousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const goToNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const handleDateInput = (e) => {
        const inputDate = new Date(e.target.value);
        setCurrentDate(new Date(inputDate.getFullYear(), inputDate.getMonth(), 1));
        setSelectedDate(inputDate);
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    return (
        <>
            <div className="mt-10">
                <input
                    placeholder="Set a date"
                    label="date"
                    type="date"
                    className="h-10 w-56 border border-black rounded-lg p-1 px-4 focus:ring-2 focus:ring-gray-300 focus:outline-none focus:bg-slate-200 hover:cursor-pointer flex flex-auto justify-center items-center mx-auto"
                    onChange={handleDateInput}
                />
            </div>
            <p className="flex flex-auto justify-center items-center mx-auto text-2xl space-x-4 p-1">
                <button
                    className="rounded-full px-3 py-1 bg-slate-200 hover:bg-slate-300"
                    onClick={goToPreviousMonth}
                >&lt;</button>
                <span>{monthName}, {year}</span>
                <button
                    className="rounded-full px-3 py-1 bg-slate-200 hover:bg-slate-300"
                    onClick={goToNextMonth}
                >&gt;</button>
            </p>
            <div className="grid grid-cols-7 gap-2 mt-4 h-auto w-2/3 items-center justify-center mx-auto">
                {dayNames.map((day, index) => (
                    <div key={index} className="p-2 border border-gray-300 text-center font-bold">
                        {day}
                    </div>
                ))}
                {Array.from({ length: startDayOffset }).map((_, i) => (
                    <div key={`empty-${i}`} className="p-2 border border-gray-300 text-center h-10">
                        {}
                    </div>
                ))}
                {Array.from({ length: daysInMonth }, (_, i) => {
                    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i + 1);
                    const isSelected = 
                        date.getFullYear() === selectedDate.getFullYear() &&
                        date.getMonth() === selectedDate.getMonth() &&
                        date.getDate() === selectedDate.getDate();

                    return (
                        <div
                            key={i}
                            className={`p-2 border border-gray-300 text-center h-10 hover:cursor-pointer ${isSelected ? "bg-slate-500 font-bold" : ""}`}
                            onClick={() => handleDateClick(date)}
                        >
                            <div>{i + 1}</div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}





















// export function Input ({place_holder, onchange,value,type}) {
//     return(
//         <div className="p-2 pl-4">
//             <input className="h-10 w-56 p-1 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none focus:bg-slate-300 hover:cursor-pointer"
//             type={type}
//             placeholder={place_holder}
//             value={value}
//             onChange={onchange}
//             >
//             </input>
//         </div>
//     );
// }