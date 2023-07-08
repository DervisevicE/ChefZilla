import React from "react";
import RecepiePreview from "../RecepiePreview/RecepiePreview";

const LandingPage = () => {
    return (
        <div className="mt-28 flex flex-col items-center m-auto">
            <h1 className="text-4xl text-center mb-8 font-medium">
                Savor the Flavors,
                <br />
                Unleash the
                <span className="text-darkerRedColor text-5xl">
                    Chef
                    <strong>Zilla</strong>
                </span>{" "}
                Within!
            </h1>

            <div className="grid grid-cols-3 gap-4 mx-auto max-w-[1200px]">
                <RecepiePreview/>
                <RecepiePreview/>
                <RecepiePreview/>
                <RecepiePreview/>
                <RecepiePreview/>
                <RecepiePreview/>
            </div>
        </div>
    );
};

export default LandingPage;
