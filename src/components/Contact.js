import '../App.css';

export default function Contact(){
    return(
        <section className='bg-head flex flex-col' id='contact'>            
            <div className=' w-full text-center text-2xl p-5 md:py-20 text-white'>
                <h1 className='text-center text-3xl bg-secondary text-red-600 mb-3 font-anton-font w-[100px] mx-auto'> Contact </h1>
                <p> If you want to discuss more in detail, please contact me... </p>
                <p className='py-2 font-bold'>Email : <span> shalini.g9995@gmail.com</span></p>
            </div>
        </section>
    );
}