import './Home.css';

const HomePage = () => {

    // let aray = [2,3,4,5,6,7,8,9];
    // for (let i = )

    return ( 
        <div className="Home">
            <div className="random-stories">
                <div className="controls">
                    <div><img src="icons\forward.svg" alt="" /></div>
                    <div><img src="icons\backward.svg" alt="" /></div>
                    <div><img src="icons\shuffle.svg" alt="" /></div>
                </div>
                <div className="story-text">
                    <div className="theme">BEHIND THE SCENES</div>
                    <div className="info">Making Moves: Designing Motion for 2022 Wrapped</div>
                </div>
                <div className="story-image">
                    <img src="Images\Collaboration Secrets(story).svg" alt="" />
                </div>
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