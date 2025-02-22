import NavBar from "../components/NavBar";
import PostItem from "../components/PostItem";
import Stories from "../components/Stories";
import Header from "../components/Header";
import Suggested from "../components/Suggested";

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

const suggestedNames = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "John"
];

const mockSuggested = suggestedNames.map((name, index) => ({
  id: index + 1,
  name,
  profile: ProfilePlaceholder
}));

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col h-screen md:flex-row-reverse">
        <div className="hidden lg:flex lg:flex-col md:w-48 lg:w-52 xl:w-96 md:py-5 md:px-3 gap-y-2">
          <h3 className="text-gray-700 font-semibold text-lg mb-3">
            Suggested for You
          </h3>
          {mockSuggested.map((mock) => (
            <Suggested
              key={mock.id}
              suggestedName={mock.name}
              suggestedProfile={mock.profile}
            />
          ))}
        </div>

        <div className="flex flex-col flex-1 overflow-y-scroll no-scrollbar md:pl-6 md:pt-4 lg:pl-30 xl:pl-40">
          <Header />
          <div className="flex flex-row overflow-x-auto w-full min-h-[100px] md:max-w-[630px] pl-[5px] justify-start items-center p-2 gap-4 no-scrollbar px-3">
            {mockData.map((mock) => (
              <Stories
                className="flex flex-nowrap gap-y-5"
                src={mock.profile}
                name={mock.name}
              />
            ))}
          </div>

          <div className="flex flex-col gap-y-16 py-2 md:pl-20">
            {mockData.map((mock) => (
              <PostItem
                key={mock.id}
                profile={mock.profile}
                caption="Hello World"
                picture={mock.postImage}
                name={mock.name}
              />
            ))}
          </div>
        </div>

        <NavBar icon={"/assets/profile.webp"} />
      </div>
    </>
  );
};

export default Dashboard;
