import React from "react";
import { Bookmark, Ellipsis, Heart, MessageCircle, Share } from "lucide-react";


interface PostItemProps {
  name: string;
  picture: string;
  caption: string;
  profile: React.ReactNode | string;
  key: number;
}

const PostItem = ({ name, picture, caption, profile,key }: PostItemProps) => {
  return (
    <div key={key} className="flex flex-col justify-center w-[468px]">
      <div className="flex flex-row-reverse justify-between p-2">
        <Ellipsis/>
        <div className="flex flex-row-reverse gap-2 text-xs md:text-[10px] lg:text-xs xl:text-sm font-noto font-semibold">
          {name}

          {profile && typeof profile === "string" ? (
            <img
              src={profile}
              alt="icon"
              className={`rounded-full object-cover size-7 md:size-8 lg:size-9 xl:size-10 ${profile}`}
            />
          ) : (
            profile
          )}
        </div>
      </div>
      {picture && typeof picture === "string" ? (
        <img
          src={picture}
          alt="icon"
          className={`object-cover w-screen h-[350px] md:h-[400px]`}
        />
      ) : (
        picture
      )}

      <div className="flex flex-row justify-between py-2 px-3">
        <div className="flex flex-row gap-3">
          <Heart className="" />
          <MessageCircle />
          <Share />
        </div>
        <Bookmark />
      </div>
      <div className="text-xs md:text-[10px] lg:text-xs xl:text-sm font-roboto px-3">
        {caption}
      </div>
      
      
    </div>
  );
};

export default PostItem;
