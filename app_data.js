export default function app_data() {
    return {
        sidebar: {
            name: 'Bob Cravens',
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
            words: ['Leader', 'Strategic Thinker', 'Innovator', 'Architect', 'Full Stack Developer'],
        },
        about: {
            title: 'Software Engineering - Director | Manager | Architect | Full Stack Developer',
            image: 'assets/img/cravens2.jpg',
            summary: `Innovative professional with a dynamic background in software engineering and
                            application architecture. Seasoned leader adept at spearheading teams to develop and
                            maintain cutting-edge full-stack solutions.`,
            highlights: [
                '<strong>Leadership:</strong> Ability to lead and inspire software engineers towards achieving company goals.',
                '<strong>Strategic Planning:</strong> Proven track record of providing strategic leadership and vision.',
                '<strong>Team Management:</strong> Proficiency in managing and growing teams, including hiring, mentoring, and performance evaluation.',
                '<strong>Project Management:</strong> Adept at leading cross-functional teams in the development and maintenance of robust full-stack solutions, ensuring high availability, scalability, and security for backend systems.',
                '<strong>Technical Expertise:</strong> Deep understanding of software engineering principles, modern technologies, and industry best practices. Enthusiastic about continuous learning and staying abreast of emerging technologies to drive innovation.',
                '<strong>Problem-Solving Skills:</strong> Aptitude for identifying and resolving complex technical issues efficiently, both independently and collaboratively.',
                '<strong>Communication Skills:</strong> Excellent verbal and written communication skills to effectively communicate with stakeholders and team members.',
                '<strong>Architectural Leadership:</strong> Demonstrated ability to provide architectural leadership, guiding the design and implementation of scalable, reliable, and maintainable solutions.',
                '<strong>Stakeholder Management:</strong> Excellence in building and maintaining relationships with key stakeholders, including product managers, executives, and external partners.',
                '<strong>Change Management:</strong> Skilled in driving organizational change and adapting to evolving business needs.',
                '<strong>Data Informed Approach:</strong> Experienced in establishing data-driven insights and cultivating a data-driven culture to optimize business processes.',
            ]
        },
        skills: {
            trait_summary: `Over the years, I have refined and developed the following traits that have consistently
                            contributed to my professional growth and success, enabling me to effectively lead teams
                            and drive the development of innovative products:`,
            traits: [
                'Leadership', 'Strategic Planning', 'Team Management',
                'Project Management', 'Communication', 'Technical Expertise',
                'Problem-Solving', 'Innovation', 'Risk Management',
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
        work_experiences: [
            {
                'title': 'Senior Manager Software Engineering',
                'dates': 'August 2015 - February 2024',
                'company': 'GenesisCare (formerly 21st Century Oncology)',
                'highlights': [
                    'Developed the strategic planning for Asset IQ, communicated the vision, and secured Executive team support.',
                    'Directed the development of Asset IQ, an internal web-based platform, strategically created to enhance operational efficiency through intuitive dashboards and features.',
                    'Integrated disparate data sources within Asset IQ for comprehensive views, enabling data-informed decision-making.',
                    'Key evangelist in the widespread adoption of Asset IQ across multiple departments, including RT, Physics, Engineering, and Dosimetry, and all organizational levels from individual contributors to executives.',
                    'Played a pivotal role in the development of Adaptivo, a cutting-edge patient dosimetry application, by leading the architectural design efforts to create a modern and user-friendly web experience.',
                    'Architected the design of Adaptivo\'s resilient processing pipeline, enabling support for asynchronous job queues and ensuring high availability of critical functionalities.',
                    'Assisted in the deployment of Adaptivo into beta and production environments, providing support to various teams and ensuring seamless integration with existing workflows.',
                ]
            },
            {
                'title': 'Senior Manager System Analytics',
                'dates': 'January 2014 - August 2015',
                'company': 'Accuray',
                'highlights': [
                    'Formulated and presented a forward-thinking data aggregation and analytics proposal to the Executive team, securing funding to establish an analytics team dedicated to enhancing the performance of TomoTherapy and CyberKnife radiation oncology products.',
                    'Directed the end-to-end project lifecycle, including roadmap planning, backlog management, and capacity planning, while empowering team members to drive towards project milestones, ensuring successful project execution and delivery.',
                    'Spearheaded the architecture and implementation of a unified, quasi-realtime data collection technology for TomoTherapy and Cyberknife products, enabling seamless data transmission from global installations to a centralized data-warehouse, optimizing data accessibility and analysis capabilities.',
                    'Developed an optimized data model for the storage of collected data, prioritizing fast reads for reporting purposes while maintaining acceptable write speeds, ensuring efficient data retrieval and analysis.',
                    'Led the design of a custom web-based dashboard and reporting solution (Up Center) tailored to provide role-specific views of the data, empowering stakeholders to make data-driven decisions. This solution facilitated troubleshooting, enabled proactive service opportunities, and facilitated remote service solutions, enhancing overall operational effectiveness and customer satisfaction.',
                ]
            },
            {
                'title': 'Research Software Manager',
                'dates': '2011 - January 2014',
                'company': 'Accuray',
                'highlights': [
                    'Spearheaded the development of TomoTherapy Quality Assurance (TQA), a user-friendly application designed to automate the collection and analysis of key metrics for machine QA within the HiArt system. This application revolutionized daily, monthly, annual, and as- needed testing processes, resulting in significantly improved operational efficiency and informed decision-making for medical physics staff.',
                    'Managed the technical development of TomoLink, a cutting-edge application enabling remote diagnostics of the HiArt system. By automating publication of system data to a central data- warehouse, TomoLink provided invaluable proactive troubleshooting information, enhancing overall system reliability and customer support capabilities.',
                ]
            },
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
        ],
        education: [
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
        ],
        portfolio: {
            summary: `The following are a few projects where my contributions have been instrumental to the success.
                        In all of these projects I served in a leadership role and contributed technically as an architect / full stack developer.
                        <strong>Click on each for additional details.</strong>`,
            projects: [
                {
                    name: 'Asset IQ',
                    category: 'Full Stack Web Development',
                    company: 'GenesisCare (formerly 21st Century Oncology)',
                    urls: {},
                    tags: {
                        'text-bg-secondary': ['Laravel', 'Vue.js'],
                        'text-bg-primary': ['PHP'],
                        'text-bg-success': ['MySQL', 'Redis', 'Ubuntu'],
                        'text-bg-info': ['Active Directory', 'Workday', 'ADP', 'Azure']
                    },
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
                {
                    name: 'Adaptivo',
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
                    paragraphs: [
                        'Patient quality assurance application used in radio-therapy (RT) departments to compare delivered versus planned treatment volumes. Expected dose is computed and compared to the actual delivered dose measured using the external panel. This allows the oncology team to alter the treatment plan when anatomical changes occur that result in unacceptable planned versus actual differences. This application is an FDA product that is marketed by Standard Imaging.',
                        'Development included an API that allowed the integration of Adaptivo reports into the billing process for the clinic. This resulted in north of $10 million per year in revenue.',
                        'Each clinic would have their own Adaptivo server deployed locally. This improved calculation performance by placing the server closer to the patient data source. The API allowed the development of a centralized server dashboard to monitor each server.'
                    ]
                },
                {
                    name: 'Up Center',
                    category: 'Full Stack Web Development',
                    company: 'Accuray / TomoTherapy',
                    urls: {},
                    tags: {
                        'text-bg-secondary': ['ASP.NET', '.NET Framework'],
                        'text-bg-primary': ['C#'],
                        'text-bg-success': ['IIS', 'SQL Server', 'RabbitMQ'],
                        'text-bg-info': ['Remote Data Collection Agent', 'Centralized Data Warehouse']
                    },
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
                {
                    name: 'TomoTherapy Quality Assurance (TQA)',
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
                {
                    name: 'Member Owl',
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
                    paragraphs: [
                        `Member Owl is a professional web-based membership solution developed to help manage membership data, automate billing, and improve retention.`,
                        `Member Owl partners with industry leaders to learn their secret sauce. This knowledge is transformed into features and workflows that users leverage in their daily operations.`,
                        `Member Owl leverages cloud infrastructure to provide a reliable, secure and safe hosting environment.`,
                    ]
                },
                {
                    name: 'BIDS - Online Auctions',
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
                    paragraphs: [
                        `BIDS is an easy-to-use low-cost solution for organizations to manage and host a professional auction.`,
                        `BIDS leverages best-in-class integrations to provide secure payment collection.`,
                    ]
                },
                {
                    name: 'Twinning Platform',
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
                {
                    name: 'Treatment Planning Model',
                    category: 'Application',
                    company: 'TomoTherapy',
                    urls: {},
                    tags: {
                        'text-bg-secondary': ['MFC', 'Win32'],
                        'text-bg-primary': ['Visual C++'],
                        'text-bg-info': ['Cluster Computing'],
                    },
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
                {
                    name: 'Mega-Voltage CT (MVCT) Commissioning',
                    category: 'Application',
                    company: 'TomoTherapy',
                    urls: {},
                    tags: {
                        'text-bg-secondary': ['MFC', 'Win32'],
                        'text-bg-primary': ['Visual C++'],
                        'text-bg-info': ['CT Reconstruction', 'Image Processing'],
                    },
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
            ]
        },
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