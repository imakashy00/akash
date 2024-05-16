import natureImage from '../assets/img.png';

const Blogs = () => {
    return (
        <div className='flex w-3/4 h-[750px] m-auto  flex-row'>
            <div className='flex flex-col relative w-1/2 h-1.0  pl-[5rem] pt-[5rem] text-white'>
                <h1 className='text-5xl'>Heading of blog 1</h1>
                <div className='flex flex-wrap mt-5'>
                    <div>
                        <img src={natureImage} alt='nature' className='w-[500px] h-[300px]' />
                    </div>
                    <p className='text-2xl'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum
                        et, consequat nibh. Donec auctor nunc in nunc tincidunt, vel egestas nulla fermentum. Nullam ut
                        aliquam leo. Nullam sit amet nunc in nunc tincidunt, vel egestas nulla fermentum. Nullam ut
                        aliquam leo.
                    </p>
                </div>
            </div>
            <div className='flex flex-col relative w-1/2 h-1.0  pl-[5rem] pt-[5rem] text-white'>
                <h1 className='text-5xl'>Heading of blog 2</h1>
                <div className='flex flex-wrap mt-5'>
                    <div>
                        <img src={natureImage} alt='nature' className='w-[500px] h-[300px]'/>
                    </div>
                    <p className='text-2xl'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum
                        et, consequat nibh. Donec auctor nunc in nunc tincidunt, vel egestas nulla fermentum. Nullam ut
                        aliquam leo. Nullam sit amet nunc in nunc tincidunt, vel egestas nulla fermentum. Nullam ut
                        aliquam leo.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;