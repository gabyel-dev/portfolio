import "./css/base.css"

export default function Skew() {
    return (
        <>
        <div className="__skew_bg__ -z-1 h-120 md:h-110 ">
            <div className="content-wrapper text-center ">
                <div className="flex flex-col gap-6 px-[5vw] md:px-[10vw] text-white mont text-sm pt-25 md:pt-12 lg:pt-4 text-justify md:text-center">
                    <p>
                      Hi, I'm Gabriel Guban, a self-taught Full-Stack Web developer from the Philippines. I'm a First Year BSIT Student. I’ve 
                      been building things on the web since 2024, and over months of coding, I’ve gained a strong love for creating intuitive 
                      and engaging user interfaces using technologies like HTML, CSS, JavaScript, Flask and React.
                    </p>

                    <p>
                    I also enjoy exploring new tools and techniques, and I’m always looking to enhance my skills through personal projects and learning experiences.
                    </p>
                </div>
            </div>

            <div className="__quotes__ w-full flex flex-col md:flex-row gap-5 translate-y-85 px-[5vw] md:px-[10vw] text-[var(--blue)] justify-center items-center md:justify-between pt-30 md:pt-4 lg:pt-0">
            <div className="w-full md:max-w-90 h-fit md:w-90  bg-[var(--bg)] p-7 rounded-lg shadow-lg shadow-black/7 flex flex-col gap-4 hover:-translate-y-4 duration-400 ">
              <p className="text-md font-semibold karla">
                “Simplicity is the best choice to be the best.“
              </p>
              <p className="text-end text-[0.8em] italic mont">
                -gabyel
              </p>
            </div>

            <div className="w-full md:max-w-90 h-fit md:w-90  bg-[var(--bg)] p-7 rounded-lg shadow-lg shadow-black/7 flex flex-col gap-4 hover:-translate-y-4 duration-400">
              <p className="text-md font-semibold karla">
              “I know I’m not successful enough, but I’m passionate.“
              </p>
              <p className="text-end text-[0.8em] italic mont">
                -gabyel
              </p>
            </div>

            <div className="w-full md:max-w-90 h-fit md:w-90  bg-[var(--bg)] p-7 rounded-lg shadow-lg shadow-black/7 flex flex-col gap-4 hover:-translate-y-4 duration-400 ">
              <p className="text-md font-semibold karla">
              “Creativity fuels the unstoppable train of passion.”
              </p>
              <p className="text-end text-[0.8em] italic mont">
                -gabyel
              </p>
            </div>
          </div>
        </div>

        
        </>
    )
}
