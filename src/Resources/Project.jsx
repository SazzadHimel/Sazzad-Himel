
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
        name: "Vendor Sales Performance Analysis",
        title: "Data Analyst (Python & SQL Project - Sep '25)",
        description: "Analyzed 12.8M+ sales records, revealing a 72% cost reduction from bulk purchasing and a 65.7% vendor risk. Designed inventory strategies by identifying margin differences and slow-moving stock to improve profitability.",
        link: "https://github.com/SazzadHimel/Vendor-Performance-Analysis.git",
        skills: [
            { name: 'Python', logo: Python },
            { name: 'Pandas', logo: Pandas },
            { name: 'NumPy', logo: NumPy },
            { name: 'MySQL', logo: MySQL },
        ]
    },
    {
        name: "Skill Swap",
        title: "Full-Stack Developer (React + FastAPI Project)",
        description:
            "SkillSwap is a full-stack web application that enables people to learn and teach skills in an interactive marketplace-like platform. Users can create skill listings, join events, manage wishlists, leave ratings, and engage with a vibrant learning community. The platform is built with a FastAPI backend (SQLAlchemy ORM + Pydantic) and a React frontend, providing a smooth user experience with authentication, notifications, and payment flow.",
        link: "https://skill-swap-ten-kappa.vercel.app/",
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
        description: "A full-stack food ordering platform built using Laravel with an integrated digital wallet. Features include item searching, user profiles, an interactive cart, and a wishlist. A complete admin panel manages users, menus, categories, and wallet balances.",
        link: "https://github.com/SazzadHimel/Online-Food-Ordering",
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
        skills: [
            { name: 'OpenGL', logo: OpenGL },
            { name: 'Python', logo: Python },
        ]
    }
];
