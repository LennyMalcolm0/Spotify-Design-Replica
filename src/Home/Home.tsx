import './Home.css';
import OtherStories from '../Components/OtherStories';
import ListenStories from '../Components/ListenStories';

const HomePage = () => {

    // let aray = [2,3,4,5,6,7,8,9];
    // for (let i = )

    return ( 
        <div className="Home">
            <div className="Home-container">
                <div className="random-stories">
                    <div className="story-images">
                        <div className="controls-position1 controls">
                            <div><img src="icons\forward.svg" alt="" /></div>
                            <div><img src="icons\backward.svg" alt="" /></div>
                            <div><img src="icons\shuffle.svg" alt="" /></div>
                        </div>
                        <div className="animated-image"><img src="Images\Collaboration Secrets(story).svg" alt="" /></div>
                    </div>
                    <div className="story-text w-[500px]">
                        <div className="theme">BEHIND THE SCENES</div>
                        <div className="info">Making Moves: Designing Motion for 2022 Wrapped</div>
                    </div>
                    <div className="controls-position2 controls">
                        <div><img src="icons\forward.svg" alt="" /></div>
                        <div><img src="icons\backward.svg" alt="" /></div>
                        <div><img src="icons\shuffle.svg" alt="" /></div>
                    </div>
                </div>

                <div className="controls-position3">
                    <div><img src="icons\backward.svg" alt="" /></div>
                    <div><img src="icons\forward.svg" alt="" /></div>
                    <div><img src="icons\shuffle.svg" alt="" /></div>
                </div>
                <div className="timer-scroll">
                    <div className="count-down">
                        <div className="start">01</div>
                        <div className="progress-bar">
                            <div className="full"></div>
                            <div className="empty"></div>
                        </div>
                        <div className="end">15</div>
                    </div>
                    <div className="scroll-down">
                        <span>SCROLL DOWN</span>
                        <div><img src="icons\scroll-down.svg" alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[1400px] mt-[50px] mb-[30px] mx-auto px-[60px] flex items-center justify-between">
                <div className="text-[32px]">New Releases</div>
                <div className="flex items-center group text-[14px] cursor-pointer">
                    <div className="mb-[5px] uppercase group-hover:underline decoration-double">View all stories</div>
                    <div className="w-6 h-6 ml-[5px] rounded-full border-[1px] border-black border-solid transition-all duration-200 group-hover:bg-black flex items-center justify-center">
                        <i className="fa-solid fa-arrow-right group-hover:text-white"></i>
                    </div>
                </div>
            </div>
            <OtherStories />
            <ListenStories />
        </div>
     );
}
 
export default HomePage;


// var uniqueInOrder=function(iterable){
//     let charArrray,
//     charRoom = {},
//     output = [];

//     if (Array.isArray(iterable)) {
//         charArrray = iterable;
//     } else {
//         charArrray = Array.from(iterable);
//     };

//     charArrray.forEach(value => {
//         charRoom[value] ? charRoom[value]++ : charRoom[value] = 1;
//     });

//     for (let item in charRoom) {
//         output.push(item);
//     }

//     return output;
// }