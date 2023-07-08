import React from "react";

const RecepiePreview = () => {
    return (
        <div className="rounded-md bg-gray-200 p-4 hover:drop-shadow-lg cursor-pointer">

            <div className="max-w-[400px] max-h-[300px] overflow-hidden rounded-md">
                <img
                    className="object-cover w-full h-full"
                    src="https://media1.popsugar-assets.com/files/thumbor/q_eu4G_Yfvd1qUU7rkJYpC9Qalk/0x532:1560x2092/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/11/18/102/n/1922729/2010a3325dd3450317e273.27544324_/i/healthy-meal-prep-dinner-recipes.jpg"
                    alt=""
                />
            </div>

            <div className="bg-darkerRedColor text-white p-2 w-fit text-[18px]">
            ABCDABCDABCDABCD
            </div>
        </div>
    )
}


export default RecepiePreview