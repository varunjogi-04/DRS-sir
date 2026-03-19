import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaExternalLinkAlt, FaFilter, FaBook } from 'react-icons/fa';
import './Publications.css';

// Publications data - using local data instead of backend API
const publicationsData = [
  {
    _id: '1',
    title: 'A Broadband Graphene-Metal Hybrid Polarization-Insensitive FSS with Wide Tuning Range at Terahertz Frequency',
    type: 'Journal',
    authors: 'D. Samantaray, S. K. Ghosh, N. Kumar, A. Verma, R. K. Singh, S. Bhattacharyya',
    journal: 'Applied Optics',
    year: 2026,
    volume: 'TBD',
    pages: 'TBD',
    issn: '',
    doi: '',
    authorship: 'Multi-Author'
  },
  {
    _id: '2',
    title: 'Design of metasurface-inspired high-gain and low-profile LHCP antenna',
    type: 'Journal',
    authors: 'MK Shrivastava, R Singh, D. Samantaray, AK Gautam, AK Singh',
    journal: 'International Journal of Microwave and Wireless Technologies',
    year: 2025,
    volume: '17',
    pages: '1086-1096',
    issn: '',
    doi: '',
    authorship: 'Multi-Author'
  },
  {
    _id: '3',
    title: 'A high gain dual circularly polarized metamaterial Loaded antenna for X-band applications',
    type: 'Journal',
    authors: 'M. Kumar Shrivastava, R. Singh, D. Samantaray, A. Khan, A. Kumar Gautam, A. Kumar Singh',
    journal: 'AEU-International Journal of Electronics and Communications',
    year: 2025,
    volume: '198',
    pages: '155843',
    issn: '',
    doi: '',
    authorship: 'Multi-Author'
  },
  {
    _id: '4',
    title: 'A Metamaterial Loaded High Gain Low Profile RHCP Microstrip Antenna for X-Band Applications',
    type: 'Journal',
    authors: 'M. Kumar Shrivastava, R. Singh, D. Samantaray, A. Khan, A. Kumar Gautam, A. Kumar Singh',
    journal: 'IEEE Access',
    year: 2025,
    volume: '13',
    pages: '33321-33329',
    issn: '',
    doi: '',
    authorship: 'Multi-Author'
  },
  {
    _id: '5',
    title: 'Triple-Band Metasurface Absorber for RF Energy Harvesting Applications',
    type: 'Journal',
    authors: 'R. Agrahari, S. Singh, D. Samantaray, B. Kumar, S Bhattacharyya, M. Mahto, P. K. Jain',
    journal: 'Microwave and Optical Technology Letters',
    year: 2023,
    volume: '65',
    pages: '2252-2261',
    issn: '',
    doi: '',
    authorship: 'Multi-Author'
  },
  {
    _id: '6',
    title: 'A Broadband Transmissive Type Metasurface Cross-Polarization Converter for EMC Application',
    type: 'Journal',
    authors: 'M. Chandra, Nilotpal, D. Samantaray, M. Thottappan, S. Bhattacharyya',
    journal: 'IEEE Transactions on Electromagnetic Compatibility',
    year: 2023,
    volume: '65',
    pages: '186-194',
    issn: '',
    doi: '10.1109/TEMC.2022.3213833',
    authorship: 'Multi-Author'
  },
  {
    _id: '7',
    title: 'A Metasurface-backed Planar Low-Profile Dual-Band Monopole Antenna',
    type: 'Journal',
    authors: 'D. Samantaray, S. Bhattacharyya',
    journal: 'Journal of Electromagnetic Waves and Applications',
    year: 2023,
    volume: '37',
    pages: '884–897',
    issn: '',
    doi: '',
    authorship: 'Multi-Author'
  },
  {
    _id: '8',
    title: 'Modified Slotted Patch Antenna With Metasurface as Superstrate for Dual-Band Applications',
    type: 'Journal',
    authors: 'D. Samantaray, S. K. Ghosh, S. Bhattacharyya',
    journal: 'IEEE Antennas and Wireless Propagation Letters',
    year: 2023,
    volume: '22',
    pages: '109-113',
    issn: '',
    doi: '10.1109/LAWP.2022.3204180',
    authorship: 'Multi-Author'
  },
  {
    _id: '9',
    title: 'Performance Improvement of a Graphene Patch Antenna using Metasurface for THz Applications',
    type: 'Journal',
    authors: 'A Shubham, D Samantaray, S Ghosh, S Dwivedi, S Bhattacharyya',
    journal: 'Optik',
    year: 2022,
    volume: '264',
    pages: '1-9',
    issn: '',
    doi: '',
    authorship: 'Multi-Author'
  },
  {
    _id: '10',
    title: 'A THz antenna with sandwiched metasurface for quadband application',
    type: 'Journal',
    authors: 'M Jha, D Samantaray, S Bhattacharyya',
    journal: 'Optics Communications',
    year: 2021,
    volume: '493',
    pages: '1-10',
    issn: '',
    doi: '',
    authorship: 'Multi-Author'
  },
  {
    _id: '11',
    title: 'A Metasurface Based Gain Enhanced Dual Band Patch Antenna Using SRRs with Defected Ground Structure',
    type: 'Journal',
    authors: 'D Samantaray, S Bhattacharyya',
    journal: 'Radio Science',
    year: 2021,
    volume: '56',
    pages: '1-13',
    issn: '',
    doi: '',
    authorship: 'Multi-Author'
  },
  {
    _id: '12',
    title: 'Meander‐line‐based defected ground microstrip antenna slotted with split ring resonator for terahertz range',
    type: 'Journal',
    authors: 'S. Ghosh, S. Das, D. Samantaray, S. Bhattacharyya',
    journal: 'Engineering Reports',
    year: 2020,
    volume: '2',
    pages: '1-9',
    issn: '',
    doi: '',
    authorship: 'Multi-Author'
  },
  {
    _id: '13',
    title: 'A Gain-Enhanced Slotted Patch Antenna Using Metasurface as Superstrate Configuration',
    type: 'Journal',
    authors: 'D. Samantaray, S. Bhattacharyya',
    journal: 'IEEE Transactions on Antennas and Propagation',
    year: 2020,
    volume: '68',
    pages: '6548-6556',
    issn: '',
    doi: '10.1109/TAP.2020.2990280',
    authorship: 'Multi-Author'
  },
  {
    _id: '14',
    title: 'A modified fractal‐shaped slotted patch antenna with defected ground using metasurface for dual band applications',
    type: 'Journal',
    authors: 'D Samantaray, S Bhattacharyya, K. V. Srinivas',
    journal: 'International Journal of RF and Microwave Computer-Aided Engineering',
    year: 2019,
    volume: '29',
    pages: '1-9',
    issn: '',
    doi: '',
    authorship: 'Multi-Author'
  },
  {
    _id: '15',
    title: 'THz Metasurface Antenna',
    type: 'Book',
    authors: 'D. Samantaray, S. Bhattacharyya',
    publisher: 'Springer Nature',
    year: 2025,
    authorship: 'Multi-Author'
  },
  {
    _id: '16',
    title: 'Design and optimization of metasurface antennas in wireless communication',
    type: 'Book',
    authors: 'D. Samantaray, S. Bhattacharyya',
    publisher: 'The CRC Press, Taylor & Francis Group',
    year: 2024,
    authorship: 'Multi-Author'
  },
  {
    _id: '17',
    title: 'Microwave Devices and Circuits for Advance Wireless Communication: Design and Analysis',
    type: 'Book',
    authors: 'D. Samantaray, S. Bhattacharyya',
    publisher: 'The CRC Press, Taylor & Francis Group',
    year: 2024,
    authorship: 'Multi-Author'
  },
  {
    _id: '18',
    title: 'Optimized Wideband Antenna Array with Metasurface for Next Generation 5G Networks',
    type: 'Conference',
    authors: 'D. Samantaray et al.',
    journal: 'Third International Conference on Microwave, Antenna and Communication (MAC), Bhopal',
    year: 2025,
    pages: '1-4',
    authorship: 'Multi-Author'
  },
  {
    _id: '19',
    title: 'A Graphene Patch Antenna with Improved Performance for THz Applications',
    type: 'Conference',
    authors: 'D. Samantaray, A. Shubham, S. K. Ghosh, S. Dwivedi, S. Bhattacharyya',
    journal: 'IEEE Wireless Antenna and Microwave Symposium (WAMS), Ahmedabad',
    year: 2023,
    pages: '1-3',
    authorship: 'Multi-Author'
  },
  {
    _id: '20',
    title: 'An AMC Based Metasurface Patch Antenna for C-Band and X-Band Applications',
    type: 'Conference',
    authors: 'D. Samantaray, S. Bhattacharyya',
    journal: 'IEEE Indian Conference on Antennas and Propagation (InCAP), Jaipur',
    year: 2021,
    pages: '548-551',
    authorship: 'Multi-Author'
  },
  {
    _id: '21',
    title: 'A Gain Enhanced Metasurface based Monopole Antenna for WLAN Application',
    type: 'Conference',
    authors: 'D. Samantaray, S. Bhattacharyya',
    journal: 'URSI General Assembly 2021, Rome, Italy',
    year: 2021,
    authorship: 'Multi-Author'
  },
  {
    _id: '22',
    title: 'A Superstrate-based Metasurface Antenna for Dual Band Application',
    type: 'Conference',
    authors: 'D. Samantaray, S. Bhattacharyya',
    journal: 'URSI Regional Conference on Radio Science (URSI-RCRS), Varanasi',
    year: 2020,
    authorship: 'Multi-Author'
  },
  {
    _id: '23',
    title: 'A Modified Low Profile Patch Antenna with Enhanced Bandwidth for Multiband Applications',
    type: 'Conference',
    authors: 'D. Samantaray, S. Bhattacharyya',
    journal: 'IEEE Indian Conference on Antennas and Propagation (InCAP), Ahmedabad',
    year: 2019,
    authorship: 'Multi-Author'
  },
  {
    _id: '24',
    title: 'A Gain Enhanced Multiband Antenna using SRRs with Defected Ground Structure',
    type: 'Conference',
    authors: 'D. Samantaray, S. Bhattacharyya, K. V. Srinivas',
    journal: 'URSI Asia Pacific Radio Science Conference (AP-RASC), New Delhi',
    year: 2019,
    authorship: 'Multi-Author'
  },
  {
    _id: '25',
    title: 'Modified Fractal-shaped Slotted Patch Antenna with Dipole-shaped Slotted Ground Plane with Enhanced Gain for X-band Applications',
    type: 'Conference',
    authors: 'D. Samantaray, S. Bhattacharyya, K. V. Srinivas',
    journal: 'IEEE Indian Conference on Antennas and Propagation (InCAP), Hyderabad',
    year: 2018,
    authorship: 'Multi-Author'
  },
  {
    _id: '26',
    title: 'Modified Fractal-shaped Slotted Patch Antenna with Defected Ground Structure for Multiband Applications',
    type: 'Conference',
    authors: 'D. Samantaray, S. Bhattacharyya, K. V. Srinivas',
    journal: 'IEEE INAE Workshop on Electromagnetics (IIWE), Trivandrum',
    year: 2018,
    authorship: 'Multi-Author'
  },
  {
    _id: '27',
    title: 'Dual band FSS backed printed antenna with fractal geometry for wearable applications',
    type: 'Book Chapter',
    authors: 'A. Krishnan MJ, D. Samantaray, A. Mohamed, C. Saha, S. Bhattacharyya',
    journal: 'Computers and Devices for Communication, Springer Lecture Notes',
    year: 2019,
    pages: '294-301',
    authorship: 'Multi-Author'
  },
  {
    _id: '28',
    title: 'Design of a bident-shaped metamaterial embedded triple band microstrip printed antenna with defected ground structure',
    type: 'Book Chapter',
    authors: 'A. Chatterjee, D. Sen Sharma, D. Samantaray, C. Sarkar, C. Saha, S. Bhattacharyya',
    journal: 'Computers and Devices for Communication, Springer Lecture Notes',
    year: 2019,
    pages: '250-256',
    authorship: 'Multi-Author'
  },
  {
    _id: '29',
    title: 'A metasurface inspired terahertz antenna for multiband applications',
    type: 'Book Chapter',
    authors: 'M. Jha, D. Samantaray, S. Bhattacharyya',
    journal: 'Computers and Devices for Communication, Springer Lecture Notes',
    year: 2019,
    pages: '315-320',
    authorship: 'Multi-Author'
  },
  {
    _id: '30',
    title: 'Double-Axial Strain Sensor Based on Cross and Dumbbell-Shaped Metasurface',
    type: 'Conference',
    authors: 'A. R. Kumar, K. Singh, D. R. Samantaray, R. Agrahari',
    journal: 'IEEE Microwaves, Antennas, and Propagation Conference (MAPCON), Kochi',
    year: 2025,
    pages: '1-4',
    authorship: 'Multi-Author'
  },
  {
    _id: '31',
    title: 'Spin-Wave Mediated Microwave Antennas: a New Paradigm in Smart Antenna Engineering',
    type: 'Conference',
    authors: 'R. K. Nayak, A. Maurya, D. Samantaray, S. Bhattacharyya, R. Singh, B. Bhoi',
    journal: 'IEEE Microwaves, Antennas, and Propagation Conference (MAPCON), Kochi',
    year: 2025,
    pages: '1-4',
    authorship: 'Multi-Author'
  },
  {
    _id: '32',
    title: 'A Wearable Dual-Band Circularly Polarized Patch Antenna for Wearable Applications',
    type: 'Conference',
    authors: 'K. Sasank, D. Ram, K. Kandiraju, D. Samantaray, V. Kaim, S. Bhattacharyya',
    journal: 'IEEE Wireless Antenna and Microwave Symposium (WAMS), Chennai',
    year: 2025,
    pages: '1-4',
    authorship: 'Multi-Author'
  },
  {
    _id: '33',
    title: 'A Metasurface Integrated Wide Bandwidth High Gain Patch Antenna for X-band Applications',
    type: 'Conference',
    authors: 'K. Sasank, D. Ram, K. Kandiraju, D. Samantaray, V. Kaim, S. Bhattacharyya',
    journal: 'IEEE Wireless Antenna and Microwave Symposium (WAMS), Chennai',
    year: 2025,
    pages: '1-4',
    authorship: 'Multi-Author'
  },
  {
    _id: '34',
    title: 'Dual Band Ingestible Antenna System for Wireless Capsule Endoscopy: Design Challenges',
    type: 'Conference',
    authors: 'V. Kaim, S. Modak, D. Samantaray, B. K. Kanaujia',
    journal: 'IEEE Wireless Antenna and Microwave Symposium (WAMS), Chennai',
    year: 2025,
    pages: '1-3',
    authorship: 'Multi-Author'
  },
  {
    _id: '35',
    title: 'Advances in Metasurface Antenna for Real-Time Biomedical Applications',
    type: 'Conference',
    authors: 'K. Sathwik, D. Samantaray, K. Chaitanya, B. R. Swain, D. Ram, S. Bhattacharya',
    journal: 'IEEE Microwaves, Antennas, and Propagation Conference (MAPCON), Hyderabad',
    year: 2024,
    pages: '1-4',
    authorship: 'Multi-Author'
  },
  {
    _id: '36',
    title: 'Efficient Metasurface Antenna Design for Compact 5G Wireless Applications',
    type: 'Conference',
    authors: 'K. Sathwik, D. Samantaray, B. R. Swain',
    journal: 'Second International Conference on Microwave, Antenna and Communication (MAC), Dehradun',
    year: 2024,
    authorship: 'Multi-Author'
  },
  {
    _id: '37',
    title: 'A High-Gain Metasurface Antenna for Compact 5G Applications',
    type: 'Conference',
    authors: 'K. Sathwik, D. Samantaray, S. Bhattacharyya',
    journal: 'IEEE Wireless Antenna and Microwave Symposium (WAMS), Visakhapatnam',
    year: 2024,
    pages: '1-3',
    authorship: 'Multi-Author'
  },
  {
    _id: '38',
    title: 'A Systematic LHCP Antenna Design Exploration for Smarter IoT Wireless Networks',
    type: 'Conference',
    authors: 'M. Yuvaraju, K. Sasank, D. Samantaray, B. R. Swain, N. Kumar, S. Bhattacharyya',
    journal: 'IEEE Wireless Antenna and Microwave Symposium (WAMS), Visakhapatnam',
    year: 2024,
    pages: '1-3',
    authorship: 'Multi-Author'
  },
  {
    _id: '39',
    title: 'A Metasurface-Based Triple-Band Polarization Insensitive Band-Stop Filter for S/C/X Band Applications',
    type: 'Conference',
    authors: 'A. K. Singh, S. K. Ghosh, D. Samantaray, S. Bhattacharyya',
    journal: 'IEEE Microwaves, Antennas, and Propagation Conference (MAPCON), Bangalore',
    year: 2022,
    pages: '1684-1688',
    authorship: 'Multi-Author'
  },
  {
    _id: '40',
    title: 'A Quad-band Graphene Printed Antenna Loaded with Graphene Metasurface for Application in Terahertz Gap',
    type: 'Conference',
    authors: 'A. Chatterjee, D. Samantaray, S. K. Ghosh, C. Sarkar, S. Bhattacharya, S. Bhattacharyya',
    journal: 'IEEE Microwaves, Antennas, and Propagation Conference (MAPCON), Bangalore',
    year: 2022,
    pages: '1058-1062',
    authorship: 'Multi-Author'
  },
  {
    _id: '41',
    title: 'Design of a Printed Triangular Patch Antenna Loaded with Novel Trident-Shaped Metasurface and Defected Ground Plane',
    type: 'Conference',
    authors: 'A. Chatterjee, D. Sen Sharma, D. Samantaray, C. Sarkar, C. Saha, S. Bhattacharyya',
    journal: 'URSI Regional Conference on Radio Science (URSI-RCRS), Varanasi',
    year: 2020,
    authorship: 'Multi-Author'
  },
  {
    _id: '42',
    title: 'Gain Enhancement of Yagi Slot Antenna using AMC Substrate',
    type: 'Conference',
    authors: 'K. Chandran P. L., D. Samantaray, A. Mohamed, C. Saha, S. Bhattacharyya',
    journal: 'URSI Regional Conference on Radio Science (URSI-RCRS), Varanasi',
    year: 2020,
    authorship: 'Multi-Author'
  },
  {
    _id: '43',
    title: 'Gain Enhanced Quad-Band AMC Backed Printed Antenna with Fractal Geometry',
    type: 'Conference',
    authors: 'A. Krishnan MJ, D. Samantaray, A. Mohamed, C. Saha, S. Bhattacharyya',
    journal: 'URSI Regional Conference on Radio Science (URSI-RCRS), Varanasi',
    year: 2020,
    authorship: 'Multi-Author'
  },
  {
    _id: '44',
    title: 'A AMC Substrate Backed Gain Enhanced Multi-Band Wearable Yagi Antenna',
    type: 'Conference',
    authors: 'K. Chandran P. L., D. Samantaray, A. Mohamed, C. Saha, S. Bhattacharyya',
    journal: 'IEEE Indian Conference on Antennas and Propagation (InCAP), Ahmedabad',
    year: 2019,
    authorship: 'Multi-Author'
  },
  {
    _id: '45',
    title: 'A Multiband Wearable Antenna with Defected Ground Structure',
    type: 'Conference',
    authors: 'R. Tuli, D. Samantaray, S. Bhattacharyya',
    journal: 'URSI Asia Pacific Radio Science Conference (AP-RASC), New Delhi',
    year: 2019,
    authorship: 'Multi-Author'
  },
  {
    _id: '46',
    title: 'An Efficient Terahertz Antenna using CPW Interdigital Capacitor',
    type: 'Conference',
    authors: 'S. Das, S. Ghosh, D. Samantaray, S. Bhattacharyya',
    journal: 'IEEE Indian Conference on Antennas and Propagation (InCAP), Hyderabad',
    year: 2018,
    authorship: 'Multi-Author'
  },
  {
    _id: '47',
    title: 'Meander Line based Defected Ground Microstrip Antenna slotted with SRR for Terahertz range',
    type: 'Conference',
    authors: 'S. Ghosh, S. Das, D. Samantaray, S. Bhattacharyya',
    journal: 'IEEE INAE Workshop on Electromagnetics (IIWE), Trivandrum',
    year: 2018,
    authorship: 'Multi-Author'
  },
  {
    _id: '48',
    title: 'A comparative study on substrate integrated waveguide periodic leaky wave antennas with differently shaped periodic slots',
    type: 'Conference',
    authors: 'R. Shaw, A. A. Khan, D. Samantaray, M. K. Mandal',
    journal: 'IEEE Applied Electromagnetics Conference (AEMC), IIT Guwahati',
    year: 2015,
    pages: '1-2',
    authorship: 'Multi-Author'
  },
  {
    _id: 'p1',
    title: 'Smart Metasurface-Enabled Circular Polarization Facilitating Dynamic Beam Control Optimized Antenna Design in mm-Wave Systems',
    type: 'Projects',
    description: 'Approved research project focused on developing smart metasurface-based antenna systems with dynamic beam control capabilities for millimeter-wave communication applications, enabling efficient circular polarization control and beam steering.',
    status: 'Ongoing',
    year: '2025',
    funding: 'ANRF (Anusandhan National Research Foundation)',
    collaborators: 'Faculty of Technology, University of Delhi'
  },
  {
    _id: 'p2',
    title: 'Optimized Metasurface Antennas for Enhanced Wireless Communication at Millimeter-Wave Frequencies',
    type: 'Projects',
    description: 'Faculty Research Programme (FRP) funded project aimed at designing and optimizing metasurface-integrated antennas for enhanced performance at millimeter-wave frequencies, supporting next-generation wireless communication systems.',
    status: 'Ongoing',
    year: '2025',
    funding: 'Faculty Research Programme (FRP) Grant IoE, India',
    collaborators: 'Faculty of Technology, University of Delhi'
  },
  {
    _id: 'p3',
    title: 'Study of High-Performance Metasurface Antenna in Microwave Frequencies',
    type: 'Projects',
    description: 'Ph.D. thesis research on the design and analysis of high-performance metasurface-based antennas operating at microwave frequencies, with focus on gain enhancement, bandwidth improvement, and multiband operation.',
    status: 'Completed',
    year: '2022',
    funding: 'IIT (BHU) Doctoral Programme',
    collaborators: 'Indian Institute of Technology (BHU), Varanasi'
  },
  {
    _id: 'p4',
    title: 'Planar Periodic Leaky Wave Antennas for Imaging Application',
    type: 'Projects',
    description: 'M.Tech thesis research on the development of planar periodic leaky wave antenna structures optimized for imaging applications, demonstrating advanced antenna design techniques for specialized RF systems.',
    status: 'Completed',
    year: '2015',
    funding: 'IIT Kharagpur Masters Programme',
    collaborators: 'Indian Institute of Technology, Kharagpur'
  }
];

