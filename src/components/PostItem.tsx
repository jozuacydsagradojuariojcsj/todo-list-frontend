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
    <div key={key} className="flex flex-col justify-center">
      <div className="flex flex-row-reverse justify-between p-2">
        <Ellipsis/>
        <div className="flex flex-row-reverse gap-2 font-noto font-semibold">
          {name}

          {profile && typeof profile === "string" ? (
            <img
              src={profile}
              alt="icon"
              className={`rounded-full object-cover w-8 h-8 ${profile}`}
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
          className={`object-cover w-screen h-96 ${picture}`}
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
      <div className="px-3">
        {caption}
      </div>
      
      
    </div>
  );
};

export default PostItem;
