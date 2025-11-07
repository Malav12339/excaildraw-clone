interface InputBox {
    placeholder: string,
    inputValue: string,
    onChangeFn: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function Input({ placeholder, onChangeFn, inputValue } : InputBox) {
    return <input 
    className="border p-2 rounded"
    type="text" placeholder={placeholder} value={inputValue}
    onChange={onChangeFn} />
}