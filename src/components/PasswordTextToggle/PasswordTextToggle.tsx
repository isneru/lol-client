import { EyeNoneIcon, EyeOpenIcon } from "@radix-ui/react-icons"
import { Dispatch, SetStateAction } from "react"

interface Props {
  isPasswordVisible: boolean
  setIsPasswordVisible: Dispatch<SetStateAction<boolean>>
}

export const PasswordTextToggle = ({
  isPasswordVisible,
  setIsPasswordVisible
}: Props) => {
  return isPasswordVisible ? (
    <button
      onPointerDown={e => e.preventDefault()}
      className="absolute right-1 top-1/2 mr-4 -translate-y-1/2"
      onClick={() => setIsPasswordVisible(val => !val)}>
      <EyeOpenIcon />
    </button>
  ) : (
    <button
      onPointerDown={e => e.preventDefault()}
      className="absolute right-1 top-1/2 mr-4 -translate-y-1/2"
      onClick={() => setIsPasswordVisible(val => !val)}>
      <EyeNoneIcon />
    </button>
  )
}
