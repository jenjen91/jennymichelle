import Design from "./Design";
import Development from "./Development";  
import Writings from "./Writings";
import Contact from "./Contact";

export const pages = [
    {
        title: 'Writings',
        path: "/writings",
        element: <Writings />
    },
    {
        title: 'Webdevelopment',
        path: "/development",
        element: <Development />
    },
    {
        title: 'Design',
        path: "/design",
        element: <Design />
    },
    {
        title: 'Contact',
        path: "/contact",
        element: <Contact />
    }
]

