import NavBar from '../GeneralComponents/NavBar';
import PickCategory from '../GeneralComponents/PickCategory';
import { musicGenre, listenStories } from '../AppData/Data';
import ViewMore from '../GeneralComponents/ViewMore';
import Inbox from '../GeneralComponents/Inbox';
import StoriesComponent from '../GeneralComponents/StoriesComp';
import Footer from '../GeneralComponents/Footer';

const ListenPage = () => {

    return ( 
        <div className="Listen">
            <NavBar logoUrl="Images\Spotify Logo White.svg" color="white" activeLink="Listen" />

            <div className="absolute inset-0 bg-black h-fit w-screen overflow-hidden">
                <PickCategory textColor="white" bgColor="black" />

                <div className="w-full max-w-[2000px] mx-auto px-[60px] md:px-[30px] sm:px-[15px]">
                    <div className="w-full text-center text-[32px] md:text-[28px] sm:text-[24px] text-white mt-[60px] sm:mt-[20px]">Playlists, podcasts, and other audio goodness from our team.</div>
                    <div className="w-full overflow-hidden">
                        <div className="w-fullsm:mr-[30px] flex flex-wrap sm:flex-nowrap justify-center sm:justify-start gap-3 my-[20px]">
                            {musicGenre.map((genre, index) => (
                                <div key={index} className="px-[4px] sm:px-[8px] sm:p-[4px] border-2 border-solid border-[#CCF566] text-[#CCF566] text-[14px] whitespace-nowrap cursor-pointer">{genre}</div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-16 md:gap-y-8 mt-[100px] md:mt-[50px]">
                        {listenStories.map((item, index) => (
                            <div key={index}>
                                <StoriesComponent 
                                    imageSrc={item.imageSrc} 
                                    listenTheme={item.listenTheme} 
                                    heading={item.heading} 
                                    info={item.info}
                                />
                            </div>
                        ))}
                    </div>
                    
                    <ViewMore 
                        actionText="View more stories" 
                        textColor1="white" 
                        textColor2="black" 
                        arrowDirection="down" 
                        compClass="flex mt-[60px] sm:mt-[30px]"
                    />
                </div>
                
                <Inbox />

                <Footer 
                    logoSrc="Images\Spotify Logo White.svg" 
                    textColor="white" 
                    arrowHoverColor="black" 
                />
            </div>
        </div>
     );
}
 
export default ListenPage;