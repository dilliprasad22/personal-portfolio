import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Github, Mail, Linkedin, ArrowRight, Code2, Database, GitBranch, Server, FileCode, Coffee, ExternalLink, MapPin, Play, Terminal, Braces, Loader2, Check, Cpu, Layers, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dilli Prasad Velkuru — Java Full Stack Developer" },
      { name: "description", content: "Portfolio of Dilli Prasad Velkuru, a Java Full Stack Developer building robust web applications with Spring Boot, SQL, and modern frontends." },
      { property: "og:title", content: "Dilli Prasad Velkuru — Java Full Stack Developer" },
      { property: "og:description", content: "CS graduate passionate about building scalable full-stack applications." },
    ],
  }),
  component: Portfolio,
});

const skills = [
  { name: "Core Java", level: "Advanced", icon: Coffee, snippet: "public class Main {}" },
  { name: "Spring Boot", level: "Proficient", icon: Server, snippet: "@RestController" },
  { name: "SQL", level: "Proficient", icon: Database, snippet: "SELECT * FROM users;" },
  { name: "REST APIs", level: "Proficient", icon: Code2, snippet: "GET /api/v1/users" },
  { name: "Git", level: "Confident", icon: GitBranch, snippet: "git commit -m \"feat\"" },
  { name: "HTML / CSS", level: "Confident", icon: FileCode, snippet: "<section class=\"hero\">" },
];

const projects = [
  {
    title: "Student Management System",
    description: "A full-stack web application to manage student records, enrollments and grades with role-based access control.",
    stack: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
    github: "https://github.com/",
  },
  {
    title: "Online Library Portal",
    description: "REST API powered library system with book search, borrowing workflow, due-date reminders and admin dashboard.",
    stack: ["Spring Boot", "JPA", "MySQL", "REST"],
    github: "https://github.com/",
  },
  {
    title: "Personal Expense Tracker",
    description: "A simple expense tracking app with category-wise reports, monthly summaries and a clean responsive UI.",
    stack: ["Java", "Servlets", "JDBC", "HTML/CSS"],
    github: "https://github.com/",
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen text-foreground">
      <Toaster />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="font-mono text-sm">
          <span className="text-gradient font-bold">{"<DPV />"}</span>
        </a>
        <div className="hidden md:flex gap-8 text-sm text-muted-foreground">
          {["about", "skills", "projects", "contact"].map((s) => (
            <a key={s} href={`#${s}`} className="hover:text-primary transition-colors capitalize">
              {s}
            </a>
          ))}
        </div>
        <a href="#contact">
          <Button size="sm" variant="outline" className="border-primary/40 hover:bg-primary/10 hover:text-primary">
            Hire Me
          </Button>
        </a>
      </div>
    </nav>
  );
}

const profileData = {
  name: "Dilli Prasad Velkuru",
  role: "Java Full Stack Developer",
  location: "India (Open to Remote)",
  status: "Active & looking for opportunities",
  interests: ["Scalable Backends", "API Design", "Database Tuning", "Clean Code"]
};

const techStackData = {
  backend: ["Java 17+", "Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate"],
  database: ["SQL", "MySQL", "PostgreSQL", "JDBC"],
  frontend: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind CSS"],
  tools: ["Git", "Maven", "Docker", "RESTful APIs", "Thymeleaf"]
};

const hireData = {
  status: "Success",
  message: "Thank you for reaching out! Let's build something great.",
  action: "Smooth scrolling to Contact section..."
};

