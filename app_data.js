export default function app_data() {
    return {
        sidebar: {
            name: 'Bob Cravens',
            image: 'assets/img/cravens-profile-img.jpg',
            socials: [
                {
                    name: 'LinkedIn',
                    url: 'https://www.linkedin.com/in/bobcravens/',
                    icon: 'bx bxl-linkedin'
                },
                {
                    name: 'GitHub',
                    url: 'https://github.com/rcravens',
                    icon: 'bx bxl-github'
                },
                {
                    name: 'YouTube',
                    url: 'https://www.youtube.com/@thetechsandbox',
                    icon: 'bx bxl-youtube'
                }
            ],
            resume: 'assets/2024_bob_cravens_resume.pdf',
        },
        hero: {
            name: 'Bob Cravens',
            image: 'assets/img/hero-bg-01.jpeg',
            words: ['Leader', 'Strategic Thinker', 'Innovator', 'Architect', 'Full Stack Developer'],
        },
        about: {
            title: 'Director | Manager | Architect | Full Stack Developer',
            image: 'assets/img/cravens2.jpg',
            summary: `Innovative professional with a dynamic background in software engineering and
                            application architecture. Seasoned leader adept at spearheading teams to develop and
                            maintain cutting-edge full-stack solutions.`,
            highlights: [
                'Proven track record of providing strategic leadership in software engineering.',
                'Skilled in leveraging technological advancements to drive business process enhancements and deliver impactful solutions.',
                'Adept at leading cross-functional teams in the development and maintenance of robust full-stack solutions, ensuring high availability, scalability, and security for backend systems.',
                'Proficient in delivering clean, intuitive front-end interfaces that prioritize user experience.',
                'Experienced in utilizing data-driven insights to empower leadership and team members effectively, with a strong focus on optimizing software development processes through the integration of industry best practices.',
                'Demonstrated expertise in building integrations that efficiently extract and integrate data from diverse sources, and in the establishment and management of both on-premise and cloud-based servers.',
                'Competent in the establishment and management of on-premise or cloud-based servers.',
                'Expertise in optimizing software development processes by integrating industry best practices.',
                'Enthusiastic about continuous learning and staying abreast of emerging technologies to drive innovation.',
                'Proven track record as a senior-level Application Architect & Developer, adept in all facets of product development.',
                'Possess a strong foundation in engineering, science, and mathematics, enhancing problem-solving capabilities.',
                'Capable of thriving both independently and collaboratively within diverse team environments.',
            ]
        },
        skills: {
            trait_summary: `Over the years, I have refined and developed the following traits that have consistently
                            contributed to my professional growth and success, enabling me to effectively lead teams
                            and drive the development of innovative products:`,
            traits: [
                'Leadership', 'Strategic Thinker', 'Team Management',
                'Project Management', 'Communication', 'Technical Proficiency',
                'Problem Solving', 'Innovation', 'Risk Management',
                'Change Management', 'Quality Assurance', 'Regulatory Compliance'],
            category_summary: `Technology does not stand still, and neither should our skills. As innovations continue to shape the
                        landscape of our industries, it's imperative that we embrace lifelong learning and adaptability to
                        stay relevant and effective in our roles. My extensive experience across various domains equips me
                        with a versatile skill set, enabling me to rapidly grasp and apply new skills as needed. Here is
                        a snapshot of technologies where I am experienced:`,
            categories: {
                left: [
                    {
                        'name': 'Languages',
                        'icon': 'text-bg-primary',
                        'items': ['Python', 'PHP', 'C#', 'Node', 'ASP.NET', 'HTML', 'CSS', 'JavaScript'],
                    },
                    {
                        'name': 'Frameworks',
                        'icon': 'text-bg-secondary',
                        'items': ['Laravel', 'Django', 'Flask', 'Vue.js', 'React', 'Bootstrap CSS'],
                    },
                    {
                        'name': 'Servers',
                        'icon': 'text-bg-success',
                        'items': ['Nginx', 'IIS', 'Apache', 'MySQL', 'PostgreSQL', 'SQL Server', 'Redis', 'RabbitMQ'],
                    },
                ],
                right: [
                    {
                        'name': 'Devops',
                        'icon': 'text-bg-warning',
                        'items': ['Bitbucket', 'Github', 'Gitlab', 'Jira', 'Jenkins', 'Docker', 'Azure Devops'],
                    },
                    {
                        'name': 'Integrations',
                        'icon': 'text-bg-info',
                        'items': ['Active Directory', 'Workday', 'ADP', 'Azure', 'AWS', 'Stripe', 'MailGun', 'Twilio'],
                    },
                    {
                        'name': 'Cloud',
                        'icon': 'text-bg-dark',
                        'items': ['AWS', 'Azure', 'Digital Ocean'],
                    }
                ]
            }
        },
        work_experiences: {
            left: [
                {
                    title: 'Professional Experience',
                    items: [
                        {
                            'title': 'Senior Manager Software Engineering',
                            'dates': 'August 2015 - February 2024',
                            'company': 'GenesisCare (formerly 21st Century Oncology)',
                            'highlights': [
                                'Designed and implemented Asset IQ, an internal web-based application, aimed at enhancing operational efficiency through intuitive dashboards and reports.',
                                'Integrated disparate data sources within Asset IQ to offer comprehensive and integrated views and metrics, facilitating informed, data-driven decision-making.',
                                'Asset IQ was utilized across multiple centers by diverse cross-functional teams, including RT, Physics, Engineering, and Dosimetry, spanning various organizational levels from individual contributors to division executives.',
                                'Collaborated on the development of Adaptivo, a patient dosimetry application, focusing on architecting a modern and user-friendly web front-end to enhance user experience.',
                                'Architected the design of Adaptivo\'s resilient processing pipeline, enabling support for asynchronous job queues and ensuring high availability of critical functionalities.',
                                'Assisted in the deployment of Adaptivo into beta and production environments, providing support to various teams and ensuring seamless integration with existing workflows.',
                            ]
                        },
                        {
                            'title': 'Senior Manager System Analytics',
                            'dates': 'January 2014 - August 2015',
                            'company': 'Accuray',
                            'highlights': [
                                'Conceptualized and presented a visionary data collection and reporting solution for the TomoTherapy and Cyberknife radiation oncology products to the Executive team to secure the funding to build an analytics team.',
                                'Managed the end-to-end project lifecycle, including roadmap planning, backlog management, and capacity planning, while empowering team members to drive towards project milestones, ensuring successful project execution and delivery.',
                                'Designed and implemented a unified, quasi-realtime data collection technology for TomoTherapy and Cyberknife products, enabling seamless data transmission from global installations to the data-warehouse, enhancing data accessibility and analysis capabilities.',
                                'Developed an optimized data model for the storage of collected data, prioritizing fast reads for reporting purposes while maintaining acceptable write speeds, ensuring efficient data retrieval and analysis.',
                                'Engineered a custom web-based dashboard and reporting solution (Up Center) tailored to provide role-specific views of the data, empowering stakeholders to make data-driven decisions. This solution facilitated troubleshooting, enabled proactive service opportunities, and facilitated remote service solutions, enhancing overall operational effectiveness and customer satisfaction.',
                            ]
                        },
                        {
                            'title': 'Research Software Manager',
                            'dates': '2011 - January 2014',
                            'company': 'Accuray',
                            'highlights': [
                                'Led the development and research efforts to create innovative software applications aimed at enhancing operational efficiency and effectiveness for both internal and external customers.',
                                'Spearheaded the development of TomoTherapy Quality Assurance (TQA), a user-friendly application designed to automate the collection and analysis of key metrics for machine QA within the HiArt system. This application revolutionized daily, monthly, annual, and as- needed testing processes, resulting in significantly improved operational efficiency and informed decision-making for medical physics staff.',
                                'Pioneered the technical development of TomoLink, a cutting-edge application enabling remote diagnostics of the HiArt system. By automating publication of system data to a central data- warehouse, TomoLink provided invaluable proactive troubleshooting information, enhancing overall system reliability and customer support capabilities.',

                            ]
                        }],
                }
            ],
            right: [
                {
                    title: '&nbsp;',
                    items: [
                        {
                            title: 'Lead Applied Physicist',
                            dates: '2005 - 2011',
                            company: 'TomoTherapy',
                            highlights: [
                                'Led the development and research initiatives aimed at creating software applications to enhance operational efficiency and effectiveness for both internal and external stakeholders.',
                                'Directed the development of TomoTherapy Quality Assurance (TQA), a user-friendly application designed to streamline the collection and analysis of critical metrics for machine QA within the HiArt system. This innovative solution facilitated a more efficient and informed approach to daily, monthly, annual, and as-needed testing processes for medical physics staff.',
                                'Orchestrated the technical development of TomoLink, an advanced application enabling remote diagnostics of the HiArt system. By establishing a centralized data publishing mechanism to a Customer Support location, TomoLink provided invaluable proactive troubleshooting information, enhancing system reliability and customer support capabilities.',
                            ]
                        },
                        {
                            title: 'Physicist',
                            dates: '2003 - 2005',
                            company: 'TomoTherapy',
                            highlights: [
                                'Played a pivotal role in enhancing the Quality Assurance processes for the TomoTherapy radiotherapy machine.',
                                'Automated and streamlined the MVCT commissioning process. Eliminated the need for on-site visits by specialists by integrating commissioning into the manufacturing workflow. This optimized the manufacturing process, eliminated resource constraint, and reduced cost.',
                                'Automated and streamlined the treatment planning commissioning process. Transformed a previously manual and time-consuming procedure requiring specialized expertise (Medical Physicist) into a streamlined process that reduced commissioning time from approximately 30 days to 2-3 days, significantly accelerating time-to-market.',
                                'Led the development of hardware, software, and processes for dosimetric \'twinning\' of the TomoTherapy machine to a pre-created gold standard Treatment Planning System model. This twinning system allowed production to ramp up by reducing the need for specialized expertise (Medical Physicist). The gold standard models removed “snowflake models” from the install base allowing for more efficient customer support.',
                            ]
                        }
                    ]
                }
            ]
        },
        education: {
            left: [],
            right: [
                {
                    title: 'Education',
                    items: [
                        {
                            degree: 'PhD (all but dissertation) Electrical Engineering, Minor Physics',
                            school: 'University of Wisconsin - Madison',
                        },
                        {
                            degree: 'MSEE, Electrical Engineering',
                            school: 'University of Wisconsin - Madison',
                        },
                        {
                            degree: 'BSEE, Electrical Engineering',
                            school: 'University of Wisconsin - Madison',
                        }
                    ]
                }
            ]
        },
        portfolio: {
            summary: `The following are a few projects where my contributions have been instrumental to the success.
                        In all of these projects I served in a leadership role and contributed technically as an architect / full stack developer.
                        <strong>Click on each for additional details.</strong>`,
            filters: ['web', 'app'],
            projects: {
                'gc_assetiq': {
                    name: 'Asset IQ',
                    short_name: 'Asset IQ',
                    filter: 'web',
                    image: 'assets/img/portfolio/assetiq-01.jpg',
                    category: 'Full Stack Web Development',
                    company: 'GenesisCare (formerly 21st Century Oncology)',
                    urls: {},
                    tags: {
                        'text-bg-secondary': ['Laravel', 'Vue.js'],
                        'text-bg-primary': ['PHP'],
                        'text-bg-success': ['MySQL', 'Redis', 'Ubuntu'],
                        'text-bg-info': ['Active Directory', 'Workday', 'ADP', 'Azure']
                    },
                    images: [
                        'assets/img/portfolio/assetiq-01-clean.jpg',
                        'assets/img/portfolio/assetiq-02-clean.jpg',
                        'assets/img/portfolio/assetiq-03-clean.jpg',
                        'assets/img/portfolio/assetiq-04-clean.jpg',
                    ],
                    paragraphs: [
                        'Delivering a comprehensive clinical operations platform utilized by executives, operational leaders, and team members across various departments including Regulatory, Dosimetry, Physics, Engineering, BI, and HR. Our business objectives are to:',
                        `<ul>
                    <li>Consolidate and integrate operational data to offer a centralized hub for analytics, dashboards, and reporting.</li>
                    <li>Ensure timely access to relevant data for informed decision-making at every level.</li>
                    <li>Track operational KPIs along the clinical pathway with robust data analysis capabilities for actionable insights.</li>
                    <li>Streamline repetitive processes through automation.</li>
                    <li>Offer user-friendly features for efficient collection of operational data.</li>
                </ul>`
                    ]
                },
                '21c_adaptivo': {
                    name: 'Adaptivo',
                    short_name: 'Adaptivo',
                    filter: 'web',
                    image: 'assets/img/portfolio/adaptivo-01.jpg',
                    category: 'Full Stack Web Development',
                    company: '21st Oncology / Standard Imaging',
                    urls: {
                        'Standard Imaging': 'https://www.standardimaging.com/qa-software/adaptivo'
                    },
                    tags: {
                        'text-bg-secondary': ['Laravel', 'Flask'],
                        'text-bg-primary': ['PHP', 'Python', 'Matlab'],
                        'text-bg-success': ['MySQL', 'Redis', 'Ubuntu'],
                    },
                    images: [
                        'assets/img/portfolio/adaptivo-01.png',
                        'assets/img/portfolio/adaptivo-02.png',
                        'assets/img/portfolio/adaptivo-03.png',
                        'assets/img/portfolio/adaptivo-04.png',
                        'assets/img/portfolio/adaptivo-05.png',
                        'assets/img/portfolio/adaptivo-06.png',
                    ],
                    paragraphs: [
                        'Patient quality assurance application used in radio-therapy (RT) departments to compare delivered versus planned treatment volumes. Expected dose is computed and compared to the actual delivered dose measured using the external panel. This allows the oncology team to alter the treatment plan when anatomical changes occur that result in unacceptable planned versus actual differences. This application is an FDA product that is marketed by Standard Imaging.',
                        'Development included an API that allowed the integration of Adaptivo reports into the billing process for the clinic. This resulted in north of $10 million per year in revenue.',
                        'Each clinic would have their own Adaptivo server deployed locally. This improved calculation performance by placing the server closer to the patient data source. The API allowed the development of a centralized server dashboard to monitor each server.'
                    ]
                },
                'tomo_upcenter': {
                    name: 'Up Center',
                    short_name: 'Up Center',
                    filter: 'web',
                    image: 'assets/img/portfolio/upcenter-01.jpg',
                    category: 'Full Stack Web Development',
                    company: 'Accuray / TomoTherapy',
                    urls: {},
                    tags: {
                        'text-bg-secondary': ['ASP.NET', '.NET Framework'],
                        'text-bg-primary': ['C#'],
                        'text-bg-success': ['IIS', 'SQL Server', 'RabbitMQ'],
                        'text-bg-info': ['Remote Data Collection Agent', 'Centralized Data Warehouse']
                    },
                    images: [
                        'assets/img/portfolio/upcenter-01.png',
                        'assets/img/portfolio/upcenter-02.png',
                        'assets/img/portfolio/upcenter-03.png',
                        'assets/img/portfolio/upcenter-04.png',
                        'assets/img/portfolio/upcenter-01.png',
                    ],
                    paragraphs: [
                        `Operational dashboard for monitoring and remotely troubleshooting the TomoTherapy radio-therapy (RT)
                treatment machines throughout the worldwide installation base. The TomoLink component was deployed as part
                of each machine and provided a secure gateway for remote access and quasi-realtime data collection.
                The Up Center application processed incoming data and provided a live view into clinical operations around the world.`,

                        `<ul>
                    <li>The Support Team leveraged the quasi-realtime stream of data to proactively target issues</li>
                    <li>The remote access features were used by the Support Team to troubleshoot and fix when possible or provide a solution to a dispatched Field Support Engineer</li>
                    <li>Operational Team members monitored consumable parts and proactively scheduled maintenance based on hours</li>
                    <li>Marketing Team learned from high-performing centers and created training material that helped all centers</li>
                    <li>Engineering Team monitored errors and targeted solutions in future releases
                </ul>`
                    ]
                },
                'tomo_tqa': {
                    name: 'TomoTherapy Quality Assurance (TQA)',
                    short_name: 'TQA',
                    filter: 'web',
                    image: 'assets/img/portfolio/tqa-01.jpg',
                    category: 'Full Stack Web Development',
                    company: 'TomoTherapy',
                    urls: {
                        'Sales PDF': 'https://www.accuray.com/wp-content/uploads/tt-all-qa-kit-en-mkt-tt-0515-0113.pdf'
                    },
                    tags: {
                        'text-bg-secondary': ['ASP.NET', '.NET Framework'],
                        'text-bg-primary': ['C#'],
                        'text-bg-success': ['IIS', 'SQL Server', 'RabbitMQ'],
                        'text-bg-info': ['Remote Data Collection Agent']
                    },
                    images: [
                        'assets/img/portfolio/tqa-01.png',
                        'assets/img/portfolio/tqa-02.png',
                        'assets/img/portfolio/tqa-03.png',
                        'assets/img/portfolio/tqa-04.png',
                        'assets/img/portfolio/tqa-05.png',
                        'assets/img/portfolio/tqa-06.png',
                    ],
                    paragraphs: [
                        `TQA (TomoTherapy Quality Assurance) is a calendar based tool that streamlines machine QA by providing
                    automated data collection, analysis, and trending tools. TQA saves significant time and empowers
                    Medical Physicists to perform required protocols (AAPM TG-148) in an efficient manner.
                    TQA leverages on-board detectors to allow clinicians to quickly and easily assess the day-to-day consistency
                    of a wide variety of parameters.`,
                        `Prior to TQA many of these QA protocols required collection of data with water tanks or film. This required
                    Medical Physics staff to perform the data collection. With TQA, daily QA could be performed by the
                    Therapist and the Medical Physicist notified if it failed.`,
                        `The TQA platform was extensible by deploying additional QA modules. Each of the modules can be
                    licensed individually by the business.`
                    ]
                },
                'diglabs_memberowl': {
                    name: 'Member Owl',
                    short_name: 'Member Owl',
                    filter: 'web',
                    image: 'assets/img/portfolio/memberowl-01.jpg',
                    category: 'Full Stack Web Development',
                    company: 'Dig Labs',
                    urls: {
                        'https://get.memberowl.com/': 'https://get.memberowl.com/'
                    },
                    tags: {
                        'text-bg-secondary': ['Laravel', 'Vue.js'],
                        'text-bg-primary': ['PHP'],
                        'text-bg-success': ['MySQL', 'Redis', 'Ubuntu'],
                        'text-bg-info': ['PaySimple', 'MailChimp', 'Twilio', 'Mailgun'],
                    },
                    images: [
                        'assets/img/portfolio/memberowl-01.png',
                        'assets/img/portfolio/memberowl-02.jpg',
                        'assets/img/portfolio/memberowl-03.jpg',
                        'assets/img/portfolio/memberowl-04.jpg',
                        'assets/img/portfolio/memberowl-05.jpg',
                        'assets/img/portfolio/memberowl-06.jpg',
                        'assets/img/portfolio/memberowl-07.jpg',
                        'assets/img/portfolio/memberowl-08.jpg',

                    ],
                    paragraphs: [
                        `Member Owl is a professional web-based membership solution developed to help manage membership data, automate billing, and improve retention.`,
                        `Member Owl partners with industry leaders to learn their secret sauce. This knowledge is transformed into features and workflows that users leverage in their daily operations.`,
                        `Member Owl leverages cloud infrastructure to provide a reliable, secure and safe hosting environment.`,
                    ]
                },
                'diglabs_bids': {
                    name: 'BIDS - Online Auctions',
                    short_name: 'BIDS',
                    filter: 'web',
                    image: 'assets/img/portfolio/bids.jpg',
                    category: 'Full Stack Web Development',
                    company: 'Dig Labs',
                    urls: {
                        'https://bids.io': 'https://bids.io'
                    },
                    tags: {
                        'text-bg-secondary': ['Laravel'],
                        'text-bg-primary': ['PHP'],
                        'text-bg-success': ['MySQL', 'Redis', 'Ubuntu'],
                        'text-bg-info': ['Stripe', 'Mailgun', 'Twilio', 'AWS'],
                    },
                    images: [
                        'assets/img/portfolio/bids.png',
                        'assets/img/portfolio/bids-03.png',
                        'assets/img/portfolio/bids-04.png',
                        'assets/img/portfolio/bids-05.png',
                        'assets/img/portfolio/bids-06.png',
                        'assets/img/portfolio/bids-07.png',
                        'assets/img/portfolio/bids-08.png',
                        'assets/img/portfolio/bids-09.png',
                    ],
                    paragraphs: [
                        `BIDS is an easy-to-use low-cost solution for organizations to manage and host a professional auction.`,
                        `BIDS leverages best-in-class integrations to provide secure payment collection.`,
                    ]
                },
                'tomo_twinning': {
                    name: 'Twinning Platform',
                    short_name: 'Twinning Platform',
                    filter: 'app',
                    image: 'assets/img/portfolio/twinning_platform.jpg',
                    category: 'Application &amp; Integrated Hardware',
                    company: 'TomoTherapy',
                    urls: {
                        'Patent PDF': 'https://patentimages.storage.googleapis.com/6e/b1/f4/f898c26f99d9a4/US7801269.pdf'
                    },
                    tags: {
                        'text-bg-secondary': ['MFC', 'Win32'],
                        'text-bg-primary': ['Visual C++'],
                        'text-bg-info': ['Serial Communication', '2D Motion', 'Electrometer'],
                    },
                    images: [
                        'assets/img/portfolio/twin-01.png',
                        'assets/img/portfolio/twin-02.png',
                        'assets/img/portfolio/twin-03.png',
                        'assets/img/portfolio/twin-04.png',
                        'assets/img/portfolio/twin-06.png',
                    ],
                    paragraphs: [
                        `Developed a platform that included hardware and software and was used by the Manufacturing Team to dosimetrically
                    twin each machine during the manufacturing process to a gold standard.`,
                        `The hardware included a frame that could be bolted to the machine that secured a scanning platform that used
                    stepper motors to drive an ion chamber in two-deminsions in the radiation field.`,
                        `The software simultaneously controlled the scanning platform while sampling the ion chamber to measure the field.
                    The data collected allowed tuning the output, energy, and field widths to a gold standard.`,
                        `Previously, data was collected by Medical Physicists and a unique treatment beam model per machine was created.
                    This process required a specialized skill-set and took 2-3 days. The new process could be performed by the
                    Manufacturing Techs and takes less than 1 hour.`,
                    ]
                },
                'tomo_tps_model': {
                    name: 'Treatment Planning Model',
                    short_name: 'Treatment Planning Model',
                    filter: 'app',
                    image: 'assets/img/portfolio/tomotherapy_machine.jpg',
                    category: 'Application',
                    company: 'TomoTherapy',
                    urls: {},
                    tags: {
                        'text-bg-secondary': ['MFC', 'Win32'],
                        'text-bg-primary': ['Visual C++'],
                        'text-bg-info': ['Cluster Computing'],
                    },
                    images: [
                        'assets/img/portfolio/tomotherapy_machine.png',
                        'assets/img/portfolio/tomo_no_covers.png',
                        'assets/img/portfolio/tomo-dose.png',
                    ],
                    paragraphs: [
                        `Automated the optimization of a treatment model to a set of measured data. The measured data set included output,
                    energy, transverse profiles, and longitudinal profiles for each field width. The optimization process then
                    automatically iterated on solutions that converged by tuning various model parameters.`,
                        `The optimization model was greatly simplified by using a formula for the energy spectrum that utilized two
                    parameters to reduce the optimization space and automatically constrain to realistic solutions.`,
                        `Previously, the company had only shipped a few machines and the treatment beam modeling was being completed
                    manually by the VP of Research. The optimization space was large and took the better part of a month to
                    accomplish manually. This automated solution reduced the time to a few hours.`,
                    ]
                },
                'tomo_mvct': {
                    name: 'Mega-Voltage CT (MVCT) Commissioning',
                    short_name: 'MVCT Commissioning',
                    filter: 'app',
                    image: 'assets/img/portfolio/tomo_mvct.png',
                    category: 'Application',
                    company: 'TomoTherapy',
                    urls: {},
                    tags: {
                        'text-bg-secondary': ['MFC', 'Win32'],
                        'text-bg-primary': ['Visual C++'],
                        'text-bg-info': ['CT Reconstruction', 'Image Processing'],
                    },
                    images: [
                        'assets/img/portfolio/tomo_mvct.png',
                        'assets/img/portfolio/mvct-02.png',
                        'assets/img/portfolio/mvct-03.png',
                        'assets/img/portfolio/mvct-04.jpg',
                    ],
                    paragraphs: [
                        `This feature set was added to an in-house engineering tool and allowed the Manufacturing Techs to
                    collect data and commission the mega-voltage CT (MVCT) imaging system on the TomoTherapy treatment machine.`,
                        `The imaging system is a critical feature that allows patients to be accurately aligned on the system before
                    their radio-therapy (RT) treatment. With the MVCT Commissioner it was easy to commission as part of the
                    manufacturing process or re-commission in the field by the Service Team if necessary.`,
                        `Previously, the plan was to have an MVCT specialist travel to any location that needed MVCT commissioning.
                    This new solution saved travel costs and only requires 1 hour by a Manufacturing Tech.`,
                    ]
                },
            }
        },
        testimonials: [
            {
                name: 'Jessica Vanhooser',
                title: 'GenesisCare - Director Revenue Integrity',
                text: `I would like to extend my sincere recommendation on behalf of Robert Cravens. Robert is a remarkable individual who has made significant contributions to Genesiscare. As Robert’s teammate at Genesiscare for the last 2 years, I’ve benefited from his extensive knowledge, endless ability to problem solve, and his tireless work ethic. Robert’s expert-level knowledge quickly stood out and is something that I have come to count on tremendously.
                                    <br/><br/>
                                    What is particularly noteworthy is Robert’s creation of and maintaining the Reconciliation Work Tool that my medical coding team uses daily to track potential missed codes, coding errors, and is a communication tool between the coders and the offices. Robert seamlessly created an option to have superusers so that processes could be more streamlined within the tool. He is consistently called upon to make changes at the last minute and always answers the call swiftly and efficiently. He has been a vital part of our team.
                                    <br/><br/>
                                    Robert’s dedication, professionalism, and results-driven mindset make him an invaluable asset, and I am confident he will continue to make significant contributions in his professional journey. He has an excellent rapport with many employees within our organization and I wholeheartedly recommend him for any endeavor he chooses to pursue.`,
                image: 'assets/img/testimonials/jessica-vanhooser.jpeg',
            },
            {
                name: 'Amber Smith',
                title: 'GenesisCare - Head of Radiation Therapy Clinical Operations and Transformation',
                text: `Bob Cravens has my highest recommendation, and any future collaborator, employer, or teammate will find that they are lucky to have him on board. Not only is Bob a master at his craft, but he has the rare ability to understand the user, interpret and translate the languages of IT and Operations (both terms used very broadly) and bridge the gap seamlessly. I worked with Bob as a business partner/customer requesting tools to provide visibility to leaders on operational efficiencies, rostering, and business metrics. Despite challenging data quality, he translated those business requests into easy to use dashboards. He is professional and solution focused, methodical and meticulous, accessible and responsive. I cannot recommend him enough.`,
                image: 'assets/img/testimonials/amber_smith.jpeg',
            },
            {
                name: 'Gary Burns',
                title: 'GenesisCare - Director of Engineering Services',
                text: `Bob has an outstanding work ethic and was a key contributor to a major program rollout we were assigned. This project involved working with leaders from several departments and a tight timeline. Bob was able to take input from multiple trade groups and make appropriate updates efficiently. He was an excellent communicator throughout the process and an invaluable team member. This project wouldn't have succeeded without his efforts. Bob would be an excellent addition to any team you have, or a new team that is being assembled.`,
                image: 'assets/img/testimonials/gary_burns.jpeg',
            },
            {
                name: 'Gustavo Olivera',
                title: '21st Century Oncology - CTO and acting COO',
                text: `I had the privilege of supervising Bob during my tenure as the VP of Research at TomoTherapy and later as the CTO at GenesisCare (formerly 21st Century Oncology). Throughout our time working together, Bob consistently demonstrated an exceptional talent for dissecting intricate business and technical processes. His ability to meticulously map out these complexities and devise innovative solutions significantly enhanced our operational efficiency and effectiveness.
                                    <br/><br/>
                                    One of Bob's most remarkable qualities is his knack for identifying areas of improvement and implementing strategies that not only streamline workflows but also yield cost savings for the organization. His forward-thinking approach and dedication to excellence have undoubtedly made a lasting impact on our team and the broader scope of our projects.
                                    <br/><br/>
                                    I wholeheartedly endorse Bob for any role that demands a blend of strategic thinking, technical acumen, and a passion for driving positive change. He is a valuable asset to any organization and a pleasure to work alongside.`,
                image: 'assets/img/testimonials/gustavo-olivera.jpeg',
            },
            {
                name: 'Leandro Barreca',
                title: 'GenesisCare - Executive Director Regulatory Affairs',
                text: `During my tenure as the Executive Director of Regulatory Affairs at GenesisCare, Bob led the development of an integrated solution designed to efficiently manage regulatory and quality data crucial for our clinics. This comprehensive system effectively streamlined the oversight of accreditation, licenses, and audit data, playing a pivotal role in ensuring clinics' compliance with both local and federal requirements.`,
                image: 'assets/img/testimonials/leandro_barreca.jpeg',
            },
            {
                name: 'Trish Rasmus',
                title: 'GenesisCare - VP of Clinical Services and Operations',
                text: `It is my pleasure to endorse Bob Cravens for employment in your organization.
                                    <br/><br/>
                                    I have known Bob for over 3 years, during which he worked as a Senior Software Engineering Manager.
                                    <br/><br/>
                                    Bob partnered with my team on over 14 projects during the last 3 years. These projects
                                    involved Bob leveraging technology to enhance our business performance. Including
                                    automated integration of our clinical data to be used to manage operational and clinical
                                    excellence metrics. Building rostering web applications. Designing and implementing
                                    operational dashboards to improve clinical workflows.
                                    <br/><br/>
                                    Bobs contribution to these projects was exemplary. He was agile and adaptable to the
                                    changing needs of the business throughout our work together. He was results driven
                                    and was exceptional at bridging the gap between strategy and reality. I am confident
                                    that he will display a high degree of commitment and discharge his job duties and
                                    responsibilities with diligence in your organization.
                                    <br/><br/>
                                    I recommend Bob without reservations.`,
                image: 'assets/img/testimonials/trish_rasmus.jpeg',
            },
            {
                name: 'Carlos A Rodriguez',
                title: 'GenesisCare - VP Data and Insights',
                text: `I highly recommend Bob Cravens, for his understanding of application development and innovation in the healthcare industry. He creates strong relationships and mentors team members to obtain strong results.He has delivered solutions that positively impact each team in the company. He has a unique collaboration approach to get business users engaged in their solution making it usable and adaptable in a short timeframe. It is a pleasure to work with him.`,
                image: 'assets/img/testimonials/carlos_rodriguez.jpeg',
            }
        ],
        contacts: [
            {
                title: 'Email:',
                icon: 'bi bi-envelope',
                text: 'bob.cravens@gmail.com',
            },
            {
                title: 'LinkedIn:',
                icon: 'bi bi-linkedin',
                text: '<a href="https://www.linkedin.com/in/bobcravens">https://www.linkedin.com/in/bobcravens</a>',
            },
            {
                title: 'Phone:',
                icon: 'bi bi-phone',
                text: '+1-608-320-1824',
            }
        ]
    }
}