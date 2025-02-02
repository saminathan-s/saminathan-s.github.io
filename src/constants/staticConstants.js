import cert1 from '../assets/KCNA.png';
import cert2 from '../assets/IATA.png';

export const HERO_CONTENT = `Dynamic and results-oriented Full Stack Support Engineer with over 12 years of hands-on experience in application management and business operations. Proven expertise in navigating client-facing environments, delivering exceptional service, and driving operational efficiency. Possesses in-depth knowledge of cloud and on-premises infrastructures, coupled with a strong understanding of microservices architecture and agile methodologies. Eager to leverage my skills and experience in pursuit of exciting opportunities in the field.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: '2021 - Present',
    role: 'Full Stack Engineer | Ast Consultant',
    location: 'Singapore',
    description: [
      `Led a 20+ member production support team for an e-commerce website with 100+ microservices across various platforms (cloud,on- prem, serverless infrastructure).`,
      `Automated daily tasks, reducing manual effort by 50% through the utilization of Java, Node.js, React.js, Selenium, and shell scripting.`,
      `Provided solutions for multiple projects aimed at improving website user experience leveraging knowledge of e-commerce and system design.`,
      `Directed production delivery processes and conducted post-release checkpoints to ensure smooth operations.`,
      `Led cross-functional teams in troubleshooting complex incidents, resulting in swift resolutions and minimal downtime.`,
      `Reviewed agile squad codes to ensure adherence to coding standards and achieve defect-free deliveries.`,
    ],
    technologies: [
      'Team Management',
      'Delivery and Operations',
      'System Design',
      'Incident-Handling',
      'E-commerce',
      'Code Reviews',
      'Microservices',
    ],
  },
  {
    year: '2017 - 2021',
    role: 'IT Analyst',
    location: 'Singapore',
    description: [
      `Designed and developed the payment reconciliation job, enabling the Client’s Finance team to reconcile settlements within 1 week, a significant improvement from the usual 3 weeks.`,
      `Played a pivotal role in migrating the Ecommerce website from on-premises to AWS cloud platform, resulting in a 60% reduction in operational costs.`,
      `Spearheaded the design and implementation of an automated recapture job, resulting in a 70% reduction in manual recovery efforts for unbilled payments.`,
      `Enhanced system monitoring capabilities by integrating system alerts with monitoring platforms such as Dynatrace, Splunk, and Datadog, improving overall system visibility and issue detection.`,
      `Developed Payment Gateway Interfacing microservices utilizing the Springboot framework to streamline the generation of settlement files for various payment gateways.`,
    ],
    technologies: [
      'Application Monitoring',
      'REST APIs',
      'Payment Gateways',
      'Automation',
      'Cloud Migration',
      'Airline Reservations',
    ],
  },
  {
    year: '2013 - 2017',
    role: 'Software Engineer',
    location: 'Chennai, India',
    description: [
      `Implemented minor enhancements and conducted end-to-end testing for booking ancillary products.`,
      `Analyzed and devised optimal solutions for production issues, ensuring seamless operation of critical systems.`,
      `Addressed bugs and implemented fixes, resulting in enhanced stability and reliability of the system upon deployment to production.`,
      `Developed solution proposals and performed impact analysis based on client requirements.`,
    ],
    technologies: [
      'Bug Fixes',
      'Impact Analysis',
      'User Quries',
      'Solution Proposals',
    ],
  },
];

export const CERTIFICATES = [
  {
    title: 'Kubernetes and Cloud Native Associate',
    image: cert1,
    organisation: 'The Linux Foundation',
    issued: ['Issued Dec 2024', 'Expires Dec 2026'],
  },
  {
    title: 'Distribution and Airline Retailing with NDC',
    image: cert2,
    organisation: 'International Air Transport Association (IATA)',
    issued: ['Issued Nov 2023'],
  },
];

export const CONTACT = {
  address: 'Singapore',
  phoneNo: '+65 85819675 ',
  email: 'smartsami29@gmail.com',
};

export const ACHIEVEMENTS = [
  {
    title: 'Beyond Excellence Award',
    description: `Awarded by TCS Singapore management for the outstanding performance and dedication in managing the Ecommerce Support team.`,
    year: '2024',
  },

  {
    title: 'Contextual Master',
    description: `Recognized by TCS Management for the contributions to developing the Payment reconciliation job, with the story published in the TCS forum.`,
    year: '2022',
  },
  {
    title: 'Digital Ninja',
    description: `Acknowledged as a Digital Ninja for acquiring competencies as part of the Agile workforce transformation initiative.`,
    year: '2020',
  },
  {
    title: 'Excellence in Support and Coordination Award',
    description: `Awarded by TCS Singapore management for three consecutive years for the splendid performance and contributions.`,
    year: '2017, 2018, 2019',
  },
];
