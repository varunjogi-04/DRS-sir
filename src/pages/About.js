import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaGoogle, FaLinkedin, FaUserTie, FaHistory, FaGlobe } from 'react-icons/fa';
import './About.css';

// Import your profile image - adjust the path according to your project structure
import profileImage from '../assets/images/dp1.png';

const About = () => {
  const [profile] = useState({
    name: 'Dr. Diptiranjan Samantaray',
    title: 'Assistant Professor of Electronics and Communication Engineering',
    department: 'Department of Electronics and Communication Engineering',
    institution: 'Faculty of Technology, University of Delhi',
    email: 'drsamantaray@fot.du.ac.in',
    phone: '+91 7978761836',
    address: 'Department of Electronics and Communication Engineering, Faculty of Technology, University of Delhi, Delhi-110007',
    bio: 'Dr. Diptiranjan Samantaray is an accomplished academic and researcher in the field of Electronics and Communication Engineering, currently serving as Assistant Professor at the Faculty of Technology, University of Delhi. His academic and research expertise lies in antennas, RF and microwave engineering, metasurfaces, and electromagnetic compatibility. Dr. Samantaray completed his Ph.D. from the Indian Institute of Technology (BHU), Varanasi in 2022, where his doctoral research focused on advanced antenna design techniques employing metasurfaces and superstrate configurations.',
    researchInterests: [
      'Smart Metasurface',
      'Planar Antenna',
      'Electromagnetics',
      '5G (sub-6 GHz and mm-Wave), 6G and Beyond Applications',
      'Reconfigurable Antennas',
      'Wearable/Implantable Antennas for Biomedical and IoT Applications'
    ],
    administrativeRoles: [
      'Serving as Editorial Member of Springer Nature from January 2026',
      'Organizing committee member of the international conference MAPCON 2025',
      'Technical committee member of the international conference WAMS 2024, 2025 and MAC 2025',
      'Served as Chairperson, IEEE Microwave Theory & Techniques Society Student Branch Chapter, IIT (BHU), Varanasi (January 2021-June 2022)',
      'Served as Joint Treasurer, IEEE Microwave Theory & Techniques Society Student Branch Chapter, IIT (BHU) (2020)',
      'Served as Treasurer, IEEE Photonics Society Student Branch Chapter, IIT (BHU) (January 2018-June 2022)',
      'Served as departmental Training and Placement Representative, Department of Electronics Engineering, IIT (BHU), Varanasi (August 2020-July 2022)',
      'Served as Member, Departmental Purchase Committee, Vijayanjali Institute of Technology',
      'Served as Member, Departmental Library Committee, Vijayanjali Institute of Technology',
      'Served as Examination Supervisor, Vijayanjali Institute of Technology',
      'Served as Member, Sports and Cultural Activities, Vijayanjali Institute of Technology'
    ],
    professionalMemberships: [
      'IEEE Member',
      'IEEE Antennas and Propagation Society',
      'IEEE Microwave Theory and Techniques Society',
      'IEEE MTT-S Student Branch Chapter Member'
    ],
    awards: [
      'Received Sastra Award for Research Excellence at Vignan’s Institute of Information Technology, Visakhapatnam (2022-23)',
      'Received Best IEEE MTTS IIT (BHU) Student Branch Chapter Award as chairperson (2021-22)',
      'Received Best Paper Poster Award in the poster entitled “Gain Enhancement of Yagi Slot Antenna using AMC Substrate” in “2020 URSI Regional Conference on Radio Science” (2020)',
      'Received Travel Grant for presenting a paper in \'Indian National Conference on Antennas and Propagation\' (InCAP) at Ahmedabad, India (2019)',
      'Received Travel Grant for presenting a paper in \'Indian National Conference on Antennas and Propagation\' (InCAP) at Hyderabad, India (2018)',
      'Received IIWE-2018 Travel Grant award for presenting a paper in IEEE-INAE Workshop on Electromagnetics (IIWE 2018) in Trivandrum, Kerala, India (2018)'
    ]
  });

  const [education] = useState([
    {
      _id: '1',
      degree: 'Ph.D.',
      institution: 'IIT(BHU), Varanasi',
      year: '2022',
      field: 'Awarded'
    },
    {
      _id: '2',
      degree: 'M.Tech',
      institution: 'IIT, Kharagpur, West Bengal',
      year: '2015',
      field: '1st Division'
    },
    {
      _id: '3',
      degree: 'B. Tech',
      institution: 'CEB, Bhubaneswar (BPUT, Odisha)',
      year: '2009',
      field: '1st Division'
    },
    {
      _id: '4',
      degree: 'Intermediate',
      institution: 'Rourkela Govt. College, Rourkela (CHSE Odisha)',
      year: '2004',
      field: '1st Division'
    },
    {
      _id: '5',
      degree: 'Matriculation',
      institution: 'B.J.B. High School, Khurda (B.S.E Odisha)',
      year: '2002',
      field: '1st Division'
    }
  ]);

  const [loading] = useState(false);

  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  if (loading) {
    return (
      <div className="about-loading">
        <div className="loading-spinner"></div>
        <p>Loading Academic Profile...</p>
      </div>
    );
  }

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="section-container">
          <div className="about-content">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="about-image"
            >
              <div className="profile-image-container">
                <img 
                  src={profileImage} 
                  alt="Professor Diptiranjan Samantara"
                  className="profile-image loaded"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="about-text"
            >
              <h1>{profile?.name || 'Dr. Diptiranjan Samantaray'}</h1>
              <h2>{profile?.title || 'Assistant Professor'}</h2>
              
              <div className="contact-info-mini">
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <span>{profile?.email || 'drsamantaray@fot.du.ac.in'}</span>
                </div>
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <span>{profile?.phone || ' +91 7978761836'}</span>
                </div>
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>{profile?.address || 'Department of Electronics and Communication Engineering, University of Delhi, Delhi-110007'}</span>
                </div>
              </div>
              <p className="department">{profile?.department || 'Department of  Electronics and Communication Engineering'}</p>
              <p className="institution">{profile?.institution || 'University of Delhi'}</p>

              <div className="social-links">
                <a href="https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=rj3pkCQAAAAJ" className="social-link">
                  <FaGoogle /> Google Scholar
                </a>
                <a href="https://www.linkedin.com/in/dr-diptiranjan-samantaray-1b8974173/" className="social-link">
                  <FaLinkedin /> LinkedIn
                </a>
                <a href="https://orcid.org/0000-0002-8963-1268" aria-label="ORCID ID" className="social-link">
                  <FaGoogle />
                  <span>ORCID ID</span>
                </a> 
                <a href="https://www.scopus.com/authid/detail.uri?authorId=57190580946" aria-label="Scopus ID" className="social-link">
                  <FaGoogle />
                  <span>Scopus ID</span>
                </a>   
                <a href="https://www.researchgate.net/profile/Diptiranjan-Samantaray" aria-label="ResearchGate" className="social-link">
                  <FaGoogle />
                  <span>ResearchGate</span>
                </a>   
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Bio Section */}
      <section className="about-bio">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Academic Profile</h2>
           <p className="section-subtitle">
  Assistant Professor in Electronics and Communication Engineering with expertise in electromagnetics, antenna and metasurface design, and RF systems, supported by teaching and high-impact IEEE research publications
