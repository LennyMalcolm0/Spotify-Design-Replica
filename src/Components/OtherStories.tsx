const OtherStories = () => {
    return ( 
        <div className="max-w-[1400px] w-full mx-auto px-[60px] md:px-[30px] sm:px-[15px] grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-16">
            <div className="story-card group h-fit hover:cursor-pointer">
                <img src="Images\Collaboration Secrets(story).svg" alt="" className="w-full" />
                <div className="peer w-fit py-px px-1.5 mt-2.5 mb-1 bg-black text-[14px] text-white hover:opacity-50 uppercase">BEHIND THE SCENES</div>
                <div className="w-full text-[24px] sm:text-[18px] leading-6 group-hover:underline peer-hover:no-underline">Collaboration Secrets: Design X Engineering</div>
                <div className="w-full mt-2 text-[14px] font-normal leading-5 tracking-tight">Learn how engineers and designers collaborate at Spotify: what works well, what can go wrong... and everything in between!</div>
            </div>
        </div>
     );
}
 
export default OtherStories;