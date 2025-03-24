import { 
    SiC, SiCplusplus, SiLinux, SiGit, SiGithub, SiDocker, 
    SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiTypescript, 
    SiPython, SiDjango, SiNodedotjs, SiExpress, SiReact, SiNextdotjs, 
    SiAngular, SiPostman, SiGraphql, SiMongodb, SiVercel
} from "react-icons/si";
  
const skills = [
	{ name: "C", icon: SiC },
	{ name: "C++", icon: SiCplusplus },
	{ name: "Linux", icon: SiLinux },
	{ name: "Git", icon: SiGit },
	{ name: "GitHub", icon: SiGithub },
	{ name: "Docker", icon: SiDocker },
	{ name: "HTML", icon: SiHtml5 },
	{ name: "CSS", icon: SiCss3 },
	{ name: "Tailwind CSS", icon: SiTailwindcss },
	{ name: "JavaScript", icon: SiJavascript },
	{ name: "TypeScript", icon: SiTypescript },
	{ name: "Python", icon: SiPython },
	{ name: "Django", icon: SiDjango },
	{ name: "Node.js", icon: SiNodedotjs },
	{ name: "Express.js", icon: SiExpress },
	{ name: "React", icon: SiReact },
	{ name: "Next.js", icon: SiNextdotjs },
	{ name: "Angular", icon: SiAngular },
	{ name: "GraphQL", icon: SiGraphql },
	{ name: "MongoDB", icon: SiMongodb },
	{ name: "Postman API", icon: SiPostman },
	{ name: "Vercel", icon: SiVercel },
];
  
const Skills: React.FC = () => {
    return (
    	<>
    		<h2 className='font-bold text-4xl text-_green py-16'>
    			Experience with
    		</h2>
    		<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
    		  	{skills.map(({ name, icon: Icon }) => (
    		  	    <div key={name} className="flex flex-col items-center gap-2 shadow-lg shadow-gray-600/50 rounded-lg p-4 transition-transform duration-300 hover:-translate-y-2">
    		  	    	<Icon className="text-4xl text-_green" />
    		  	    	<span className="text-sm font-medium text-">{name}</span>
    		  	  	</div>
    		  	))}
    		</div>
    	</>
    );
};
  
export default Skills;
  