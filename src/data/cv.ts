export interface Education {
  institution: string;
  degree: string;
  field: string;
  year: string;
  location: string;
}

export interface Publication {
  authors: string;
  title: string;
  venue: string;
  year: number;
  status: 'published' | 'in-revision' | 'in-preparation';
  links?: { type: 'pdf' | 'arxiv' | 'code' | 'doi'; url: string }[];
}

export interface ResearchPosition {
  lab: string;
  institution: string;
  role: string;
  advisor: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface TeachingPosition {
  title: string;
  institution: string;
  date: string;
  bullets: string[];
}

export interface WorkExperience {
  title: string;
  company: string;
  location: string;
  date: string;
  bullets: string[];
}

export interface Talk {
  title: string;
  venue: string;
  date: string;
  type: 'invited' | 'oral' | 'poster';
}

export interface Award {
  name: string;
  date: string;
  institution: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export const cvData = {
  personal: {
    name: 'Kiran Nair',
    email: 'kiran.prasannannair@coyotes.usd.edu',
    github: 'kiranpnair8',
    linkedin: 'https://www.linkedin.com/in/kiran-p-nair/',
    phone: '+1 (559) 216-4567',
    location: 'Vermillion, SD',
    university: 'University of South Dakota',
    department: 'Dept. of Computer Science',
    tagline: 'PhD Student @ University of South Dakota',
    bio: '',
    googleScholar: 'https://scholar.google.com/citations?hl=en&user=QLRC5r0AAAAJ',
    cvFile: '/KnairCV.pdf',
    profileImage: '/profile.jpg',
  },

  bioParagraphs: [
    {
      text: 'I am a Ph.D. student in Data Science and Engineering at the {University of South Dakota}, affiliated with the {USD Artificial Intelligence Research Lab}. I am co-advised by Professors {Rodrigue Rizk} and {KC Santosh}.',
      links: {
        'University of South Dakota': 'https://www.usd.edu',
        'USD Artificial Intelligence Research Lab': 'https://ai-research-lab.org/',
        'Rodrigue Rizk': 'https://rodriguerizk.github.io/',
        'KC Santosh': 'https://kc-santosh.org/',
      },
    },
    {
      text: 'My research interests lie in brain-inspired computing, with a focus on developing energy-efficient Transformer architectures and language models, as well as exploring security and privacy challenges in modern AI systems. Previously, I worked on Brain-Computer Interface (BCI) systems, particularly in Visual Evoked Potential (VEP) paradigms, where I explored efficient classification architectures.',
      links: {},
    },
    {
      text: 'Before starting my Ph.D., I was a Graduate Research Assistant in the Brain-Computer Interface Lab at {California State University, Fresno}, advised by Professor {Hubert Cecotti}. I was also a Graduate Research Fellow at the {Fresno State Transportation Institute} under Professor {Aly Tawfik}, where I contributed to Generative AI in transportation research.',
      links: {
        'California State University, Fresno': 'https://www.fresnostate.edu/index.html',
        'Hubert Cecotti': 'https://sites.google.com/site/hubertcecotti/home',
        'Fresno State Transportation Institute': 'https://engineering.fresnostate.edu/institutes/fsti/index.html',
        'Aly Tawfik': 'https://engineering.fresnostate.edu/institutes/fsti/about/staff.html',
      },
    },
    {
      text: 'I hold a Master\'s degree in Computer Science from California State University, Fresno, and a Bachelor\'s degree in Computer Science and Engineering from {Kerala Technological University, India}.',
      links: {
        'Kerala Technological University, India': 'https://ktu.edu.in/',
      },
    },
  ] as { text: string; links: Record<string, string> }[],

  education: [
    {
      institution: 'University of South Dakota',
      degree: 'Doctor of Philosophy',
      field: 'Data Science and Engineering',
      year: '2028 (Expected)',
      location: 'Vermillion, SD',
    },
    {
      institution: 'California State University, Fresno',
      degree: 'Master of Science',
      field: 'Computer Science',
      year: '2025',
      location: 'Fresno, CA',
    },
    {
      institution: 'Kerala Technological University',
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      year: '2023',
      location: 'Kerala, India',
    },
  ] as Education[],

  publications: [
    {
      authors: 'Kiran Nair, Rodrigue Rizk, KC Santosh',
      title: 'A Spike-Gated Residual Unit for Information Flow Control in Transformers',
      venue: 'IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) EDGE Workshop',
      year: 2026,
      status: 'published',
    },
    {
      authors: 'Sindhu Reddy, Kiran Nair',
      title: 'Environment is the Attack: Security Failures in EEG-Based Authentication',
      venue: 'USENIX WOOT Conference on Offensive Technology (WOOT)',
      year: 2026,
      status: 'published',
    },
    {
      authors: 'Kiran Nair, Hubert Cecotti',
      title: 'Multiple-Classifier Binary Convolutional Siamese Networks for Code-Modulated Visual Evoked Potential Classification',
      venue: 'IEEE Transactions on Biomedical Engineering (IEEE TBME)',
      year: 2026,
      status: 'in-revision',
    },
    {
      authors: 'Kiran Nair, Bikash Singh',
      title: 'Multi-Agent LLM Closed-Loop Optimization for NP-Hard Problems',
      venue: 'IEEE SoutheastCon',
      year: 2026,
      status: 'published',
    },
    {
      authors: 'Kiran Nair, Prabhat Rijal, Aly Tawfik',
      title: 'AI on the Move: Optimizing Transit Routes in Fresno Using Generative AI and Data Fusion Models',
      venue: 'International Conference on Transportation & Development (ASCE ICTD)',
      year: 2026,
      status: 'published',
    },
    {
      authors: 'Kiran Nair, Hubert Cecotti',
      title: 'Enhancing Code-Modulated Visual Evoked Potential Classification for Brain-Computer Interfaces with Laplacian Spatial Filters',
      venue: 'International Conference on Recent Trends in Image Processing and Pattern Recognition (RTIP2R)',
      year: 2025,
      status: 'published',
    },
    {
      authors: 'Kiran Nair',
      title: 'Alcohol Intoxication Detection from EEG Signals: Toward Real-Time Driver Safety Monitoring',
      venue: 'In Preparation',
      year: 2025,
      status: 'in-preparation',
    },
  ] as Publication[],

  presentations: [
    {
      title: 'AI on the Move: Optimizing Transit Routes in Fresno Using Generative AI and Data Fusion Models',
      venue: 'Transportation Research Board (TRB) Annual Meeting, Washington, D.C.',
      date: '2026',
      type: 'poster',
    },
    {
      title: 'Investigating the impact of visual stimuli transitions on single-trial detection during a rapid serial visual presentation task',
      venue: 'CSU Biotech Symposium, Sacramento, CA',
      date: '2026',
      type: 'poster',
    },
    {
      title: 'Laplacian Spatial Filters for Visual Evoked Potential Classification in Brain-Computer Interfaces',
      venue: 'CSU Biotech Symposium, Orange County, CA',
      date: '2025',
      type: 'poster',
    },
    {
      title: 'Impact of Local Laplacian Spatial Filters on C-VEP-Based BCI Performance',
      venue: '11th International BCI Meeting, Banff, Canada',
      date: '2025',
      type: 'poster',
    },
    {
      title: 'Code-Modulated Visual Evoked Potential Speller - A High ITR BCI',
      venue: 'Central California Research Symposium, Fresno, CA',
      date: '2025',
      type: 'oral',
    },
    {
      title: 'Generative AI for Transit Route Optimization and Demand Forecasting',
      venue: 'CSU Transportation Conference, Long Beach, CA',
      date: '2025',
      type: 'oral',
    },
    {
      title: 'Generative AI-Based Travel Survey Automation: Smart Data Collection in Transportation Research',
      venue: 'CSU Transportation Conference, Long Beach, CA',
      date: '2025',
      type: 'poster',
    },
  ] as Talk[],

  talks: [
    {
      title: 'Getting started with Generative AI for Transportation professionals',
      venue: 'WTS Luncheon, Fresno, CA',
      date: '2025',
      type: 'invited',
    },
    {
      title: 'Generative AI Applications in Transportation',
      venue: 'Fresno International Transportation Innovations Summit, Fresno, CA',
      date: '2025',
      type: 'invited',
    },
    {
      title: 'Generative AI based Transit Route Optimization',
      venue: 'Clovis Transit Center, Clovis, CA',
      date: '2025',
      type: 'invited',
    },
  ] as Talk[],

  research: [
    {
      lab: 'BCI Lab',
      institution: 'Dept of Computer Science, Fresno State',
      role: 'Graduate Research Assistant',
      advisor: 'Dr. Hubert Cecotti',
      startDate: 'May 2024',
      endDate: 'Present',
      bullets: [
        'Developing non-invasive Brain-Computer Interface (BCI) systems',
        'Implementing advanced EEG signal processing techniques, including Laplacian spatial filters',
        'Exploring machine learning models to optimize real-time brain signal interpretation',
        'Designing and evaluating deep learning architectures for EEG classification tasks',
        'Investigating event-related potentials (ERPs) with varying image transition effects',
      ],
    },
    {
      lab: 'Fresno State Transportation Institute',
      institution: 'Fresno State, Fresno, CA',
      role: 'Graduate Research Fellow',
      advisor: 'Dr. Aly Tawfik',
      startDate: 'Jan 2025',
      endDate: 'Present',
      bullets: [
        'Developing ML and deep learning models for real-world transportation challenges',
        'Fine-tuning AI models for public transit optimization and survey automation',
        'Exploring Generative AI for intelligent data generation and predictive analytics',
      ],
    },
  ] as ResearchPosition[],

  teaching: [
    {
      title: 'Teaching Associate, Department of Computer Science',
      institution: 'Fresno State, CA',
      date: 'Aug 2025 – Present',
      bullets: [
        'Held two labs of 20 students each for CSCI 113: Introduction to Computer Organization',
        'Holding weekly labs, grading assignments, and maintaining grade records',
        'Conducting weekly office hours to support students',
      ],
    },
  ] as TeachingPosition[],

  experience: [
    {
      title: 'Operations Intern',
      company: 'Nblik',
      location: 'New Delhi, India',
      date: 'Aug 2023 – Nov 2023',
      bullets: [
        'Conducted data analysis to identify operational inefficiencies and proposed strategic improvements',
        'Developed automation scripts using Python to streamline issue resolution processes',
        'Created detailed documentation and reports on key operational metrics',
      ],
    },
  ] as WorkExperience[],

  awards: [
    {
      name: 'Academic All-Stars Award',
      date: 'Fall 2025',
      institution: 'California State University, Fresno',
      description: 'Recognition for maintaining 4.0 GPA during academic year 2024-2025',
    },
    {
      name: "Dean's Scholarship Tuition Fee Waiver",
      date: 'Fall 2025',
      institution: 'California State University, Fresno',
      description: 'Merit-based tuition fee waiver scholarship',
    },
    {
      name: 'Travel Grant Award',
      date: 'Fall 2025',
      institution: 'Division of Graduate Studies, Fresno State',
      description: '$1,600 travel grant for research conference presentations',
    },
    {
      name: '3-D Game Dev Competition Winner',
      date: '2024',
      institution: 'Fresno State, Dept. of Computer Science',
      description: 'Winner of the graduate-level 3D game development competition',
    },
  ] as Award[],

  skills: [
    {
      category: 'Languages',
      items: ['Python', 'C/C++', 'MATLAB', 'JavaScript', 'Haskell'],
    },
    {
      category: 'ML & AI',
      items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Deep Learning', 'EEG Processing'],
    },
    {
      category: 'Web & Frameworks',
      items: ['React JS', 'React Native', 'Node.js', 'Unity'],
    },
    {
      category: 'Tools',
      items: ['Git', 'GitHub', 'VS Code', 'Figma', 'OpenGL', 'Matplotlib', 'GIMP'],
    },
  ] as SkillCategory[],

  certifications: [
    'Google Project Management Professional Certification',
    'Google Introduction to Generative AI',
  ],

  researchInterests: [
    'Brain-Computer Interfaces',
    'EEG Signal Processing',
    'Deep Learning',
    'Computer Vision',
    'Generative AI',
    'Transportation AI',
    'Neural Architecture Design',
  ],
};
