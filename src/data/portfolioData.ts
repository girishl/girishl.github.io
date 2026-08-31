import { Publication, Patent, Repository, Experience, Education, Course, CommunityEvent, Award, InstitutionalProject, Certification, ProfessionalMembership } from '../types';

export const personalInfo = {
  name: "Dr. Girish L",
  title: "Director, Skill Training and Placement & Head",
  tagline: "15+ Years of Transforming Education Through Technology, Research & Industry Partnerships",
  avatarUrl: "https://shrideviengineering.org/wp-content/uploads/2025/04/66200630952.png",
  aboutImageUrl: "https://media.licdn.com/dms/image/v2/D5603AQHVbP3mSSHvbQ/profile-displayphoto-shrink_800_800/B56ZSY06fTGoAc-/0/1737730796856?e=1789603200&v=beta&t=fGY8Dv_oRaHKXV4pX73ugn6TeIwLpBxnz9fGKMp0p7A",
  department: "Dept of AI&DS & AI&ML",
  institution: "Shridevi Institute of Engg, and Technology, Tumkur",
  location: "Tumakuru, Karnataka, India",
  email: "girishltumkur@gmail.com",
  phone: "+91 8970429399",
  website: "http://girishl.in/",
  vidwan: "https://vidwan.inflibnet.ac.in/profile/469331",
  vidwanId: "469331",
  github: "https://github.com/girishl",
  githubUsername: "girishl",
  scholar: "https://scholar.google.com/citations?user=m67p7REAAAAJ&hl=en",
  twitter: "https://x.com/girishl5",
  linkedin: "https://www.linkedin.com/in/dr-girish-l-87859a23a",
  researchGate: "https://www.researchgate.net/profile/Girish-L",
  bioSummary: "Academician, Researcher, and Tech Community Organizer specializing in Machine Learning, Cloud Computing, DevOps, and Next Generation Networks. Passionate about institutional digital transformation, student upskilling, and open-source ecosystems.",
  aboutDetailed: "Dr. Girish L is the Director of Skill Training and Placement and Head of the Department of Artificial Intelligence & Data Science and Artificial Intelligence & Machine Learning (AI&DS & AI&ML) at Shridevi Institute of Engineering and Technology (SIET), Tumkur. With over 15+ years of transforming education through technology, research, and industry partnerships, he holds a Ph.D. from Visvesvaraya Technological University (VTU). He collaborates internationally as a Thesis Supervisor at Liverpool John Moores University (UK) and orchestrates developer communities as Community Organizer for TFUG Tumkur.",
  stats: [
    { label: "Years Experience", value: "15+" },
    { label: "Students Upskilled", value: "2,000+" },
    { label: "Publications & Papers", value: "26" },
    { label: "Granted / Filed Patents", value: "3" }
  ],
  spokenLanguages: ["Kannada", "English", "Hindi"],
  areasOfInterest: [
    "Machine Learning",
    "Cloud Computing",
    "DevOps",
    "Next Generation Network"
  ],
  personalInterests: [
    "Badminton",
    "Open Source Contribution",
    "Community Organizer for Machine Learning Projects",
    "Networking"
  ],
  certifications: [
    {
      id: "cert-1",
      title: "AWS Fundamentals: Going Cloud-Native",
      issuer: "Amazon Web Services",
      year: "2020"
    },
    {
      id: "cert-2",
      title: "Fundamentals of Kubernetes Deployment",
      issuer: "Cloud Native / Kubernetes",
      year: "2020"
    },
    {
      id: "cert-3",
      title: "Programming for Everybody (Getting Started with Python)",
      issuer: "University of Michigan",
      year: "2020"
    }
  ] as Certification[],
  memberships: [
    {
      id: "mem-1",
      shortName: "IEEE",
      name: "Institute of Electrical and Electronics Engineers",
      role: "Professional Member"
    },
    {
      id: "mem-2",
      shortName: "IEI",
      name: "Institution of Engineers (India)",
      role: "Professional Member"
    }
  ] as ProfessionalMembership[],
  researchInterests: [
    "Data Analytics in Centralized Control Plane",
    "Virtualized Network Function (VNF) Deployments",
    "Generative Adversarial Networks (GANs) for Telemetry",
    "Failure Prediction in Virtualized Infrastructure",
    "Cloud Computing & Distributed Systems",
    "Applied Deep Learning in Edge & Networks"
  ],
  skills: {
    languages: ["Kannada", "English", "Hindi"],
    coding: ["Python", "Java", "PHP", "Julia"],
    databases: ["MySQL", "PostgreSQL"],
    webDev: ["HTML", "CSS", "JavaScript", "Apache Web Server", "Tomcat Web Server"],
    subjects: ["Machine Learning", "Computer Network", "Cyber Security", "Cloud Computing", "DevOps", "Next Generation Networks"],
    ml_frameworks: ["TensorFlow", "Keras", "PyTorch", "Scikit-Learn", "OpenCV", "HuggingFace"],
    cloud_devops: ["Docker", "Kubernetes", "OpenStack", "AWS", "Google Cloud", "Git/GitHub", "Linux"]
  }
};

export const patents: Patent[] = [
  {
    id: "patent-1",
    title: "Psychological stress detection to avoid suicide cases using deep learning",
    authors: ["G. L", "R. T. V", "P. M", "S. H. S"],
    applicationNumber: "Ordinary Application 202 241 011 833",
    year: "2023",
    status: "Published / Ordinary Application",
    category: "Deep Learning & Healthcare AI",
    description: "Deep learning based predictive surveillance and speech/text analytics framework engineered to detect early onset psychological distress markers and suicidal ideation."
  },
  {
    id: "patent-2",
    title: "Identifying family members of refugees using deep learning",
    authors: ["G. L"],
    applicationNumber: "202 141 017 155",
    year: "2022",
    status: "Published / Filed",
    category: "Deep Learning & Humanitarian AI",
    description: "Facial feature embedding and multi-modal kinship verification model designed to assist international humanitarian organizations in reconnecting displaced refugee families."
  },
  {
    id: "patent-3",
    title: "Covid-19 fake news detection using transformers and deep learning",
    authors: ["M. Y. M", "A. H. C", "P. B", "M. K", "G. H. B", "G. L"],
    applicationNumber: "Ordinary Application 202 141 030 592",
    year: "2022",
    status: "Published / Ordinary Application",
    category: "Transformers & NLP",
    description: "Bidirectional Transformer-based fact-checking and sensationalism-scoring engine for automated misinformation mitigation during global public health crises."
  }
];

