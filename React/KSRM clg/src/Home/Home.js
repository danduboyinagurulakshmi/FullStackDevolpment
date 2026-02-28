import Navbar from "../Navbar/Navbar";
import "./Home.css";

function Home() {
  return (
    <>
    <Navbar/>
    
        <div className="image-content">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaYlrQ06-Lk4QUyvwAa2vzSQCJQUjbTS9NAQ&s" alt="ksrm" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_qeLRlXpZHCwNAifQqvVIv-wK7f_8okFRyQ&s" alt="ksrm1"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq0ru8rzQQ8VQcIN25dZOfRSnm38BxviUIIg&s" alt="ksrm2"/>

        </div>
       
        <div className="Intro-text">
            <h1>Introduction</h1>
            <p>
                In this Ksrm college of engineering there are several departments.
                And each branch have a separate HoD.
            </p>
        </div>
        <div className="About-clg">
            <h1>History of college</h1>
            <p>KSRM College of Engineering (KSRMCE) in Kadapa, Andhra Pradesh, was established in 1980 by the Kandula Obul Reddy Charities, honoring the memory of Late Sri. 
                Kandula Srinivasa Reddy, a promising engineering student who died tragically. 
                Starting as a technical training institute in 1979 at Vempalli, it officially began its engineering programs in 1980-81, 
                focusing on developing technical education in the Rayalaseema region with AICTE approval and NAAC accreditation</p>
        </div>
        <div className="Awards-clg">
            <h1>College Achievements</h1>
            <ul>
                <li>NAAC A+ Accreditation</li>
                <li>IIC 3.5-Star Rating</li>
                <li>Careers360 AAA+ Rating</li>
                <li>AICTE Approved</li>
            </ul>
            <h1>College Awards</h1>
            <ul>
                <li>Ekalavya Program</li>
                <li>Samaja Seva</li>
                <li>Merit Awards</li>
            </ul>
            <h1>Events</h1>
            
                <h3>Technical Fests & Workshops</h3>
                <div className="image-content">
                    <img src="https://www.knowafest.com/files/uploads/innovatex2k25-2025092912.jpg"/>
                </div>
                <h3>Cultural & Student Activities</h3>
                <div className="image-content">
                    <img src="https://i.ytimg.com/vi/VM9XWwNbmtE/maxresdefault.jpg"/>
                </div>
                <h3>Academic & Professional</h3>
                <div className="image-content">
                    <img src="https://ksrmce.ac.in/data1/images/s14.jpg"/>
                </div>
                <h3>Sports & NSS</h3>
                <div className="image-content">
                    <img src="https://ksrce.ac.in/admin/file_manager/source/Facilities/Sports/sports%203.jpg"/>
                </div>
            
        </div>
         <div className="footer-clg1">
            <footer>
                <p>&copy; 2026 KSRM COLLEGE OF Engineering.</p>
            </footer>

        </div>
       
    
    </>
  );
}

export default Home;
