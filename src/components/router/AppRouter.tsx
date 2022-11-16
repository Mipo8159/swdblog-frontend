import React from "react"
import {Route, Routes} from "react-router-dom"
import HomePage from "pages/HomePage"
import {RouteEnum} from "router"

const AppRouter: React.FC = function AppRouter() {
  return (
    <Routes>
      <Route path={RouteEnum.HOME} element={<HomePage />} />
    </Routes>
  )
}

export default AppRouter
