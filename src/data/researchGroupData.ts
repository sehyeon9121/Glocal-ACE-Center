/**
 * 연구단 구성원 데이터
 * Division별 그룹 구조
 */

export interface PaperEntry {
  title: string;
  authors: string;
  journal: string;
}

export interface ResearcherProfile {
  name: string;
  degree: string;
  affiliation: string;
  email: string;
  image?: string;
  website?: string;
  history: string[];
  introduction: string;
  selectedPapers?: PaperEntry[];
}

export interface ResearchGroup {
  groupName: string;
  color: string;
  members: ResearcherProfile[];
}

export const researchGroups: ResearchGroup[] = [
  {
    groupName: 'Ai Division (AI-Based Carbon Neutral Design)',
    color: '#22C55E',
    members: [
      {
        name: 'Lee, Seung-Jae',
        degree: 'Ph.D., The University of Tokyo',
        affiliation: 'Professor, Korea University of Technology and Education',
        email: 'leeseung@koreatech.ac.kr',
        website: 'https://www.koreatech.ac.kr/faculty/view.es?mid=b30103010100&division=1&classification=DEPF006&seq=144',
        image: '/images/leeseunglab/Lee.jpg',
        history: [
          
        ],
        introduction:
          'Professor Seung-Jae Lee received his M.S. and Ph.D. in Architectural Engineering from the University of Tokyo, specializing in structural engineering. His research focuses on earthquake-resistant structures and AI-based structural design to enhance the safety and performance of buildings. He has actively contributed to academia and industry through award-winning research and practical applications in structural engineering.',
        selectedPapers: [
  {
    title: 'Existence and uniqueness of a weak solution of an extensible beam on a moving domain',
    authors: 'Ha, J.; Kim, D.; Shon, S.',
    journal: 'Journal of the Korean Mathematical Society (2025, 62(2), 327-344)',
  },
  {
    title: 'Index-Based Neural Network Framework for Truss Structural Analysis via a Mechanics-Informed Augmented Lagrangian Approach',
    authors: 'Ha, H.; Shon, S.; Lee, S.',
    journal: 'Buildings (2025, 15(10), 1753)',
  },
  {
    title: 'Domain-Separated Quantum Neural Network for Truss Structural Analysis with Mechanics-Informed Constraints',
    authors: 'Ha, H.; Shon, S.; Lee, S.',
    journal: 'Biomimetics (2025, 10(6), 407)',
  },
  {
    title: 'Improved convergence performance of advanced crow search algorithm and application to optimal design of large-scale truss dome structures',
    authors: 'Lee, D.; Kim, H.; Kim, J.; Lee, S.',
    journal: 'Journal of Asian Architecture and Building Engineering (2025, 24(6), 5435-5450)',
  },
  {
    title: 'The Optimal Cost Design of Reinforced Concrete Beams Using an Artificial Neural Network—The Effectiveness of Cost-Optimized Training Data',
    authors: 'So, J.; Lee, S.; Seong, J.; Lee, D.',
    journal: 'Buildings (2025, 15(9), 1577)',
  },
  {
    title: 'Comparative Study on Hyperparameter Tuning for Predicting Concrete Compressive Strength',
    authors: 'Kim, J.; Lee, D.',
    journal: 'Buildings (2025, 15(13), 2173)',
  },
  {
    title: 'Performance improvement of seismic response prediction using the lstm-pinn hybrid method',
    authors: 'Kim, S.; Lee, D.; Lee, S.',
    journal: 'Biomimetics (2025, 10(8), 490)',
  },
  {
    title: 'Efficient hyperparameter optimization using metaheuristics for machine learning in truss steel structure cross-section prediction',
    authors: 'Lee, D.; Noh, S.; Kim, J.; Lee, S.',
    journal: 'Buildings (2025, 15(15), 2791)',
  },

  {
    title: 'Dynamic analysis of extensible beam with multiple cracks',
    authors: 'Shon, S.; Ha, J.; Gutman, S.',
    journal: 'Journal of Low Frequency Noise, Vibration and Active Control (2024, 43(4), 1397-1423)',
  },
  {
    title: 'Investigating the effect of elevated temperatures on the utilization of demolished paving block powders as supplementary cementitious materials',
    authors: 'Kim, J.; Lee, D.; Ubysz, A.',
    journal: 'Revista de la construcción (2024, 23(1), 151-163)',
  },
  {
    title: 'Optimal Design of Truss Structures for Sustainable Carbon Emission Reduction in Korean Construction',
    authors: 'Lee, D.; Kim, J.; Lee, S.',
    journal: 'Sustainability (2024, 16(14), 5830)',
  },
  {
    title: 'Comparative analysis of cement grade and cement strength as input features for machine learning-based concrete strength prediction',
    authors: 'Kim, J.; Lee, D.; Ubysz, A.',
    journal: 'Case Studies in Construction Materials (2024, 21, e03557)',
  },
  {
    title: 'Optimal Design of Formulas for a Single Degree of Freedom Tuned Mass Damper Parameter Using a Genetic Algorithm and H2 Norm',
    authors: 'Kim, S.; Lee, D.; Lee, S.',
    journal: 'Biomimetics (2024, 9(8), 450)',
  },

  {
    title: 'An advanced crow search algorithm for solving global optimization problem',
    authors: 'Lee, D.; Kim, J.; Shon, S.; Lee, S.',
    journal: 'Applied Sciences (2023, 13(11), 6628)',
  },
  {
    title: 'Size and topology optimization of truss structures using quantum-based HS algorithm',
    authors: 'Lee, D.; Shon, S.; Lee, S.; Ha, J.',
    journal: 'Buildings (2023, 13(6), 1436)',
  },
  {
    title: 'Weight Optimization of Discrete Truss Structures Using Quantum-Based HS Algorithm',
    authors: 'Lee, S.; Ha, J.; Shon, S.; Lee, D.',
    journal: 'Buildings (2023, 13(9), 2132)',
  },
  {
    title: 'Qubit Adoption Method of a Quantum Computing-Based Metaheuristics Algorithm for Truss Structures Analysis',
    authors: 'Lee, D.; Lee, S.; Shon, S.',
    journal: 'Biomimetics (2023, 9(1))',
  },
  {
    title: 'Utilization of different forms of demolished clay brick and granite wastes for better performance in cement composites',
    authors: 'Kim, J.; Lee, D.; Sičáková, A.; Kim, N.',
    journal: 'Buildings (2023, 13(1), 165)',
  },

  {
    title: 'Variational setting for cracked beams and shallow arches',
    authors: 'Gutman, S.; Ha, J.; Shon, S.',
    journal: 'Archive of Applied Mechanics (2022, 92(7), 2225-2236)',
  },
  {
    title: 'Dynamic behavior of cracked beams and shallow arches',
    authors: 'Gutman, S.; Ha, J.; Shon, S.',
    journal: 'Journal of the Korean Mathematical Society (2022, 59(5), 869-890)',
  },

  {
    title: 'Estimation algorithm for physical parameters in a shallow arch',
    authors: 'Gutman, S.; Ha, J.; Shon, S.',
    journal: 'Journal of the Korean Mathematical Society (2021, 58(3), 723-740)',
  }
]
      },
      {
        name: 'Lee, Jin-Gang',
        degree: 'Ph.D., Seoul National University',
        affiliation: 'Assistant Professor, Korea University of Technology and Education',
        email: 'kimcs-a2@koreatech.ac.kr',
        website: 'https://example.com',
        
        image: '/images/leeseunglab/jingang.png',
        history: [
          
        ],
        introduction:
          'Jin Gang Lee is an Assistant Professor in the Department of Architectural Engineering at KOREATECH. He earned his B.S., M.S., and Ph.D. in architecture from Seoul National University and gained both international and domestic research experience as a Postdoctoral Fellow at The Hong Kong Polytechnic University and as a researcher at Seoul National University. His research and teaching focus on Building Information Modeling (BIM) and smart construction, with an emphasis on integrating advanced technologies such as Artificial Intelligence and digital twins into the built environment. His recent work includes digital twin-based construction robotics simulation, AI-driven design automation for smart farm facilities, and the analysis of VR-based construction safety training programs.',
        selectedPapers: [
  {
    title: 'OCR 을 활용한 외국인 작업자 대상 VR 건설안전 교육자료 이독성 평가',
    authors: '최기훈, & 이진강',
    journal: '한국건축시공학회지 (JKIBC), 26(1), 127-138 (2026).',
  },
  {
    title: '파라메트릭 모델링을 활용한 BIM 기반 건설신기술 정보 활용 프로세스 개발',
    authors: '이진강, 김다인, & 최재현',
    journal: '대한건축학회논문집, 41(10), 319-327 (2025).',
  },
  {
    title: 'VAR 모형을 이용한 건설공사비지수와 운임지수의 관계에 대한 연구',
    authors: '정승환, & 이진강',
    journal: '한국건축시공학회지, 25(1), 101-112 (2025).',
  },
  {
    title: 'Time lag analysis of real estate supply policies for housing construction projects',
    authors: 'Lee, J. G., Jeong, S., & Choi, J.',
    journal: 'Journal of Asian Architecture and Building Engineering, 24(4), 2788-2799 (2025).',
  },
  {
    title: 'IPA 방법을 활용한 국내 건설 산업 공정관리 역량 평가',
    authors: '이진강, 송보현, 김다인, & 최재현',
    journal: '한국건축시공학회지, 24(1), 145-156 (2024).',
  },
  {
    title: 'Transfer learning-based object detection model for steel structure bolt fastening inspection',
    authors: 'Choi, J., Ha, M., & Lee, J. G.',
    journal: 'Applied Sciences, 13(17), 9499 (2023).',
  },
  {
    title: '건축 시공단계 검측 업무 자동 생성을 위한 프레임워크 개발',
    authors: '조석연, 이진강, & 최재현',
    journal: '한국건설관리학회논문집, 24(1), 40-50 (2023).',
  },
  {
    title: 'Decision-making framework for sustainable construction products selection in SMEs',
    authors: 'Sivasubramanian, D., & Lee, J. G.',
    journal: 'Sustainability, 14(21), 14264 (2022).',
  },
  {
    title: 'Synthetic image dataset development for vision-based construction equipment detection',
    authors: 'Lee, J. G., Hwang, J., Chi, S., & Seo, J.',
    journal: 'Journal of Computing in Civil Engineering, 36(5), 04022020 (2022).',
  },
  {
    title: 'Early-stage cost estimation model for power generation project with limited historical data',
    authors: 'Lee, J. G., Lee, H. S., Park, M., & Seo, J.',
    journal: 'Engineering, Construction and Architectural Management, 29(7), 2599-2614 (2022).',
  },
  {
    title: 'Wearable acceleration-based action recognition for long-term and continuous activity analysis in construction site',
    authors: 'Gong, Y., Yang, K., Seo, J., & Lee, J. G.',
    journal: 'Journal of Building Engineering, 52, 104448 (2022).',
  },
  {
    title: 'Productivity analysis method of construction structural work using computer vision',
    authors: 'Lee, J. G., Seo, J., Chi, S., & Hwang, J.',
    journal: 'Journal of Construction Automation and Robotics, 1(2), 7-12 (2022).',
  },
]
      },
    ],
  },
  {
    groupName: 'C- Division (Carbon Reduction & Decarbonization Systems)',
    color: '#3B82F6',
    members: [
      {
        name: 'Bae. Jin Woo',
        degree: 'Ph.D., Seoul National University',
        affiliation: 'Associate Professor, Korea University of Technology and Education',
        email: 'jwbae@koreatech.ac.kr',
        website: 'https://sites.google.com/view/hopelab2020/home',
        image: '/images/leeseunglab/Bae Jin.png',
        history: [
          
        ],
        introduction:
          'Professor Jin Woo Bae is an Associate Professor in the School of Energy, Materials and Chemical Engineering at the Korea University of Technology and Education (KOREATECH). He earned his Ph.D. from Seoul National University and pursued postdoctoral research at Kyung Hee University as well as the University of California, Berkeley. Before entering academia, he worked as a Senior Engineer at Samsung Display and LG Innotek. He focuses on smart polymers and hybrid materials to drive innovations in next‑generation energy and wearable electronics. His research advances fundamental science while delivering practical solutions with real‑world impact, bridging academic excellence and industrial relevance.',
        selectedPapers: [
  {
    title: 'Aromatic Amine-Functionalized graphene oxide enables Proximity-Sensitive triboelectric sensors for intelligent motion tracking and LIB charging',
    authors: 'Gajula, P.; Woo, I.; Oh, S. J.; Bae, J. W.',
    journal: 'Advanced Composites and Hybrid Materials (2026, 9:137)',
  },
  {
    title: 'ZnSnO3–Ecoflex/LDH–PU Based Triboelectric Nanogenerator for Motion‐Activated Battery‐Free Smart Street Lighting',
    authors: 'Ramadasu, G.; Woo, I.; Yoon, J. U.; Gajula, P.; Bae, J. W.',
    journal: 'Small (2026, e10831)',
  },
  {
    title: 'Voltage-switchable Janus-inspired triboelectric nanogenerator with La-MOF@GO–BaSrTiO₃ hybrids for self-powered smart school bag and directional energy harvesting',
    authors: 'Gajula, P.; Woo, I.; Bae, J. W.',
    journal: 'Composites Part B: Engineering (2026, 312, 113329)',
  },
  {
    title: 'Existence and uniqueness of a weak solution of an extensible beam on a moving domain',
    authors: 'Ha, J.; Kim, D.; Choi, S. E.; Oh, S. J.; Yoon, J. M.; Bae, J. W.',
    journal: 'Small (2026, 22(7), e10593)',
  },

  {
    title: 'Triboelectric enhancement via MnO₂-coated graphite for self-powered smart entry systems',
    authors: 'Ramadasu, G.; Woo, I.; Yoon, J. U.; Gajula, P.; Bae, J. W.',
    journal: '(2025, 32, 100710)',
  },
  {
    title: 'Boosting triboelectric performance of PDMS with dual-filler reinforcement for smart touch sensing',
    authors: 'Ramadasu, G.; Woo, I.; Yoon, J. U.; Oh, S. J.; Gajula, P.; Bae, J. W.',
    journal: 'Journal of Energy Chemistry (2025, 110, 455-465)',
  },
  {
    title: 'High-performance, transparent, stretchable triboelectric nanogenerator and triboresistive position sensor: Tailoring PVC gel properties via plasticizer modulation',
    authors: 'Woo, I.; Oh, S. J.; Yoon, J. U.; Bae, J. W.',
    journal: 'Chemical Engineering Journal (2025, 515, 163747)',
  },
  {
    title: 'Influence of anion in viologen derivatives on the performance of all-in-one plasticized ionogel-based electrochromic devices',
    authors: 'Oh, S. J.; Kim, H. J.; Choi, S. E.; Yoon, J. M.; Heo, W.; Nah, Y. C.; Bae, J. W.',
    journal: 'Polymer (2025, 335, 128782)',
  },
  {
    title: 'Enhancing proton exchange membrane fuel cell performance and durability: Role of expanded polytetrafluoroethylene layer thickness in reinforced composite membranes',
    authors: 'Han, D. H.; Heo, W.; Oh, S. J.; Woo, I.; Yoon, J. U.; Choi, S. E.; Yoon, J. M.; Bae, J. W.',
    journal: 'Journal of Power Sources (2025, 649, 237425)',
  },
  {
    title: 'Environmentally friendly electroactive poly(vinyl chloride) gel-based focus-tunable microlens',
    authors: 'Yoon, J. U.; Oh, S. J.; Bae, J. W.',
    journal: 'Journal of Industrial and Engineering Chemistry (2025, 146, 431-440)',
  },
  {
    title: 'Stretchable polymeric-gel-based sponge with tunable wettability via segmented network design',
    authors: 'Yoon, H.; Kim, J. H.; Kim, J. Q.; Bae, J. W.; Sohn, E. H.; Kang, H. S.',
    journal: 'Materials Horizons (2025, 12(15), 5666-5676)',
  },
  {
    title: 'Dual-Plasticized PVC-Gels with High Dissipation Factor for Smart Wearable Thermotherapy and Sensing Devices',
    authors: 'Choi, S. E.; Oh, S. J.; Yoon, J. M.; Bae, J. W.',
    journal: 'Advanced Functional Materials (2025, 35(45), 2505873)',
  },
  {
    title: 'Mechanical Properties and Crystallization Behavior of Surface-Treated Waste Phenol Resin-based Polyamide 6 Composites',
    authors: 'Choi, I. G.; Lee, T. M.; Yang, S. J.; Oh, S. J.; Bae, J. W.; Nam, B. U.',
    journal: 'POLYMER-KOREA (2025, 49(3), 306-316)',
  },
  {
    title: 'Study on Mechanical and Thermal Properties of Polypropylene-based Composites with Crushed Phenolic Resin Waste and Compatibilizer',
    authors: 'Yang, S. J.; Choi, I. G.; Lee, T. M.; Bae, J. W.; Nam, B. U.',
    journal: 'POLYMER-KOREA (2025, 49(3), 317-324)',
  },
  {
    title: 'Reinforcing the Strategy: Enhanced Efficiency of Electrospun PVDF Hybrid Nanocomposites-Based Triboelectric Nanogenerators with p-NiO/n-ZnO Interfaces for Energy Harvesting',
    authors: 'Venkatesan, H. M.; Yoon, J. U.; Bindhu, A.; Woo, I.; Gajula, P.; Arun, A. P.; Bae, J. W.',
    journal: 'Advanced Sustainable Systems (2025, 9(8), e00180)',
  },
  {
    title: 'Unveiling the latent potential: Ni/CoFe₂O₄-loaded electrospun PVDF hybrid composite-based triboelectric nanogenerator for mechanical energy harvesting applications',
    authors: 'Venkatesan, H. M.; Woo, I.; Yoon, J. U.; Gajula, P.; Arun, A. P.; Bae, J. W.',
    journal: 'Advanced Composites and Hybrid Materials (2025, 8(2), 221)',
  },
  {
    title: 'Harnessing Mechanical Energy for Green Hydrogen: Pioneering High-Performance Triboelectric Nanogenerators',
    authors: 'Gajula, P.; Yoon, J. U.; Woo, I.; Bae, J. W.',
    journal: 'Advanced Functional Materials (2025, 35(35), 2501074)',
  },
  {
    title: 'Stretchable Multicolored Electroluminescent Sound Display for Wearable and Interactive Textiles',
    authors: 'Oh, S. J.; Choi, S. E.; Woo, I.; Yoon, J. U.; Bae, J.; Bae, J. W.',
    journal: 'Advanced Functional Materials (2025, 35(31), 2420432)',
  },
  {
    title: 'Creating Smart Washable Flooring: Sandwich-Style Single-Electrode Triboelectric Nanogenerator with Barium Titanate and Graphite-Fluorinated Polymer-Infused Ecoflex Hybrid Composites for Enhanced Safety and Security',
    authors: 'Yoon, J. U.; Woo, I.; Gajula, P.; Bae, J. W.',
    journal: 'Advanced Functional Materials (2025, 35(24), 2421977)',
  },
  {
    title: 'Impact of Pentaerythritol (Core), Dimethylol Butanoic Acid (Monomer) Based Second Generation Aliphatic Hyperbranched Polymer on the Tribonegative Performance of Polyvinylidene Fluoride',
    authors: 'Mohan, N. B.; Yoon, J. U.; Bindhu, A.; Woo, I.; Gajula, P.; Arun, A. P.; Bae, J. W.',
    journal: 'Advanced Sustainable Systems (2025, 9(3), 2400731)',
  },
  {
    title: 'Enhanced Charge Holding Capacity of PVDF Nanofiber Using NiO-CuO Nanoparticles-Based Triboelectric Nanogenerator for Energy and Wearable Electronic Applications',
    authors: 'Bindhu, A.; Yoon, J. U.; Woo, I.; Gajula, P.; Arun, A. P.; Bae, J. W.',
    journal: 'Advanced Sustainable Systems (2025, 9(2), 2400604)',
  }
]
      },
      {
        name: 'Kim, Tae-Yong',
        degree: 'Ph.D, Seoul National University',
        affiliation: 'Associate Professor, Korea University of Technology and Education',
        email: 'tykim11@koreatech.ac.kr',
        website: 'https://www.koreatech.ac.kr/faculty/view.es?mid=b50201000000&division=1&classification=DEPF008&seq=801',
        image: '/images/leeseunglab/Tae.png',
        history: [
          
        ],
        introduction:
          'Dr. Tae Yong Kim is an Assistant Professor in the Department of Chemical and Biological Engineering at Korea University of Technology and Education. He received his Ph.D. from Seoul National University and completed postdoctoral training at UC Berkeley, bringing broad expertise in heterogeneous catalysis, biomass valorization, and energy-related materials. His research spans catalytic conversion of renewable feedstocks, methane activation, and electrocatalysis for sustainable energy applications.',
        selectedPapers: [
          {
            title: 'Impact of Nitrogen and Other Heteroatoms on Catalytic Cracking of Crude Waste Plastic Pyrolysis Oil for Light-Olefin Production',
            authors: 'Tran, X. T.; Kim, T. Y.; Mun, D. H.; Ngo, T.-N. T.; Lee, Y.; Park, D. S.; Kang, K. H.; Park, Y.-K.; Kim, D. K.',
            journal: 'ACS Catalysis (2026, in press)',
          },
          {
            title: 'Electrospun PVDF/Si-HBP of 1st Generation Composite Nanofibers: Enabling Enhanced Charge Density and Power Output in TENG',
            authors: 'Niranjana, V. S.; Woo, I.; Yoon, J. U.; Kim, T. Y.; Gajula, P.; Prabu, A. A.; Bae, J. W.',
            journal: 'Advanced Composites and Hybrid Materials (2026, in press)',
          },
          {
            title: 'Strategic Design of Oxophilic Dopants for Active and Durable Alkaline Hydrogen Evolution Reaction Under Seawater',
            authors: 'Jung, H.; Lee, Y.; Cho, K.; Kim, T. Y.; Song, J.; Jung, H. S.; Park, S. I.; Lee, Y.; Moon, J.; Park, W.; Nam, J.; Park, S.; Kim, W.; Han, J. W.',
            journal: 'Advanced Functional Materials (2025, in press)',
          },
          {
            title: 'Chloride-Free Indium(III)-Catalyzed Glucose-to-HMF Conversion: Overcoming Kinetic Barriers via Water-Mediated Direct Dehydration',
            authors: 'Keum, Y.; Jeong, H.; Kim, T. Y.; Han, J. W.; Kim, Y. J.; Baek, J.',
            journal: 'Applied Catalysis B: Environmental and Energy (2025, 378, 125561)',
          },
          {
            title: 'Sustained Virucidal Functionality in Practical-Scale Polymer Matrices Enabled by Visible Light-Responsive CuxO–TiO2 Photocatalyst',
            authors: 'Lee, Y.; Lee, K.; Shin, J.; Choi, S.; Kim, S.; Kim, G. W.; Seo, A.; Han, J. W.; Kim, T. Y.; Nam, I.; Park, S.',
            journal: 'Advanced Composites and Hybrid Materials (2025, 8, 303)',
          },
            {
            title: 'Rational Design of Nitrogen-Doped Porous Carbon Support on Single Atom Catalysts for Efficient CO2 Electroreduction',
            authors: 'Choi, Y.; Kim, K.-W.; Park, B. J.; Kim, T. Y.; Lee, Y.; Park, B.; Lee, Y.; Kim, J. K.; Han, J. W.',
            journal: 'Journal of Materials Chemistry A (2025, in press)',
          },
            {
            title: 'Lattice-Disordered Boron Nitride Colloidal Catalyst for Low-Temperature Selective Methane Oxidation',
            authors: 'Kim, Y.; Choi, H.; Kim, T. Y.; Kang, S.; Choi, C.; Kim, J.; Song, C. K.; Sung, J.; Han, J. W.; Park, J.',
            journal: 'ACS Catalysis (2024, 14, 15622)',
          },
            {
            title: 'Intelligent Stress-Adaptive Binder Enabled by Shear-Thickening Property for Silicon Electrodes of Lithium-Ion Batteries',
            authors: 'Kwon, O.; Kim, T. Y.; Kim, T.; Kang, J.; Jang, S.; Eom, H.; Choi, S.; Shin, J.; Park, J.; Seol, M.-L.; Han, J. W.; Park, S.; Lee, H.-W.; Nam, I.',
            journal: 'Advanced Energy Materials (2024, 2304085)',
          },
             {
            title: 'Computational Discovery of Optimal Dopants for Nickel Iron Oxyhydroxide to Enhance OER Activity and Saline Water Compatibility',
            authors: 'Jung, H.; Song, J.; Lee, Y.; Jung, H. S.; Noh, K.-J.; Im, H.; Lee, Y.; Kim, T. Y.; Seo, O.; Watanabe, T.; Kumara, L. S. R.; Matsumura, D.; Park, S.; Han, J. W.',
            journal: 'ACS Energy Letters (2024, 9, 2162–2172)',
          },
             {
            title: 'Unveiling the Role of DMAP for the Se-Catalyzed Oxidative Carbonylation of Alcohols: A Mechanism Study',
            authors: 'Lee, H. J.; Jang, S.; Kim, T. Y.; Han, J. W.; Nam, I.; Baek, J.; Kim, Y. J.',
            journal: 'ACS Omega (2024, 9, 13200–13207)',
          },
             {
            title: 'Design Strategies for Hydroxyapatite-Based Materials to Enhance Their Catalytic Performance and Applicability',
            authors: 'Yook, H.; Hwang, J.; Yeo, W.; Bang, J.; Kim, J.; Kim, T. Y.; Choi, J.-S.; Han, J. W.',
            journal: 'Advanced Materials (2023, 220498)',
          },
             {
            title: 'Efficient Production of Adipic Acid by a Two-Step Catalytic Reaction of Biomass-Derived 2,5-Furandicarboxylic Acid',
            authors: 'Tran, A. V.; Park, S.-K.; Lee, H. J.; Kim, T. Y.; Kim, Y.; Suh, Y.-W.; Lee, K.-Y.; Kim, Y. J.; Baek, J.',
            journal: 'ChemSusChem (2022, 15, e20220037)',
          },
          {
            title: 'Role of an Interface for Hydrogen Production Reaction over Size-Controlled Supported Metal Catalysts',
            authors: 'Shin, D.; Huang, R.; Jang, M. G.; Choung, S.; Kim, Y.; Sung, K.; Kim, T. Y.; Han, J. W.',
            journal: 'ACS Catalysis (2022, 12, 8082)',
          },
          {
            title: 'Mesoporous Carbon Hollow Sphere with Dandelion-Like Radial-Hierarchy for High-Performance Supercapacitors',
            authors: 'Kwak, S.; Eom, H.; Kang, J.; Jang, S.; Choi, S.; Kwon, O.; Kim, T. Y.; Nam, I.',
            journal: 'International Journal of Energy Research (2022, 46, 4935)',
          },
          {
            title: 'Pt(Dithiolene)-Based Colorimetric Chemosensors for Multiple Metal-Ion Sensing',
            authors: 'Son, H.; Jang, S.; Lim, G.; Kim, T. Y.; Nam, I.; Noh, D.-Y.',
            journal: 'Sustainability (2021, 13, 8160)',
          },
          {
            title: 'Synthesis of Au Sponges Based on Agarose Template',
            authors: 'Kwak, S.; Jang, S.; Park, S.; Kang, J.; Kim, T. Y.; Nam, I.',
            journal: 'Scripta Materialia (2021, 196, 113769)',
          },
          {
            title: 'Redox-Driven Restructuring of Lithium Molybdenum Oxide Nanoclusters Boosts the Selective Oxidation of Methane',
            authors: 'Kim, Y.; Kim, T. Y.; Song, C. K.; Lee, K. R.; Bae, S.; Park, H.; Yun, D.; Yun, Y. S.; Nam, I.; Park, J.; Lee, H.; Yi, J.',
            journal: 'Nano Energy (2021, 82, 105741)',
          },

        ],
      },
    ],
  },
  {
    groupName: 'E+ Division (Energy Positive & Sustainable Systems)',
    color: '#F97316',
    members: [
      {
        name: 'Kwag, Byung-Chang',
        degree: 'University of Colorado, Boulder',
        affiliation: 'Assistant Professor, Korea University of Technology and Education',
        email: 'bckwag@koreatech.ac.kr',
        website: 'https://www.koreatech.ac.kr/faculty/view.es?mid=b30103010100&division=1&classification=DEPF006&seq=884',
        image: '/images/leeseunglab/bckwag.png',
        history: [
         
        ],
        introduction:
          'Professor Byung Chang Kwag received his M.S. and Ph.D. in Building Systems Engineering from the University of Colorado Boulder, USA. His research focuses on net-zero energy buildings, high performing buildings, and AI-based smart housing systems, with an emphasis on integrating energy efficiency, advanced control technologies, and user-centered performance evaluation. He has conducted both academic and applied research in building energy systems and housing technologies through his experience at LG Electronics and the Korea Land and Housing Research Institute. His recent work explores AI-driven energy management, human-centered smart home systems, and the development of next-generation residential infrastructures that support autonomous service robots.',
        selectedPapers: [
  {
    title: 'Louver design and airflow patterns analysis of air conditioning outdoor units for enhanced safety and efficiency in apartment buildings',
    authors: 'Lee, S. H.; Yun, H. D.; Im, D. K.; Kwag, B. C.',
    journal: 'Journal of Mechanical Science and Technology (2025, 39(8), 4547-4555)',
  },
  {
    title: '참여디자인 관점에서 본 리빙랩 운영구조와 지속가능성에 대한 연구',
    authors: '이성재; 김길태; 정재희; 곽병창',
    journal: '토지주택연구 (2025, 16(3), 195-221)',
  },

  {
    title: 'Development of tracer gas method to improve indoor air quality: a study on ventilation performance in apartment buildings in South Korea',
    authors: 'Lee, S. M.; Lee, S. Y.; Kim, G. T.; Kwag, B. C.',
    journal: 'Buildings (2024, 15(1), 49)',
  },
  {
    title: 'Integration of Photovoltaic Systems for Energy Self-Sufficient Low-Rise Multi-Family Residential Buildings in Republic of Korea',
    authors: 'Kwag, B. C.; Kim, G. T.; Hwang, I. T.',
    journal: 'Buildings (2024, 14(8), 2522)',
  },

  {
    title: 'Evaluation of the impact of installation environment for a condensing unit of a split-type air conditioner in a plant room of Korean apartment dwellings',
    authors: 'Kwag, B. C.; Kim, G. T.; Im, D. K.',
    journal: 'International Journal of Refrigeration (2023, 156, 207-218)',
  },
  {
    title: 'CO2 추적가스 농도감소법을 이용한 공동주택의 급·배기구 조합에 따른 환기 성능 분석',
    authors: '이상윤; 이수만; 김종엽; 김길태; 곽병창',
    journal: '토지주택연구 (2023, 14(4), 111-120)',
  },
  {
    title: '스마트하우징 주거서비스 기술에 대한 이용자 인식 개선을 위한 리빙랩 활용성 분석 연구',
    authors: '곽병창; 지원길; 이성재; 김길태',
    journal: '토지주택연구 (2023, 14(3), 125-135)',
  },

  {
    title: '다기준 의사결정방법을 이용한 공동주택 내 환기장치 종류별 효과분석',
    authors: '박경용; 김길태; 김태민; 지원길; 곽병창',
    journal: '토지주택연구 (2022, 13(3), 107-113)',
  },
  {
    title: '실증실험을 통한 측정 위치에 따른 주거공간 환기성능 평가',
    authors: '곽병창; 이수만; 김길태; 김종엽',
    journal: '토지주택연구 (2022, 13(3), 93-106)',
  },

  {
    title: '공동주택 세대 습기 제어를 위한 환기 시스템 운영 전략 효과 연구',
    authors: '곽병창; 김태민; 김길태; 지원길; 박경용',
    journal: '한국건축친환경설비학회논문집 (2021, 15(5), 572-585)',
  }
]
      },
      {
        name: 'Park, Soomin',
        degree: 'Ph.D., Seoul National University',
        affiliation: 'Associate Professor, Korea University of Technology and Education',
        email: 'smpark@koreatech.ac.kr',
        website: 'https://sites.google.com/view/theparkgroup/',
        image: '/images/leeseunglab/park.png',
        history: [
         
        ],
        introduction:
          'Soomin Park is an Associate Professor in the Department of Chemical and Biological Engineering at the Korea University of Technology and Education (KOREATECH). He earned his Ph.D. in Chemical and Biological Engineering from Seoul National University and pursued postdoctoral research at the Lawrence Berkeley National Laboratory (LBNL). Before joining KOREATECH, he served as a Staff Engineer at the Samsung Research.His research focuses on developing advanced functional materials for secondary batteries, artificial photosynthesis, and medical applications. He is currently advancing innovations in carbon-neutral technologies—such as battery recycling and sustainable energy systems—with a focus on bridging fundamental material science with practical solutions for global environmental challenges.',
        selectedPapers: [
  {
    title: 'CuxO-TiO2-embedded nanofiber filters with optimized Cu/(Ti/C) composition for sustained visible-light-driven antiviral performance',
    authors: 'Kim, S., Shin, H. E., Woo, I., Lee, Y., Seo, A., Lee, K., Chae, S., Nam, I., & Park, S.',
    journal: 'Korean Journal of Chemical Engineering, 43:467 (2026).',
  },
  {
    title: 'Interfacial charge dynamics and optical constraints in chlorophyll-functionalized TiO2 nanotube arrays',
    authors: 'Seo, A., Lee, K., Lee, Y., Kim, S., Lee, S., Chae, S., Nam, I., Yu, S., & Park, S.',
    journal: 'International Journal of Energy Research, 3924822 (2025).',
  },
  {
    title: 'Reevaluating carbonization: The untapped potential of pristine ZIFs for lithium metal batteries',
    authors: 'Kang, J., Kwon, O., Choi, S., Choi, S., Jang, S., Eom, H., Seo, H., Shin, J., Park, J., Kim, J. H., Seol, M.-L., Han, J. W., Park, S., Lee, H.-W., & Nam, I.',
    journal: 'Chemical Engineering Journal, 522:166980 (2025).',
  },
  {
    title: 'Sustained virucidal functionality in practical-scale polymer matrices enabled by visible-light-responsive CuxO-TiO2 photocatalyst',
    authors: 'Lee, Y., Lee, K., Shin, J., Choi, S., Kim, S., Kim, G. W., Seo, A., Han, J. W., Kim, T. Y., Nam, I., & Park, S.',
    journal: 'Advanced Composites and Hybrid Materials, 8:303 (2025).',
  },
  {
    title: 'Ambient multivariate synthesis of ZIF-8 nanoparticles: Optimization and application in Li metal batteries',
    authors: 'Seo, H., Lee, Y., Kim, H., Jang, S., Kim, J. H., Kang, J., Eom, H., Kwon, O., Shin, J., Park, J., Choi, S., Bae, Y., Park, C. W., Seol, M.-L., Song, H., Park, S., & Nam, I.',
    journal: 'Journal of Alloys and Compounds, 1013:178578 (2025).',
  },
  {
    title: 'Enhancing the performance of LiFePO4 cathodes in Li-ion batteries: Role of surface coating based on ZIF-8 particle size optimization',
    authors: 'Seo, H., Kang, J., Kim, H., Jang, S., Kim, J. H., Choi, S., Eom, H., Kwon, O., Shing, J., Park, J., Yoo, D., Jeong, S., Noh, S. H., Park, C. W., Seol, M.-L., Park, S., & Nam, I.',
    journal: 'Korean Journal of Chemical Engineering, 42:1529 (2025).',
  },
  {
    title: 'Non-volatile and stretchable polyvinylchloride-based solid-state electrolyte for capacitive energy storage',
    authors: 'Oh, S. J., Park, H. S., Lee, K., Lee, Y. J., Park, S., & Bae, J. W.',
    journal: 'Journal of Chemical Engineering, 41:1861 (2024).',
  },
  {
    title: 'Intelligent stress-adaptive binder enabled by shear-thickening property for silicon electrodes of lithium-ion batteries',
    authors: 'Kwon, O., Kim, T. Y., Kim, T., Kang, J., Jang, S., Eom, H., Choi, S., Shin, J., Park, J., Seol, M.-L., Han, J. W., Park, S., Lee, H.-W., & Nam, I.',
    journal: 'Advanced Energy Materials, 14:2304085 (2024).',
  },
  {
    title: 'Optimizing molecular weight of polyethylene glycol as an additive for stabilizing Zn metal anode in aqueous electrolyte',
    authors: 'Kwon, O., Kang, J., Jang, S., Eom, H., Choi, S., Shin, J., Park, J., Seo, H., Kim, J. H., Park, S., & Nam, I.',
    journal: 'Korean Journal of Chemical Engineering, 41:539 (2024).',
  },
  {
    title: 'Synthesizing the gel polymer electrolyte for supercapacitor, assembling supercapacitor using coin cell, and measuring gel electrolyte performance',
    authors: 'Kwon, O., Kang, J., Jang, S., Choi, S., Eom, H., Shin, J., Park, J., Park, S., & Nam, I.',
    journal: 'Journal of Visualized Experiments, 189:e64057 (2022).',
  },
  {
    title: 'Rational design of fluorescent/colorimetric chemosensors for detecting transition metal ions by varying functional groups',
    authors: 'Park, J.-K., Shin, J., Jang, S., Seol, M.-L., Kang, J., Choi, S., Eom, H., Kwon, O., Park, S., Noh, D.-Y., & Nam, I.',
    journal: 'Inorganics, 10:189 (2022).',
  },
  {
    title: 'Fabrication of antiviral nanofibers containing various Cu salts and ZnO nanorods by electrospinning',
    authors: 'Yoon, J., Kim, J., Lee, J., Hong, S. P., Park, S., Jeong, Y. W., Lee, C., & Oh, S.-G.',
    journal: 'Journal of Industrial and Engineering Chemistry, 116:572 (2022).',
  },
  {
    title: 'The major trimeric antenna complexes serve as a site for qH-energy dissipation in plants',
    authors: 'Bru, P., Steen, C. J., Park, S., Amstutz, C. L., Sylak-Glassman, E. J., Lam, L., Fekete, A., Mueller, M. J., Longoni, F., Fleming, G. R., Niyogi, K. K., & Malnoë, A.',
    journal: 'Journal of Biological Chemistry, 298:102519 (2022).',
  },
  {
    title: 'Agarose gel-templating synthesis of a 3D wrinkled graphene architecture for enhanced supercapacitor performance',
    authors: 'Shin, J., Park, J.-K., Kim, G. W., Nam, I., & Park, S.',
    journal: 'Micromachines, 13:1113 (2022).',
  },
  {
    title: 'Synthesis of porous metallic structure and its application for energy storage materials',
    authors: 'Jang, S., Kang, J., Park, S., & Nam, I.',
    journal: 'Ceramist, 25:206 (2022).',
  },
  {
    title: 'Practical scale evaluation of a photocatalytic air purifier equipped with a titania-zeolite composite bead filter for VOC removal and viral inactivation',
    authors: 'Kim, S., Kim, S., Park, H.-J., Park, S., Kim, J. Y., Jeong, Y. W., Yang, H. H., Choi, Y., Yeom, M., Song, D., & Lee, C.',
    journal: 'Environmental Research, 204:112036 (2022).',
  },
  {
    title: 'Fabrication of Ag-doped ZnO/PAN composite nanofiber filters: Photocatalytic and anti-virus performance',
    authors: 'Yoon, J., Kim, J., Park, S., Jeong, Y. W., Lee, C., & Oh, S.-G.',
    journal: 'Korean Journal of Chemical Engineering, 39:1632 (2022).',
  },
  {
    title: 'Synthesis of Au sponges based on agarose template',
    authors: 'Kwak, S., Jang, S., Park, S., Kang, J., & Nam, I.',
    journal: 'Scripta Materialia, 196:113769 (2021).',
  },
]
      },
    ],
  },
];