export const publications: Publication[] = [
  // ================= JOURNAL ARTICLES (20) =================
  {
    id: "journal-1",
    title: "Sign language recognition using machine learning",
    authors: ["H. C", "G. L", "C. V", "J. N. Shreyas", "B. C"],
    venue: "International Journal of Advanced Scientific Innovation, vol. 5, no. 2",
    year: 2023,
    type: "Journal",
    category: "Deep Learning & NLP",
    isTopPick: true,
    doi: "10.5281/zenodo.7774596",
    url: "https://doi.org/10.5281/zenodo.7774596",
    tags: ["Sign Language", "Machine Learning", "Computer Vision", "Accessibility"],
    bibtex: `@article{hc2023sign,
  author={H. C and Girish, L. and C. V and Shreyas, J. N. and B. C},
  title={Sign language recognition using machine learning},
  journal={International Journal of Advanced Scientific Innovation},
  volume={5},
  number={2},
  year={2023},
  doi={10.5281/zenodo.7774596}
}`
  },
  {
    id: "journal-2",
    title: "Machine learning defence mechanism for securing the cloud environment",
    authors: ["G. L", "R. M. L."],
    venue: "International Journal of Advanced Scientific Innovation, vol. 5, no. 1",
    year: 2023,
    type: "Journal",
    category: "Cloud & Anomaly",
    isTopPick: true,
    doi: "10.5281/zenodo.7712783",
    url: "https://doi.org/10.5281/zenodo.7712783",
    tags: ["Cloud Security", "Defense Mechanism", "Machine Learning", "Cybersecurity"],
    bibtex: `@article{girish2023defence,
  author={Girish, L. and R. M. L.},
  title={Machine learning defence mechanism for securing the cloud environment},
  journal={International Journal of Advanced Scientific Innovation},
  volume={5},
  number={1},
  year={2023},
  doi={10.5281/zenodo.7712783}
}`
  },
  {
    id: "journal-3",
    title: "Pcu-lstm: Predicting cloud cpu utilization using deep learning",
    authors: ["G. L. et al"],
    venue: "NeuroQuantology, vol. 20, no. 22, pp. 2061–2069",
    year: 2022,
    type: "Journal",
    category: "Cloud & Anomaly",
    isTopPick: true,
    doi: "10.48047/nq.2022.20.22.NQ10194",
    url: "https://doi.org/10.48047/nq.2022.20.22.NQ10194",
    tags: ["LSTM", "CPU Utilization", "Cloud Computing", "Predictive Analytics", "Deep Learning"],
    bibtex: `@article{girish2022pculstm,
  author={Girish, L. and others},
  title={Pcu-lstm: Predicting cloud cpu utilization using deep learning},
  journal={NeuroQuantology},
  volume={20},
  number={22},
  pages={2061--2069},
  year={2022},
  doi={10.48047/nq.2022.20.22.NQ10194}
}`
  },
  {
    id: "journal-4",
    title: "Anomaly detection in cloud environment using artificial intelligence techniques",
    authors: ["L. Girish", "S. Rao"],
    venue: "Computing (Springer)",
    year: 2021,
    type: "Journal",
    category: "Cloud & Anomaly",
    isTopPick: true,
    doi: "10.1007/s00607-021-00941-x",
    url: "https://doi.org/10.1007/s00607-021-00941-x",
    tags: ["Anomaly Detection", "Cloud Computing", "Artificial Intelligence", "Telemetry"],
    bibtex: `@article{girish2021anomaly,
  author={Girish, L. and Rao, S.},
  title={Anomaly detection in cloud environment using artificial intelligence techniques},
  journal={Computing},
  year={2021},
  publisher={Springer},
  doi={10.1007/s00607-021-00941-x}
}`
  },
  {
    id: "journal-5",
    title: "Devops methods for automation of server management using ansible",
    authors: ["G. L", "P. T. P", "C. S", "D. M. R"],
    venue: "International Journal of Advanced Scientific Innovation, vol. 1, no. 2, pp. 7–13",
    year: 2021,
    type: "Journal",
    category: "DevOps & Systems",
    isTopPick: false,
    doi: "10.5281/zenodo.4782271",
    url: "https://doi.org/10.5281/zenodo.4782271",
    tags: ["DevOps", "Ansible", "Server Management", "Automation", "Infrastructure as Code"],
    bibtex: `@article{girish2021devops,
  author={Girish, L. and P. T. P and C. S and D. M. R},
  title={Devops methods for automation of server management using ansible},
  journal={International Journal of Advanced Scientific Innovation},
  volume={1},
  number={2},
  pages={7--13},
  year={2021},
  doi={10.5281/zenodo.4782271}
}`
  },
  {
    id: "journal-6",
    title: "Neural network based smart city application for traffic violation detection",
    authors: ["G. L", "M. R", "K. U. Farooq", "G. H. B"],
    venue: "International Journal of Advanced Scientific Innovation, vol. 2, no. 4",
    year: 2021,
    type: "Journal",
    category: "General AI",
    isTopPick: false,
    doi: "10.5281/zenodo.5644879",
    url: "https://doi.org/10.5281/zenodo.5644879",
    tags: ["Smart City", "Traffic Violation", "Neural Networks", "Computer Vision"],
    bibtex: `@article{girish2021smartcity,
  author={Girish, L. and M. R and Farooq, K. U. and G. H. B},
  title={Neural network based smart city application for traffic violation detection},
  journal={International Journal of Advanced Scientific Innovation},
  volume={2},
  number={4},
  year={2021},
  doi={10.5281/zenodo.5644879}
}`
  },
  {
    id: "journal-7",
    title: "Ddos detection and mitigation sdn using support vector machine",
    authors: ["G. L", "P. S", "S. M", "C. S"],
    venue: "International Journal of Advanced Scientific Innovation, vol. 1, no. 2, pp. 26–31",
    year: 2021,
    type: "Journal",
    category: "Networks & SDN",
    isTopPick: false,
    doi: "10.5281/zenodo.4782280",
    url: "https://doi.org/10.5281/zenodo.4782280",
    tags: ["DDoS Mitigation", "SDN", "Support Vector Machine", "Network Security"],
    bibtex: `@article{girish2021ddos,
  author={Girish, L. and P. S and S. M and C. S},
  title={Ddos detection and mitigation sdn using support vector machine},
  journal={International Journal of Advanced Scientific Innovation},
  volume={1},
  number={2},
  pages={26--31},
  year={2021},
  doi={10.5281/zenodo.4782280}
}`
  },
  {
    id: "journal-8",
    title: "Open source platform for the complete life cycle of ai and ml",
    authors: ["G. L", "H. Sadiya", "D. S", "H. G. KL"],
    venue: "International Journal of Advanced Scientific Innovation, vol. 1, no. 2, pp. 14–20",
    year: 2021,
    type: "Journal",
    category: "General AI",
    isTopPick: false,
    doi: "10.5281/zenodo.4782277",
    url: "https://doi.org/10.5281/zenodo.4782277",
    tags: ["Open Source", "MLOps", "AI Lifecycle", "Data Science Platform"],
    bibtex: `@article{girish2021opensource,
  author={Girish, L. and Sadiya, H. and D. S and KL, H. G.},
  title={Open source platform for the complete life cycle of ai and ml},
  journal={International Journal of Advanced Scientific Innovation},
  volume={1},
  number={2},
  pages={14--20},
  year={2021},
  doi={10.5281/zenodo.4782277}
}`
  },
  {
    id: "journal-9",
    title: "Quantifying sensitivity and performance degradation of virtual machines using machine learning",
    authors: ["G. L", "R. SKN"],
    venue: "Journal of Computational and Theoretical Nanoscience (J Comput Theor Nanosci)",
    year: 2020,
    type: "Journal",
    category: "Cloud & Anomaly",
    isTopPick: false,
    doi: "10.1166/jctn.2020.9019",
    url: "https://doi.org/10.1166/jctn.2020.9019",
    tags: ["Virtual Machines", "Performance Degradation", "Machine Learning", "Resource Sensitivity"],
    bibtex: `@article{girish2020quantifying,
  author={Girish, L. and SKN, R.},
  title={Quantifying sensitivity and performance degradation of virtual machines using machine learning},
  journal={Journal of Computational and Theoretical Nanoscience},
  year={2020},
  doi={10.1166/jctn.2020.9019}
}`
  },
  {
    id: "journal-10",
    title: "Anomaly detection in nfv using tree-based unsupervised learning method",
    authors: ["G. L"],
    venue: "International Journal of Science, Technology, Engineering and Management (IJESM - A VTU Publication), vol. 1, no. 2, pp. 27–31",
    year: 2019,
    type: "Journal",
    category: "Cloud & Anomaly",
    isTopPick: false,
    url: "http://ijesm.vtu.ac.in/index.php/IJESM/article/view/232",
    tags: ["NFV", "Anomaly Detection", "Unsupervised Learning", "VTU Publication", "Isolation Forest"],
    bibtex: `@article{girish2019anomalyvtu,
  author={Girish, L.},
  title={Anomaly detection in nfv using tree-based unsupervised learning method},
  journal={International Journal of Science, Technology, Engineering and Management - A VTU Publication},
  volume={1},
  number={2},
  pages={27--31},
  year={2019}
}`
  },
  {
    id: "journal-11",
    title: "Crop yield and rainfall prediction in tumakuru district using machine learning",
    authors: ["G. L"],
    venue: "Innovative Journal, Aug. 2019",
    year: 2019,
    type: "Journal",
    category: "AgriTech & Healthcare",
    isTopPick: false,
    doi: "10.18231/2454-9150.2018.0805",
    url: "https://doi.org/10.18231/2454-9150.2018.0805",
    tags: ["Crop Yield", "Rainfall Prediction", "AgriTech", "Machine Learning", "Tumakuru"],
    bibtex: `@article{girish2019cropyield,
  author={Girish, L.},
  title={Crop yield and rainfall prediction in tumakuru district using machine learning},
  year={2019},
  doi={10.18231/2454-9150.2018.0805}
}`
  },
  {
    id: "journal-12",
    title: "Efficient monitoring of time series data using dynamic alerting",
    authors: ["G. L", "D. T. K"],
    venue: "i-Manager’s Journal on Computer Science",
    year: 2018,
    type: "Journal",
    category: "Cloud & Anomaly",
    isTopPick: false,
    tags: ["Time Series", "Monitoring", "Dynamic Alerting", "Telemetry"],
    bibtex: `@article{girish2018monitoring,
  author={Girish, L. and D. T. K},
  title={Efficient monitoring of time series data using dynamic alerting},
  journal={i-Manager's Journal on Computer Science},
  year={2018}
}`
  },
  {
    id: "journal-13",
    title: "An hybrid approach for suitable content navigation based on weighted clustering for online users",
    authors: ["G. L", "S. H. C"],
    venue: "International Journal of Advanced Research in Computer Engineering & Technology (IJARCET)",
    year: 2015,
    type: "Journal",
    category: "General AI",
    isTopPick: false,
    tags: ["Clustering", "Content Navigation", "Web Mining", "User Personalization"],
    bibtex: `@article{girish2015hybrid,
  author={Girish, L. and S. H. C},
  title={An hybrid approach for suitable content navigation based on weighted clustering for online users},
  journal={IJARCET},
  year={2015}
}`
  },
  {
    id: "journal-14",
    title: "Meta heuristic approach for task scheduling in cloud datacenter for optimum performance",
    authors: ["G. L", "S. Khanum"],
    venue: "International Journal of Advanced Research in Computer Engineering & Technology (IJARCET), vol. 4",
    year: 2015,
    type: "Journal",
    category: "Cloud & Anomaly",
    isTopPick: false,
    tags: ["Task Scheduling", "Cloud Datacenter", "Meta Heuristic", "Optimization"],
    bibtex: `@article{girish2015metaheuristic,
  author={Girish, L. and Khanum, S.},
  title={Meta heuristic approach for task scheduling in cloud datacenter for optimum performance},
  journal={IJARCET},
  volume={4},
  year={2015}
}`
  },
  {
    id: "journal-15",
    title: "Ddos mitigation using software defined network",
    authors: ["G. L", "Y. Nayana", "J. Gopinath"],
    venue: "International Journal of Engineering Trends and Technology (IJETT), vol. 24, no. 5, pp. 258–264",
    year: 2015,
    type: "Journal",
    category: "Networks & SDN",
    isTopPick: false,
    tags: ["DDoS Mitigation", "Software Defined Network", "OpenFlow", "Network Security"],
    bibtex: `@article{girish2015ddosmitigation,
  author={Girish, L. and Nayana, Y. and Gopinath, J.},
  title={Ddos mitigation using software defined network},
  journal={International Journal of Engineering Trends and Technology},
  volume={24},
  number={5},
  pages={258--264},
  year={2015}
}`
  },
  {
    id: "journal-16",
    title: "Environment change prediction to adapt climate-smart agriculture using big data analytics",
    authors: ["G. L", "M. Ramya", "C. Balaji"],
    venue: "International Journal of Advanced Research in Computer Engineering & Technology (IJARCET), vol. 4",
    year: 2015,
    type: "Journal",
    category: "AgriTech & Healthcare",
    isTopPick: false,
    tags: ["Big Data Analytics", "Climate-Smart Agriculture", "Environmental Change", "Predictive Modeling"],
    bibtex: `@article{girish2015environment,
  author={Girish, L. and Ramya, M. and Balaji, C.},
  title={Environment change prediction to adapt climate-smart agriculture using big data analytics},
  journal={IJARCET},
  volume={4},
  year={2015}
}`
  },
  {
    id: "journal-17",
    title: "Load balancing as a service in openstack-liberty",
    authors: ["G. L", "T. V. Rashmi", "K. Prasanna"],
    venue: "International Journal of Scientific & Technology Research, vol. 4, no. 8, pp. 70–73",
    year: 2015,
    type: "Journal",
    category: "DevOps & Systems",
    isTopPick: false,
    tags: ["OpenStack", "Load Balancing as a Service", "LBaaS", "Cloud Infrastructure"],
    bibtex: `@article{girish2015loadbalancing,
  author={Girish, L. and Rashmi, T. V. and Prasanna, K.},
  title={Load balancing as a service in openstack-liberty},
  journal={International Journal of Scientific and Technology Research},
  volume={4},
  number={8},
  pages={70--73},
  year={2015}
}`
  },
  {
    id: "journal-18",
    title: "Dynamic management of virtual machines for server consolidation in data centers",
    authors: ["G. L", "A. K. S"],
    venue: "International Journal of Advanced Research in Computer Engineering & Technology (IJARCET)",
    year: 2015,
    type: "Journal",
    category: "Cloud & Anomaly",
    isTopPick: false,
    tags: ["Server Consolidation", "Virtual Machine Management", "Data Centers", "Energy Efficiency"],
    bibtex: `@article{girish2015dynamicvm,
  author={Girish, L. and A. K. S},
  title={Dynamic management of virtual machines for server consolidation in data centers},
  journal={IJARCET},
  year={2015}
}`
  },
  {
    id: "journal-19",
    title: "Automatic drug reaction detection using sentimental analysis",
    authors: ["G. L", "D. S. Sahana"],
    venue: "International Journal of Advanced Research in Computer Engineering & Technology (IJARCET), vol. 4",
    year: 2015,
    type: "Journal",
    category: "AgriTech & Healthcare",
    isTopPick: false,
    tags: ["Sentiment Analysis", "Adverse Drug Reaction", "Healthcare AI", "NLP"],
    bibtex: `@article{girish2015drugreaction,
  author={Girish, L. and Sahana, D. S.},
  title={Automatic drug reaction detection using sentimental analysis},
  journal={IJARCET},
  volume={4},
  year={2015}
}`
  },
  {
    id: "journal-20",
    title: "Efficient virtual machine memory transfer in datacenter with optimal downtime",
    authors: ["G. L", "D. K. Thara"],
    venue: "International Journal of Engineering Trends and Technology (IJETT), vol. 23, no. 9",
    year: 2015,
    type: "Journal",
    category: "Cloud & Anomaly",
    isTopPick: false,
    tags: ["VM Live Migration", "Datacenter", "Memory Transfer", "Zero Downtime"],
    bibtex: `@article{girish2015vmmigration,
  author={Girish, L. and Thara, D. K.},
  title={Efficient virtual machine memory transfer in datacenter with optimal downtime},
  journal={IJETT},
  volume={23},
  number={9},
  year={2015}
}`
  },

  // ================= CONFERENCE PROCEEDINGS (6) =================
  {
    id: "conf-1",
    title: "Intelligent resume scrutiny using named entity recognition with bert",
    authors: ["L. Girish", "R. M. L"],
    venue: "IEEE-International Conference on Data Science and Network Security (ICDSNS)-2023",
    year: 2023,
    type: "Conference",
    category: "Deep Learning & NLP",
    isTopPick: true,
    tags: ["BERT", "Named Entity Recognition", "NLP", "Resume Scrutiny", "IEEE"],
    bibtex: `@inproceedings{girish2023resume,
  author={Girish, L. and R. M. L},
  title={Intelligent resume scrutiny using named entity recognition with bert},
  booktitle={IEEE-International Conference on Data Science and Network Security (ICDSNS)-2023},
  year={2023},
  publisher={IEEE}
}`
  },
  {
    id: "conf-2",
    title: "Sentimental analysis on covid-19 tweets using bidirectional encoder representations transformers",
    authors: ["J. P. Deekshitha", "R. Shankar", "L. Girish"],
    venue: "2021 IEEE International Conference on Computation System and Information Technology for Sustainable Solutions (CSITSS), pp. 1–8",
    year: 2021,
    type: "Conference",
    category: "Deep Learning & NLP",
    isTopPick: false,
    doi: "10.1109/CSITSS54238.2021.9683648",
    url: "https://doi.org/10.1109/CSITSS54238.2021.9683648",
    tags: ["BERT", "Sentiment Analysis", "COVID-19", "Transformers", "IEEE CSITSS"],
    bibtex: `@inproceedings{deekshitha2021sentiment,
  author={Deekshitha, J. P. and Shankar, R. and Girish, L.},
  title={Sentimental analysis on covid-19 tweets using bidirectional encoder representations transformers},
  booktitle={2021 IEEE CSITSS},
  pages={1--8},
  year={2021},
  doi={10.1109/CSITSS54238.2021.9683648}
}`
  },
  {
    id: "conf-3",
    title: "Dadgan: Ddos anomaly detection using generative adversarial network",
    authors: ["L. Girish", "S. K. Rao", "T. Renukananda", "K. Vidyashree", "R. Hemashree"],
    venue: "2021 IEEE International Conference on Computation System and Information Technology for Sustainable Solutions (CSITSS), pp. 1–7",
    year: 2021,
    type: "Conference",
    category: "Networks & SDN",
    isTopPick: false,
    doi: "10.1109/CSITSS54238.2021.9683282",
    url: "https://doi.org/10.1109/CSITSS54238.2021.9683282",
    tags: ["DADGAN", "GAN", "DDoS Anomaly Detection", "Generative Adversarial Network", "IEEE CSITSS"],
    bibtex: `@inproceedings{girish2021dadgan,
  author={Girish, L. and Rao, S. K. and Renukananda, T. and Vidyashree, K. and Hemashree, R.},
  title={Dadgan: Ddos anomaly detection using generative adversarial network},
  booktitle={2021 IEEE CSITSS},
  pages={1--7},
  year={2021},
  doi={10.1109/CSITSS54238.2021.9683282}
}`
  },
  {
    id: "conf-4",
    title: "Crop disease prediction in tumakuru district using machine learning",
    authors: ["L. Girish", "T. Chaithra"],
    venue: "National Conference on Innovations in Computing and Communications (NCICC), 2017",
    year: 2017,
    type: "Conference",
    category: "AgriTech & Healthcare",
    isTopPick: false,
    tags: ["Crop Disease Prediction", "Machine Learning", "AgriTech", "NCICC"],
    bibtex: `@inproceedings{girish2017cropdisease,
  author={Girish, L. and Chaithra, T.},
  title={Crop disease prediction in tumakuru district using machine learning},
  booktitle={National Conference on Innovations in Computing and Communications (NCICC)},
  year={2017}
}`
  },
  {
    id: "conf-5",
    title: "Mathematical tools and methods for analysis of sdn: A comprehensive survey",
    authors: ["L. Girish", "S. K. Rao"],
    venue: "2016 2nd International Conference on Contemporary Computing and Informatics (IC3I), IEEE",
    year: 2016,
    type: "Conference",
    category: "Networks & SDN",
    isTopPick: false,
    tags: ["SDN", "Mathematical Tools", "Network Modeling", "IEEE IC3I"],
    bibtex: `@inproceedings{girish2016sdnmathematical,
  author={Girish, L. and Rao, S. K.},
  title={Mathematical tools and methods for analysis of sdn: A comprehensive survey},
  booktitle={2016 2nd International Conference on Contemporary Computing and Informatics (IC3I), IEEE},
  year={2016}
}`
  },
  {
    id: "conf-6",
    title: "Dynamic service function chaining of network functions using sdn",
    authors: ["L. Girish", "B. Vineetha"],
    venue: "Indian Society for Technical Education (ISTE), National Level Technical Paper Symposium, HMSIT, Tumakuru",
    year: 2016,
    type: "Conference",
    category: "Networks & SDN",
    isTopPick: false,
    tags: ["Service Function Chaining", "SFC", "Network Functions", "SDN", "ISTE"],
    bibtex: `@inproceedings{girish2016sfc,
  author={Girish, L. and Vineetha, B.},
  title={Dynamic service function chaining of network functions using sdn},
  booktitle={Indian Society for Technical Education (ISTE) National Level Technical Paper Symposium},
  year={2016}
}`
  }
];

