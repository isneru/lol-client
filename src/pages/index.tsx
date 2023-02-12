import * as Checkbox from "@radix-ui/react-checkbox"
import { ArrowRightIcon, CheckIcon } from "@radix-ui/react-icons"
import {
  AppleIcon,
  FacebookIcon,
  GoogleIcon,
  PasswordTextToggle,
  RiotIcon,
  XboxIcon
} from "components"
import Head from "next/head"
import { useState } from "react"

export default function Home() {
  const [checked, setChecked] = useState<boolean>(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isPasswordFocused, setIsPasswordFocused] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  return (
    <>
      <Head>
        <title>Riot Client Main</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="h-screen w-screen bg-worldchamps17 bg-cover bg-no-repeat">
        <main className="h-full w-[400px] bg-background px-14 pb-[54px] pt-[72px]">
          <div className="flex h-full w-full flex-col">
            <div className="flex w-full items-center justify-center">
              <RiotIcon width={110} />
            </div>
            <h1 className="mt-[62px] mb-8 text-center text-2xl font-bold">
              Sign in
            </h1>
            <div className="flex w-full flex-col gap-4">
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="USERNAME"
                className="h-12 w-full rounded bg-input-background px-4 placeholder:text-[10px] placeholder:font-black placeholder:text-input-placeholder focus:bg-background focus:outline-input-border"
              />
              <div className="relative flex h-12 items-center justify-between bg-input-background">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => setIsPasswordFocused(false)}
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                  placeholder="PASSWORD"
                  className="h-full w-full rounded bg-input-background px-4 placeholder:text-[10px] placeholder:font-black placeholder:text-input-placeholder focus:bg-background focus:outline-input-border "
                />
                {isPasswordFocused && (
                  <PasswordTextToggle
                    setIsPasswordVisible={setIsPasswordVisible}
                    isPasswordVisible={isPasswordVisible}
                  />
                )}
              </div>
            </div>
            <div className="mt-7 flex w-full items-center justify-center gap-2">
              <a
                href="#"
                className="flex w-full items-center justify-center rounded bg-facebook-primary py-[6px]">
                <FacebookIcon className="fill-white" />
              </a>
              <a
                href="#"
                className="flex w-full items-center justify-center rounded bg-google-primary py-[6px]">
                <GoogleIcon />
              </a>
              <a
                href="#"
                className="flex w-full items-center justify-center rounded bg-apple-primary py-[6px]">
                <AppleIcon className="fill-white" />
              </a>
              <a
                href="#"
                className="flex w-full items-center justify-center rounded bg-xbox-primary py-[6px]">
                <XboxIcon className="fill-white" />
              </a>
            </div>
            <div className="mt-5 flex items-center gap-2">
              <Checkbox.Root
                checked={checked}
                onCheckedChange={bool => setChecked(bool as boolean)}
                className="h-4 w-4 rounded bg-input-background data-[state=checked]:bg-riot-primary"
                id="check">
                <Checkbox.Indicator>
                  <CheckIcon className="text-background" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label className="text-sm font-medium" htmlFor="check">
                Stay signed in
              </label>
            </div>
            <div className="mt-auto flex w-full flex-col items-center justify-center gap-[66px]">
              <button
                disabled={!username || !password}
                className="flex h-[60px] w-[60px] items-center justify-center rounded-[20px] border-2 border-riot-primary bg-riot-primary text-background disabled:border-[#e8e8e8] disabled:bg-background disabled:text-[#e8e8e8]">
                <ArrowRightIcon width={30} height={30} />
              </button>
              <div className="mt-auto flex w-full items-center justify-center">
                <a
                  href=""
                  className="text-[10px] font-black uppercase text-[#b2b8c9] hover:text-[#0a0a20]">
                  Can't sign in?
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
