interface StoriesProps {
  className?: string;
  src: React.ReactNode | string;
  name: string;
}
const Stories = ({ className, src, name }: StoriesProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-w-16">
      <div className="relative p-[2px] rounded-full border-1 border-transparent bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500">
        {src && typeof src === "string" ? (
          <img
            src={src}
            alt="icon"
            className={`rounded-full object-cover size-[56px] ${className}`}
          />
        ) : (
          src
        )}
      </div>
      <span className="flex font-roboto text-xs text-center">{name}</span>
    </div>
  );
};

export default Stories;