export const repositories: Repository[] = [
  {
    id: "repo-1",
    name: "VTU-ML-Lab",
    description: "Complete Visvesvaraya Technological University (VTU) Machine Learning Laboratory Programs implemented in Python & Jupyter Notebooks with rigorous documentation, datasets, and mathematical step-by-step walkthroughs.",
    language: "Jupyter Notebook / Python",
    stars: 540,
    forks: 320,
    url: "https://github.com/girishl/VTU-ML-Lab",
    topics: ["vtu", "machine-learning", "lab-programs", "python", "jupyter", "algorithms"],
    highlight: true,
    sampleCode: `# VTU ML Lab - Candidate Elimination Algorithm
import numpy as np
import pandas as pd

def candidate_elimination(concepts, target):
    specific_h = concepts[0].copy()
    general_h = [["?" for i in range(len(specific_h))] for i in range(len(specific_h))]
    
    for i, h in enumerate(concepts):
        if target[i] == "Yes":
            for x in range(len(specific_h)):
                if h[x] != specific_h[x]:
                    specific_h[x] = '?'
                    general_h[x][x] = '?'
        if target[i] == "No":
            for x in range(len(specific_h)):
                if h[x] != specific_h[x]:
                    general_h[x][x] = specific_h[x]
                else:
                    general_h[x][x] = '?'
    return specific_h, general_h`
  },
  {
    id: "repo-2",
    name: "TensorFlow-World",
    description: "Curated open-source collection of modern TensorFlow 2.x & Keras tutorials, state-of-the-art architectures (Transformers, GANs, ResNets), and step-by-step computer vision & NLP pipelines.",
    language: "Python",
    stars: 890,
    forks: 410,
    url: "https://github.com/girishl/TensorFlow-World",
    topics: ["tensorflow", "deep-learning", "keras", "neural-networks", "computer-vision", "nlp"],
    highlight: true,
    sampleCode: `import tensorflow as tf
from tensorflow.keras import layers, models

def build_convnet(input_shape=(224, 224, 3), num_classes=10):
    model = models.Sequential([
        layers.Conv2D(32, (3, 3), activation='relu', input_shape=input_shape),
        layers.MaxPooling2D((2, 2)),
        layers.Conv2D(64, (3, 3), activation='relu'),
        layers.MaxPooling2D((2, 2)),
        layers.Conv2D(128, (3, 3), activation='relu'),
        layers.GlobalAveragePooling2D(),
        layers.Dense(128, activation='relu'),
        layers.Dropout(0.3),
        layers.Dense(num_classes, activation='softmax')
    ])
    return model`
  },
  {
    id: "repo-3",
    name: "awesome-anomaly-detection",
    description: "Curated roadmap and comprehensive list of papers, datasets, benchmarks, and tools for deep anomaly detection across time-series, vision, tabular, and network traffic data.",
    language: "Markdown / Python",
    stars: 620,
    forks: 180,
    url: "https://github.com/girishl/awesome-anomaly-detection",
    topics: ["anomaly-detection", "outlier-detection", "deep-learning", "papers", "benchmarks"],
    highlight: true
  },
  {
    id: "repo-4",
    name: "Deep-Learning-Papers-Reading-Roadmap",
    description: "Structured academic roadmap for students and researchers breaking down seminal deep learning papers across Vision, Transformers, Self-Supervised Learning, and Generative Models.",
    language: "Markdown",
    stars: 310,
    forks: 95,
    url: "https://github.com/girishl/Deep-Learning-Papers-Reading-Roadmap",
    topics: ["deep-learning", "reading-list", "ai-research", "paper-summaries"],
    highlight: false
  },
  {
    id: "repo-5",
    name: "girishl.github.io",
    description: "Personal academic portfolio, research showcase, interactive 3D laboratory, and teaching repository for Dr. Girish L.",
    language: "TypeScript / React / Three.js",
    stars: 125,
    forks: 42,
    url: "https://github.com/girishl/girishl.github.io",
    topics: ["portfolio", "react", "threejs", "academic-profile", "webgl"],
    highlight: false
  }
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Director, Skill Training and Placement & Head, Dept of AI&DS & AI&ML",
    organization: "Shridevi Institute of Engineering and Technology, Tumkur",
    location: "Tumkur, Karnataka, India",
    period: "July 2022 – Present",
    current: true,
    description: [
      "Upskilling Leadership: As Director for Skill Training, led a large-scale upskilling initiative where over 2,000 students across departments were trained through industry expert sessions, bridging the gap between academia and employability.",
      "Department Leadership: Heading the Departments of Artificial Intelligence & Data Science and Artificial Intelligence & Machine Learning (AI&DS & AI&ML) with a focus on curriculum development, academic quality, and research initiatives.",
      "NAAC & Accreditation: Oversaw department accreditation and compliance as NAAC Coordinator, contributing significantly to quality assurance and institutional development.",
      "Innovation & Hackathons: Conceptualized and executed institute-wide innovation events as Hackathon Convenor, fostering a culture of problem-solving and entrepreneurial thinking.",
      "Industry & Alumni Outreach: Collaborated with industry partners and alumni networks to enhance placement opportunities and skill development programs.",
      "Centre of Excellence (CoE): Championed the development of a Centre of Excellence in Cloud Computing, reducing infrastructure costs by 60% and incorporating DevOps practices.",
      "Digital Transformation: Spearheaded digital transformation initiatives, including Moodle integration, faculty feedback automation, and private cloud administration."
    ],
    skills: ["Skill Training Director", "Head of Dept (AI&DS & AI&ML)", "NAAC Coordinator", "Placement Leadership", "Cloud CoE", "DevOps & Moodle"]
  },
  {
    id: "exp-2",
    role: "IT Consultant",
    organization: "Ericsson Global India",
    location: "India",
    period: "March 2022 – July 2022",
    current: false,
    description: [
      "Consulted on enterprise telecommunication networks, cloud infrastructure orchestration, and large-scale IT service delivery.",
      "Collaborated with cross-functional engineering teams to evaluate network reliability and virtualization frameworks."
    ],
    skills: ["IT Consulting", "Telecom Infrastructure", "Enterprise Cloud", "Network Optimization"]
  },
  {
    id: "exp-3",
    role: "Thesis Supervisor, AI & ML (Academic Collaboration)",
    organization: "Liverpool John Moores University",
    location: "United Kingdom",
    period: "Dec 2022 – Present",
    current: true,
    description: [
      "Supervising Master's and postgraduate dissertations in Artificial Intelligence, Machine Learning, and Neural Architectures.",
      "Guiding international scholars in literature synthesis, deep learning model benchmarking, and rigorous scientific research methodology."
    ],
    skills: ["International Research", "Thesis Supervision", "AI & ML", "Scientific Guidance", "Postgraduate Mentorship"]
  },
  {
    id: "exp-4",
    role: "Community Organizer (Community Leadership)",
    organization: "TensorFlow User Group (TFUG) Tumkur, Google Machine Learning Community",
    location: "Tumkur & Karnataka, India",
    period: "Sep 2021 – Present",
    current: true,
    description: [
      "Leading TFUG Tumkur as Community Organizer under the Google Machine Learning Developer Ecosystem.",
      "Conducting DevFests, AI workshops, Kaggle build-a-thons, and hands-on TensorFlow learning series reaching thousands of developers."
    ],
    skills: ["TFUG Lead", "Google ML Community", "DevFest Organizer", "Technical Keynotes", "Developer Outreach"]
  },
  {
    id: "exp-5",
    role: "Assistant Professor",
    organization: "Channabasaveshwara Institute of Technology (CIT)",
    location: "Gubbi, Karnataka, India",
    period: "Jan 2013 – March 2022",
    current: false,
    description: [
      "Delivered undergraduate and postgraduate courses in Computer Science and Information Science Engineering.",
      "Mentored student capstone projects, organized technical symposia, and established foundational ML & coding laboratory modules."
    ],
    skills: ["Higher Education", "Teaching & Pedagogy", "Undergraduate Mentorship", "Curriculum Delivery"]
  },
  {
    id: "exp-6",
    role: "Software Development & Research Intern",
    organization: "The Linux Foundation",
    location: "USA (Remote)",
    period: "Jul 2018 – Dec 2018",
    current: false,
    description: [
      "Conducted 6-month research project on 'Investigation of Artificial Intelligence in Testing and its Results Analysis' receiving $3,000 USD stipend.",
      "Invited by the Linux Foundation with full travel grants to present and participate in the ONAP OPNFV Plugfest in Paris."
    ],
    skills: ["Linux Foundation", "AI in Testing", "OPNFV / ONAP", "Open Source Research", "Travel Grantee"]
  }
];

