import NavBar from '../GeneralComponents/NavBar';
import { toolStories } from '../AppData/Data';
import StoriesComponent from '../GeneralComponents/StoriesComp';

const ToolsPage = () => {
    return ( 
        <div className="Tools bg-[#FEE819] h-full">
            <NavBar logoUrl="Images\Spotify Logo Black.svg" color="black" activeLink="Tools" />

            <div className="top-bg-shape absolute left-[-20px] sm:left-0">
                <img src="background-shapes\Tools-top-bg.svg" alt="" className="h-full" draggable="false" />
            </div>
            <div className="relative">
                <div className="text-[152px] md:text-[90px] sm:text-[64px] flex justify-center pt-[130px]">Tools</div>
                <div className="sm:w-[90%] text-center text-[30px] md:text-[26px] sm:text-[22px] mt-[30px] ">The design resources we rely on.</div>
            </div>
            <div className="w-full max-w-[2000px] mx-auto px-[60px] md:px-[30px] sm:px-[15px] ">
                <div className="relative grid grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-16 mt-[100px]">
                    {toolStories.map((item, index) => (
                        <div key={index}>
                            <StoriesComponent imageSrc={item.imageSrc} theme={item.theme} heading={item.heading} info={item.info} />
                        </div>
                    ))}
                </div>

                {/* <div className="flex justify-between mt-[60px] mb-[100px]">
                    <div></div>
                    <ViewMore text="View more stories" textColor1="black" textColor2="white" arrowDirection="down" />
                </div> */}
            </div>
        </div>
     );
}
 
export default ToolsPage;