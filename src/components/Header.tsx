import Button from "../components/Button";
import Text from "../components/Text"
import { ChevronDown, Heart, MessageCircle } from 'lucide-react';

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full md:hidden px-2 py-2 sticky top-0 z-10 bg-white">
        <div className='flex flex-row items-end gap-2'>
          <Text
            className="font-cursive tracking-tight text-3xl"
            text="Instagram"
          />
          <ChevronDown className='w-4 h-4'/>
        </div>
          <div className="flex flex-row flex-shrink-0 gap-4">
            <Button
              className=" h-auto w-auto" 
              iconClassName="w-7 h-7"
              icon={<Heart/>}
            />
            <Button
              className="h-auto w-auto"
              icon={<MessageCircle/>}
              iconClassName=" h-6 w-7"
            />
          </div>
        </div>
  )
}

export default Header