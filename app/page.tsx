import Link from "next/link"
import "./index.css"
import { HiArrowRight } from "react-icons/hi2"
import { DiGithubBadge } from "react-icons/di"
import { FaGithub, FaLinkedinIn, FaStackOverflow } from "react-icons/fa"

type ContactButtonProps = {
  icon: React.ReactNode
  url: string
}

function ContactButton(props: ContactButtonProps) {
  return (
    <Link href={props.url} className="text-center grid hover:text-sky-600 duration-100 ease-in-out">
      <div className="text-4xl">{props.icon}</div>
    </Link>
  )
}

export default function Home() {
  return (
    <main className="h-screen">
      <div className="grid place-items-center h-full">
        <div className="grid md:grid-cols-[1fr_4fr] md:grid-rows-[3fr_1fr] grid-cols-1 grid-rows-[1fr_3fr_1fr] place-items-center place-content-center text-slate-950 h-[calc(90px_*_4_+_4rem)] md:w-[calc(90px_*_5_+_4rem)] w-4/5 gap-4">
          <div className="bg-white p-8 w-full h-full rounded-xl overflow-clip grid gap-4 md:grid-cols-1 md:grid-flow-row grid-flow-col place-content-center">
            {/* contact buttons */}
            <ContactButton
              icon={<FaGithub className="mx-auto" />}
              url="https://github.com/kpostekk"
            />
            <ContactButton
              icon={<FaLinkedinIn className="mx-auto" />}
              url="https://www.linkedin.com/in/kpostekk/"
            />
            <ContactButton
              icon={<FaStackOverflow className="mx-auto" />}
              url="https://stackoverflow.com/users/9256726/kpostekk"
            />
          </div>
          <div className="bg-white p-8 w-full h-full rounded-xl">
            <h2 className="font-semibold text-3xl">Krystian Postek</h2>
            <p className="my-4">GraphQL enjoyer, react enthusiast (for some odd reason).</p>
            <p className="my-4">Wszystkie moje projekty są na Github, w CV lub są objęte NDA.</p>
            <p className="my-4">Informacje o moim wykształceniu oraz doświadczeniu znajdziesz na LinkedIn lub w CV.</p>
          </div>
          <div className="bg-white p-8 w-full h-full rounded-xl flex items-center md:col-span-2">
            <Link href={"/cv"}>
              <div className="flex items-center gap-2 text-xl group hover:text-sky-600 duration-100 ease-in-out">
                <span>curriculum vitae</span>
                <HiArrowRight className="group-hover:rotate-180 group-hover:ml-4 duration-200 ease-in-out" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
