import { LoremIpsum } from "lorem-ipsum"
import { TiSocialGithub, TiSocialLinkedin } from "react-icons/ti"
import "./cv.css"
import PrintButton from "./print"
import React from "react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import Image from "next/image"

const lorem = new LoremIpsum()

type ContactCardProps = {
  title: React.ReactNode
  icon?: React.ReactNode
  content: React.ReactNode
  url: string
}

function ContactCard(props: ContactCardProps) {
  return (
    <a href={props.url}>
      <div className="border border-black p-2">
        <h3 className="font-medium text-lg">
          {props.icon}
          {props.title}
        </h3>
        <p className="text-sm">{props.content}</p>
      </div>
    </a>
  )
}

type SkillTagProps = {
  name: string
  important?: boolean
}

function SkillTag(props: SkillTagProps) {
  if (props.important) {
    return (
      <div className="bg-black font-semibold text-white p-2">
        <p className="text-md">{props.name}</p>
      </div>
    )
  }

  return (
    <div className="border border-black p-2">
      <p className="text-md">{props.name}</p>
    </div>
  )
}

function Separator() {
  return <hr className="border-black mt-[2px]" />
}

type CvWorkExperienceProps = {
  dateRange: string
  company: React.ReactNode
  children: React.ReactNode
}

function CvWorkExperience(props: CvWorkExperienceProps) {
  return (
    <div className="my-4">
      <div className="font-semibold flex gap-4 items-center">
        <h3 className="text-2xl">{props.dateRange}</h3>
        <div className="border-l border-black h-8" />
        <span className="text-lg">{props.company}</span>
      </div>
      <div className="my-2">{props.children}</div>
    </div>
  )
}

type CvWorkTechnologiesProps = {
  technologies: string[]
}

function CvWorkTechnologies(props: CvWorkTechnologiesProps) {
  return (
    <>
      {props.technologies.map((text, i) => (
        <div className="p-1 border border-black text-xs" key={i}>
          {text}
        </div>
      ))}
    </>
  )
}

export const metadata = {
  title: "CV",
  description: "Curriculum vitae",
}

