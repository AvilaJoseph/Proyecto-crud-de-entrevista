function Navbar() {
    return (
        <div className="w-full h-24 px-8 py-4">
            <div className="flex items-center justify-between h-full px-12">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <img src="src/assets/images/logos/Frame 168.png" alt="Logo" className="h-10" />
                </div>
                
                {/* Navegación */}
                <div className="flex space-x-8 font-poppins font-medium">
                    <h3 className="cursor-pointer hover:text-blue-500">Home</h3>
                    <h3 className="cursor-pointer hover:text-blue-500">Shop</h3>
                    <h3 className="cursor-pointer hover:text-blue-500">About</h3>
                    <h3 className="cursor-pointer hover:text-blue-500">Contact</h3>
                </div>
                
                {/* Lado derecho - Carrito/Usuario/Etc */}
                <div className="flex items-center space-x-8">
                    {/* Aquí puedes añadir iconos de carrito, perfil, etc. */}
                    <div>
                        <img src="src\assets\images\iconos\mdi_account-alert-outline.png" alt="" />
                    </div>
                    <div>
                        <img src="src\assets\images\iconos\akar-icons_search.png" alt="" />
                    </div>
                    <div>
                        <img src="src\assets\images\iconos\akar-icons_heart.png" alt="" />
                    </div>
                    <div>
                        <img src="src\assets\images\iconos\ant-design_shopping-cart-outlined.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;