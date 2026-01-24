import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaGitAlt,
    FaDocker,
    FaFigma,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiPython,
    SiSpringboot,
    SiWireshark,
    SiBurpsuite,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { VscTools, VscCode } from "react-icons/vsc";

export default function Skills() {
    const categories = [
        {
            title: "Frontend",
            icon: <FaReact className="inline-block mr-2" />,
            skills: [
                { name: "HTML", icon: <FaHtml5 />, level: "Expert" },
                { name: "CSS", icon: <FaCss3Alt />, level: "Expert" },
                { name: "JavaScript", icon: <FaJsSquare />, level: "Advanced" },
                { name: "React", icon: <FaReact />, level: "Advanced" },
                { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "Advanced" },
            ],
        },
        {
            title: "Backend",
            icon: <SiSpringboot className="inline-block mr-2" />,
            skills: [
                { name: "Node.js", icon: <FaJsSquare />, level: "Advanced" },
                { name: "Express", icon: <SiExpress />, level: "Intermediate" },
                { name: "MongoDB", icon: <SiMongodb />, level: "Intermediate" },
                { name: "Python", icon: <SiPython />, level: "Advanced" },
                { name: "Java", icon: <DiJava />, level: "Advanced" },
                { name: "Spring Boot", icon: <SiSpringboot />, level: "Intermediate" },
            ],
        },
        {
            title: "Tools & Platforms",
            icon: <VscTools className="inline-block mr-2" />,
            skills: [
                { name: "Git", icon: <FaGitAlt />, level: "Advanced" },
                { name: "Figma", icon: <FaFigma />, level: "Advanced" },
                { name: "VS Code", icon: <VscCode />, level: "Expert" },
            ],
        }
    ];

    return (
        <section id="skills" className="py-16 bg-gray-900 text-white pl-10">
            <h2 className="text-3xl font-bold text-center mb-12">
                My <span className="text-purple-400">Skills</span>
            </h2>
            <div className="max-w-6xl mx-auto space-y-12">
                {categories.map((cat, idx) => (
                    <div key={idx}>
                        <h3 className="text-xl font-semibold flex items-center mb-6">
                            {cat.icon}
                            {cat.title}
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {cat.skills.map((skill, i) => (
                                <div
                                    key={i}
                                    className="p-4 bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
                                >
                                    <div className="text-3xl mb-2 text-purple-400 flex justify-center">
                                        {skill.icon}
                                    </div>
                                    <p className="font-medium">{skill.name}</p>
                                    <span className="text-sm text-gray-400">{skill.level}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
