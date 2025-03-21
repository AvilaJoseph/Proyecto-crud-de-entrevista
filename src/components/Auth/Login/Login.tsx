import { useState } from "react";

function Login() {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(email,pass)
    }

    return (
        <div className="h-screen w-full bg-white flex items-center justify-center p-6">
            <div className="bg-white w-[98%] h-[94%] rounded-lg p-2.5 sm:p-4 md:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Primer div - lado izquierdo */}
                <div className="bg-white-500 w-full h-full rounded-md">
                    <form onSubmit={handleSubmit} className="w-full max-w-md p-6">
                        <h2>Iniciar Sesion</h2>
                        {/* Correo */}
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Correo Electrónico
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="email" 
                                type="email" 
                                placeholder="correo@ejemplo.com" 
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        {/* Contraseña */}
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Correo Electrónico
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="password" 
                                type="password" 
                                placeholder="correo@ejemplo.com" 
                                onChange={(e) => setPass(e.target.value)}
                            />
                        </div>
                        <button
                        className="mt-4 bg-red-400 p-4 rounded-lg">
                            Iniciar Sesion
                        </button>
                    </form>
                </div>
                
                {/* Segundo div - lado derecho */}
                <div className="bg-blue-500 w-full h-full rounded-md">
                </div>
            </div>
        </div>
    )
}
export default Login;