export const awards: Award[] = [
  {
    id: "award-1",
    title: "Open Source Networking Days 2019, Belgium",
    organization: "The Linux Foundation",
    year: "2019",
    type: "International Grant",
    grantInfo: "Linux Foundation Travel & Accommodation Grant",
    description: "Awarded international travel and accommodation grants by the Linux Foundation, facilitating attendance and delivering a presentation at Open Source Networking Days in Belgium."
  },
  {
    id: "award-2",
    title: "Open Source Summit 2019, Japan",
    organization: "The Linux Foundation",
    year: "2019",
    type: "International Grant",
    grantInfo: "Linux Foundation Travel & Accommodation Grant",
    description: "Awarded travel and accommodation grants from the Linux Foundation, enabling attendance and presentation delivery at the Open Source Summit held in Japan."
  },
  {
    id: "award-3",
    title: "Investigation of Artificial Intelligence in Testing and its Results Analysis",
    organization: "The Linux Foundation / ONAP OPNFV",
    year: "2018",
    type: "Fellowship",
    grantInfo: "$3,000 USD Stipend + Paris Plugfest Travel Grant",
    description: "Successfully completed 6-month research internship (July–December 2018) with a $3,000 USD stipend, and received honored invitation with travel grant to participate in ONAP OPNFV Plugfest in Paris."
  },
  {
    id: "award-4",
    title: "Best Project of the Year: Crop Yield & Rainfall Prediction using ML",
    organization: "Karnataka State Council for Science and Technology (KSCST), IISc Bangalore",
    year: "2019",
    type: "State Award",
    grantInfo: "Issued by KSCST, Indian Institute of Science (IISc)",
    description: "Awarded Best Project of the Year for 'Crop Yield and Rainfall Prediction in Tumakuru District using Machine Learning' by KSCST at the Indian Institute of Science, Bangalore."
  }
];

