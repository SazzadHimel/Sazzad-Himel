

//--------Online Food Ordering---------//
import OFOS1 from "../assets/Online-Food-Ordering/Image-1.png";
import OFOS2 from "../assets/Online-Food-Ordering/Image-2.png";
import OFOS3 from "../assets/Online-Food-Ordering/Image-3.png";
import OFOS4 from "../assets/Online-Food-Ordering/Image-4.png";
import OFOS5 from "../assets/Online-Food-Ordering/Image-5.png";
import OFOS6 from "../assets/Online-Food-Ordering/Image-6.png";
import OFOS7 from "../assets/Online-Food-Ordering/Image-7.png";
import OFOS8 from "../assets/Online-Food-Ordering/Image-8.png";

//--------Rent Ease---------//
import RE1 from "../assets/Rent-Ease/Image-1.jpg";
import RE2 from "../assets/Rent-Ease/Image-2.jpg";
import RE3 from "../assets/Rent-Ease/Image-3.jpg";
import RE4 from "../assets/Rent-Ease/Image-4.jpg";
import RE5 from "../assets/Rent-Ease/Image-5.jpg";

//--------Online Food Ordering System---------//
import MHG1 from "../assets/Money-Heist-Game/Image-1.png";
import MHG2 from "../assets/Money-Heist-Game/Image-2.png";
import MHG3 from "../assets/Money-Heist-Game/Image-3.png";
import MHG4 from "../assets/Money-Heist-Game/Image-4.png";
import MHG5 from "../assets/Money-Heist-Game/Image-5.png";
import MHG6 from "../assets/Money-Heist-Game/Image-6.png";

//--------Breast Cancer Classification---------//
import BCC1 from "../assets/Breast-Cancer-Classification/Image-1.png";
import BCC2 from "../assets/Breast-Cancer-Classification/Image-2.png";
import BCC3 from "../assets/Breast-Cancer-Classification/Image-3.png";
import BCC4 from "../assets/Breast-Cancer-Classification/Image-4.png";
import BCC5 from "../assets/Breast-Cancer-Classification/Image-5.png";
import BCC6 from "../assets/Breast-Cancer-Classification/Image-6.png";

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
        name: "Rent Ease",
        title: "Full-Stack Developer (MERN Project)",
        description:
            "The Renting System is a user-friendly web platform connecting Customers and Proprietors for seamless item rentals. It features dedicated dashboards, profile management, and admin control over user accounts. Proprietors can manage their rentable items and receive notifications on rentals and returns. Customers can search, filter, add to cart or wishlist, and leave item reviews. The system supports real-time order tracking, invoice generation, multiple payment methods, and order cancellations. Additional features include real-time chat support, personalized email marketing, and sales-based promotions. Designed for efficiency and convenience, the Renting System simplifies rental operations for all users.",
        link: "https://github.com/SazzadHimel/Renting-System-Rent-Ease.git",
        images: [RE1, RE2, RE3, RE4, RE5],
        skills: [
            { name: 'HTML', logo: Html },
            { name: 'CSS', logo: CSS },
            { name: 'JavaScript', logo: JavaScript },
            { name: 'React', logo: React },
            { name: 'NodeJs', logo: NodeJs },
            { name: 'ExpressJs', logo: ExpressJs },
            { name: 'MongoDB', logo: MongoDB },
            { name: 'Postman', logo: Postman },
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
    },
    {
        name: "Breast Cancer Classification",
        title: "Mechine Learning (Python Project)",
        description: "Breast Cancer is a common illness in the public health. The death rate of breast cancer patients is increasing every year. However, if it is diagnosed at a very early stage then the possibility of cure increases significantly. Machine Learning models are used effectively to classify cancer tumors by observing its input features like: radius, perimetre, area and so on. In this project, we have implemented Logistic Regression, Decision Tree and Random Forest Classifier models to classify between malignant and benign tumors. We observed the highest accuracy from Random Forest Classifier whereas Decision Tree generated the least accurate results.",
        link: "https://github.com/SazzadHimel/Breast-Cancer-Classification.git",
        images: [BCC1, BCC2, BCC3, BCC4, BCC5, BCC6],
        skills: [
            { name: 'Python', logo: Python },
            { name: 'Pandas', logo: Pandas },
            { name: 'Matplotlib', logo: Matplotlib },
            { name: 'NumPy', logo: NumPy },
        ]
    },
];
