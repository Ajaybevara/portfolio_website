// Skills data
const skillsData = {
    python: {
        name: "Python",
        icon: "fab fa-python",
        proficiency: 95,
        color: "#3776ab",
        category: "aiml python database", // Added database for broader filtering
        description: "Advanced Python programming for AI/ML, data science, and web development with extensive experience in frameworks and libraries.",
        technologies: ["Django", "Flask", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "SQL"],
        projects: [
            { name: "Retail Price Optimization", detail: "92% accuracy", githubUrl: "https://github.com/Ajaybevara/Retail-Price", liveDemoUrl: "https://retail-price-optimization.streamlit.app/" },
            { name: "Body Fat Prediction", detail: "88% precision", githubUrl: "https://github.com/Ajaybevara/Body-fat-prediction", liveDemoUrl: "https://body-fat-prediction.streamlit.app/" },
            { name: "ML Model Integration", detail: "Web Applications", githubUrl: "#", liveDemoUrl: "#" }
        ],
        certifications: [
            { name: "IBM Certified Python Basics for Data Science", credentialUrl: "https://www.credly.com/badges/your-ibm-python-basics-badge" },
            { name: "Advanced Python Programming", credentialUrl: "#" }
        ]
    },
    javascript: {
        name: "JavaScript",
        icon: "fab fa-js-square",
        proficiency: 88,
        color: "#f7df1e",
        category: "frontend web",
        description: "Modern JavaScript (ES6+) for frontend development, DOM manipulation, and interactive web applications.",
        technologies: ["React", "Vue.js", "Node.js", "Express", "TypeScript"],
        projects: [
            { name: "Personal Portfolio Website", detail: "Interactive UI", githubUrl: "https://github.com/Ajaybevara/My-portfolio", liveDemoUrl: "https://ajaybevara.github.io/My-portfolio/" },
            { name: "Simple Calculator Web App", detail: "Dark/Light Mode", githubUrl: "https://github.com/Ajaybevara/calculator", liveDemoUrl: "https://ajaybevara.github.io/calculator/" },
            { name: "Rock Paper Scissors Game", detail: "Interactive Game", githubUrl: "https://github.com/Ajaybevara/RockPaperScissor", liveDemoUrl: "https://ajaybevara.github.io/RockPaperScissor/" }
        ],
        certifications: [
            { name: "JavaScript Algorithms and Data Structures (FreeCodeCamp)", credentialUrl: "#" },
            { name: "React.js Essentials", credentialUrl: "#" }
        ]
    },
    react: {
        name: "React",
        icon: "fab fa-react",
        proficiency: 82,
        color: "#61dafb",
        category: "frontend web",
        description: "Component-based development with React hooks, state management, and modern React patterns.",
        technologies: ["Redux", "Context API", "React Router", "Hooks", "JSX"],
        projects: [
            { name: "SPA Development", detail: "Single Page Apps", githubUrl: "#", liveDemoUrl: "#" },
            { name: "Completed MERN Stack Development Workshop Project", detail: "Full Stack App", githubUrl: "#", liveDemoUrl: "#" }
        ],
        certifications: [
            { name: "React Front to Back (Brad Traversy)", credentialUrl: "#" },
            { name: "Modern React with Redux", credentialUrl: "#" }
        ]
    },
    ml: {
        name: "Machine Learning",
        icon: "fas fa-robot",
        proficiency: 90,
        color: "#ff6b6b",
        category: "aiml",
        description: "Expertise in supervised and unsupervised learning algorithms, model optimization, and deployment.",
        technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV"],
        projects: [
            { name: "Retail Price Optimization", detail: "92% accuracy", githubUrl: "https://github.com/Ajaybevara/Retail-Price", liveDemoUrl: "https://retail-price-optimization.streamlit.app/" },
            { name: "Body Fat Prediction", detail: "88% precision", githubUrl: "https://github.com/Ajaybevara/Body-fat-prediction", liveDemoUrl: "https://body-fat-prediction.streamlit.app/" },
            { name: "AI Hackathon", detail: "Winner 2025", githubUrl: "#", liveDemoUrl: "#" }
        ],
        certifications: [
            { name: "Machine Learning Specialization (Stanford/Coursera)", credentialUrl: "#" },
            { name: "Deep Learning Specialization (DeepLearning.AI)", credentialUrl: "#" }
        ]
    },
    html: {
        name: "HTML5",
        icon: "fab fa-html5",
        proficiency: 95,
        color: "#e34f26",
        category: "frontend web",
        description: "Semantic HTML5 with modern web standards, accessibility, and SEO optimization.",
        technologies: ["Semantic HTML", "Web Components", "Progressive Web Apps", "Accessibility"],
        projects: [
            { name: "Personal Portfolio Website", detail: "Interactive UI", githubUrl: "https://github.com/Ajaybevara/My-portfolio", liveDemoUrl: "https://ajaybevara.github.io/My-portfolio/" },
            { name: "Srikakulam Police Grievance Portal", detail: "Team Project", githubUrl: "https://github.com/Gnaneswar22/sklmpoliceweb", liveDemoUrl: "#" },
            { name: "Simple Calculator Web App", detail: "Dark/Light Mode", githubUrl: "https://github.com/Ajaybevara/calculator", liveDemoUrl: "https://ajaybevara.github.io/calculator/" }
        ],
        certifications: [
            { name: "Responsive Web Design (FreeCodeCamp)", credentialUrl: "#" },
            { name: "HTML5 & CSS3 Fundamentals", credentialUrl: "#" }
        ]
    },
    css: {
        name: "CSS3",
        icon: "fab fa-css3-alt",
        proficiency: 92,
        color: "#1572b6",
        category: "frontend web",
        description: "Advanced CSS3 with animations, flexbox, grid, and responsive design principles.",
        technologies: ["Sass/SCSS", "Bootstrap", "Tailwind CSS", "Flexbox", "Grid"],
        projects: [
            { name: "Personal Portfolio Website", detail: "Modern Design", githubUrl: "https://github.com/Ajaybevara/My-portfolio", liveDemoUrl: "https://ajaybevara.github.io/My-portfolio/" },
            { name: "Srikakulam Police Grievance Portal", detail: "Responsive Layout", githubUrl: "https://github.com/Gnaneswar22/sklmpoliceweb", liveDemoUrl: "#" }
        ],
        certifications: [
            { name: "Advanced CSS and Sass (Jonas Schmedtmann)", credentialUrl: "#" },
            { name: "CSS Grid & Flexbox Masterclass", credentialUrl: "#" }
        ]
    },
    database: {
        name: "Database",
        icon: "fas fa-database",
        proficiency: 85,
        color: "#336791",
        category: "database",
        description: "Database design, optimization, and management with both SQL and NoSQL databases.",
        technologies: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "SQLite"],
        projects: [
            { name: "Srikakulam Police Grievance Portal", detail: "MySQL Integration", githubUrl: "https://github.com/Gnaneswar22/sklmpoliceweb", liveDemoUrl: "#" },
            { name: "Database Optimization Project", detail: "Performance boost", githubUrl: "#", liveDemoUrl: "#" }
        ],
        certifications: [
            { name: "SQL Certificate (Great Learning Academy)", credentialUrl: "https://www.greatlearning.in/verify/your-sql-certificate" },
            { name: "MongoDB Basics", credentialUrl: "#" }
        ]
    },
    ai: {
        name: "AI/Deep Learning",
        icon: "fas fa-brain",
        proficiency: 88,
        color: "#9b59b6",
        category: "aiml",
        description: "Neural networks, CNNs, RNNs, and advanced deep learning architectures for complex problem solving.",
        technologies: ["TensorFlow", "PyTorch", "Keras", "CUDA", "OpenAI"],
        projects: [
            { name: "Body Fat Prediction System", detail: "Neural Networks", githubUrl: "https://github.com/Ajaybevara/Body-fat-prediction", liveDemoUrl: "https://body-fat-prediction.streamlit.app/" },
            { name: "Generative AI Workshop Project", detail: "Image Generation", githubUrl: "#", liveDemoUrl: "#" }
        ],
        certifications: [
            { name: "Deep Learning Specialization (DeepLearning.AI)", credentialUrl: "#" },
            { name: "Completed Generative AI Workshop", credentialUrl: "#" }
        ]
    }
};

