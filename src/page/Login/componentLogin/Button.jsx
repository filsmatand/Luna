

export default function Bouton ({children, type, disable}){


    return (

        <div>
            <button type={type} disabled= {disable}>
                {children}
            </button>
        </div>
    )
}