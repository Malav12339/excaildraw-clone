import { ReactNode } from "react";

interface Button {
  children: ReactNode
}

export function Button({ children } : Button) {
  return (
    <button className="bg-blue-200 px-1y py-2">
      {children}
    </button>
  )
}