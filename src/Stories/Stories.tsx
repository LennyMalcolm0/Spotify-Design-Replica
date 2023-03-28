import './Stories.css';
import NavBar from '../GeneralComponents/NavBar';
import PickCategory from '../GeneralComponents/PickCategory';
import { stories } from '../AppData/Data';
import ViewMore from '../GeneralComponents/ViewMore';
import Inbox from '../GeneralComponents/Inbox';
import StoriesComponent from '../GeneralComponents/StoriesComp';
import Footer from '../GeneralComponents/Footer';

const StoriesPage = () => {
    return ( 
        <div className="Stories">
            <NavBar logoUrl="Images\Spotify Logo Black.svg" color="black" activeLink="Stories" />

            <div className="top-bg-shape absolute left-[-5vw] sm:left-0">
                <img src="background-shapes\stories-top-bg.svg" alt="" className="" draggable="false" />
            </div>

            <div className="absolute inset-0 h-fit w-full">
                <PickCategory pageTextColor="text-black" />

                <div className="w-full max-w-[2000px] mx-auto px-[60px] md:px-[30px] sm:px-[15px] ">
                    <div className="relative grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-16 md:gap-y-8 mt-[100px] md:mt-[50px]">
                        {stories.map((item, index) => (
                            <div key={index}>
                                <StoriesComponent imageSrc={item.imageSrc} theme={item.theme} listenTheme={item.listenTheme} heading={item.heading} info={item.info} />
                            </div>
                        ))}
                    </div>

                    <ViewMore 
                        actionText="View more stories" textColor1="black" textColor2="white" 
                        arrowDirection="down" compClass="flex mt-[60px] mb-[100px] md:my-[30px]"
                    />
                </div>
                
                <Inbox />
                
                <Footer imgSrc="Images\Spotify Logo Black.svg" textColor="black" arrowHoverColor="white" />
            </div>
        </div>
     );
}
 
export default StoriesPage;