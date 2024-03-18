import { Routes, Route, Navigate } from "react-router-dom"
import { DriversInfo } from "../r-drivers/pages/DriversInfo"
import { DriversStandings } from "../r-drivers/pages/DriversStandings"
import { TeamsInfo } from "../r-teams/pages/TeamsInfo"
import { TeamsStandings } from "../r-teams/pages/TeamsStandings"
import { Navbar } from "../ui"
import { Login } from "../auth/pages/Login"

export const AppRouter = () => {
    return (
        <>

            <Navbar />

            <Routes>
                {/* Ruta por defecto, POR HACER: ESTABLECER UNA RUTA DE INICIO DE LA WEB */}
                <Route path="/*" element={<Navigate to={'/driversInfo'} />} />

                {/* Rutas para los pilotos */}
                <Route path="driversInfo" element={<DriversInfo />} />
                <Route path="driversStandings" element={<DriversStandings/>} />

                {/* Rutas para las escuderias */}
                <Route path="teamsInfo" element={<TeamsInfo />} />
                <Route path="teamsStandings" element={<TeamsStandings />} />

                {/* Ruta para el login */}
                <Route path="login" element={<Login />} />
            </Routes>
        </>
    )
}
