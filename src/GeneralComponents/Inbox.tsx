import './Components.css';

const Inbox = () => {
    return ( 
        <div className="Inbox">
            <div className="w-full intro-h bg-black text-white">
                <div className="w-full max-w-[1400px] mx-auto px-[60px] md:px-[30px] sm:px-[15px]">
                    <div className="text-[62px] w-[75%] pt-[120px] leading-[69px]">Want Spotify Design updates sent straight to your inbox?</div>

                    <div className="w-[500px] mt-[200px] float-right">
                        <div className="w-full flex items-center justify-between border-b-2 border-white">
                            <input type="text" placeholder="We saved a spot for your email" className="
                                w-[85%] leading-[48px] text-[24px] text-white font-normal bg-black focus:outline-none placeholder:text-white" />
                            <div className="text-[14px] cursor-pointer">SEND</div>
                        </div>
                        
                        <div className="w-full mt-[120px] text-[14px] text-[#837e7e] leading-[18px] font-normal">
                            By clicking send you'll receive occasional emails from Spotify Design. You always have the choice to unsubscribe within every email you receive.
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Inbox;