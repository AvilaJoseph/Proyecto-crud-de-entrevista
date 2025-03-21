import Navbar from "../components/Navbar/Navbar"

function HomePage(){
    return (
        <>
        <div className="w-full h-screen">
            <Navbar/>
            <HomePage/>
        </div>
        </>
    )
}

export default HomePage