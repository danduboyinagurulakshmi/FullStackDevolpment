import Navbar from "../Navbar/Navbar";
import "./Seminars.css"
function Seminars(){
    return(
        <>
        <Navbar/>
        <div className="Seminars-halls">
            <ul>
                <h3>Sj-block</h3>
                 <div className="image-content">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFpKckpVx1uEwwpqrabo3yEseXHE35352DhQ&s"/>
                </div>
                <h3>E-block</h3>
                 <div className="image-content">
                    <img src="https://media.licdn.com/dms/image/v2/D5622AQFG-LhzAXfvng/feedshare-shrink_800/B56ZWZdx09HEAk-/0/1742036486695?e=2147483647&v=beta&t=eRIQqRbvwg8FdN0oE-7s_1sJG3pTf0jKFAMZUj_Hwn4"/>
                </div>
                <h3>R And cell</h3>
                 <div className="image-content">
                    <img src="https://scontent.fhyd11-2.fna.fbcdn.net/v/t51.82787-15/571581856_18062126264569619_7783225307460616049_n.webp?stp=dst-jpg_s590x590_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=CEGC3ayGcsoQ7kNvwET-g8T&_nc_oc=AdlfpZR6fXyrdGEtFHnadAWJhuK-OZyaEwK5saZC9Fa0nIz9b0heUbxLgIu1d9JViCI&_nc_zt=23&_nc_ht=scontent.fhyd11-2.fna&_nc_gid=M0OG9SGVK06NxTCstLycMA&oh=00_AfqZDomDKSGKvYTi6NFoueQ2_9CJRLq6C5fPnM6JtBUuWw&oe=698232F8"/>
                </div>
                <h3>Kor Auditorium</h3>
                 <div className="image-content">
                    <img src="https://ksrmce.ac.in/demo1/auditorium1.JPG"/>
                </div>
                
                <h3>civil-block hall</h3>
                <div className="image-content">
                    <img src="https://ksrmce.ac.in/demo1/csedept/PSD05264.JPG"/>
                </div>


            </ul>


        </div>
        
        
        </>
    )


}
export default Seminars;