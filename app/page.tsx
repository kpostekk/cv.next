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
        <div className="grid grid-cols-[1fr_3fr_1fr] grid-rows-[3fr_1fr] place-items-center place-content-center text-slate-950 h-[calc(90px_*_4_+_4rem)] w-[calc(90px_*_5_+_8rem)] gap-4">
          <div className="bg-white p-8 w-full h-full rounded-xl overflow-clip grid gap-4 place-content-center">
            {/* contact buttons */}
            <ContactButton
              icon={<FaGithub className="mx-auto" />}
              url="#"
            />
            <ContactButton
              icon={<FaLinkedinIn className="mx-auto" />}
              url="#"
            />
            <ContactButton
              icon={<FaStackOverflow className="mx-auto" />}
              url="#"
            />
          </div>
          <div className="bg-white p-8 w-full h-full rounded-xl">
            <h2 className="font-semibold text-3xl">Krystian Postek</h2>
            <p className="my-4">GraphQL enjoyer, react enthusiast (for some odd reason).</p>
            <p className="my-4">Wszystkie moje projekty są na Github lub objęte NDA.</p>
          </div>
          <div />
          {/* spacer */}
          <div />
          {/* spacer */}
          <div className="bg-white p-8 w-full h-full rounded-xl flex items-center">
            <Link href={"/cv"}>
              <div className="flex items-center gap-2 hover:gap-6 duration-100 ease-in-out text-xl">
                <span>curriculum vitae</span>
                <HiArrowRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
