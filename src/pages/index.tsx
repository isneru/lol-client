import { ArrowRightIcon } from "@radix-ui/react-icons"
import {
  AppleIcon,
  Checkbox,
  FacebookIcon,
  GoogleIcon,
  Input,
  RiotIcon,
  XboxIcon
} from "components"
import Head from "next/head"
import { useRouter } from "next/router"
import { useState } from "react"

export default function Home() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  function handleLoginButtonClick() {
    router.push("/success")
  }

  return (
    <>
      <Head>
        <title>Riot Client Main</title>
        <meta name="description" content="Riot Client Login page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="h-screen w-screen bg-ashe bg-cover bg-no-repeat">
        <main className="h-full w-full bg-background px-14 pb-[54px] pt-[72px] sm:w-[400px]">
          <div className="flex h-full w-full flex-col">
            <div className="flex w-full items-center justify-center">
              <RiotIcon width={110} />
            </div>
            <h1 className="mt-[62px] mb-8 text-center text-2xl font-bold">
              Sign in
            </h1>
            <div className="flex w-full flex-col gap-4">
              <Input
                type="text"
                value={username}
                placeholder="USERNAME"
                onChange={e => setUsername(e.target.value)}
              />
              <Input
                isPassword
                value={password}
                placeholder="PASSWORD"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-7 mb-5 flex w-full items-center justify-center gap-2">
              <FacebookIcon />
              <GoogleIcon />
              <AppleIcon />
              <XboxIcon />
            </div>
            <Checkbox label="Stay signed in" id="check" />
            <div className="mt-auto flex w-full flex-col items-center justify-center gap-[66px]">
              <button
                disabled={!username || !password}
                onClick={handleLoginButtonClick}
                className="flex h-[60px] w-[60px] items-center justify-center rounded-[20px] border-2 border-riot-primary bg-riot-primary text-background hover:border-riot-hover hover:bg-riot-hover focus:border-riot-hover focus:bg-riot-hover disabled:border-[#e8e8e8] disabled:bg-background disabled:text-[#e8e8e8]">
                <ArrowRightIcon width={30} height={30} />
              </button>
              <div className="mt-auto flex w-full flex-col items-center justify-center">
                <span className="cursor-pointer text-[10px] font-black uppercase text-[#b2b8c9] hover:text-[#0a0a20]">
                  Can't sign in?
                </span>
                <span className="cursor-pointer text-[10px] font-black uppercase text-[#b2b8c9] hover:text-[#0a0a20]">
                  Create Account
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