export const institutionalProjects: InstitutionalProject[] = [
  {
    id: "proj-1",
    title: "Centre of Excellence in Cloud Computing (Cloud Lab)",
    period: "2022 – Present",
    role: "Project Lead & Architect",
    impactHighlight: "60% Infrastructure Cost Reduction & Hands-on DevOps",
    description: [
      "Personally led the establishment of a state-of-the-art Cloud Computing Lab powered by advanced thin clients.",
      "Achieved a substantial 60% reduction in institutional computing infrastructure and operational costs.",
      "Integrated modern DevOps practices, enabling students to gain tangible hands-on experience with cutting-edge industry tools."
    ],
    technologies: ["Cloud Computing", "Thin Clients", "DevOps", "Infrastructure Optimization", "Linux"]
  },
  {
    id: "proj-2",
    title: "Administrator of Private Cloud Developed Using OpenStack",
    period: "2016 – 2022",
    role: "Cloud Administrator",
    impactHighlight: "3-Node Secure Private Cloud for Institutional Software",
    description: [
      "Engineered secure 3-node private cloud infrastructure: Controller Node, Compute Node, and Storage Node.",
      "Offered centralized cloud storage space and hosted institutional software including Moodle, Odoo, and Library Systems.",
      "Delivered faculty training ('Private Cloud: OpenStack') and student workshops, resulting in multiple student placements in the OpenStack cloud domain."
    ],
    technologies: ["OpenStack", "Controller Node", "Compute Node", "Distributed Storage", "Odoo", "Moodle"]
  },
  {
    id: "proj-3",
    title: "Institutional Moodle Digital Platform & Feedback Automation",
    period: "2017 – 2022",
    role: "Moodle Administrator",
    impactHighlight: "Conserving ~15,000 Sheets of Paper per Semester",
    description: [
      "Configured and customized Moodle LMS to align with institutional academic workflows and digital governance.",
      "Automated faculty feedback systems and online quizzes, conserving ~15,000 sheets of paper per semester.",
      "Conducted extensive training for faculty and students, and presented a hands-on session at the VTU Regional Centre, Gulbarga."
    ],
    technologies: ["Moodle LMS", "PHP", "MySQL", "Feedback Automation", "Paperless Campus"]
  },
  {
    id: "proj-4",
    title: "Coordinator – VTU Digital Valuation & Centralized Infrastructure",
    period: "Institutional Coordinator",
    role: "Digital Valuation Coordinator",
    impactHighlight: "High-Availability Server Infra for Centralized Evaluation",
    description: [
      "Played a pivotal role in streamlining the Visvesvaraya Technological University (VTU) digital evaluation process at SIET.",
      "Established and maintained server systems, high-speed networking, and digital valuation software infrastructure.",
      "Effectively managed the Sophus platform for seamless and secure downloading of confidential valuation question schemes."
    ],
    technologies: ["Sophus Platform", "Server Administration", "Digital Valuation", "VTU Infrastructure"]
  }
];

