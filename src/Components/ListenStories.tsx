import { Link } from "react-router-dom";

const ListenStories = () => {
    return ( 
        <div className="max-w-[1400px] w-full mt-[100px] mx-auto px-[60px] md:px-[30px] sm:px-[15px] grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-16">
            <div className="story-card group h-fit hover:cursor-pointer">
                <div className="w-full relative">
                    <img src="Images\Collaboration Secrets(story).svg" alt="" className="w-full" />
                    <div className="w-[45px] h-[45px] transition-all duration-200 group-hover:bg-white rounded-full border-2 border-gray-400 border-opacity-40 border-solid text-[14px] absolute bottom-[25px] left-[25px] flex items-center justify-center ">
                        <i className="fa-solid fa-play"></i>
                    </div>
                </div>
                <div className="themes w-fit peer flex flex-wrap gap-x-2 mt-0.5 mb-1">
                    <Link to="/listen"><div className="w-fit py-px px-1.5 mt-2 bg-black text-[14px] whitespace-nowrap text-white hover:opacity-50 uppercase">Listen</div></Link>
                    <div className="w-fit py-px px-1.5 mt-2 bg-[#CCF566] text-black text-[14px] whitespace-nowrap hover:opacity-50 uppercase">Dance</div>
                    <div className="w-fit py-px px-1.5 mt-2 bg-[#CCF566] text-black text-[14px] whitespace-nowrap hover:opacity-50 uppercase">Ambient</div>
                    <div className="w-fit py-px px-1.5 mt-2 bg-[#CCF566] text-black text-[14px] whitespace-nowrap hover:opacity-50 uppercase">Electronic</div>
                </div>
                <div className="w-full text-[24px] sm:text-[18px] leading-6 group-hover:underline peer-hover:no-underline">Collaboration Secrets: Design X Engineering</div>
                <div className="w-full mt-2 text-[14px] font-normal leading-5 tracking-tight">Learn how engineers and designers collaborate at Spotify: what works well, what can go wrong... and everything in between!</div>
            </div>

            <div className="story-card group h-fit hover:cursor-pointer">
                <div className="w-full relative">
                    <img src="Images\Designing Cultural Experiences(story).svg" alt="" className="w-full" />
                    <div className="w-[45px] h-[45px] transition-all duration-200 group-hover:bg-white rounded-full border-2 border-gray-400 border-opacity-40 border-solid text-[14px] absolute bottom-[25px] left-[25px] flex items-center justify-center ">
                        <i className="fa-solid fa-play"></i>
                    </div>
                </div>
                <div className="themes w-fit peer flex flex-wrap gap-x-2 mt-0.5 mb-1">
                    <div className="w-fit py-px px-1.5 mt-2 bg-[#CCF566] text-black text-[14px] whitespace-nowrap hover:opacity-50 uppercase">indie</div>
                    <div className="w-fit py-px px-1.5 mt-2 bg-[#CCF566] text-black text-[14px] whitespace-nowrap hover:opacity-50 uppercase">folk</div>
                    <div className="w-fit py-px px-1.5 mt-2 bg-[#CCF566] text-black text-[14px] whitespace-nowrap hover:opacity-50 uppercase">jazz</div>
                </div>
                <div className="w-full text-[24px] sm:text-[18px] leading-6 group-hover:underline peer-hover:no-underline">Collaboration Secrets: Design X Engineering</div>
                <div className="w-full mt-2 text-[14px] font-normal leading-5 tracking-tight">Learn how engineers and designers collaborate at Spotify: what works well, what can go wrong... and everything in between!</div>
            </div>
        </div>
     );
}
 
export default ListenStories;