// src/app/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import {
  FaPython,
  FaJava,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiTypescript,
  SiPostgresql,
  SiDocker,
  SiSpringboot,
} from "react-icons/si";

export const metadata: Metadata = {
  title: "Anderson Navarro Gamboa — Fullstack & Data Engineer",
  description:
    "Portafolio de Anderson Navarro Gamboa. Desarrollo soluciones fullstack, backend, data e IA.",
};

const techs = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "Java",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "APIs REST",
  "Machine Learning",
];

const projects = [
  {
    title: "Dashboard Geoespacial",
    description:
      "Plataforma para análisis territorial con mapas interactivos, filtros dinámicos y visualización de cobertura para decisiones operativas.",
    stack: ["Next.js", "BigQuery", "Mapbox", "Python"],
  },
  {
    title: "Motor de Predicción BI",
    description:
      "Pipeline de datos con modelos predictivos para proyección de KPIs, actualización incremental y consumo desde entornos BI.",
    stack: ["Python", "Machine Learning", "PostgreSQL", "Airflow"],
  },
  {
    title: "SaaS de Automatización",
    description:
      "Aplicación fullstack con autenticación, APIs, webhooks y reportes automáticos para optimizar operaciones.",
    stack: ["Next.js", "TypeScript", "REST API", "Tailwind CSS"],
  },
];

const facts = [
  { label: "Especialización", value: "Fullstack · Backend · Data · ML" },
  { label: "Modalidad", value: "Remoto / Freelance" },
  { label: "Idiomas", value: "Español · Inglés" },
  { label: "Disponibilidad", value: "Inmediata" },
];

