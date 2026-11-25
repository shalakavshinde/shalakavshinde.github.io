export interface ContactInfo {
  email: string;
  phone?: string;
  linkedin: string;
  location: string;
  scholar?: string;
}

export interface HeroContent {
  name: string;
  titles: string[];
  summary: string;
  contact: ContactInfo;
}

export interface FocusArea {
  title: string;
  description: string;
}

export interface IndustrialProblem {
  id: string;
  title: string;
  description: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  details: string;
  link?: string;
  awards?: string[];
}

export interface Award {
  id: string;
  title: string;
  year: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface Service {
  role: string;
  organization: string;
  details: string;
  years?: string;
}

export const heroContent: HeroContent = {
  name: "Dr. Shalaka Vilas Shinde",
  titles: [
    "Project Engineer, Oerlikon Metco",
    "Thermal Spray & Materials Science",
    "PhD, Stony Brook University"
  ],
  summary: "Materials Researcher with 9+ years of expertise in thermally sprayed coatings, specializing in microstructural design, process optimization, and performance validation. Proficient in statistical modeling and finite element analysis (FEA) to optimize coating architectures and predict service behavior. Experienced in scaling lab developments to production and integrating experimental data with computational modeling to deliver cost-effective, high-performance solutions.",
  contact: {
    email: "contact@shalakavshinde.com",
    linkedin: "shalaka-shinde-616729a6",
    location: "New York, USA",
    scholar: "https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=NbHWfiMAAAAJ"
  }
};

export const focusAreas: FocusArea[] = [
  {
    title: "Microstructural Design",
    description: "Architecting multilayer ceramic and metallic coating systems for extreme environments, mitigating mechanical and chemical mismatches."
  },
  {
    title: "Process Optimization",
    description: "Establishing standardized procedures using multivariable statistical optimization (via Python) to align experimental data with performance targets."
  },
  {
    title: "Performance Validation",
    description: "Designing custom performance-testing equipment and conducting comprehensive evaluations of thermal barrier and abradable coatings."
  },
  {
    title: "Computational Modeling",
    description: "Utilizing finite element analysis (FEA) to optimize coating architectures, predict service behavior, and integrate with experimental findings."
  },
  {
    title: "Production Scaling",
    description: "Successfully transitioning advanced coating systems from laboratory research to full-scale industrial production at major OEMs."
  }
];

export const industrialProblemsIntro = "I work at the intersection of materials science, thermal-spray engineering, computational modeling, and manufacturing. Drawing on hands-on experience with coating equipment and advanced characterization methods, I develop practical solutions for high-temperature components, laboratory automation, equipment optimization, and production-scale coating challenges.";

export const industrialProblems: IndustrialProblem[] = [
  {
    id: "thermal-protection",
    title: "Protecting gas-turbine components under extreme conditions",
    description: "Gas-turbine components face severe heat, wear, and clearance challenges. Collaborating with major OEMs, I helped develop a low-thermal-conductivity bilayer coating architecture and high-temperature abradable coatings that improve component protection, operational efficiency, and service performance."
  },
  {
    id: "legacy-data",
    title: "Transforming legacy laboratory data into usable knowledge",
    description: "Years of metallographic results are difficult to search, compare, and reuse when stored in disconnected records. I led the digitization of records dating from 2017, creating a searchable database that improves traceability, historical analysis, and data-driven materials development."
  },
  {
    id: "automation",
    title: "Automating complex material-characterization workflows",
    description: "Manual analysis can limit the speed and consistency of coating development. I created automated workflows for coefficient of thermal expansion, thermal conductivity, furnace cycle testing, IEM, and pycnometry, improving analytical efficiency, repeatability, and reproducibility."
  },
  {
    id: "turbine-environments",
    title: "Recreating harsh turbine environments in the laboratory",
    description: "Coatings must be evaluated under conditions that reproduce real service threats, including airborne-particle ingestion. I led the modernization of Oerlikon Metco's burner-rig/JETS system to enable advanced testing with and without sand ingestion."
  },
  {
    id: "sustainable-materials",
    title: "Developing more sustainable abradable materials",
    description: "Conventional abradable powders can rely on polymeric constituents that create processing and environmental limitations. I am developing polymer-free metallic abradable powders for high-pressure components used in maintenance, repair, and overhaul applications."
  },
  {
    id: "simulation",
    title: "Accelerating equipment development through simulation",
    description: "Developing new thermal-spray equipment requires effective integration of physical testing and predictive engineering. I support next-generation equipment development by combining experimental validation with finite element analysis to identify design improvements and optimize system performance."
  }
];

export const publications: Publication[] = [
  {
    id: "pub1",
    title: "A Critical Analysis of the Tensile Adhesion Test for Thermally Sprayed Coatings",
    authors: "S Shinde, S Sampath",
    journal: "Journal of Thermal Spray Technology",
    year: "2022",
    details: "31 (8), 2247–2279 · First Author · DOI: 10.1007/s11666-022-01452-3",
    link: "https://link.springer.com/article/10.1007/S11666-022-01468-Z",
    awards: ["JTST Vol. 31 Best Paper Award (2023)", "JTST Outstanding Review Award (2022)"]
  },
  {
    id: "pub2",
    title: "Interplay Between Cracking and Delamination in Incrementally Deposited Plasma Sprayed Coatings",
    authors: "S Shinde, S Sampath",
    journal: "Acta Materialia",
    year: "2021",
    details: "215, 117074 · First Author · DOI: 10.1016/j.actamat.2021.117074",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S1359645421004547"
  },
  {
    id: "pub3",
    title: "Segmentation Crack Formation Dynamics During Air Plasma Spraying of Zirconia",
    authors: "S Shinde, E Gildersleeve, C Johnson, S Sampath",
    journal: "Acta Materialia",
    year: "2020",
    details: "183, 196–206 · First Author · DOI: 10.1016/j.actamat.2019.11.009",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S1359645419307244"
  },
  {
    id: "pub4",
    title: "Factors Governing Segmentation Crack Characteristics in Air Plasma Sprayed Ceramics",
    authors: "SV Shinde, S Sampath",
    journal: "Journal of the European Ceramic Society",
    year: "2022",
    details: "42 (3), 1077–1087 · First Author",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0955221921007986"
  },
  {
    id: "pub5",
    title: "Modified Clamped Beam Bend Method for Determination of Interfacial Fracture Energy of Thermally Sprayed Yttria Stabilised Zirconia Over Steel",
    authors: "AK Mishra, A Pagare, SV Shinde, S Sampath, BN Jaya",
    journal: "Journal of the European Ceramic Society",
    year: "2022",
    details: "42 (15), 7166–7173 · Third Author",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0955221922006665"
  }
];

export const awards: Award[] = [
  {
    id: "aw1",
    title: "Editor’s Choice Review Article",
    year: "2022",
    description: "Journal of Thermal Spray Technology. Peer-reviewed article recognized for comprehensive nature and overall excellence."
  },
  {
    id: "aw2",
    title: "Oerlikon Metco Young Professional’s Award Recipient",
    year: "2019",
    description: "Won an oral presentation competition for Best Paper/Presentation at the International Thermal Spray Conference (ITSC)."
  },
  {
    id: "aw3",
    title: "ITSA Annual Scholarship Recipient",
    year: "2017",
    description: "International Association of Thermal Spray winner based on written recommendations amongst thousands of candidates."
  },
  {
    id: "aw4",
    title: "NMD Annual Technical Meeting Presenter Award",
    year: "2015",
    description: "Awarded second prize in the “Best Oral Presentation” category as an undergraduate student."
  }
];

export const education: Education[] = [
  {
    degree: "Doctor of Philosophy in Materials Science",
    institution: "Stony Brook University, USA",
    period: "2016 - 2022",
    details: "CGPA 4.0/ 4.0. Academic Excellence Award. Dissertation: Mechanisms of Segmentation and Delamination Cracking in Plasma Sprayed Ceramic Coatings."
  },
  {
    degree: "Bachelor of Science (Research), Major in Materials Science",
    institution: "Indian Institute of Science, India",
    period: "2012 - 2016",
    details: "CGPA 4.0/4.0. Graduated with First Class."
  }
];

export const serviceList: Service[] = [
  {
    role: "Member, Accepted Practices Committee (2026)",
    organization: "ASM Thermal Spray Society (TSS)",
    details: "Accepted Practices Committee — contributing to the development and standardization of industry-wide accepted practices in thermal spray technology.",
  },
  {
    role: "Selection Committee Member (2024 - Present)",
    organization: "Journal of Thermal Spray Technology Best Paper Awards",
    details: "Vol. 32 and Vol. 33",
  },
  {
    role: "Peer Reviewer (2023 - Present)",
    organization: "Acta Materialia / Scripta Materialia",
    details: "Reviewed multiple submissions ensuring journal quality. Also awarded Certificate of Excellence for the review work in (2023)",
    years: "2023 - 2024"
  },
  {
    role: "Peer Reviewer (2024- Present)",
    organization: "Journal of Surface Coating Technology",
    details: "Reviewed 5+ submissions.",

  },
  {
    role: "Peer Reviewer (2024 - Present)",
    organization: "Journal of Thermal Spray Technology",
    details: "Reviewed 5+ submissions.",

  }
];