</p>
         </div>
          <div className="bio-content">
            <p>Dr. Diptiranjan Samantaray is an accomplished academic and researcher in the field of Electronics and Communication Engineering, currently serving as Assistant Professor at the Faculty of Technology, University of Delhi. His academic and research expertise lies in antennas, RF and microwave engineering, metasurfaces, and electromagnetic compatibility.</p>

            <p>Dr. Samantaray completed his Ph.D. from the Indian Institute of Technology (BHU), Varanasi in 2022, where his doctoral research focused on advanced antenna design techniques employing metasurfaces and superstrate configurations for enhanced performance in wireless and EMC applications. He also holds a postgraduate degree from IIT Kharagpur and a bachelor’s degree from BPUT, Odisha, reflecting a strong academic foundation from premier technical institutions.</p>

            <p>His research contributions include publications in high-impact IEEE journals, such as IEEE Transactions on Antennas and Propagation, IEEE Antennas and Wireless Propagation Letters, and IEEE Transactions on Electromagnetic Compatibility. His work addresses critical challenges in gain enhancement, cross-polarization control, dual-band operation, and broadband antenna systems, with practical relevance to modern wireless communication technologies.</p>

            <p>Dr. Samantaray has significant teaching experience across reputed institutions, including Vignan’s Institute of Technology, Visakhapatnam, and Vijayanjali Institute of Technology, Odisha, before joining the University of Delhi. At present, he teaches core undergraduate courses such as Introduction to Electrical and Electronics Engineering, Mathematics, and Electronics and Computer Workshops, contributing actively to both theoretical instruction and hands-on laboratory training.</p>

            <p>Through his combined efforts in teaching, research, and academic service, Dr. Samantaray remains committed to advancing engineering education, mentoring students, and contributing to cutting-edge research in antenna systems and wireless communication engineering.</p>
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="career-highlights">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Career Highlights</h2>
          </div>
          <div className="highlights-grid">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="highlight-card"
            >
              <FaUserTie className="highlight-icon" />
              <h3>Assistant Professor</h3>
              <p>Department of Electronics and Communication Engineering<br />Faculty of Technology, University of Delhi</p>
              <span className="highlight-year">2023 - Present</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="highlight-card"
            >
              <FaUserTie className="highlight-icon" />
              <h3>Assistant Professor</h3>
              <p>Department of Electronics and Communication Engineering<br />Vignan's Institute of Information Technology, Visakhapatnam</p>
              <span className="highlight-year">Sept 2022 - Nov 2023</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="highlight-card"
            >
              <FaUserTie className="highlight-icon" />
              <h3>Assistant Professor</h3>
              <p>Electronics & Telecommunication Engineering Department<br />Vijayanjali Institute of Technology, Balasore, Odisha</p>
              <span className="highlight-year">2010 - 2015</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="highlight-card"
            >
              <FaGlobe className="highlight-icon" />
              <h3>Research Excellence</h3>
              <p>14+ Journal Publications & 30+ Conference Papers<br />IEEE & Springer Peer-Reviewed Venues</p>
              <span className="highlight-year">2015 - Present</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      {profile?.researchInterests && profile.researchInterests.length > 0 && (
        <section className="research-interests">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Research Specializations</h2>
              <p className="section-subtitle">Areas of academic expertise and scholarly focus</p>
            </div>
            <div className="interests-grid">
              {profile.researchInterests.map((interest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="interest-card"
                >
                  <div className="interest-icon">
                    <FaGraduationCap />
                  </div>
                  <h3>{interest}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Education Section */}
      {education.length > 0 && (
        <section className="education-section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">
                <FaGraduationCap /> Academic Qualifications
              </h2>
              <p className="section-subtitle">Educational background and academic achievements</p>
            </div>
            <div className="education-timeline">
              {education.map((edu, index) => (
                <motion.div
                  key={edu._id || index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="education-item"
                >
                  <div className="education-year">{edu.year}</div>
                  <div className="education-content">
                    <h3>{edu.degree}</h3>
                    <p className="education-institution">{edu.institution}</p>
                    {edu.field && <p className="education-field">{edu.field}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Administrative Roles */}
      {profile?.administrativeRoles && profile.administrativeRoles.length > 0 && (
        <section className="administrative-roles">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Administrative Roles & Services</h2>
              <p className="section-subtitle">Professional service and academic leadership contributions</p>
            </div>
            <div className="roles-list">
              {profile.administrativeRoles.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="role-item"
                >
                  <div className="role-bullet">•</div>
                  <p>{role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Professional Memberships */}
      {profile?.professionalMemberships && profile.professionalMemberships.length > 0 && (
        <section className="professional-memberships">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Professional Memberships</h2>
              <p className="section-subtitle">Academic and professional affiliations</p>
            </div>
            <div className="memberships-grid">
              {profile.professionalMemberships.map((membership, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="membership-card"
                >
                  <FaGraduationCap className="membership-icon" />
                  <p>{membership}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Honors & Awards */}
      {profile?.awards && profile.awards.length > 0 && (
        <section className="honors-awards">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Honors & Awards</h2>
              <p className="section-subtitle">Academic recognition and excellence awards</p>
            </div>
            <div className="awards-list">
              {profile.awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="award-item"
                >
                  <div className="award-bullet">★</div>
                  <p>{award}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default About;