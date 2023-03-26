import NavBar from '../GeneralComponents/NavBar';

const ToolsPage = () => {
    return ( 
        <div className="Tools bg-[#FEE819]">
            <NavBar logoUrl="Images\Spotify Logo Black.svg" color="black" activeLink="Tools" />

            <div className="top-bg-shape absolute left-[-20px] sm:left-0">
                <img src="background-shapes\Tools-top-bg.svg" alt="" className="" draggable="false" />
            </div>
            <div className="relative">
                <div className="text-[152px] md:text-[90px] sm:text-[64px] flex justify-center pt-[130px]">Team</div>
                <div className="sm:w-[90%] text-center text-[30px] md:text-[26px] sm:text-[22px] mt-[30px] ">The design resources we rely on.</div>
            </div>
        </div>
     );
}
 
export default ToolsPage;