export default function HomePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=DM+Sans:wght@300;400;500;700&display=swap');

        .pf-root {
          font-family: 'DM Sans', sans-serif;
        }

        .pf-title,
        .pf-section-title {
          font-family: 'Playfair Display', serif;
        }

        .pf-glass {
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .pf-card {
          background: rgba(255,255,255,0.86);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .pf-project:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
        }

        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .pf-float-1 { animation: floatY 4s ease-in-out infinite; }
        .pf-float-2 { animation: floatY 5s ease-in-out infinite; }
        .pf-float-3 { animation: floatY 6s ease-in-out infinite; }
        .pf-float-4 { animation: floatY 4.8s ease-in-out infinite; }
      `}</style>

      <main className="pf-root relative min-h-screen overflow-hidden bg-slate-950 text-slate-900">
        {/* Fondo */}
        <div className="absolute inset-0">
          <Image
            src="/bg-tech.jpg"
            alt="Fondo tecnológico"
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-slate-950/65" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.18),transparent_25%)]" />
        </div>

        {/* Logos decorativos */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="pf-float-1 absolute left-[6%] top-[14%] rounded-2xl border border-white/10 bg-white/10 p-4 text-blue-400 shadow-lg">
            <FaReact size={34} />
          </div>

          <div className="pf-float-2 absolute right-[10%] top-[12%] rounded-2xl border border-white/10 bg-white/10 p-4 text-yellow-400 shadow-lg">
            <FaJava size={34} />
          </div>

          <div className="pf-float-3 absolute left-[8%] bottom-[24%] rounded-2xl border border-white/10 bg-white/10 p-4 text-green-400 shadow-lg">
            <FaNodeJs size={34} />
          </div>

          <div className="pf-float-2 absolute right-[14%] bottom-[18%] rounded-2xl border border-white/10 bg-white/10 p-4 text-sky-400 shadow-lg">
            <FaPython size={34} />
          </div>

          <div className="pf-float-4 absolute left-[26%] top-[28%] rounded-2xl border border-white/10 bg-white/10 p-3 text-blue-300 shadow-lg">
            <SiTypescript size={28} />
          </div>

          <div className="pf-float-1 absolute right-[28%] top-[34%] rounded-2xl border border-white/10 bg-white/10 p-3 text-cyan-300 shadow-lg">
            <SiPostgresql size={28} />
          </div>

          <div className="pf-float-3 absolute left-[30%] bottom-[14%] rounded-2xl border border-white/10 bg-white/10 p-3 text-blue-200 shadow-lg">
            <SiDocker size={28} />
          </div>

          <div className="pf-float-4 absolute right-[30%] bottom-[30%] rounded-2xl border border-white/10 bg-white/10 p-3 text-green-300 shadow-lg">
            <SiSpringboot size={28} />
          </div>
        </div>

        <div className="relative z-10">
          {/* HERO */}
          <header className="px-6 pt-10 pb-12">
            <div className="mx-auto max-w-6xl">
              <div className="pf-glass rounded-[28px] border border-white/20 px-6 py-8 shadow-2xl md:px-10 md:py-10">
                <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                  <div>
                    <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
                      Portafolio · 2026
                    </p>

                    <p className="mb-3 text-sm font-medium text-slate-600">
                      Anderson Navarro Gamboa
                    </p>

                    <h1 className="pf-title mb-5 text-5xl font-bold leading-[1.02] text-slate-950 md:text-7xl">
                      Fullstack <span className="text-blue-500">&amp;</span> Data
                      Engineer
                    </h1>

                    <p className="mb-8 max-w-2xl text-[15px] leading-relaxed text-slate-600 md:text-[16px]">
                      Desarrollo productos digitales con backend, frontend,
                      datos e inteligencia artificial. Construyo soluciones
                      reales con APIs, automatización, dashboards y modelos
                      predictivos listos para producción.
                    </p>

                    <div className="flex flex-wrap gap-3">
                      <a
                        href="#projects"
                        className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:opacity-85"
                      >
                        Ver proyectos
                      </a>
                      <a
                        href="#contact"
                        className="rounded-xl border border-slate-300 bg-white/80 px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-white"
                      >
                        Contactarme
                      </a>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {techs.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center lg:justify-end">
                    <div className="relative">
                      <div className="absolute -inset-5 rounded-full bg-blue-500/20 blur-3x1" />
                      <div className="relative flex h-90 w-90 items-center justify-center rounded-full border-12 border-blue-500/90 bg-slate-950 shadow-2xl">
                        <div className="relative h-80 w-80 overflow-hidden rounded-full">
                          <Image
                            src="/profile.jpg"
                            alt="Anderson Navarro Gamboa"
                            fill
                            priority
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* STACK */}
          <section className="px-6 py-6">
            <div className="mx-auto max-w-6xl">
              <div className="pf-card rounded-3xl border border-white/15 p-6 shadow-xl">
                <div className="mb-5 flex items-center justify-between gap-4 border-b border-slate-200 pb-3">
                  <h2 className="pf-section-title text-2xl font-bold text-slate-950">
                    Stack técnico
                  </h2>
                  <span className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    Tecnologías principales
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    { label: "Python", icon: <FaPython size={18} className="text-sky-500" /> },
                    { label: "Java", icon: <FaJava size={18} className="text-yellow-500" /> },
                    { label: "Node.js", icon: <FaNodeJs size={18} className="text-green-500" /> },
                    { label: "React", icon: <FaReact size={18} className="text-blue-500" /> },
                    { label: "TypeScript", icon: <SiTypescript size={18} className="text-blue-600" /> },
                    { label: "PostgreSQL", icon: <SiPostgresql size={18} className="text-cyan-600" /> },
                    { label: "Docker", icon: <SiDocker size={18} className="text-blue-400" /> },
                    { label: "Spring Boot", icon: <SiSpringboot size={18} className="text-green-600" /> },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3"
                    >
                      {item.icon}
                      <span className="text-sm font-medium text-slate-800">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* PROYECTOS */}
          <section id="projects" className="px-6 py-6">
            <div className="mx-auto max-w-6xl">
              <div className="pf-card rounded-3xl border border-white/15 p-6 shadow-xl">
                <div className="mb-5 flex items-center justify-between gap-4 border-b border-slate-200 pb-3">
                  <h2 className="pf-section-title text-2xl font-bold text-slate-950">
                    Proyectos destacados
                  </h2>
                  <span className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    {projects.length} proyectos
                  </span>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {projects.map((project, i) => (
                    <article
                      key={project.title}
                      className="pf-project rounded-2xl border border-slate-200 bg-white p-5 transition duration-200"
                    >
                      <p className="mb-2 text-xs font-medium tracking-[0.18em] text-slate-400">
                        0{i + 1}
                      </p>
                      <h3 className="mb-3 text-xl font-semibold text-slate-900">
                        {project.title}
                      </h3>
                      <p className="mb-4 text-sm leading-relaxed text-slate-600">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-600"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SOBRE MI */}
          <section className="px-6 py-6">
            <div className="mx-auto max-w-6xl">
              <div className="pf-card rounded-3xl border border-white/15 p-6 shadow-xl">
                <div className="mb-5 border-b border-slate-200 pb-3">
                  <h2 className="pf-section-title text-2xl font-bold text-slate-950">
                    Sobre mí
                  </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
                  <div>
                    <p className="text-[15px] leading-relaxed text-slate-600">
                      Soy Anderson Navarro Gamboa, ingeniero orientado al
                      desarrollo fullstack, backend, datos y machine learning.
                      Me especializo en construir productos end-to-end: desde
                      interfaces modernas en React y Next.js hasta APIs,
                      automatización, pipelines y soluciones predictivas.
                    </p>

                    <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                      Mi enfoque combina criterio de producto, arquitectura de
                      software y soluciones orientadas a negocio. Trabajo en
                      proyectos web, SaaS, dashboards, integraciones y sistemas
                      impulsados por datos.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {facts.map((fact) => (
                      <div
                        key={fact.label}
                        className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-4 py-3"
                      >
                        <span className="text-sm text-slate-500">
                          {fact.label}
                        </span>
                        <span className="text-right text-sm font-medium text-slate-900">
                          {fact.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CONTACTO */}
          <footer id="contact" className="px-6 pt-6 pb-12">
            <div className="mx-auto max-w-6xl">
              <div className="pf-card rounded-3xl border border-white/15 p-6 shadow-xl">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="pf-section-title text-3xl font-bold text-slate-950">
                      ¿Trabajamos juntos?
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
                      Disponible para proyectos freelance, soluciones backend,
                      productos SaaS, dashboards y sistemas con datos e IA.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                   <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=andernaga11@gmail.com&su=Contacto%20desde%20portafolio&body=Hola%20Anderson,%20quiero%20hablar%20contigo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700"
                    >
                      Contactarme
                      </a>
                    <a
                      href="/ANG.pdf"
                      download
                      className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
                    >
                      Descargar CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}