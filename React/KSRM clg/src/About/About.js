import Navbar from "../Navbar/Navbar";
import "./About.css"
function About(){
    return (
        <>
        <Navbar/>
        <section className="About-page">
            <h1>About KSRMCE</h1>
            <div className="about-section">
                <h2>Vision</h2>
                <p>
                    To evolve as center of repute for providing quality academic programs amalgamated with creative learning and 
                    research excellence to produce graduates with leadership qualities,ethical and human values to serve the nation.

                </p>
                <h2>Mission</h2>
                <ul><li><strong>M1:</strong>To provide high quality education with enriched curriculum blended with impactful teaching-
                learning practices.</li>
                <li><strong>M2:</strong>To promote research, entrepreneurship and innovation through industry collaborations.</li>
                <li><strong>M3:</strong>To produce highly competent professional leaders for contributing to Socio-economic development of region and the nation.</li>
                </ul>
                 <h2>The Campus</h2>
        <p>
          The college campus is located 7 km away from Kadapa town on Kadapa to
          Pulivendula Highway, spread across 35 acres in a serene and green
          environment.
        </p>

        <p>
          The campus consists of four multi-storeyed RCC buildings with a total
          area of 26,700 sqm, dedicated power supply, transport facilities, and
          four hostels.
        </p>

        <p>
          Excellent bus connectivity is available to Hyderabad, Vijayawada,
          Nellore, Tirupati, Kurnool, Bangalore, Chittoor, and Chennai.
        </p>
                <img src="https://ksrmce.ac.in/demo1/clgphoto.JPG" alt="ksrm" />
                
            </div>

        </section>
        <section id="about-physical">
            <h2>Physical Education</h2>
             <div className="image-content">
            <img src="https://ksrmce.ac.in/demo1/sportsdept/image4.JPG" alt="ksrm" />

        </div>
            <h3>About the Physical Activities</h3>
            <p>Physical education is a part of general education and it is an education to prepare the student to be healthy 
                and robust. Generally we imagine that physical education is meant only for developing the person’s physique i.e. perfect shape of the body.
                But the physical education is much beyond this. It is meant to develop a knowledge of an individual to develop the physical well being and
                prevent physical diseases as well as mental problems and maintain a good personality. It can help to cut unwanted fat and make the body
                sculpt. It also deals with exercises to prevent many mental problems like stress, anxiety, anger etc., 
                through the knowledge of Yoga. The motto of physical education is to inculcate this all people and create a disease free nation.</p>
            <div className="image-content">
                <img src="https://ksrmce.ac.in/demo1/sportsdept/indoor4.JPG" alt="ksrm" />

            </div>
                <h2> Objectives of the Department</h2>
            <p>
                Our college management has set up the Department of Physical Education and has provided many facilities for students to take up physical education activities. The objectives of the Department are

to  create  awareness and importance  in  students  community regarding  physical education and health and preventive methods, protect  themselves in their future not getting  attacked by bodily disorders  like  Diabetes, obesity etc, which leads to other diseases.
to  create awareness about sports activities and make  students outstanding athletes by  giving  coaching  in  different  sports  disciplines
to  prepare  students to  participate  in  inter university level
to  select  fresh  students (those  who  have not participated in any  sports  activity  in their  school studies) to  motivate  them and  encourage them to  take up any one of the game and provide coaching in  that  particular activity.
The students are participating in various athletic events and games inside and outside the college and are brining laurels to our college
            </p>
             <div className="footer-clg1">
            <footer>
                <p>&copy; 2026 KSRM COLLEGE OF Engineering.</p>
            </footer>

        </div>
            
        </section>
        </>
    )
}
export default About;