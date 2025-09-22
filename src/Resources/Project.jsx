
//--------Skill Swap---------//
import SS1 from "../assets/Skill-Swap/Image-1.png";
import SS2 from "../assets/Skill-Swap/Image-2.png";
import SS3 from "../assets/Skill-Swap/Image-3.png";
import SS4 from "../assets/Skill-Swap/Image-4.png";
import SS5 from "../assets/Skill-Swap/Image-5.png";
import SS6 from "../assets/Skill-Swap/Image-6.png";

//--------Online Food Ordering---------//
import OFOS1 from "../assets/Online-Food-Ordering/Image-1.png";
import OFOS2 from "../assets/Online-Food-Ordering/Image-2.png";
import OFOS3 from "../assets/Online-Food-Ordering/Image-3.png";
import OFOS4 from "../assets/Online-Food-Ordering/Image-4.png";
import OFOS5 from "../assets/Online-Food-Ordering/Image-5.png";
import OFOS6 from "../assets/Online-Food-Ordering/Image-6.png";
import OFOS7 from "../assets/Online-Food-Ordering/Image-7.png";
import OFOS8 from "../assets/Online-Food-Ordering/Image-8.png";

//--------Money Heist Game---------//
import MHG1 from "../assets/Money-Heist-Game/Image-1.png";
import MHG2 from "../assets/Money-Heist-Game/Image-2.png";
import MHG3 from "../assets/Money-Heist-Game/Image-3.png";
import MHG4 from "../assets/Money-Heist-Game/Image-4.png";
import MHG5 from "../assets/Money-Heist-Game/Image-5.png";
import MHG6 from "../assets/Money-Heist-Game/Image-6.png";

//--------Logos---------//
import Html from "../assets/Logos/HTML5.svg";
import CSS from "../assets/Logos/CSS3.svg";
import Python from "../assets/Logos/Python.svg";
import MySQL from "../assets/Logos/MySQL.svg";
import React from "../assets/Logos/React.svg";
import JavaScript from "../assets/Logos/JavaScript.svg";
import MongoDB from "../assets/Logos/MongoDB.svg";
import ExpressJs from "../assets/Logos/Express.svg";
import NodeJs from "../assets/Logos/Node.Js.svg";
import Php from "../assets/Logos/PHP.svg";
import Laravel from "../assets/Logos/Laravel.svg";
import Bootstrap from "../assets/Logos/Bootstrap.svg";
import Postman from "../assets/Logos/Postman.svg";
import OpenGL from "../assets/Logos/OpenGL.svg";
import Matplotlib from "../assets/Logos/Matplotlib.svg";
import Pandas from "../assets/Logos/Pandas.svg";
import NumPy from "../assets/Logos/NumPy.svg";

export const projects = [
    {
        name: "Skill Swap",
        title: "Full-Stack Developer (React + FastAPI Project)",
        description:
            "SkillSwap is a full-stack web application that enables people to learn and teach skills in an interactive marketplace-like platform. Users can create skill listings, join events, manage wishlists, leave ratings, and engage with a vibrant learning community. The platform is built with a FastAPI backend (SQLAlchemy ORM + Pydantic) and a React frontend, providing a smooth user experience with authentication, notifications, and payment flow.",
        link: "https://skill-swap-ten-kappa.vercel.app/",
        images: [SS1, SS2, SS3, SS4, SS5, SS6],
        skills: [
            { name: 'HTML', logo: Html },
            { name: 'CSS', logo: CSS },
            { name: 'JavaScript', logo: JavaScript },
            { name: 'React', logo: React },
            { name: 'Python', logo: Python },
            { name: 'ExpressJs', logo: ExpressJs },
            { name: 'MongoDB', logo: MongoDB },
            { name: 'Postman', logo: Postman },
        ]
    },
    {
        name: "Online Food Ordering",
        title: "Full-Stack Developer (Laravel Project)",
        description:
            "As the restaurant business is booming in Bangladesh, we present this ‘Online Food Ordering’ website to foster growth momentum in this sector. This website comes with a unique feature called a digital wallet, which makes the business more customer-friendly. Features like search food, display profile, cart, wishlist, etc. will give users a seamless experience while ordering their desired food items at the restaurant online. Additionally, admins can add, edit, delete users, categories, food, and add money to users' wallets, which means more convenient sales operations for their business and stable revenue. However, the website has some limitations and can be improved further with new features and a better user interface and design.",
        link: "https://github.com/SazzadHimel/Online-Food-Ordering",
        images: [OFOS1, OFOS2, OFOS3, OFOS4, OFOS5, OFOS6, OFOS7, OFOS8],
        skills: [
            { name: 'HTML', logo: Html },
            { name: 'CSS', logo: CSS },
            { name: 'Laravel', logo: Laravel },
            { name: 'PHP', logo: Php },
            { name: 'MySQL', logo: MySQL },
            { name: 'Bootstrap', logo: Bootstrap },
        ]
    },
    {
        name: "Money Heist Game",
        title: "Computer Graphics Designer (Python Project)",
        description: "This project is an immersive game crafted using the Python OpenGL library, enriched with fundamental computer graphics algorithms like the midpoint circle drawing algorithm and midpoint line drawing algorithm. These algorithms, renowned for their efficiency and elegance, contribute to the captivating visual experience and smooth gameplay. Through meticulous implementation and attention to detail, this game seamlessly blends advanced graphics technology with timeless algorithmic principles, resulting in an engaging and immersive gaming experience that captivates players of all levels.",
        link: "https://github.com/SazzadHimel/money-heist-game",
        images: [MHG1, MHG2, MHG3, MHG4, MHG5, MHG6],
        skills: [
            { name: 'OpenGL', logo: OpenGL },
            { name: 'Python', logo: Python },
        ]
    }
];
