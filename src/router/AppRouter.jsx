import { Routes, Route } from "react-router-dom"
import { DriversInfo, DriversStandings } from "../pages/r-drivers"
import { TeamsInfo, TeamsStandings } from "../pages/r-teams"
import { Navbar } from "../ui"
import { Welcome } from "../pages/Welcome"
// import { Login } from "../auth/pages/Login"

export const AppRouter = () => {
    return (
        <>

            <Navbar />

            <Routes>
                {/* Ruta por defecto, POR HACER: ESTABLECER UNA RUTA DE INICIO DE LA WEB */}
                <Route path="/*" element={<Welcome/>} />

                {/* Rutas para los pilotos */}
                <Route path="driversInfo" element={<DriversInfo />} />
                <Route path="driversStandings" element={<DriversStandings/>} />

                {/* Rutas para las escuderias */}
                <Route path="teamsInfo" element={<TeamsInfo />} />
                <Route path="teamsStandings" element={<TeamsStandings />} />

                {/* Ruta para el login */}
                {/* <Route path="login" element={<Login />} /> */}
            </Routes>
        </>
    )
}
