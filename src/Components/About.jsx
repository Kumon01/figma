import { Button } from "flowbite-react";
import pp from "../assets/pp.jpg";

const About = () => {
    return (
        <div
            id="About"
            className="flex flex-col md:flex-row items-center px-4 pt-4 h-screen justify-center"
        >
            
            <div className="flex flex-col items-center md:items-start md:mr-8">
                <h5 className="mb-4 text-2xl font-medium text-gray-900 dark:text-white text-center md:text-left">
                    About me
                </h5>
                <img
                    alt="Profile Image"
                    src={pp}
                    className="rounded-full shadow-lg w-48 h-48 object-cover"
                />
            </div>

         
            <div className="pt-16 flex-1 mt-4 md:mt-0 text-center md:text-left">
                <p className="text-gray-700 dark:text-gray-300">
                    Siswa SMK jurusan Rekayasa Perangkat Lunak Dan Gim yang antusias dalam
                    dunia pemrograman dan pengembangan perangkat lunak. Memiliki
                    pemahaman dasar dalam bahasa pemrograman seperti JavaScript,
                    PHP,HTML,CSS,dan lain-lain, serta pengalaman dengan beberapa proyek kecil
                    untuk memperkuat keahlian. Bersemangat untuk mengembangkan
                    keterampilan dan mencari peluang untuk mendapatkan pengalaman nyata
                    di dunia kerja sebagai Software Engineer.
                </p>

             
                <div className="flex flex-col items-start px-4 pt-4 mt-5">
                    <h5 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                        Skills
                    </h5>
                    <div className="flex flex-wrap gap-2">
                        
                        <Button gradientMonochrome="failure">HTML</Button>
                        <Button gradientMonochrome="cyan">CSS</Button>
                        <Button gradientMonochrome="purple">PHP</Button>
                        <Button gradientMonochrome="info">React</Button>
                        <Button gradientMonochrome="lime">JavaScript</Button>
                        <Button gradientMonochrome="teal">Tailwind CSS</Button>
                        <Button gradientMonochrome="pink">Laravel</Button>
                        
                    </div>
                    {/* <h5 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                        Tools
                    </h5>
                    <div className="flex flex-wrap gap-2">
                        
                        <Button gradientMonochrome="failure">HTML</Button>
                        <Button gradientMonochrome="cyan">CSS</Button>
                        <Button gradientMonochrome="purple">PHP</Button>
                        <Button gradientMonochrome="info">React</Button>
                        <Button gradientMonochrome="lime">JavaScript</Button>
                        <Button gradientMonochrome="teal">Tailwind CSS</Button>
                        <Button gradientMonochrome="pink">Laravel</Button>
                        
                    </div> */}
                </div>
                
            </div>
        </div>
    );
};

export default About;
