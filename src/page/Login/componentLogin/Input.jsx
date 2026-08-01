

export default function Input ({label, type, name, placeholder, value, onChange,error}){

    return (
        <div>
            <label htmlFor="">
                {label}
            </label>

            <input type={type}
            name={name} placeholder={placeholder} value={value} onChange={onChange}/>
            {error && (<p>{error}</p>)}
        </div>
    )
}