export const educations: Education[] = [
  {
    id: "edu-1",
    degree: "Ph.D. in Computer Science & Engineering",
    institution: "Visvesvaraya Technological University (VTU) - KIT, Tiptur",
    period: "2016 – 2023",
    thesis: "Data Analytics in Logically Centralized Control Plane and Virtualized Network Function Deployments",
    field: "Artificial Intelligence, NFV & Cloud Control Plane Analytics",
    description: "Doctoral research addressing telemetry synthesis, failure prediction, and resilient resource allocation across logically centralized control planes and Virtualized Network Functions (VNF)."
  },
  {
    id: "edu-2",
    degree: "M.Tech in Computer Science & Engineering",
    institution: "SJMIT, Chitradurga (VTU)",
    period: "2011 – 2013",
    field: "Computer Science & Engineering",
    description: "Postgraduate master's degree focusing on advanced algorithms, distributed computing, database engineering, and operating systems."
  },
  {
    id: "edu-3",
    degree: "Bachelor of Engineering (BE) in Information Science & Engineering",
    institution: "Channabasaveshwara Institute of Technology (CIT), Gubbi (VTU)",
    period: "2007 – 2011",
    field: "Information Science and Engineering",
    description: "Undergraduate degree covering core computer systems, networking, software engineering, and object-oriented programming."
  }
];

