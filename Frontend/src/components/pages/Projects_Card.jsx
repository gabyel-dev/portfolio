export default function ProjCard({ title, description, link, lang1, lang2, lang3, image}) {
    return (
        <>
        <div className="karla text-[var(--black)] flex items-center">
            <div className="__left__ px-11 py-10 shadow-black/7 shadow-lg rounded-xl h-[480px] w-[700px] flex flex-col gap-5">
                <h1 className="mont text-2xl font-bold">{title}</h1>
                <div className="flex flex-col items-start justify-between h-full ">
                <p className="text-md">{description}</p>

                    <div className="flex justify-between w-full items-center">
                        <button className="bg-[var(--linear-bg)] p-2 rounded-b-md"> 
                            <a href="#">Live Demo</a>
                        </button>

                        <div className="__technologies__ ">
                            <ul className="flex gap-5">
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>  

            <div className="__img__ ">
                <img src={`${image}`} alt="" className="w-[650px] h-[340px] absolute -translate-x-40 -translate-y-50 rounded-xl" />
            </div>

        </div>
        </>
    )
}