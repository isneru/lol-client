import { PasswordTextToggle } from "components"
import { InputHTMLAttributes, useState } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isPassword?: boolean
  isPasswordFocused?: boolean
}

export const Input = ({ isPassword = false, ...props }: Props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isPasswordFocused, setIsPasswordFocused] = useState(false)

  return isPassword ? (
    <div className="relative flex h-12 items-center justify-between rounded bg-input-background">
      <input
        {...props}
        onFocus={() => setIsPasswordFocused(true)}
        onBlur={() => setIsPasswordFocused(false)}
        type={isPasswordVisible ? "text" : "password"}
        className="h-full w-full rounded bg-input-background px-4 placeholder:text-[10px] placeholder:font-black placeholder:text-input-placeholder focus:bg-background focus:outline-input-border "
      />
      {isPasswordFocused && (
        <PasswordTextToggle
          setIsPasswordVisible={setIsPasswordVisible}
          isPasswordVisible={isPasswordVisible}
        />
      )}
    </div>
  ) : (
    <input
      {...props}
      className="h-12 w-full rounded bg-input-background px-4 placeholder:text-[10px] placeholder:font-black placeholder:text-input-placeholder focus:bg-background focus:outline-input-border"
    />
  )
}
