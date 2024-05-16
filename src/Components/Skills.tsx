


const Skills = () => {
    return (
        <div className='flex justify-between m-auto w-3/4 h-[750px]'>
            <div
                className=' bg-[#202028] w-[400px] h-[500px] mt-[5rem] flex flex-col pl-[50px] pt-[50px] shadow hover:shadow-xl py-2 '>
                <h1 className='text-amber-500 font-bold text-4xl'>
                    LANGUAGES
                </h1>
                <div className='my-5 relative w-[250px] h-auto  '>
                    <ul className='text-3xl text-white leading-10'>
                        <li>JAVA</li>
                        <li>PYTHON</li>
                        <li>JAVASCRIPT</li>
                        <li>TYPESCRIPT</li>
                        <li>POSTGRESQL</li>
                        <li>MONGODB</li>
                    </ul>
                </div>
            </div>
            <div
                className=' bg-[#202028] w-[400px] h-[500px] mt-[5rem] flex flex-col pl-[50px] pt-[50px] shadow hover:shadow-xl py-2 '>
                <h1 className='text-amber-500 font-bold text-4xl'>
                    LIBRARIES
                </h1>
                <div className='my-5 relative w-[250px] h-auto  '>
                    <ul className='text-3xl text-white leading-10'>
                        <li>REACT</li>
                        <li>EXPRESS</li>
                        <li>FASTAPI</li>
                        <li>PRISMA</li>
                        <li>PYTORCH</li>
                        <li>TENSORFLOW</li>
                    </ul>
                </div>
            </div>
            <div
                className=' bg-[#202028] w-[400px] h-[500px] mt-[5rem] flex flex-col pl-[50px] pt-[50px] shadow hover:shadow-xl py-2 '>
                <h1 className='text-amber-500 font-bold text-4xl'>
                    DEVELOPMENT
                </h1>
                <div className='my-5 relative w-[250px] h-auto  '>
                    <ul className='text-3xl text-white leading-10'>
                        <li>WEB APP</li>
                        <li>WEB DESIGN</li>
                        <li>MACHINE LEARNING</li>
                        <li>DATABASE DESIGN</li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;