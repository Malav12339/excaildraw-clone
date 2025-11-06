interface InputBox {
    text: string
}

export function Input({ text } : InputBox) {
    return <input 
    className="border border-red-500 p-10 bg-blue-500"
    type="text" placeholder={text} />
}