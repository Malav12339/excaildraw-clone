import { ReactNode } from "react";

interface Button {
  children: ReactNode,
  onClickFn: () => void
}

export function Button({ children, onClickFn } : Button) {
  return (
    <button className="bg-blue-200 hover:bg-blue-300 px-1y py-2 cursor-pointer"
      onClick={onClickFn}>
      {children}
    </button>
  )
}