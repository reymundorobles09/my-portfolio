import {
    FaReact,
    FaHtml5,
    FaCss3,
    FaFacebook,
    FaNodeJs,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";

import { BiLogoJavascript } from "react-icons/bi"; 
import { SiExpress, SiMongodb, SiMysql, SiWebpack } from "react-icons/si";
import { VscVscode, VscCommentUnresolved, VscTerminalPowershell  } from "react-icons/vsc";
import { FaGitAlt, FaXTwitter, FaDribbble } from "react-icons/fa6"; 

import PROJECT_IMG_1 from "../assets/images/project-1.png";
import PROJECT_IMG_2 from "../assets/images/project-2.png";
import PROJECT_IMG_3 from "../assets/images/project-3.png";
import PROJECT_IMG_4 from "../assets/images/project-4.png";
import PROJECT_IMG_5 from "../assets/images/project-5.png";
import PROJECT_IMG_6 from "../assets/images/project-6.png";


export const MENU_LINKS = [
    { id: '01', label: 'Home', offset: -100, to: 'hero' },
    { id: '02', label: 'Skills', offset: -80, to: 'skill' , submenu: [
        { id: '01', label: 'Skills', offset: -80, to: 'skill' },
        { id: '02', label: 'Skills', offset: -80, to: 'skill' },
        { id: '03', label: 'Skills', offset: -80, to: 'skill' },
    ]},
    { id: '03', label: 'Projects', offset: -80, to: 'project' },
    { id: '04', label: 'About Me', offset: -80, to: 'about' },
    { id: '05', label: 'Contact', offset: -80, to: 'contact' },
]

export const STATS = [
    { id: '01', label: `Years of \nExperience`, count: '10' },
    { id: '02', label: 'Certification \nEarned', count: '20' },
    { id: '03', label: 'Project \nCompleted', count: '30' },
    { id: '04', label: 'Happy \nClients', count: '40' },
]

export const SKILL_TABS = [
    { id: '01', label: 'All', value: 'all' },
    { id: '02', label: 'Frontend', value: 'frontend' },
    { id: '0e', label: 'Backend', value: 'backend' },
    { id: '04', label: 'Tools', value: 'tools' },
    { id: '05', label: 'Skills', value: 'soft-skill' },
]

export const SKILLS = [
    { 
        id: '01', 
        icon: FaReact, 
        skill: 'React JS', 
        progress: 91, 
        type: 'frontend',
        description: 'Lorem Ipsum Dolor Met' 
    },

    { 
        id: '02', 
        icon: FaHtml5, 
        skill: 'React JS', 
        progress: 93, 
        type: 'frontend',
        description: 'Lorem Ipsum Dolor Met' 
    },

    { 
        id: '03', 
        icon: FaCss3, 
        skill: 'React JS', 
        progress: 95, 
        type: 'frontend',
        description: 'Lorem Ipsum Dolor Met' 
    },

    { 
        id: '04', 
        icon: BiLogoJavascript, 
        skill: 'React JS', 
        progress: 97, 
        type: 'frontend',
        description: 'Lorem Ipsum Dolor Met' 
    },

    { 
        id: '05', 
        icon: SiExpress, 
        skill: 'React JS', 
        progress: 99, 
        type: 'backend',
        description: 'Lorem Ipsum Dolor Met' 
    },

    { 
        id: '06', 
        icon: SiMongodb, 
        skill: 'Mongo DB', 
        progress: 92, 
        type: 'backend',
        description: 'Lorem Ipsum Dolor Met' 
    },

    { 
        id: '07', 
        icon: SiMysql, 
        skill: 'My SQL', 
        progress: 94, 
        type: 'backend',
        description: 'Lorem Ipsum Dolor Met' 
    },

    { 
        id: '08', 
        icon: FaNodeJs, 
        skill: 'Node JS', 
        progress: 96, 
        type: 'backend',
        description: 'Lorem Ipsum Dolor Met' 
    },

    { 
        id: '09', 
        icon: FaNodeJs, 
        skill: 'Node JS', 
        progress: 96, 
        type: 'tools',
        description: 'Lorem Ipsum Dolor Met' 
    },

     { 
        id: '10', 
        icon: FaNodeJs, 
        skill: 'Node JS', 
        progress: 96, 
        type: 'soft-skill',
        description: 'Lorem Ipsum Dolor Met' 
    },
    
]

export const ABOUT_ME = {
    contents: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus sem egestas congue magna auctor scelerisque dolor vulputate eget. Lectus sem ullamcorper finibus mauris varius fusce. Mattis accumsan faucibus parturient rhoncus, et posuere volutpat. Maximus efficitur et elit vivamus vestibulum tempus interdum adipiscing. Sodales natoque dis accumsan erat imperdiet euismod eleifend. Senectus bibendum blandit nisi fames placerat; amet scelerisque congue velit. Aac aptent est class justo eu cubilia.',
    socialLinks: [
        { id: '01', label: 'Twitter', icon: FaFacebook, link: '#' },
        { id: '02', label: 'Instagram', icon: FaInstagram, link: '#' },
        { id: '03', label: 'Facebook', icon: FaTwitter , link: '#' },
        { id: '04', label: 'LinkedIn', icon: FaLinkedin, link: '#' },
        { id: '05', label: 'Dribble', icon: FaDribbble , link: '#' },
    ],
    email: 'roblespogi09@gmail.com',
    phone: '09152019391',
    website: 'www.youtube.com',

}  


export const PROJECTS = [
    { 
        id: 1, 
        title: 'Mattis accumsan faucibus parturient rhoncus, et posuere volutpat. Maximus efficitur et elit vivamus vestibulum tempus interdum adipiscing. Sodales natoque dis accumsan erat imperdiet euismod eleifend. ', 
        image: PROJECT_IMG_1, 
        tags: ["React", "Html", "Css", "MySQL"], 
    },
    { 
        id: 2, 
        title: 'Title 2', 
        image: PROJECT_IMG_2, 
        tags: ["React", "Html", "Css", "MySQL"], 
    },
    { 
        id: 3, 
        title: 'Title 3', 
        image: PROJECT_IMG_3, 
        tags: ["React", "Html", "Css", "MySQL"], 
    },
    { 
        id: 4, 
        title: 'Title 4', 
        image: PROJECT_IMG_4, 
        tags: ["React", "Html", "Css", "MySQL"], 
    },
    { 
        id: 5, 
        title: 'Title 5', 
        image: PROJECT_IMG_5, 
        tags: ["React", "Html", "Css", "MySQL"], 
    },
    { 
        id: 6, 
        title: 'Title 6', 
        image: PROJECT_IMG_6, 
        tags: ["React", "Html", "Css", "MySQL"], 
    },
   
]
