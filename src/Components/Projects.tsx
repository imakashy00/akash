

const Projects = () => {
    return (
        <div className='flex w-3/4 h-[750px] m-auto  flex-col'>
            <div className='flex flex-row justify-between  w-1.0 h-[750px] '>
                <div className='flex relative w-[72%] justify-between flex-col'>
                    <div className=' relative flex items-center justify-center h-[600px] bg-[#202028] shadow-2xl  p-5'>
                        <h1 className='text-white text-5xl font-bold'>//FLASHX//</h1>
                    </div>
                    <div className='relative h-[120px] border-lime-500 p-3 bg-[#202028]  shadow-2xl'>
                        <h1 className='text-white text-5xl font-bold'>
                            FLASHX: An app that helps you to learn your concepts in a fun way.
                        </h1>
                    </div>
                </div>
                <div className=' relative flex w-[25%] h-[750px] items-center flex-col bg-[#202028]  shadow-2xl p-5'>
                    <h1 className='mt-[4rem] text-amber-500 font-bold text-4xl'>
                        TECH STACK
                    </h1>
                    <h3 className=' mt-5 text-white text-3xl'>
                        FRONTEND
                    </h3>
                    <ul className='text-white text-2xl pl-[4rem]'>
                        <li>-REACT</li>
                        <li>-RECOIL</li>
                        <li>-TAILWINDCSS</li>
                    </ul>
                    <h3 className=' mt-5 text-white text-3xl'>
                        BACKEND
                    </h3>
                    <ul className='text-white text-2xl pl-[4rem]'>
                        <li>-TYPESCRIPT</li>
                        <li>-EXPRESS</li>
                        <li>-TURBOREPO</li>
                    </ul>
                    <h3 className=' mt-5 text-white text-3xl'>
                        DATABASE
                    </h3>
                    <ul className='text-white text-2xl pl-[4rem]'>
                        <li>-POSTGRESQL</li>
                        <li>-PRISMA</li>
                        <li>-MONGODB</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Projects;