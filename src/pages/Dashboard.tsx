import Button from "../components/Button";
import Divider from "../components/Divider";
import NavBar from "../components/NavBar";
import PostItem from "../components/PostItem";
import Stories from "../components/Stories";
import Text from "../components/Text";
const Camera = "/assets/Camera Icon.svg";
const IGTV = "/assets/IGTV.svg";
const Airplane = "/assets/Shape.svg";

const StoryImagePlaceholder = "/assets/Login Art.svg";
const ProfilePlaceholder = "/assets/profile.webp";

const names = ["Alice", "Bob", "Charlie", "David", "John", "Wazzap", "Mga", "Bugo "];

const mockData = names.map((name, index) => ({
  id: index + 1,
  name,
  profile: ProfilePlaceholder,
  postImage: StoryImagePlaceholder,
  postMessage: names
}))


const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col w-screen h-screen md:flex-row-reverse">
        <div className="flex flex-col flex-1 overflow-y-scroll no-scrollbar">

        <div className="flex flex-row items-center justify-between w-full md:hidden">
          <Button
            className="h-full w-auto"
            iconClassName="w-7 h-7"
            icon={Camera}
          ></Button>
          <Text
            className="font-cursive tracking-tight text-3xl"
            text="Instagram"
          />
          <div className="flex flex-row flex-shrink-0 gap-4">
            <Button
              className=" h-auto w-auto"
              iconClassName="w-7 h-7"
              icon={IGTV}
            />
            <Button
              className="h-auto w-auto"
              icon={Airplane}
              iconClassName=" h-6 w-7"
            />
          </div>
        </div>
        <Divider className="opacity-20"/>

        <div className="flex flex-row overflow-x-auto w-full max-w-full min-h-24 justify-start items-center p-2 gap-2">
          {mockData.map(mock => (
            <Stories
              className="flex flex-nowrap gap-y-5"
              src={mock.profile}
              name={mock.name}
            />
          ))}
        </div>
        <Divider className="opacity-20"/>
        <div className="flex flex-col min-h-96 gap-y-5 py-2">
          {mockData.map(mock => (
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

        <NavBar icon={"/assets/profile.webp"}/>
      </div>
    </>
  );
};

export default Dashboard;