// Global variables
let isAnimationPaused = false;
let animationSpeed = 1;

// Utility function for debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Update loading progress bar
function updateLoadingProgress(targetProgress) {
    const progressBar = document.querySelector('.loading-progress');
    if (progressBar) {
        let currentProgress = parseInt(progressBar.style.width) || 0;
        const interval = setInterval(() => {
            if (currentProgress < targetProgress) {
                currentProgress += 1;
                progressBar.style.width = currentProgress + '%';
            } else {
                clearInterval(interval);
            }
        }, 10);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateLoadingProgress(50); // Initial progress

    // Simulate loading time
    setTimeout(() => {
        updateLoadingProgress(100);

        // Hide loading screen after full load
        setTimeout(() => {
            const loadingScreen = document.getElementById('loadingScreen');
            if (loadingScreen) {
                loadingScreen.classList.add('hidden');
            }
        }, 500); // Small delay after progress completes

        // Initialize all functionality
        initThemeToggle();
        initNavigation();
        initTypingEffect();
        initScrollAnimations();
        initResumeDownload();
        initContactForm();
        
        // Conditional initializations based on page
        if (document.body.classList.contains('specialty-body')) {
            // Specialty pages don't have these sections from index.html
        } else { // This is index.html
            initAboutAnimations();
            initEducationAnimations();
            initSkillsGrid(); // New skills grid initialization
            initSkillsFilterControls(); // New skills filter controls
            initProjectFilter(); 
            initCertificatesFilter();
        }
        
        // Special page transition triggers
        initPageTransitions();

        // Show default skill (if on index.html and skills section exists)
        const skillsSection = document.getElementById('skills');
        if (skillsSection && !document.body.classList.contains('specialty-body')) {
            setTimeout(() => {
                // Find the first skill card (e.g., Python) and trigger its click
                const firstSkillCard = document.querySelector('.skill-card-item[data-skill="python"]');
                if (firstSkillCard) {
                    firstSkillCard.click(); // Programmatically click to show details
                }
            }, 1000); // Delay after sections are visible
        }
        
        // Initial check for scroll animations on load for relevant sections
        document.querySelectorAll('.section').forEach(section => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target.id === 'about') {
                            initAboutAnimations();
                        } else if (entry.target.id === 'education') {
                             initEducationAnimations();
                        }
                        // Disconnect observer after animation
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });
            observer.observe(section);
        });

    }, 1500); // Simulate network/resource loading
});

