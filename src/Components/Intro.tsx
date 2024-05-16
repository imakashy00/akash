import akashImage from '../assets/Akash.png';
import githubImage from '../assets/github.png';
import linkedinImage from '../assets/linked.png';
import xImage from '../assets/twitter-x.png';

const Intro = () => {
    return (
        <div className="flex flex-row items-center justify-between px-1 mt-[3rem] w-3/4 m-auto h-auto">
            <div className="grid w-[52%]h-auto">
                <h3 className="text-5xl text-white">Hello! I am</h3>
                <div className='flex flex-row'>
                    <div className='w-16 py-5 items-center justify-center my-auto'>
                        <div className='w-[60px] h-[20px] bg-amber-500'></div>
                    </div>
                    <div className='flex flex-col items-start'>
                        <h1 className='text-amber-500 text-[6rem] font-bold'>AKASH YADAV</h1>
                    </div>
                </div>
                <div className='flex flex-col w-1.0 items-start pl-[4rem] justify-center'>
                    <div className='text-white text-[4rem] font-bold'>
                        WEB DEVELOPER
                    </div>
                    <h3 className='text-white text-3xl'>
                        Full Stack developer in React and <br/>
                        TypeScript stack
                    </h3>
                </div>
                <div className='pl-[4rem]'>
                    <button className='text-amber-500 border border-white rounded-3xl text-2xl py-2 px-5 my-5 '>Resume!</button>
                </div>
            </div>
            <div className="flex w-[48%] h-auto ">
                <div
                    className='absolute top-[250px] left-[1450px] w-[100px] h-[100px] bg-[#202025] z-20 border-amber-500 border-2 rounded-full'>
                    <img className='m-auto absolute top-[-3px] left-[0px] w-[100px] h-[100px]' src={githubImage} onClick={moveGithub}
                         alt='github'/>
                </div>
                <div
                    className='absolute top-[460px] left-[1610px] w-[100px] h-[100px] bg-[#202025] z-20 border-amber-500 border-2 rounded-full'>
                    <img className='m-auto absolute top-[8px] left-[8px] w-[80px] h-[80px]' src={linkedinImage} onClick={moveLinkedIn}
                         alt='github'/>
                </div>
                <div
                    className='absolute top-[700px] left-[1600px] w-[100px] h-[100px] bg-[#202025] z-20 border-amber-500 border-2 rounded-full'>
                    <img className='m-auto absolute top-[12px] left-[12px] w-[70px] h-[70px]' src={xImage} onClick={moveX}
                         alt='github'/>
                </div>
                <div
                    className='bg-transparent relative top-[20px] border-amber-500 border-2 rounded-full w-[700px] h-[700px]'></div>
                <img className='absolute bottom-0 w-[550px] h-[600px] z-1' src={akashImage} alt='akash'></img>
            </div>
        </div>
    );
};

export default Intro;

const moveX=():void=>{
    window.open('https://twitter.com/imakashy00', '_blank');
}
const moveLinkedIn=():void=>{
    window.open('https://www.linkedin.com/in/akash-yadav-9807a51b4/', '_blank');
}
const moveGithub=():void=>{
    window.open('https://github.com/imakashy00', '_blank');
}