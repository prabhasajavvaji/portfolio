
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ContactForm } from "@/components/ContactForm";
import { VideoSection } from "@/components/VideoSection";
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Mail, 
  Linkedin, 
  FileText,
  Code,
  Activity,
  BookOpen
} from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("about");

  const technicalSkills = [
    "Advanced Semiconductor Packaging",
    "EMI/EMC Validation", 
    "Quality Management Systems",
    "Transient Liquid Phase Sintering",
    "RF Testing & Analysis",
    "Python & VBA Automation",
    "Tableau Dashboards",
    "Failure Analysis",
    "Wire Bonding & Die Bonding",
    "Automotive Electronics",
    "CAN/FlexRay Protocols",
    "ISO 17025 Compliance"
  ];

  const experience = [
    {
      title: "Research Engineer (Master Thesis)",
      company: "Infineon Technologies",
      period: "March 2025 - Present",
      location: "Regensburg, Germany",
      responsibilities: [
        "Conducting research on Transient Liquid Phase Sintering for die attach performance",
        "Evaluating intermetallic phase formation in silver-based sintering pastes",
        "Failure analysis using SEM, EDS, and DSC techniques",
        "Contributing to electronics packaging technology advancement"
      ]
    },
    {
      title: "Quality Engineer (Working Student)", 
      company: "Infineon Technologies",
      period: "February 2024 - January 2025",
      location: "Regensburg, Germany",
      responsibilities: [
        "Built interactive Tableau dashboards for production data visualization",
        "Automated reports using Python/VBA, reducing manual work by 40%",
        "Created centralized Confluence knowledge base",
        "Supported FMEA and MRB quality processes"
      ]
    },
    {
      title: "EMC Test Lead",
      company: "Bosch Global Software Technologies",
      period: "September 2020 - February 2023",
      location: "Bengaluru, India",
      responsibilities: [
        "Led EMI/EMC testing for automotive safety systems",
        "Ensured ISO 17025 compliance across multiple OEM projects",
        "Managed validation cycles and optimized resource efficiency",
        "Applied expertise in CAN, FlexRay, and Ethernet protocols"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Technology",
      field: "Electrical and Microsystems Engineering",
      institution: "Ostbayerische Technische Hochschule (OTH)",
      period: "March 2023 - Present",
      location: "Regensburg, Germany",
      focus: "Optoelectronics, Advanced Semiconductor Technologies"
    },
    {
      degree: "Bachelor of Technology",
      field: "Electrical and Electronics Engineering", 
      institution: "Amrita School of Engineering",
      period: "July 2015 - May 2019",
      location: "India",
      focus: "Power Electronics, Control Systems"
    }
  ];

  const projects = [
    {
      title: "Transient Liquid Phase Sintering Research",
      description: "Advanced research on die attach performance for power electronics, focusing on intermetallic phase formation and bond reliability.",
      technologies: ["Materials Science", "SEM", "EDS", "DSC"],
      status: "Ongoing"
    },
    {
      title: "Production Analytics Dashboard",
      description: "Interactive Tableau dashboards for semiconductor production data with automated Python/VBA reporting systems.",
      technologies: ["Tableau", "Python", "VBA", "Data Analytics"],
      status: "Completed"
    },
    {
      title: "MR Fluids Characterization", 
      description: "Investigated viscosity properties of Boron-based MR fluids using multiple viscometers under varying conditions.",
      technologies: ["Viscometry", "Rheology", "Materials Testing"],
      status: "Completed"
    },
    {
      title: "EV On-board Charger",
      description: "Designed Level-1 EV charger prototype with power electronics regulation and Arduino-based monitoring system.",
      technologies: ["Power Electronics", "Arduino", "Control Systems"],
      status: "Completed"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
                Prabhasa Javvaji
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8">
                Electrical & Microsystems Engineer
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Semiconductor Packaging Expert | EMI/EMC Validation | Quality Management
                <br />
                Research Engineer at Infineon Technologies | Ex-Bosch
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="gap-2">
                  <FileText className="h-5 w-5" />
                  Download Resume
                </Button>
                <Button variant="outline" size="lg" className="gap-2" asChild>
                  <a href="https://www.linkedin.com/in/prabhasa-javvaji-27b8a61b2/" target="_blank">
                    <Linkedin className="h-5 w-5" />
                    LinkedIn Profile
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Prabhasa Javvaji"
                  className="w-80 h-80 rounded-full object-cover border-8 border-white shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-full p-4">
                  <Code className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 mb-12">
              <TabsTrigger value="about" className="gap-2">
                <Activity className="h-4 w-4" />
                About
              </TabsTrigger>
              <TabsTrigger value="experience" className="gap-2">
                <Briefcase className="h-4 w-4" />
                Experience
              </TabsTrigger>
              <TabsTrigger value="education" className="gap-2">
                <GraduationCap className="h-4 w-4" />
                Education
              </TabsTrigger>
              <TabsTrigger value="skills" className="gap-2">
                <Award className="h-4 w-4" />
                Skills
              </TabsTrigger>
              <TabsTrigger value="projects" className="gap-2">
                <BookOpen className="h-4 w-4" />
                Projects
              </TabsTrigger>
              <TabsTrigger value="contact" className="gap-2">
                <Mail className="h-4 w-4" />
                Contact
              </TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">About Me</CardTitle>
                  <CardDescription className="text-lg">
                    Results-driven engineer with 7+ years of combined academic and professional experience
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    I'm a passionate Electrical and Microsystems Engineer specializing in semiconductor packaging, 
                    EMI/EMC validation, and quality management. Currently conducting advanced research at Infineon 
                    Technologies on die-attach performance using transient liquid phase sintering for high-reliability 
                    power electronics.
                  </p>
                  <p className="text-lg leading-relaxed">
                    My expertise spans the full product lifecycle from R&D to production quality assurance. 
                    At Bosch, I led automotive EMC testing ensuring ISO 17025 compliance, while at Infineon, 
                    I've automated data workflows and built analytical dashboards that bridge semiconductor 
                    research with manufacturing excellence.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">7+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">2</div>
                      <div className="text-sm text-muted-foreground">Top Companies</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">4</div>
                      <div className="text-sm text-muted-foreground">Major Projects</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <VideoSection />
            </TabsContent>

            <TabsContent value="experience" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
                <p className="text-lg text-muted-foreground">
                  Leading roles in semiconductor research, quality engineering, and EMC validation
                </p>
              </div>
              
              {experience.map((exp, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <CardDescription className="text-lg font-medium text-primary">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="text-sm text-muted-foreground text-right">
                        <div>{exp.period}</div>
                        <div>{exp.location}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="education" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Education</h2>
                <p className="text-lg text-muted-foreground">
                  Advanced degrees in Electrical and Microsystems Engineering
                </p>
              </div>

              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                        <CardDescription className="text-lg font-medium text-primary">
                          {edu.field}
                        </CardDescription>
                        <p className="text-muted-foreground mt-2">{edu.institution}</p>
                      </div>
                      <div className="text-sm text-muted-foreground text-right">
                        <div>{edu.period}</div>
                        <div>{edu.location}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p><strong>Focus Areas:</strong> {edu.focus}</p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="skills" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Technical Competencies</h2>
                <p className="text-lg text-muted-foreground">
                  Expertise across semiconductor technology, testing, and quality management
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Core Technical Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {technicalSkills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-sm py-2 px-3">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Programming & Tools</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span>Python</span>
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full w-5/6"></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Tableau</span>
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full w-4/5"></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>VBA</span>
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full w-3/4"></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>KiCAD</span>
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full w-3/5"></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Languages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Telugu (Native)</span>
                          <span className="text-sm text-muted-foreground">Native</span>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>English</span>
                          <span className="text-sm text-muted-foreground">C2 Proficient</span>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>German</span>
                          <span className="text-sm text-muted-foreground">A2 Intermediate</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="projects" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
                <p className="text-lg text-muted-foreground">
                  Research and development projects spanning materials science to automotive electronics
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <div className="flex justify-between items-start gap-4">
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                        <Badge variant={project.status === "Ongoing" ? "default" : "secondary"}>
                          {project.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{project.description}</p>
                      <div>
                        <p className="font-medium mb-2">Technologies:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="contact">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                  <p className="text-lg text-muted-foreground">
                    Let's discuss opportunities in semiconductor technology and engineering innovation
                  </p>
                </div>
                <ContactForm />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Index;
