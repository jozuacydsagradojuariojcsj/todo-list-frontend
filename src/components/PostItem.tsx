import React from "react";
import { Bookmark, Ellipsis, Heart, MessageCircle, Share } from "lucide-react";

interface PostItemProps {
  name: string;
  picture: string[] | string;
  caption: string;
  profile: React.ReactNode | string;
  key: number;
}

const PostItem = ({ name, picture, caption, profile, key }: PostItemProps) => {
  console.log(picture.length);

  const firstImage = Array.isArray(picture) ? picture[0] : picture;

  return (
    <div
      key={key}
      className="flex flex-col justify-center w-screen less-sm:max-w-[468px] sm:w-[470px]"
    >
      <div className="flex flex-row-reverse justify-between p-2">
        <Ellipsis />
        <div className="flex flex-row-reverse gap-2 text-xs md:text-[10px] lg:text-xs xl:text-sm font-noto font-semibold">
          {name}

          {profile && typeof profile === "string" ? (
            <div data-carousel="slide ">
              <img
                src={profile}
                alt="icon"
                className={`rounded-full object-cover size-[32px] ${profile}`}
              />
            </div>
          ) : (
            profile
          )}
        </div>
      </div>
      {Array.isArray(picture) && picture.length > 1 ? (
        <div className="carousel w-full">
          {picture.map((img, index) => (
            <div id={index} className="carousel-item relative w-full bg-black">
              <img
                key={index}
                src={img}
                alt="icon"
                className={`object-contain w-screen h-[468.75px] sm:w-[468px] sm:h-[585px]`}
              />
            </div>
          ))}
        </div>
      ) : (
        <img
          src={firstImage}
          alt="icon"
          className={`object-cover w-screen h-[468.75px] sm:w-[468px] sm:h-[585px]`}
        />
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
