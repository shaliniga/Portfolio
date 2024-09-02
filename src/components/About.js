import Aboutpic from '../assets/about.png'
import '../App.css';

export default function About(){
    return(
        <section id='about' className='bg-head flex flex-col md:flex-row'>
                <img className='w-full md:w-1/2 flex' src={Aboutpic} alt='shalini-image'/>
            <div className=' w-full md:w-1/2 text-center text-2xl pb-5 md:py-20 px-10 md:pr-10 text-white'>
                <h1 className='text-center text-3xl bg-secondary text-red-600 mb-3 font-anton-font w-[100px] mx-auto'>My Self</h1>
                <p className='py-2'>I am a Full Stack Web developer in <a className= 'text-white hover:text-yellow-300 bg-black px-2' href='https://www.linkedin.com/company/forbes-advisor/'>Forbes Advisor</a></p>
                <p>As I have selected for an Internship in Forbes Advisor Company via VIT College Campus placement. And I have learned creating wordpress website using Php, JavaScript, React Js and more.After completed my 6 months Internship I am converted to Full time Associate Software Engineer.</p><br/>
                <p>I began my work journey here and currently serve as a Full Stack Web Developer at Forbes Advisor. As a Backend Developer I manage WordPress sites like <a className= 'text-blue-500 hover:text-yellow-300 ' href='https://www.usatoday.com/'>USA Today,</a> <a className= 'text-red-500 hover:text-yellow-300 ' href='https://edition.cnn.com/'> CNN </a> and <a className= 'text-purple-500 hover:text-yellow-300 ' href='https://www.forbes.com/advisor/in/'>Forbes Advisor</a>. My work includes developing essential Gutenberg blocks, Themes, building templates and creating plugins using PHP, JavaScript, JSX, React.js, and Tailwind CSS. I also use Git for version control.</p>
                <br/>
                <p>In addition to this, I am proficient in Java, Python and SQL programming languages.</p>
            </div>
        </section>
    );
}