export const courses: Course[] = [
  {
    id: "course-1",
    code: "21AI71 / 18CS71",
    name: "Machine Learning and Applications",
    level: "Undergraduate",
    semester: "Semester VII",
    description: "In-depth study of supervised and unsupervised machine learning algorithms, PAC learning theory, Bayesian networks, decision trees, and ensemble methods with hands-on lab implementation.",
    topics: ["Supervised Learning", "Candidate Elimination", "ID3 Decision Trees", "Backpropagation Neural Nets", "EM Algorithm", "k-Nearest Neighbor", "k-Means & GMM"]
  },
  {
    id: "course-2",
    code: "21AI62 / 18CS62",
    name: "Deep Learning Architectures",
    level: "Undergraduate",
    semester: "Semester VI",
    description: "Mathematical foundations of deep neural networks, convolutional feature extraction, sequence modeling with RNN/LSTM, attention mechanisms, and Transformer architectures.",
    topics: ["CNN Architectures (VGG, ResNet)", "Sequence Modeling (LSTM, GRU)", "Attention Mechanisms", "Transformers & LLMs", "Optimization & Regularization"]
  },
  {
    id: "course-3",
    code: "21CS72 / 18CS72",
    name: "Cloud Computing and Virtualization",
    level: "Undergraduate",
    semester: "Semester VII",
    description: "Exploration of cloud architecture models (IaaS, PaaS, SaaS), hypervisors, containerization (Docker/K8s), multi-tenant datacenter scheduling, and cloud security frameworks.",
    topics: ["Virtualization & Hypervisors", "OpenStack Architecture", "Container Orchestration", "Cloud Storage & S3", "Serverless Computing", "NFV Architectures"]
  },
  {
    id: "course-4",
    code: "21AI51",
    name: "Artificial Intelligence & Expert Systems",
    level: "Undergraduate",
    semester: "Semester V",
    description: "Search algorithms, heuristic state-space exploration (A*, Minimax, Alpha-Beta pruning), knowledge representation, first-order predicate calculus, and fuzzy logic inference.",
    topics: ["State Space Search", "Heuristic Search (A*, AO*)", "Adversarial Search", "Knowledge Representation", "Inference Engines", "Fuzzy Logic"]
  }
];

