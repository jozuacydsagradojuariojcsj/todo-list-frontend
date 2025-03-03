import NavBar from "../components/NavBar";
import PostItem from "../components/PostItem";
import Stories from "../components/Stories";
import Header from "../components/Header";
import Suggested from "../components/Suggested";
import { useGetPostsQuery } from "../services/postApi";

const StoryImagePlaceholder = "/assets/Login Art.svg";
const ProfilePlaceholder = "/assets/profile.webp";

const names = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "John",
  "Wazzap",
  "Mga",
  "Bugo ",
  "Naay",
  "Sakit",
  "Sa Utok",
  "Ah",
  "Samoka",
  "Sad",
  "Kayo",
  "Ani",
  "Oy",
];

const mockData = names.map((name, index) => ({
  id: index + 1,
  name,
  profile: ProfilePlaceholder,
  postImage: StoryImagePlaceholder,
  postMessage: names,
}));

const suggestedNames = ["Alice", "Bob", "Charlie", "David", "John"];

const mockSuggested = suggestedNames.map((name, index) => ({
  id: index + 1,
  name,
  profile: ProfilePlaceholder,
}));

const Dashboard = () => {
  const { data } = useGetPostsQuery();

  return (
    <>
      <div className="flex flex-col h-screen md:flex-row-reverse">
        <div className="flex flex-col justify-center lg:flex-row-reverse flex-1 overflow-y-scroll">
          <div className="hidden mid-lg:flex mid-lg:flex-col mid-lg:w-52 xl:w-96 md:py-5 md:px-3 gap-y-2">
            <h3 className="text-gray-700 font-semibold text-lg mb-3">
              Suggested for You
            </h3>
            {mockSuggested.map((post) => (
              <Suggested
                key={post.id}
                suggestedName={post.name}
                suggestedProfile={post.profile}
              />
            ))}
          </div>

          <div className="flex flex-col overflow-y-auto items-center no-scrollbar md:pl-6 md:pt-4 lg:pl-30 xl:px-40">
            <Header />
            <div className="flex flex-row overflow-x-auto w-full min-h-[100px] sm:max-w-[630px] pl-[5px] justify-start items-center p-2 gap-4 no-scrollbar px-3">
              {mockData.map((mock) => (
                <Stories
                  className="flex flex-nowrap gap-y-5"
                  src={mock.profile}
                  name={mock.name}
                />
              ))}
            </div>

            <div className="flex flex-col items-center gap-y-16 py-2">
              {data?.map((post) => {
                let images: string[] = [];

                try {
                  const parsed = JSON.parse(post.file_path);
                  if (Array.isArray(parsed)) {
                    images = parsed.map((path: string) => 
                      `http://localhost:3000/${path.replace(/\\/g, "/")}`
                    );
                  } else {
                    console.error("Parsed file_path is not an array:", parsed);
                  }
                } catch (e) {
                  console.error("Error parsing image", e);
                }

                return (
                  <PostItem
                    key={post.postid}
                    profile={ProfilePlaceholder}
                    caption={post.caption}
                    picture={images}
                    name={post.username}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <NavBar icon={"/assets/profile.webp"} />
      </div>
    </>
  );
};

export default Dashboard;
