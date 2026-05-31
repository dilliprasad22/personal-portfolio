import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Github, Mail, Linkedin, ArrowRight, Code2, Database, GitBranch, Server, FileCode, Coffee, ExternalLink, MapPin } from "lucide-react";
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

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center animate-reveal">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8 font-mono text-xs">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Available for opportunities
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          Dilli Prasad
          <br />
          <span className="text-gradient">Velkuru</span>
        </h1>

        <p className="font-mono text-primary text-lg md:text-xl mb-4">
          {"{ "}Java Full Stack Developer{" }"}
        </p>

        <p className="max-w-2xl mx-auto text-muted-foreground text-lg mb-10 leading-relaxed">
          I craft clean, scalable web applications — from Spring Boot backends and SQL databases
          to responsive interfaces. Always learning, always shipping.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
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

        <div className="mt-16 flex justify-center gap-6 text-muted-foreground">
          <a href="mailto:dilli5690@gmail.com" className="hover:text-primary transition-colors">
            <Mail className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/dilli-prasad-velkuru-8aa56b38a" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
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
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader tag="// 01 — about" title="About Me" />
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl blur-2xl opacity-40 animate-float" />
              <div className="relative w-56 h-56 rounded-3xl bg-card border border-border flex items-center justify-center text-7xl font-bold text-gradient">
                DV
              </div>
            </div>
          </div>
          <div className="md:col-span-3 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              I'm a <span className="text-foreground font-semibold">Computer Science graduate</span> with a deep
              passion for full-stack development and a love for solving real-world problems with clean code.
            </p>
            <p>
              My focus is the <span className="text-primary">Java ecosystem</span> — Spring Boot, REST APIs and
              relational databases — paired with thoughtful frontends that just work.
            </p>
            <p>
              I enjoy turning academic concepts into shipped projects, and I'm actively looking for opportunities
              where I can contribute, grow, and build things that matter.
            </p>
            <div className="flex items-center gap-2 pt-2 text-sm font-mono">
              <MapPin className="h-4 w-4 text-primary" />
              India · Open to remote
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