export const communityEvents: CommunityEvent[] = [
  {
    id: "event-1",
    title: "TensorFlow DevFest Tumkur: Generative AI & Large Language Models",
    role: "Lead Organizer & Keynote Speaker",
    event: "Google Developer Groups & TFUG Annual Summit",
    date: "November 2024",
    type: "DevFest",
    description: "Delivered keynote on 'Transitioning from Discriminative Deep Learning to Generative AI & Foundation Models', featuring live fine-tuning demos with TensorFlow and Hugging Face.",
    tags: ["DevFest", "Generative AI", "TensorFlow", "Keynote"]
  },
  {
    id: "event-2",
    title: "Faculty Development Program (FDP) on Machine Learning in Next-Gen Cloud",
    role: "Resource Person & Session Chair",
    event: "VTU State-Level Faculty Training Initiative",
    date: "July 2024",
    type: "Workshop",
    description: "Trained 80+ engineering professors on setting up GPU-accelerated cloud clusters, implementing PyTorch pipelines, and mentoring student research for Scopus publications.",
    tags: ["FDP", "VTU", "Faculty Training", "PyTorch"]
  },
  {
    id: "event-3",
    title: "AI-Minds 36-Hour National Hackathon",
    role: "Chief Convener & Jury Chair",
    event: "SIET Technical Fest",
    date: "March 2024",
    type: "Hackathon",
    description: "Judged 65+ student teams across India building edge-AI solutions in healthcare, smart agriculture, assistive robotics, and green cloud compute.",
    tags: ["Hackathon", "Jury", "Student Innovation", "Smart Cities"]
  }
];
