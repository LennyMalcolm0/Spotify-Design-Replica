import './Components.css';

const Inbox = () => {
    return ( 
        <div className="Inbox">
            <div className="w-full inbox-h bg-black text-white">
                <div className="w-full max-w-[1400px] mx-auto px-[60px] md:px-[30px] sm:px-[15px] md:flex flex-col items-center md:text-center">
                    <div className="w-[75%] md:w-[90%] pt-[120px] sm:pt-[80px] text-[62px] md:text-[55px] sm:text-[42px] leading-[69px] md:leading-[59px] sm:leading-[45px]">Want Spotify Design updates sent straight to your inbox?</div>

                    <div className="w-[500px] md:w-[90%] sm:w-full mt-[200px] xl:mt-[140px] md:mt-[80px] float-right md:float-none">
                        <div className="w-full md:w-[400px] max-w-full mx-auto flex items-center justify-between border-b-2 border-white">
                            <input type="text" placeholder="We saved a spot for your email" className="
                                w-[85%] leading-[48px] text-[24px] md:text-[20px] sm:text-[18px] text-white font-normal bg-black focus:outline-none placeholder:text-white" />
                            <div className="text-[14px] cursor-pointer">SEND</div>
                        </div>
                        
                        <div className="w-full mt-[120px] md:mt-[200px] sm:mt-[80px] mb-[60px] text-[14px] text-[#837e7e] leading-[18px] font-normal">
                            By clicking send you'll receive occasional emails from Spotify Design. You always have the choice to unsubscribe within every email you receive.
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Inbox;