export default function CvContent() {
  return (
    <div className="grid gap-6 mx-auto w-fit max-w-screen my-4 print:m-0">
      <div className="bg-slate-700 rounded p-4 mx-4 text-white print:hidden flex justify-center">
        <PrintButton />
      </div>
      <div className="paperlike">
        <div className="grid grid-cols-[1fr_2fr] p-4 gap-4">
          <div className="col-span-3">
            <h1 className="text-6xl font-semibold">Krystian Postek</h1>
            <p className="italic uppercase opacity-50 mt-4">curriculum vitae</p>
          </div>
          <div className="grid gap-4 place-content-start">
            <div className="grid gap-1 border-y border-black py-2">
              <h2 className="font-semibold text-3xl">Contact</h2>
              <ContactCard
                title="LinkedIn"
                icon={<FaLinkedinIn className="inline mr-1" />}
                content="linkedin.com/in/kpostekk/"
                url="https://www.linkedin.com/in/kpostekk/"
              />
              <ContactCard
                title="Github"
                icon={<FaGithub className="inline mr-1" />}
                content="github.com/kpostekk"
                url="https://github.com/kpostekk"
              />
              <ContactCard
                title="Email"
                content="krystian@postek.eu"
                url="mailto:krystian@postek.eu"
              />
              <ContactCard
                title="Phone"
                content="+48 795 037 636"
                url="tel:+48795037636"
              />
            </div>
            <div className="grid gap-1 border-y border-black py-2">
              <h2 className="font-semibold text-3xl">Skills</h2>
              <div className="flex flex-wrap gap-1">
                <SkillTag name="TypeScript" important />
                <SkillTag name="React" important />
                <SkillTag name="Next.js" important />
                <SkillTag name="GraphQL" important />
                <SkillTag name="TailwindCSS" important />
                <SkillTag name="Vite" />
                <SkillTag name="NestJS" />
                <SkillTag name="Prisma" />
                <SkillTag name="Jest" />
                <SkillTag name="Figma" />
                <SkillTag name="Storybook" />
                <SkillTag name="REST" />
                <SkillTag name="Git" />
                <SkillTag name="Docker" />
                <SkillTag name="Postgres" />
                <SkillTag name="MongoDB" />
                <SkillTag name="Python" />
                <SkillTag name="C# .Net" />
                <SkillTag name="Java" />
                <SkillTag name="Linux" />
                <SkillTag name="English (C1)" />
                <SkillTag name="Polish (native)" />
              </div>
            </div>
            {/* <div className="grid gap-1 border-y border-black py-2">
              <h2 className="font-semibold text-3xl">Zgody</h2>
              <p className="italic p-1 text-xs">
                Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
                prowadzenia rekrutacji na aplikowane przeze mnie stanowisko.
              </p>
            </div> */}
          </div>
          <div>
            <h2 className="font-semibold text-4xl">
              About me <Separator />
            </h2>
            {/* <p className="my-2">
              Jestem full-stack deweloperem z 4 letnim doświadczeniem w
              tworzeniu aplikacji webowych. Studiuję Informatykę na
              Polsko-Japońskiej Akademii Technik Komputerowych. Interesuję się
              bezpieczeństwem informatycznym i rozwijam to zainteresowanie jako
              członek ISSA Polska. Aktywnie śledzę rozwój technologii webowych.
              W swoich projektach szczególną uwagę przywiązuję do spójności kodu
              i najlepszych praktyk w zakresie wydajności i designu.
            </p> */}
            <p className="my-2">
            I am a full-stack developer with 4 years of experience in creating web applications and services.
            I am currently studying IT at the Polish-Japanese Academy of Information Technology.
            Additionally, I have a keen interest in IT security, which I am actively developing as a member of ISSA Poland.
            I actively follow the rapid development of web technologies and prioritize code consistency, performance, and design best practices in my projects.
            </p>
            <h2 className="font-semibold text-4xl">
              Experience <Separator />
            </h2>
            <CvWorkExperience
              dateRange="2022 - now"
              company={
                <Image
                  width={110}
                  height={-1}
                  src="/ledatel.png"
                  alt="Logo LEDATEL"
                />
              }
            >
              <>
                <h4 className="text-xl font-semibold my-2">Project Leader</h4>
                <p>
                  Technology selection, code review, small team management, collaboration with other projects, communication with the marketing and sales departments.
                </p>
                <h4 className="text-xl font-semibold my-2">Full-stack</h4>
                <p>
                Designing and implementing an advertising distribution and projection system, modernizing current infrastructure, creating tests, and documentation.
                </p>
                <div className="flex flex-wrap gap-1 my-2">
                  <CvWorkTechnologies
                    technologies={"React, TypeScript, Vite, Electron, NestJS, GraphQL, Prisma, Postgres, Storybook, Jest, Docker".split(
                      ", "
                    )}
                  />
                </div>
              </>
            </CvWorkExperience>
            <CvWorkExperience
              company="Freelancer"
              dateRange="2019 - 2021"
            >
              Creating scrapers, administrative panels, and statistical dashboards.
              <div className="flex flex-wrap gap-1 my-2">
                  <CvWorkTechnologies
                    technologies={"TypeScript, Node, Python, Django, MongoDB".split(
                      ", "
                    )}
                  />
                </div>
            </CvWorkExperience>
            {/* <h4>Full-stack</h4>
            <p className="my-2">
              Zaprojektowanie i wykonanie systemu emisji reklam, tworzenie
              testów oraz dokumentacji. React, TypeScript, Vite, Electron,
              NestJS, GraphQL, Prisma, Postgres, Storybook, Jest, Docker.
            </p> */}
            {/* <h3>{"2021 | Freelancer"}</h3>
            <p className="my-2">
              Tworzenie scraperów, panelów administracyjnych oraz
              statystycznych. TypeScript, Node, Python, Django, MongoDB.
            </p> */}
            <h2 className="font-semibold text-3xl">
              Education <Separator />
            </h2>
            <div>
              <h4 className="font-semibold text-xl my-2">Polish-Japanese Academy of Information Technology</h4>
              <p className="text-lg">Bachelor of Engineering (BEng.), IT</p>
              <p>2021 - 2025</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-700 rounded p-4 mx-4 text-white print:hidden flex justify-center">
        <PrintButton />
      </div>
    </div>
  )
}
