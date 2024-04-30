// import React from 'react'
// import Banner from '../Menhome/Banner'
// import Offer from '../Menhome/Offer'
// import Story from '../Menhome/Story'
// import Specialdish from '../Menhome/Specialdish'
// import Menusection from '../Menhome/Menusection'
// import Whyus from '../Menhome/Whyus'
// import Teem from '../Menhome/Teem'
// import Reacntupdate from '../Menhome/Recntupdates'
// import Special from '../Menhome/Special'
// import Contact from '../Menhome/Contact'
// import Videosection from '../Menhome/Videosection'
// import { Link } from 'react-router-dom'
// import sidebarlogo from '../../assets/images/resource/sidebar-logo.png'

// function Homethree() {
//     return (
//         <>
//             <div className="menu-backdrop"> </div>

//             <section className="hidden-bar">
//                 <div className="inner-box">
//                     <div className="cross-icon hidden-bar-closer"><span className="far fa-close"></span></div>
//                     <div className="logo-box"><Link to="/" title="Delici - Restaurants React Template"><img src={sidebarlogo} alt="" title="Delici - Restaurants HTML Template" /></Link></div>


//                     <div className="side-menu">
//                         <ul className="navigation clearfix">
//                             <li className="current dropdown"><Link to="/">Home</Link>
//                                 <ul>
//                                     <li><Link to="/hometwo">Home 1 Left Header</Link></li>
//                                     <li><Link to="/">Home 1 Center Header</Link></li>
//                                     <li><Link to="/homethree">Home 3 Video Hero</Link></li>
//                                 </ul>
//                             </li>
//                             <li className="dropdown"><Link to="/menu">Menus</Link>
//                                 <ul>
//                                     <li><Link to="/menuone">Fruit</Link></li>
//                                     <li><Link to="/menutwo">Salads</Link></li>
//                                     <li><Link to="/menuthree">Soups and Grills</Link></li>
//                                     <li><Link to="/menufour">Whole Pack</Link></li>
//                                 </ul>
//                             </li>
//                             <li><Link to="/about">About Us</Link></li>
//                             <li><Link to="/ourcheaf">Our chefs</Link></li>
//                             <li className="dropdown"><Link to="#">Pages</Link>
//                                 <ul>
//                                     <li><Link to="#">Dropdown Menu 1</Link></li>
//                                     <li><Link to="#">Dropdown Menu 2</Link></li>
//                                     <li><Link to="#">Dropdown Menu 3</Link></li>
//                                     <li className="dropdown"><Link to="#">Dropdown Menu 4</Link>
//                                         <ul>
//                                             <li><Link to="#">Dropdown Menu level 2</Link></li>
//                                             <li><Link to="#">Dropdown Menu level 2</Link></li>
//                                             <li><Link to="#">Dropdown Menu Level 3</Link></li>
//                                         </ul>
//                                     </li>
//                                     <li><Link to="/">Dropdown Lorem 5</Link></li>
//                                 </ul>
//                             </li>
//                             <li><Link to="/contact">Contact</Link></li>
//                         </ul>
//                     </div>

//                     <h2>Visit Us</h2>
//                     <ul className="info">
//                         <li>Nutribite, Tunisia  <br />  Marsa 30</li>
//                         <li>Open: 9.30 am - 2.30pm</li>
//                         <li><Link to="mailto:booking@domainame.com">nutribite@gmail.com</Link></li>
//                     </ul>
//                     <div className="separator"><span></span></div>
//                     <div className="booking-info">
//                         <div className="bk-title">Booking request</div>
//                         <div className="bk-no"><Link to="tel:+88-123-123456">+216 21319930</Link></div>
//                     </div>

//                 </div>
//             </section>

//             <Banner />
//             <Offer />
//             <Story />
//             <Specialdish />
//             <Menusection />
//             <Special />
//             <Contact />
//             <Whyus />
//             <Teem />
//             <Videosection />
//             <Reacntupdate />
//         </>
//     )
// }

// export default Homethree