// Theme Toggle Functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            body.style.transition = '';
        }, 300);
    });
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Navigation Functionality
function initNavigation() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileSidebar = document.getElementById('mobileSidebar');
    const sidebarClose = document.getElementById('sidebarClose');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function checkScreenSize() {
        const isDesktop = window.innerWidth > 1024;
        const desktopNav = document.getElementById('desktopNav');
        
        if (isDesktop) {
            desktopNav.style.display = 'flex'; // Changed to flex for proper layout
            if (mobileMenuBtn) mobileMenuBtn.style.display = 'none';
            closeSidebar();
        } else {
            desktopNav.style.display = 'none';
            if (mobileMenuBtn) mobileMenuBtn.style.display = 'flex'; // Changed to flex
        }
    }
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileSidebar.classList.add('active');
            document.body.style.overflow = 'hidden';
            this.classList.add('active'); // Animate hamburger icon
        });
    }
    
    if (sidebarClose) {
        sidebarClose.addEventListener('click', closeSidebar);
    }
    
    document.addEventListener('click', function(e) {
        if (mobileSidebar && !mobileSidebar.contains(e.target) && 
            mobileMenuBtn && !mobileMenuBtn.contains(e.target)) {
            closeSidebar();
        }
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetHref = this.getAttribute('href');

            if (targetHref.startsWith('#')) {
                e.preventDefault();
                const targetId = targetHref.substring(1);
                scrollToSection(targetId);
                closeSidebar();
                
                // Only update active class if on index.html
                if (!document.body.classList.contains('specialty-body')) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                }
            } else if (targetHref.endsWith('.html') || targetHref.includes('.pdf')) { // Handle external HTML pages and PDF links
                // For direct nav links, allow default behavior (opening in new tab for PDF)
                // The initPageTransitions will handle career card clicks
            }
        });
    });
    
    function closeSidebar() {
        if (mobileSidebar) {
            mobileSidebar.classList.remove('active');
            document.body.style.overflow = '';
            if (mobileMenuBtn) mobileMenuBtn.classList.remove('active'); // Reset hamburger icon
        }
    }
    
    // Only update active nav link on scroll if on the main index.html page
    if (!document.body.classList.contains('specialty-body')) {
        window.addEventListener('scroll', updateActiveNavLink);
    }
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 250 && window.pageYOffset < sectionTop + sectionHeight - 250) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        // Ensure we only activate links that point to sections on the current page
        if (link.getAttribute('href').startsWith('#')) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        }
    });
}