const Publications = () => {
  const [publications] = useState(publicationsData);
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');



  const filteredPublications = publications.filter(pub => {
    const matchesFilter = filter === 'All' || pub.type === filter;
    const matchesSearch =
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (pub.journal && pub.journal.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const typeColors = {
    'Journal': '#0066cc',
    'Book Chapter': '#28a745',
    'Book': '#dc3545',
    'Conference': '#ffc107',
    'Projects': '#9c27b0'
  };

  return (
    <div className="publications">
      <section className="publications-hero">
        <div className="section-container">
          <h1 className="page-title">Academic Publications</h1>
          <p className="page-subtitle">
            Research contributions in Antenna Design, Metasurfaces, RF & Microwave Engineering, and Electromagnetic Compatibility
          </p>
        </div>
      </section>

      <section className="publications-content">
        <div className="section-container">
          <div className="publications-controls">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search publications by title, author, or journal..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="filter-buttons">
              <button
                className={filter === 'All' ? 'active' : ''}
                onClick={() => setFilter('All')}
              >
                All Publications
              </button>
              <button
                className={filter === 'Journal' ? 'active' : ''}
                onClick={() => setFilter('Journal')}
              >
                Journal Articles
              </button>
              <button
                className={filter === 'Conference' ? 'active' : ''}
                onClick={() => setFilter('Conference')}
              >
                Conferences
              </button>
              <button
                className={filter === 'Book' ? 'active' : ''}
                onClick={() => setFilter('Book')}
              >
                Books
              </button>
              <button
                className={filter === 'Book Chapter' ? 'active' : ''}
                onClick={() => setFilter('Book Chapter')}
              >
                Book Chapters
              </button>
              <button
                className={filter === 'Projects' ? 'active' : ''}
                onClick={() => setFilter('Projects')}
              >
                Projects
              </button>
            </div>
          </div>

          {filteredPublications.length === 0 ? (
            <div className="no-publications">
              <FaFileAlt size={60} />
              <p>No publications found matching your criteria.</p>
            </div>
          ) : (
            <div className="publications-list">
              {filteredPublications.map((pub, index) => (
                <motion.div
                  key={pub._id || index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="publication-card"
                >
                  <div className="publication-header">
                    <div
                      className="publication-type"
                      style={{ backgroundColor: typeColors[pub.type] || '#6c757d' }}
                    >
                      {pub.type}
                    </div>
                    <div className="publication-year">{pub.year}</div>
                  </div>

                  <h3 className="publication-title">{pub.title}</h3>

                  <p className="publication-authors">{pub.authors}</p>

                  {pub.journal && (
                    <p className="publication-journal">
                      <strong>{pub.journal}</strong>
                      {pub.volume && `, ${pub.volume}`}
                      {pub.pages && `, pp. ${pub.pages}`}
                    </p>
                  )}

                  {pub.publisher && (
                    <p className="publication-publisher">
                      <strong>Publisher:</strong> {pub.publisher}
                    </p>
                  )}

                  {pub.type === 'Projects' && (
                    <div className="project-extra-details">
                      {pub.description && <p className="project-description">{pub.description}</p>}
                      {pub.funding && (
                        <p className="project-funding">
                          <strong>Funding:</strong> {pub.funding}
                        </p>
                      )}
                      {pub.status && (
                        <p className="project-status">
                          <strong>Status:</strong> <span className={`status-tag ${pub.status.toLowerCase()}`}>{pub.status}</span>
                        </p>
                      )}
                      {pub.collaborators && (
                        <p className="project-collaborators">
                          <strong>Collaborators:</strong> {pub.collaborators}
                        </p>
                      )}
                    </div>
                  )}

                  <div className="publication-meta">
                    {pub.issn && (
                      <span className="publication-issn">ISSN: {pub.issn}</span>
                    )}
                    {pub.isbn && (
                      <span className="publication-isbn">ISBN: {pub.isbn}</span>
                    )}
                    {pub.authorship && (
                      <span className="publication-authorship">Authorship: {pub.authorship}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Publications;