export function PricingPlans() {
    return (
        <div id="pricing" className="bg-slate-100 pt-6 md:pt-10 px-1 md:px-3 pb-10 md:pb-16">
            <p className="font-bold text-2xl md:text-4xl pb-7 md:pb-10 text-center">Pricing Plans</p>
            <div className="md:px-20 border-collapse">
                <table className="w-full text-xl shadow-lg rounded-2xl m-3">
                    <thead className="bg-blue-700 text-white text-center">
                        <tr>
                            <th className="w-1/4 rounded-tl-2xl p-2 md:p-4">Package</th>
                            <th className="w-1/2 p-2 md:p-4">Features</th>
                            <th className="w-1/4 p-2 md:p-4 rounded-tr-2xl">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-2 md:px-4 border-b text-center">Standard</td>
                            <td className="py-2 px-2 md:px-4 pl-10 md:pl-20 border-b">
                                <ul className="list-disc">
                                    <li>3 Nights Accommodation</li>
                                    <li>City Tour</li>
                                </ul>
                            </td>
                            <td className="py-2 px-2 md:px-4 border-b text-center">$499</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-2 md:px-4 text-center">Deluxe</td>
                            <td className="py-2 px-2 md:px-4 pl-10 md:pl-20">
                                <ul className="list-disc">
                                    <li>5 Nights Accommodation</li>
                                    <li>All Meals Included</li>
                                    <li>Private Guide</li>
                                </ul>
                            </td>
                            <td className="py-2 px-4 text-center">$999</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}