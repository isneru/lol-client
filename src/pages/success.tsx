import Head from "next/head"
import { useRouter } from "next/router"
import { useState } from "react"

export default function Success() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  function handleLoginButtonClick() {
    router.push("/success")
  }

  return (
    <>
      <Head>
        <title>Riot Client Success</title>
        <meta name="description" content="Riot Client success page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="h-screen w-screen bg-[#141212] text-[#ecf0f0]">
        <nav className="flex h-24 w-full items-center justify-between bg-[#201c1d] px-8">
          <div>
            <button className="glass-btn rounded-2xl p-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="#a7a5a5"
                viewBox="0 0 256 256">
                <rect width="256" height="256" fill="none"></rect>
                <rect x="40" y="40" width="80" height="80" rx="8"></rect>
                <rect x="136" y="40" width="80" height="80" rx="8"></rect>
                <rect x="40" y="136" width="80" height="80" rx="8"></rect>
                <rect x="136" y="136" width="80" height="80" rx="8"></rect>
              </svg>
            </button>
          </div>
          <img
            src="/league-of-legends-logo.png"
            width={150}
            alt="league of legends logo"
          />
          <button className="glass-btn rounded-2xl p-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="#a7a5a5"
              viewBox="0 0 256 256">
              <rect width="256" height="256" fill="none"></rect>
              <path d="M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"></path>
            </svg>
          </button>
        </nav>
        <section className="flex px-[90px] pt-[84px]">
          <aside className="w-full max-w-[15vw]">
            <h1 className="text-3xl font-semibold">About</h1>
          </aside>
          <main className="flex w-full max-w-[65vw] flex-col gap-24">
            <p className="max-w-[72ch] text-xl font-medium leading-9 text-[#b8b8b8]">
              Showcase your skills in League of Legends: the definitive 5v5 MOBA
              that combines team synergy with individual mastery. Pick your
              role, perfect your build, and battle your way across the map to
              destroy the enemy Nexus. With over 150 champions and limitless
              ways to play, find your main and forge your path to victory.
            </p>
            <div className="flex flex-col gap-10">
              <span className="text-sm font-semibold uppercase text-[#f0f0f0]">
                Also Available On
              </span>
              <div className="flex w-fit items-center justify-center gap-4 rounded-xl bg-[#201e1e] p-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="28"
                  height="28"
                  viewBox="0 0 30 30"
                  className="fill-[#a2a1a1]">
                  <path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z"></path>
                </svg>
                <span className="font-semibold text-[#ecf0f0]">MacOS</span>
              </div>
            </div>
          </main>
          <footer className="mx-auto w-full max-w-[20vw]">
            <a
              className="font-semibold hover:underline"
              href="https://www.leagueoflegends.com"
              rel="noreferrer"
              target="_blank">
              leagueoflegends.com
            </a>
            <div className="mt-6 flex flex-col">
              <span className="text-sm font-bold uppercase text-[#515151]">
                Developer
              </span>
              <span className="font-bold leading-7 text-[#b8b8b8]">
                Riot Games
              </span>
            </div>
            <div className="mt-6 flex flex-col">
              <span className="text-sm font-bold uppercase text-[#515151]">
                Publisher
              </span>
              <span className="font-bold leading-7 text-[#b8b8b8]">
                Riot Games
              </span>
            </div>
          </footer>
        </section>
      </div>
    </>
  )
}
