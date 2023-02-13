import * as CheckboxP from "@radix-ui/react-checkbox"
import { CheckIcon } from "@radix-ui/react-icons"
import { useState } from "react"

interface Props {
  label: string
  id: string
}

export const Checkbox = ({ label, id }: Props) => {
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex items-center gap-2">
      <CheckboxP.Root
        checked={checked}
        onCheckedChange={bool => setChecked(bool as boolean)}
        className="h-4 w-4 rounded bg-input-background data-[state=checked]:bg-riot-primary"
        id={id}>
        <CheckboxP.Indicator>
          <CheckIcon className="text-background" />
        </CheckboxP.Indicator>
      </CheckboxP.Root>
      <label className="cursor-pointer text-sm font-medium" htmlFor={id}>
        {label}
      </label>
    </div>
  )
}