function HighlightedJson({ data }: { data: any }) {
  const jsonString = JSON.stringify(data, null, 2);
  return (
    <pre className="font-mono text-xs overflow-auto h-full text-foreground/90 p-4 terminal-scrollbar select-text leading-relaxed">
      {jsonString.split("\n").map((line, idx) => {
        const keyMatch = line.match(/^(\s*)"([^"]+)":/);
        if (keyMatch) {
          const indent = keyMatch[1];
          const key = keyMatch[2];
          const rest = line.substring(keyMatch[0].length);

          let restSpan = <span className="text-[#a78bfa]">{rest}</span>;
          if (rest.includes('"')) {
            restSpan = <span className="text-[#34d399]">{rest}</span>;
          } else if (rest.includes('[') || rest.includes('{')) {
            restSpan = <span className="text-[#60a5fa]">{rest}</span>;
          } else if (rest.includes('true') || rest.includes('false') || rest.includes('null') || /\d+/.test(rest)) {
            restSpan = <span className="text-[#fb923c]">{rest}</span>;
          }

          return (
            <div key={idx}>
              {indent}
              <span className="text-[#38bdf8]">"{key}"</span>:
              {restSpan}
            </div>
          );
        }

        return (
          <div key={idx} className="text-[#94a3b8]">
            {line}
          </div>
        );
      })}
    </pre>
  );
}

