interface InputBox {
    text: string
}

export function Input({ text } : InputBox) {
    return <input 
    className="border border-red-500 px-2 py-1"
    type="text" placeholder={text} />
}