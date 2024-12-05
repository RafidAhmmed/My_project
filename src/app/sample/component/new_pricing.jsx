import { CustomTable } from "./custom_Table";

    const pricingData = [
        ["Package", "Features", "Price"],
        ["Basic", "2 Nights Stay\nBreakfast Included", "$199"],
        ["Standard", "3 Nights Stay\nCity Tour Included", "$299"],
        ["Deluxe", "5 Nights Stay\nAll Meals\nPrivate Guide", "$599"],
        ["Premium", "7 Nights Stay\nAll Meals\nPrivate Guide\nSightseeing", "$999"],
    ];
export function NewPricing() {
    return (
        <div>
            <CustomTable data={pricingData} />
        </div>
    );
}