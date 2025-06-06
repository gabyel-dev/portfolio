import { useState } from "react"
import ProjCard from "./Projects_Card"

export default function Projects() {
    const [proj, setProj] = useState([
            {
                id: 1,
                title: "Weather App",
                description: "A real-time weather application using OpenWeather API",
                link: "#",
                lang1: "React",
                lang2: "CSS",
                lang3: "API",
                image: "data:image/png;base64,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"
            },
            {
                id: 2,
                title: "Task Manager",
                description: "A productivity app to organize your daily tasks",
                link: "#",
                lang1: "JavaScript",
                lang2: "Firebase",
                lang3: "Material UI",
                image: "/task-manager.jpg"
            },
            {
                id: 3,
                title: "E-commerce Site",
                description: "Online store with product filtering and cart functionality",
                link: "#",
                lang1: "React",
                lang2: "Node.js",
                lang3: "MongoDB",
                image: "/ecommerce.jpg"
            }
        ]);


    return (
        <>
        <div className="__projects__  w-full h-fit  py-10 overflow-x-hidden">
            <h1 className="mont text-center text-[var(--blue)] font-black text-[28px] pb-10">Side Projects</h1>

            <div className="flex flex-col gap-[100px]">
                {proj.map((project) => (
                    <ProjCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        lang1={project.lang1}
                        lang2={project.lang2}
                        lang3={project.lang3}
                        image={project.image}
                        
                    />
                ))}
            </div>
        </div>
        </>
    )
}