import "../css/base.css";

export default function ProjCard({ title, description, link, lang1, lang2, lang3, image }) {
    return (
        <div className="karla text-[var(--black)] flex flex-col-reverse lg:flex-row items-start w-full ">
            
            {/* LEFT TEXT BLOCK */}
            <div className="__left__ lg:min-w-[370px] lg:max-w-[600px] h-[400px] flex-1 w-full p-5 sm:p-7 shadow-black/7 shadow-lg rounded-xl flex flex-col gap-5">
                <h1 className="mont text-xl sm:text-2xl font-bold">{title}</h1>
                
                <div className="flex flex-col justify-between gap-5 h-full">
                    <p className="text-sm sm:text-base">{description}</p>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                        <button className="bg-gradient-to-br from-[rgb(106,152,240)] to-[rgb(73,97,220)] px-4 py-2 rounded-sm text-white text-[12px] font-light mont">
                            <a href={link} target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </button>

                        <div className="__technologies__">
                            <ul className="flex gap-3 text-sm">
                                <li>{lang1}</li>
                                <li>{lang2}</li>
                                <li>{lang3}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* IMAGE CARD */}
            {/* IMAGE CARD */}
<div className="__img__ w-full lg:h-[400px] lg:w-[700px] flex items-center rounded-xl bg-[var(--light-blue)] shadow-md py-3">
    <img
        src={image}
        alt="project preview"
        className="w-full h-auto object-contain rounded-xl border border-gray-200"
    />
</div>

        </div>
    );
}