// Typing Effect
function initTypingEffect() {
    const typingText = document.getElementById('typingText');
    if (!typingText) return;
    
    const phrases = [
        'AI/ML Engineering Student',
        'Full Stack Developer',
        'Data Science Enthusiast',
        'Problem Solver',
        'Innovation Driver',
        'Python Developer',
        'Machine Learning Engineer'
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500;
        }
        
        setTimeout(typeEffect, typingSpeed);
    }
    
    typeEffect();
}

// Resume Download Functionality
function initResumeDownload() {
    // Handles all download buttons directly pointing to the PDF
    const allDownloadButtons = document.querySelectorAll('.resume-download-btn, .mobile-resume-btn, .resume-download-main');
    allDownloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const resumePath = 'assets/Rajasekhar_Resume.pdf'; // IMPORTANT: This path is now relative to your site root!
            
            // Open PDF in new tab
            window.open(resumePath, '_blank');
            
            showNotification('Resume opened in new tab!', 'info');
        });
    });
}

// Function to generate resume content (kept for backward compatibility, though direct PDF is now used)
function generateResumeContent() {
    return `
BEVARA RAJASEKHAR
AI/ML Engineering Student & Full Stack Developer

CONTACT INFORMATION
Email: rajasekhar6105@gmail.com
Phone: +91-7793966921
Location: Andhra Pradesh, India

EDUCATION
B.Tech in AI & ML (2022 - Present)
JNTUGV (Sri Sivani College of Engineering)
CGPA: 7.7

Intermediate (MPC) (2020 - 2022)
A.P. Model School, O.V. Peta
Percentage: 69%

Secondary Education (2019 - 2020)
A.P. Model School, O.V. Peta
CGPA: 8.6

TECHNICAL SKILLS
Programming Languages: Python (95%), JavaScript (88%)
Web Technologies: HTML5 (95%), CSS3 (92%), React (82%)
AI/ML: Machine Learning (90%), Deep Learning, TensorFlow, PyTorch
Databases: SQL, MongoDB
Tools & Frameworks: Django, Flask, Node.js, Express

EXPERIENCE
AI/ML Intern - BITS Pilani (June - July 2025)
• Worked on real-world AI/ML datasets and predictive models.
• Developed machine learning models with 90% accuracy.
• Improved system efficiency by 40%.

Deep Learning Intern - Shamgar Software Solutions (Dec - Feb 2024-25)
• Built neural networks with TensorFlow and PyTorch.
• Implemented deep learning models for image recognition tasks.

Full Stack Development Intern - Micro IT Solutions, Haryana (May 2025)
• Developed modern web apps with HTML, CSS, JS, and Flask backend.
• Implemented responsive user interfaces and RESTful APIs.

PROJECTS
1. Retail Price Optimization
   • Machine learning model with 92% accuracy
   • Technologies: Python, Scikit-learn, Pandas, Streamlit
   • Impact: Optimized pricing strategies for retail businesses

2. Body Fat Prediction System
   • Deep learning system with 88% precision
   • Technologies: TensorFlow, Neural Networks, Python
   • Application: Health and fitness monitoring

3. Personal Portfolio Website
   • Responsive design with modern UI/UX
   • Technologies: HTML5, CSS3, JavaScript
   • Features: Dark/light theme, interactive animations

4. Simple Calculator Web App
   • Modern calculator web application with dark/light mode support.
   • Technologies: HTML, CSS, JavaScript

5. Srikakulam Police Grievance Portal (Team Project)
   • Civic-tech web app for transparent complaint tracking.
   • Technologies: HTML, CSS, PHP, MySQL

6. Rock Paper Scissors Game
   • Interactive game with score tracking.
   • Technologies: HTML, CSS, JavaScript

CERTIFICATIONS
• IBM Certified Python Basics for Data Science (edX)
• AI & ML Hackathon Winner (2025)
• IBM Certified Big Data, Hadoop, and Spark Basics (edX)
• Coursera Project: Exception Handling in Python
• Completed MERN Stack Development Workshop
• Completed Generative AI Workshop
• SQL Certificate (Great Learning Academy)

ACHIEVEMENTS
• Winner of AI & ML Hackathon 2025
• 90% Model Accuracy Achievement in ML Projects
• 40% Efficiency Improvement at BITS Pilani
• Winner of 3+ Science Quiz Competitions
• Published full-stack, AI, and civic tech projects on GitHub
• Shared AI-based coding tutorials with peers

PERSONAL TRAITS
• Highly motivated, quick learner of new technologies.
• Strong leadership, teamwork, and communication skills.
• Problem-solving mindset and adaptability.
    `;
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icon = type === 'success' ? 'fas fa-check-circle' : 
                 type === 'error' ? 'fas fa-exclamation-circle' : 'fas fa-info-circle';
    
    notification.innerHTML = `
        <div class="notification-content">
            <i class="${icon}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}

// New Skills Section Logic (Grid based)
function initSkillsGrid() {
    const skillsGridContainer = document.getElementById('skillsGrid');
    if (!skillsGridContainer) return;

    skillsGridContainer.innerHTML = ''; // Clear existing content

    Object.keys(skillsData).forEach(key => {
        const skill = skillsData[key];
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card-item';
        skillCard.dataset.skill = key; // Store skill key
        skillCard.dataset.category = skill.category; // Store category for filtering

        skillCard.innerHTML = `
            <div class="icon" style="background: linear-gradient(135deg, ${skill.color}, ${skill.color}aa);">
                <i class="${skill.icon}"></i>
            </div>
            <h3>${skill.name}</h3>
            <div class="proficiency">${skill.proficiency}% Proficiency</div>
        `;
        skillsGridContainer.appendChild(skillCard);

        skillCard.addEventListener('click', () => showSkillDetails(key));
    });
}


function showSkillDetails(skillKey) {
    // Only update if on index.html
    if (document.body.classList.contains('specialty-body')) {
        return;
    }

    const skill = skillsData[skillKey];
    if (!skill) return;
    
    const skillIcon = document.getElementById('skillIconLarge');
    if (skillIcon) {
        skillIcon.innerHTML = `<i class="${skill.icon}"></i>`;
        skillIcon.style.background = `linear-gradient(135deg, ${skill.color}, ${skill.color}aa)`;
    }
    
    const skillName = document.getElementById('skillName');
    if (skillName) {
        skillName.textContent = skill.name;
    }
    
    const proficiencyFill = document.getElementById('proficiencyFill');
    const proficiencyText = document.getElementById('proficiencyText');
    if (proficiencyFill && proficiencyText) {
        // Reset animation for proficiency bar
        proficiencyFill.style.width = '0%';
        setTimeout(() => {
            proficiencyFill.style.width = skill.proficiency + '%';
            proficiencyFill.style.background = `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`;
        }, 50); // Small delay to trigger animation
        proficiencyText.textContent = skill.proficiency + '%';
    }
    
    const skillDescription = document.getElementById('skillDescription');
    if (skillDescription) {
        skillDescription.textContent = skill.description;
    }
    
    const projectsList = document.getElementById('projectsList');
    if (projectsList) {
        projectsList.innerHTML = '';
        if (skill.projects && skill.projects.length > 0) {
            skill.projects.forEach(project => {
                const projectItem = document.createElement('div');
                projectItem.className = 'project-item';
                let projectHtml = `
                    <i class="fas fa-project-diagram"></i>
                    <span>${project.name} - ${project.detail}</span>
                `;
                if (project.githubUrl && project.githubUrl !== '#') {
                    projectHtml += `<a href="${project.githubUrl}" target="_blank" class="project-link small-link" title="GitHub"><i class="fab fa-github"></i></a>`;
                }
                if (project.liveDemoUrl && project.liveDemoUrl !== '#') {
                    projectHtml += `<a href="${project.liveDemoUrl}" target="_blank" class="project-link small-link" title="Live Demo"><i class="fas fa-external-link-alt"></i></a>`;
                }
                projectItem.innerHTML = projectHtml;
                projectsList.appendChild(projectItem);
            });
        } else {
            projectsList.innerHTML = `<p>No related projects found.</p>`;
        }
    }

    const certificationsList = document.getElementById('certificationsList');
    if (certificationsList) {
        certificationsList.innerHTML = '';
        if (skill.certifications && skill.certifications.length > 0) {
            skill.certifications.forEach(cert => {
                const certItem = document.createElement('div');
                certItem.className = 'certification-item';
                let certHtml = `
                    <i class="fas fa-certificate"></i>
                    <span>${cert.name}</span>
                `;
                if (cert.credentialUrl && cert.credentialUrl !== '#') {
                    certHtml += `<a href="${cert.credentialUrl}" target="_blank" class="project-link small-link" title="View Credential"><i class="fas fa-external-link-alt"></i></a>`;
                }
                certItem.innerHTML = certHtml;
                certificationsList.appendChild(certItem);
            });
        } else {
            certificationsList.innerHTML = `<p>No related certifications found.</p>`;
        }
    }
    
    const techTags = document.getElementById('techTags');
    if (techTags) {
        techTags.innerHTML = '';
        skill.technologies.forEach(tech => {
            const tag = document.createElement('span');
            tag.className = 'tech-tag';
            tag.textContent = tech;
            tag.style.borderColor = skill.color;
            techTags.appendChild(tag);
        });
    }

    // Highlight the clicked skill card
    document.querySelectorAll('.skill-card-item').forEach(card => card.classList.remove('active'));
    const currentSkillCard = document.querySelector(`.skill-card-item[data-skill="${skillKey}"]`);
    if (currentSkillCard) {
        currentSkillCard.classList.add('active');
    }
}

function clearSkillDetails() {
    const skillIcon = document.getElementById('skillIconLarge');
    if (skillIcon) skillIcon.innerHTML = `<i class="fas fa-code"></i>`;
    if (skillIcon) skillIcon.style.background = `var(--gradient-primary)`;

    const skillName = document.getElementById('skillName');
    if (skillName) skillName.textContent = `Select a skill`;

    const proficiencyFill = document.getElementById('proficiencyFill');
    if (proficiencyFill) proficiencyFill.style.width = '0%';
    if (proficiencyFill) proficiencyFill.style.background = `var(--gradient-primary)`;

    const proficiencyText = document.getElementById('proficiencyText');
    if (proficiencyText) proficiencyText.textContent = '0%';

    const skillDescription = document.getElementById('skillDescription');
    if (skillDescription) skillDescription.textContent = 'Click on a skill card to see detailed information about my expertise, related projects, and certifications.';

    const projectsList = document.getElementById('projectsList');
    if (projectsList) projectsList.innerHTML = `<p>No related projects found.</p>`;

    const certificationsList = document.getElementById('certificationsList');
    if (certificationsList) certificationsList.innerHTML = `<p>No related certifications found.</p>`;

    const techTags = document.getElementById('techTags');
    if (techTags) techTags.innerHTML = '';
}


// Skills Controls (now for the grid)
function initSkillsFilterControls() {
    // Only initialize if on index.html
    if (document.body.classList.contains('specialty-body')) {
        return;
    }

    const skillFilterBtns = document.querySelectorAll('.skills-filter .filter-btn');
    const skillCards = document.querySelectorAll('.skill-card-item'); // Select new skill cards

    skillFilterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            skillFilterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.dataset.filter;

            skillCards.forEach(card => {
                const category = card.dataset.category;
                if (filter === 'all' || category.includes(filter)) { // Check for multiple categories
                    card.style.display = 'block';
                    // Re-apply animation to ensure visibility if it was hidden
                    card.classList.remove('animate'); 
                    void card.offsetWidth; // Trigger reflow
                    card.classList.add('animate');
                } else {
                    card.style.display = 'none';
                    card.classList.remove('animate');
                }
            });
            // Reset skill details panel when filter changes
            // Find the first visible skill and show its details
            const firstVisibleSkill = document.querySelector(`.skill-card-item[data-category*="${filter}"]`);
            if (firstVisibleSkill) {
                showSkillDetails(firstVisibleSkill.dataset.skill);
            } else {
                clearSkillDetails();
            }
        });
    });
}


// Scroll Animations (for general sections)
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Unobserve once animated
            }
        });
    }, observerOptions);
    
    const animateElements = document.querySelectorAll(`
        .section-title,
        .section-subtitle,
        .career-card,
        .about-text,
        .about-image,
        .experience-card,
        .project-card,
        .certificate-card,
        .contact-content,
        .hero-profile-image,
        .edu-step-item, /* Changed from .education-step */
        .skills-list-panel, /* New skills list panel */
        .skill-details-panel, /* Skills details panel */
        .experience-infographic .exp-item /* Experience infographic items */
    `);
    
    animateElements.forEach(el => observer.observe(el));
}

// About Section Animations
function initAboutAnimations() {
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return;
    
    const statItems = document.querySelectorAll('.about-stats .stat-item');
    
    const animateStats = () => {
        statItems.forEach((item, index) => {
            setTimeout(() => {
                const numberElement = item.querySelector('.stat-number');
                const targetValue = parseFloat(numberElement.getAttribute('data-target'));
                animateNumber(numberElement, targetValue);
            }, index * 150); // Stagger animation
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target); // Animate once
            }
        });
    }, { threshold: 0.5 });
    observer.observe(aboutSection);
}

function animateNumber(element, target) {
    let current = 0;
    const isFloat = target % 1 !== 0;
    const duration = 1500; // milliseconds
    const stepTime = 15; // milliseconds
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = isFloat ? target.toFixed(1) : Math.floor(target);
            clearInterval(timer);
        } else {
            element.textContent = isFloat ? current.toFixed(1) : Math.floor(current);
        }
    }, stepTime);
}

// Education Section Animations (for floor steps)
function initEducationAnimations() {
    const educationSteps = document.querySelectorAll('.edu-step-item'); 
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Animate once
            }
        });
    }, { threshold: 0.3 });
    
    educationSteps.forEach(step => {
        observer.observe(step);
    });
}

// Project Filter Functionality
function initProjectFilter() {
    // Only initialize if on index.html
    if (document.body.classList.contains('specialty-body')) {
        return;
    }

    const filterBtns = document.querySelectorAll('.projects-filter .filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    card.classList.add('animate'); // Re-trigger animation
                } else {
                    card.style.display = 'none';
                    card.classList.remove('animate');
                }
            });
        });
    });
}

// Certificates Filter Functionality
function initCertificatesFilter() {
    // Only initialize if on index.html
    if (document.body.classList.contains('specialty-body')) {
        return;
    }

    const filterBtns = document.querySelectorAll('.certificates-filter .filter-btn');
    const certificateCards = document.querySelectorAll('.certificate-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            certificateCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'flex'; // Use flex for new card style
                    card.classList.add('animate'); // Re-trigger animation
                } else {
                    card.style.display = 'none';
                    card.classList.remove('animate');
                }
            });
        });
    });
}


// Contact Form Functionality
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        if (!validateForm(data)) {
            return;
        }
        
        submitForm(data);
    });
}

function validateForm(data) {
    const errors = [];
    
    if (!data.name || data.name.trim().length < 2) {
        errors.push('Name must be at least 2 characters long');
    }
    
    if (!data.email || !isValidEmail(data.email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!data.subject || data.subject.trim().length < 3) {
        errors.push('Subject must be at least 3 characters long');
    }
    
    if (!data.message || data.message.trim().length < 10) {
        errors.push('Message must be at least 10 characters long');
    }
    
    if (errors.length > 0) {
        showNotification('Please fix the form errors: ' + errors.join(', '), 'error');
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function submitForm(data) {
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    // IMPORTANT: This is a client-side simulation.
    // For actual email sending, you NEED a server-side script.
    // Example: You would send a POST request to your backend endpoint.
    // fetch('/submit_form.php', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    // })
    // .then(response => response.json())
    // .then(result => {
    //     if (result.success) {
    //         // ... success logic ...
    //     } else {
    //         // ... error logic ...
    //     }
    // })
    // .catch(error => {
    //     // ... network error logic ...
    // });
    
    setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        submitBtn.style.background = 'linear-gradient(135deg, #48bb78, #38a169)';
        
        document.getElementById('contactForm').reset();
        
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
        }, 3000);
        
        showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
    }, 2000);
}

// Smooth Scrolling
function scrollToSection(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        const offsetTop = targetElement.offsetTop - 100;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const mobileSidebar = document.getElementById('mobileSidebar');
        if (mobileSidebar && mobileSidebar.classList.contains('active')) {
            mobileSidebar.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        document.getElementById('themeToggle').click();
    }
    
    if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
        e.preventDefault();
        // Only trigger download if on main page or specialty pages (where resume is also a direct link)
        handleResumeDownload();
    }
});

// Handle window resize
window.addEventListener('resize', debounce(function() {
    // Re-check navigation display on resize
    initNavigation();
}, 250));

// Page Transition Logic
function initPageTransitions() {
    const transitionTriggers = document.querySelectorAll('.transition-trigger');

    transitionTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.href;
            const transitionType = this.dataset.transition; // 'ai' or 'frontend'

            const overlay = document.getElementById(`${transitionType}TransitionOverlay`);
            if (overlay) {
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling during transition

                // Navigate after animation
                setTimeout(() => {
                    window.location.href = targetPage;
                }, 2000); // Adjust this duration to match your transition animation length
            }
        });
    });

    // Handle back button / direct navigation to specialty pages
    window.addEventListener('pageshow', function(event) {
        if (event.persisted) { // Check if page is loaded from cache (e.g., back button)
            const overlays = document.querySelectorAll('.page-transition-overlay');
            overlays.forEach(overlay => overlay.classList.remove('active'));
            document.body.style.overflow = '';
        }
    });
}
// Update the initEducationAnimations function
function initEducationAnimations() {
    const educationItems = document.querySelectorAll('.roadmap-item'); 
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Animate once
            }
        });
    }, { threshold: 0.3 });
    
    educationItems.forEach(item => {
        observer.observe(item);
    });

    // Animate the roadmap path
    const roadLine = document.querySelector('.road-line');
    if (roadLine) {
        const educationSection = document.querySelector('.education-roadmap-section');
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    roadLine.style.animation = 'drawPath 3s ease-in-out forwards';
                    sectionObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        sectionObserver.observe(educationSection);
    }
}
// Update the initEducationAnimations function
function initEducationAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item'); 
    const timelineProgress = document.querySelector('.timeline-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Update progress line
                const itemIndex = Array.from(timelineItems).indexOf(entry.target);
                const progressPercentage = ((itemIndex + 1) / timelineItems.length) * 100;
                if (timelineProgress) {
                    timelineProgress.style.height = progressPercentage + '%';
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}


// Console message
console.log(`
🚀 Bevara Rajasekhar - Portfolio Website
📧 Contact: rajasekhar6105@gmail.com
📱 Phone: +91-7793966921

✨ Features:
- Interactive Skills Grid (with filters & detailed card)
- Viewable & Downloadable Resume (direct PDF link)
- Enhanced Navigation with Hover Effects
- Responsive Design
- Dark/Light Theme Toggle
- Smooth Animations
- Loading Screen
- Project Filtering
- Dedicated AI/ML and Frontend Pages with Dynamic CSS-drawn Transitions (large, human-like robot/workspace)
- Homepage Profile Image
- Unique "Floor Steps" Education Section (based on reference with auto-generated images)
- Enhanced Experience and Certifications Sections (with filters)
- Functional Contact Form (requires server-side script for email sending)

Built with ❤️ using HTML, CSS, and JavaScript
AI/ML Engineering Student | Full Stack Developer
`);
