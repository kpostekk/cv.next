import { LoremIpsum } from "lorem-ipsum"
import { TiSocialGithub, TiSocialLinkedin } from "react-icons/ti"
import "./cv.css"
import PrintButton from "./print"
import React from "react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

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
              <h2 className="font-semibold text-3xl">Kontakt</h2>
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
            </div>
            <div className="grid gap-1 border-y border-black py-2">
              <h2 className="font-semibold text-3xl">Umiejętności</h2>
              <div className="flex flex-wrap gap-1">
                <SkillTag name="TypeScript" important />
                <SkillTag name="React" important />
                <SkillTag name="Next.js" important />
                <SkillTag name="GraphQL" important />
                <SkillTag name="TailwindCSS" />
                <SkillTag name="Vite" />
                <SkillTag name="NestJS" />
                <SkillTag name="Prisma" />
                <SkillTag name="Jest" />
                <SkillTag name="REST" />
                <SkillTag name="Git" />
                <SkillTag name="Docker" />
                <SkillTag name="Postgres" />
                <SkillTag name="MongoDB" />
                <SkillTag name="Python" />
                <SkillTag name="C#" />
                <SkillTag name="Java" />
                <SkillTag name="Linux" />
                <SkillTag name="Angielski (C1)" />
                <SkillTag name="Polski (native)" />
              </div>
            </div>
            <div className="grid gap-1 border-y border-black py-2">
              <h2 className="font-semibold text-3xl">Zgody</h2>
              <p className="italic p-1 text-xs">
                {
                  "Wyrażam zgodę na przetwarzanie moich danych osobowych przez (nazwa firmy) w celu prowadzenia rekrutacji na aplikowane przeze mnie stanowisko."
                }
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-4xl mb-4">O mnie</h2>
            <p>{lorem.generateWords(70)}</p>
            <h2 className="font-semibold text-4xl my-4">Doświadczenie</h2>
            {Array.from({ length: 5 }).map((_, i) => (
              <p key={i} className="my-4">
                {lorem.generateWords(40)}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="paperlike">
        <div className="grid grid-cols-[1fr_2fr] p-4 gap-4">
          <div></div>
          <div>
            <h2 className="font-semibold text-3xl">Certyfikaty</h2>
            {Array.from({ length: 3 }).map((_, i) => (
              <p key={i} className="my-4">
                {lorem.generateWords(24)}
              </p>
            ))}
            <h2 className="font-semibold text-3xl">Wykształcenie</h2>
            {Array.from({ length: 3 }).map((_, i) => (
              <p key={i} className="my-4">
                {lorem.generateWords(24)}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-slate-700 rounded p-4 mx-4 text-white print:hidden flex justify-center">
        <PrintButton />
      </div>
    </div>
  )
}
