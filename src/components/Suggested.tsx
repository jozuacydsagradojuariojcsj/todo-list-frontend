import React from "react";
interface SuggestedProps {
  //   currentUserProfile: React.ReactNode | string;
  //   currentUserName: string;
  suggestedProfile: React.ReactNode | string;
  suggestedName: string;
}
const Suggested = ({ suggestedName, suggestedProfile }: SuggestedProps) => {
  return (
    <>
      <div className="flex flex-col justify-center py-[5px] max-w-[315px]">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-x-2">
            {suggestedProfile && typeof suggestedProfile === "string" ? (
              <img
                src={suggestedProfile}
                alt="icon"
                className={`rounded-full object-cover w-6 h-6 lg:w-8 lg:h-8  ${suggestedProfile}`}
              />
            ) : (
              suggestedProfile
            )}

            <div className="flex flex-col">
              <span className="font-roboto font-medium md:text-[10px] lg:text-xs xl:text-sm">
                {suggestedName}
              </span>
              <p className="font-roboto text-xs  text-gray-400 md:text-[10px] lg:text-xs xl:text-sm">
                Follows you
              </p>
            </div>
          </div>
          <p className="font-roboto text-xs  text-sky-700 font-semibold md:text-[10px] lg:text-xs xl:text-sm">Follow</p>
        </div>
      </div>
    </>
  );
};

export default Suggested;
