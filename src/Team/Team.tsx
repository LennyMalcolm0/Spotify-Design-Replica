import NavBar from '../GeneralComponents/NavBar';
import ViewMore from '../GeneralComponents/ViewMore';

const TeamsPage = () => {
    return ( 
        <div className="Teams bg-[black] h-full w-screen text-white">
            <NavBar logoUrl="Images\Spotify Logo White.svg" color="white" activeLink="Team" />

            <div className="absolute top-[30px] sm:top-[10px] left-[50px] md:left-0">
                <img src="background-shapes/(Tools) Top-sec Red Shape.svg" alt="" className="lg:h-[300px] md:h-[250px] sm:h-[200px] " />
            </div>
            <div className="absolute top-[620px] md:top-[550px] right-[150px] lg:right-0 sm:right-[-20px] ">
                <img src="background-shapes\(Tools) Top-sec Blue Shape.svg" alt="" className="-rotate-[20deg] lg:h-[200px] md:h-[150px] " />
            </div>

            <div className="relative">
                <div className="text-[152px] md:text-[90px] sm:text-[64px] flex justify-center pt-[130px]">Team</div>

                <div className="flex justify-center">
                    <div className="w-[730px] md:w-[70%] sm:w-[90%] text-center text-[30px] md:text-[26px] sm:text-[22px] ">
                        We're a cross-disciplinary team that loves to create great experiences and make meaningful connections between listeners and creators. 
                        Learn more about our design community below and browse the latest opportunities on our team.
                    </div>
                    {/* <div className="blue-line absolute top-[130px] left-[360px] "><img src="background-shapes\(Tools) Text blue line.svg" alt="" /></div> */}
                </div>

                <div className="flex justify-center mt-10">
                    <ViewMore text="Join the band" textColor1="white" textColor2="black" arrowDirection="down" />
                </div>
            </div>

            <div className="w-full max-w-[1400px] mx-auto px-[60px] md:px-[30px] sm:px-[15px] mt-[100px] ">
                <div className="text-[30px]">Who we are</div>
                <div className="relative grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-16 mt-[10px]">

                </div>
            </div>
        </div>
     );
}
 
export default TeamsPage;