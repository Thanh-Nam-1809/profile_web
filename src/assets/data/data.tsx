import Works from "../../screens/Home/page/screens/Works"
import Featured from "../../screens/Home/page/screens/Featured"
import Home from "../../screens/Home/page/screens/Home"
import Infomation from "../../screens/Home/page/screens/Infomation"
import LetTask from "../../screens/Home/page/screens/LetTask"
import IconFacebook from "../svg/IconFacebook"
import IconInstagram from "../svg/IconInstagram"
import IconLinkedin from "../svg/IconLinkedin"

// HEADER
export const dataHeader = [
    {
        id: 1,
        title: 'About',
    },
    {
        id: 2,
        title: 'Works',
    },
    {
        id: 3,
        title: 'Contact',
    }
]

//FOOTER
export const dataIntroduceYourself = [
    {
        id: 1,
        title: 'Nhiệt Tình',
    },
    {
        id: 2,
        title: 'Hòa Đồng',
    },
    {
        id: 3,
        title: 'Nhiệt Huyết',
    }
]

export const dataContact = [
    {
        id: 1,
        title: 'Q.Gò Vấp, TP.HCM',
    },
    {
        id: 2,
        title: 'vothanhnam18092001@gmail.com',
    },
    {
        id: 3,
        title: '0392525473',
    }
]

// Icon Profile
export const dataIconProfile = [
    {
        id: 1,
        icon: <IconFacebook/>,
    },
    {
        id: 2,
        icon: <IconInstagram/>,
    },
    {
        id: 3,
        icon: <IconLinkedin/>,
    }
]

// HOME
export const dataHomePage = [
    {
        id: 1,
        title: 'page 1',
        page: <Home/>
    },
    {
        id: 2,
        title: 'page 2',
        page: <Infomation/>
    },
    {
        id: 3,
        title: 'page 3',
        page: <Featured/>
    },
    {
        id: 4,
        title: 'page 4',
        page: <Works/>
    },
    {
        id: 5,
        title: 'page 5',
        page: <LetTask/>
    },
]

// Product
export const dataProduct = [
    {
        id: '1',
        img: 'https://png.pngtree.com/png-vector/20200622/ourmid/pngtree-carrot-cute-character-logo-icon-png-image_2260896.jpg',
        title: 'name 1',
        content: 'aaaaa',
        time: '2021'
    },
    {
        id: '2',
        img: 'https://png.pngtree.com/png-vector/20200622/ourmid/pngtree-carrot-cute-character-logo-icon-png-image_2260896.jpg',
        title: 'name 2',
        content: 'aaaaa',
        time: '2021'
    },
    {
        id: '3',
        img: 'https://png.pngtree.com/png-vector/20200622/ourmid/pngtree-carrot-cute-character-logo-icon-png-image_2260896.jpg',
        title: 'name 3',
        content: 'aaaaa',
        time: '2021'
    }
]