function Hero() {
  const [activeTab, setActiveTab] = useState<"profile" | "tech" | "hire">("profile");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [logs, setLogs] = useState<string[]>([
    `2026-06-01 01:10:00.000  INFO 7432 --- [           main] d.p.v.PortfolioApplication : Tomcat started on port 8080 (http)`
  ]);
  const [showResponse, setShowResponse] = useState(false);

  const handleTabChange = (tab: "profile" | "tech" | "hire") => {
    setActiveTab(tab);
    setStatus("idle");
    setShowResponse(false);
    setLogs([
      `2026-06-01 01:10:00.000  INFO 7432 --- [           main] d.p.v.PortfolioApplication : Tomcat started on port 8080 (http)`
    ]);
  };

  const runRequest = () => {
    if (status === "loading") return;

    setStatus("loading");
    setShowResponse(false);
    setLogs([]);

    const now = new Date().toISOString().replace('T', ' ').substring(0, 19);

    const stepLogs = [
      `2026-06-01 01:15:00.102  INFO 7432 --- [nio-8080-exec-1] o.s.web.servlet.DispatcherServlet        : DispatcherServlet initialized`,
      `2026-06-01 01:15:00.108  INFO 7432 --- [nio-8080-exec-1] d.p.v.controller.DeveloperController     : Incoming request: ${activeTab === 'hire' ? 'POST' : 'GET'} /api/v1/${activeTab === 'profile' ? 'profile' : activeTab === 'tech' ? 'tech-stack' : 'hire-me'}`,
      activeTab === 'hire'
        ? `2026-06-01 01:15:00.180  INFO 7432 --- [nio-8080-exec-1] d.p.v.service.NotificationService        : Generating redirect target event...`
        : `2026-06-01 01:15:00.155  DEBUG 7432 --- [nio-8080-exec-1] org.hibernate.SQL                        : select d1_0.id, d1_0.name, d1_0.role from dev_details d1_0`,
      `2026-06-01 01:15:00.220  INFO 7432 --- [nio-8080-exec-1] o.s.w.s.m.m.a.HttpEntityMethodProcessor  : HTTP 200 OK | Content-Type: application/json`
    ];

    // Set first log
    setLogs([stepLogs[0]]);

    let currentLogIdx = 0;
    const interval = setInterval(() => {
      currentLogIdx++;
      if (currentLogIdx < stepLogs.length) {
        setLogs(prev => [...prev, stepLogs[currentLogIdx]]);
      } else {
        clearInterval(interval);
        setStatus("success");
        setShowResponse(true);
        if (activeTab === "hire") {
          setTimeout(() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
              toast.success("Redirected! Please send me a message using this form.");
            }
          }, 1500);
        }
      }
    }, 200);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 animate-reveal">
        {/* Left Column: Bio / Pitch */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
            Hi, I'm Dilli
            <br />
            <span className="text-gradient">Prasad Velkuru</span>
          </h1>

          <div className="inline-block">
            <p className="font-mono text-primary text-base md:text-lg border border-primary/20 bg-primary/5 px-3 py-1 rounded-md">
              {"{ "}Java Full Stack Developer{" }"}
            </p>
          </div>

          <p className="max-w-xl text-muted-foreground text-base md:text-lg leading-relaxed">
            I craft clean, scalable web applications — from Spring Boot backends and SQL databases
            to responsive React frontends. Test my API server live in the sandbox on the right!
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="#projects">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow group">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10 hover:text-primary">
                Contact Me
              </Button>
            </a>
          </div>

          <div className="flex gap-6 text-muted-foreground pt-4">
            <a href="mailto:dilli5690@gmail.com" className="hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/dilli-prasad-velkuru-8aa56b38a" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Right Column: Interactive IDE Sandbox */}
        <div className="lg:col-span-6 w-full">
          <div className="relative group/ide w-full max-w-2xl mx-auto">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-xl opacity-75 group-hover/ide:opacity-100 transition duration-1000 group-hover/ide:duration-200 pointer-events-none" />

            {/* IDE Window Box */}
            <div className="relative bg-card/80 backdrop-blur-xl border border-border/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col w-full h-[450px]">

              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-secondary/40 border-b border-border/50 select-none">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="font-mono text-xs text-muted-foreground flex items-center gap-2">
                  <Server className="w-3.5 h-3.5 text-primary animate-pulse" />
                  Spring Boot v3.2.5 (port:8080)
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  ONLINE
                </div>
              </div>

              {/* Endpoint Tabs & Run Action */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3 bg-secondary/20 border-b border-border/40">
                <div className="flex items-center gap-2 overflow-x-auto py-1 terminal-scrollbar">
                  <button
                    onClick={() => handleTabChange("profile")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs font-medium transition-all ${activeTab === "profile"
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "bg-transparent text-muted-foreground border border-transparent hover:bg-secondary/50 hover:text-foreground"
                      }`}
                  >
                    <span className="text-emerald-500 font-bold">GET</span>
                    <span>/profile</span>
                  </button>
                  <button
                    onClick={() => handleTabChange("tech")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs font-medium transition-all ${activeTab === "tech"
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "bg-transparent text-muted-foreground border border-transparent hover:bg-secondary/50 hover:text-foreground"
                      }`}
                  >
                    <span className="text-emerald-500 font-bold">GET</span>
                    <span>/tech-stack</span>
                  </button>
                  <button
                    onClick={() => handleTabChange("hire")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs font-medium transition-all ${activeTab === "hire"
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "bg-transparent text-muted-foreground border border-transparent hover:bg-secondary/50 hover:text-foreground"
                      }`}
                  >
                    <span className="text-violet-400 font-bold">POST</span>
                    <span>/hire-me</span>
                  </button>
                </div>

                <Button
                  onClick={runRequest}
                  disabled={status === "loading"}
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono text-xs px-4 py-2 shrink-0 animate-pulse-glow"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 mr-1.5 animate-spin" />
                      SENDING...
                    </>
                  ) : status === "success" ? (
                    <>
                      <Check className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
                      SENT!
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 mr-1.5 fill-current" />
                      SEND REQUEST
                    </>
                  )}
                </Button>
              </div>

              {/* IDE Content Area */}
              <div className="flex-1 flex flex-col min-h-0 bg-background/40">

                {/* Upper Area: JSON Response Viewer */}
                <div className="flex-1 flex flex-col min-h-0 border-b border-border/30">
                  <div className="flex items-center justify-between px-4 py-1.5 bg-secondary/10 border-b border-border/20">
                    <span className="font-mono text-[10px] text-muted-foreground flex items-center gap-1.5">
                      <Braces className="w-3.5 h-3.5 text-violet-400" />
                      RESPONSE BODY
                    </span>
                    {status === "success" && (
                      <span className="font-mono text-[10px] text-emerald-400">
                        HTTP 200 OK
                      </span>
                    )}
                  </div>

                  <div className="flex-1 overflow-auto bg-card/30 terminal-scrollbar">
                    {status === "idle" && (
                      <div className="h-full flex items-center justify-center p-6 text-center">
                        <div className="space-y-2 max-w-sm">
                          <Braces className="w-8 h-8 text-muted-foreground/30 mx-auto" />
                          <p className="font-mono text-xs text-muted-foreground">
                            Select an API endpoint above and click <span className="text-primary font-bold">SEND REQUEST</span> to query the database.
                          </p>
                        </div>
                      </div>
                    )}
                    {status === "loading" && (
                      <div className="h-full flex flex-col items-center justify-center p-6 text-center space-y-3">
                        <Loader2 className="w-8 h-8 text-primary animate-spin" />
                        <p className="font-mono text-xs text-muted-foreground animate-pulse">
                          Sending HTTP request, waiting for thread pool allocation...
                        </p>
                      </div>
                    )}
                    {status === "success" && showResponse && (
                      <HighlightedJson
                        data={
                          activeTab === "profile"
                            ? profileData
                            : activeTab === "tech"
                              ? techStackData
                              : hireData
                        }
                      />
                    )}
                  </div>
                </div>

                {/* Lower Area: Spring Boot Terminal Logs */}
                <div className="h-[140px] flex flex-col min-h-0 bg-[#070a0e] border-t border-border/20">
                  <div className="flex items-center px-4 py-1 bg-black/40 border-b border-border/10">
                    <span className="font-mono text-[10px] text-muted-foreground flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-primary" />
                      SPRING BOOT APPLICATION CONSOLE
                    </span>
                  </div>
                  <div className="flex-1 p-3 overflow-y-auto font-mono text-[10px] text-[#8b949e] space-y-1 terminal-scrollbar select-text">
                    {logs.map((log, idx) => {
                      let textColor = "text-muted-foreground";
                      if (log.includes("ERROR")) textColor = "text-red-400";
                      else if (log.includes("DEBUG")) textColor = "text-blue-400";
                      else if (log.includes("SUCCESS") || log.includes("HTTP 200")) textColor = "text-emerald-400";
                      else if (log.includes("INFO")) textColor = "text-[#c9d1d9]";

                      return (
                        <div key={idx} className={`${textColor} leading-normal break-all font-mono`}>
                          {log}
                        </div>
                      );
                    })}
                    {status === "loading" && (
                      <div className="inline-block border-r-2 border-primary h-3 w-1 animate-pulse" />
                    )}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function SectionHeader({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="mb-16 text-center">
      <p className="font-mono text-primary text-sm mb-3">{tag}</p>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
      <div className="mt-4 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    </div>
  );
}

function About() {
  const competencies = [
    {
      title: "Backend Engineering",
      desc: "Robust backends built on Java, Spring Boot, and Spring Data JPA.",
      icon: Server,
      color: "text-emerald-400"
    },
    {
      title: "Database Architecture",
      desc: "Relational database schema design, indexing, and SQL query tuning.",
      icon: Database,
      color: "text-blue-400"
    },
    {
      title: "API Design & REST",
      desc: "Developing secure RESTful endpoints using clean architecture.",
      icon: Cpu,
      color: "text-purple-400"
    },
    {
      title: "Frontend Integration",
      desc: "Seamless single-page React architectures styled with Tailwind CSS.",
      icon: Layers,
      color: "text-amber-400"
    }
  ];

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader tag="// 01 — about" title="About Me" />
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Avatar Column */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center lg:sticky lg:top-24">
            <div className="relative group/avatar">
              {/* Outer Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-br from-primary to-accent rounded-3xl blur-2xl opacity-40 group-hover/avatar:opacity-65 transition-opacity duration-500 animate-pulse" />
              {/* Inner Box */}
              <div className="relative w-56 h-56 rounded-3xl bg-card border border-border flex items-center justify-center text-7xl font-bold text-gradient transition-all duration-300 group-hover/avatar:scale-[1.02]">
                DV
              </div>
            </div>
            <div className="flex items-center gap-2 pt-6 text-sm font-mono text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary animate-pulse" />
              India · Open to remote
            </div>
          </div>

          {/* Details & Competencies Column */}
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a <span className="text-foreground font-semibold">Computer Science graduate</span> specializing in
                <span className="text-foreground font-semibold"> Software Engineering & Full-Stack Architectures</span>,
                with a core commitment to writing clean, maintainable, and well-documented code.
              </p>
              <p>
                My engineering focus is centered on the <span className="text-primary font-medium">Java ecosystem</span> —
                specifically designing secure, high-throughput microservices using <span className="text-primary font-medium">Spring Boot</span>,
                optimizing <span className="text-primary font-medium">SQL & MySQL databases</span>, and implementing robust transactional logic
                following SOLID design principles.
              </p>
              <p>
                I excel at transforming complex business requirements and raw database schemas into scalable production-ready RESTful APIs,
                integrating them seamlessly with sleek, responsive web user interfaces.
              </p>
            </div>

            {/* Core Competencies Grid */}
            <div className="space-y-6 pt-4">
              <h3 className="font-mono text-sm text-primary uppercase tracking-wider">// Core Competencies</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {competencies.map((comp, idx) => {
                  const Icon = comp.icon;
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-card/50 border border-border/50 hover:border-primary/40 transition-all duration-300 hover:translate-y-[-2px] flex items-start gap-4"
                    >
                      <div className={`p-2.5 rounded-lg bg-secondary/50 ${comp.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-medium text-foreground text-sm">{comp.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{comp.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader tag="// 02 — toolkit" title="Skills & Stack" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.name}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all pointer-events-none" />
                <div className="relative flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{s.level}</span>
                </div>
                <h3 className="relative text-xl font-semibold mb-2">{s.name}</h3>
                <code className="relative block font-mono text-xs text-muted-foreground/80 bg-background/50 rounded-md px-3 py-2 border border-border/50">
                  {s.snippet}
                </code>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader tag="// 03 — work" title="Featured Projects" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group relative flex flex-col p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
              <div className="relative flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-primary">0{i + 1}</span>
                <div className="w-2 h-2 rounded-full bg-primary/60" />
              </div>
              <h3 className="relative text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="relative text-muted-foreground text-sm mb-5 leading-relaxed flex-1">
                {p.description}
              </p>
              <div className="relative flex flex-wrap gap-2 mb-5">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a href={p.github} target="_blank" rel="noreferrer" className="relative">
                <Button variant="outline" size="sm" className="w-full border-border hover:bg-primary/10 hover:text-primary hover:border-primary/40">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const data = new FormData(e.currentTarget);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:dilli5690@gmail.com?subject=${encodeURIComponent("Portfolio inquiry from " + name)}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      toast.success("Opening your email client…");
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader tag="// 04 — contact" title="Let's Build Something" />
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Have a role, a project idea, or just want to say hi? My inbox is open — I'll get back
              to you as soon as I can.
            </p>
            <div className="space-y-3">
              <a href="mailto:dilli5690@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono text-muted-foreground">email</p>
                  <p className="truncate font-medium">dilli5690@gmail.com</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/dilli-prasad-velkuru-8aa56b38a" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono text-muted-foreground">linkedin</p>
                  <p className="truncate font-medium">dilli-prasad-velkuru</p>
                </div>
              </a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="p-6 rounded-2xl bg-card border border-border space-y-4">
            <div>
              <label className="text-sm font-mono text-muted-foreground mb-2 block">name</label>
              <Input name="name" required placeholder="Jane Doe" className="bg-background/50 border-border" />
            </div>
            <div>
              <label className="text-sm font-mono text-muted-foreground mb-2 block">email</label>
              <Input name="email" type="email" required placeholder="you@company.com" className="bg-background/50 border-border" />
            </div>
            <div>
              <label className="text-sm font-mono text-muted-foreground mb-2 block">message</label>
              <Textarea name="message" required rows={5} placeholder="Tell me about your project or opportunity…" className="bg-background/50 border-border resize-none" />
            </div>
            <Button type="submit" disabled={sending} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow">
              {sending ? "Sending…" : "Send Message"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p className="font-mono">© {new Date().getFullYear()} Dilli Prasad Velkuru</p>
        <p className="font-mono text-xs">Built with Java-grade attention to detail.</p>
      </div>
    </footer>
  );
}
