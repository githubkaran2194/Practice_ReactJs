import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Hoshift/component/Header'
import Guide from './Hoshift/Pages/Guide'
import Home from './Hoshift/Pages/Home'
import OverView from './Hoshift/Pages/OverView'
import PageNotFound from './Hoshift/Pages/PageNotFound'
import Support from './Hoshift/Pages/Support'


const HoshiftRouter = () => {
    return (
        <>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/overview" element={<OverView />} />
                    <Route path="/guide" element={<Guide />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default HoshiftRouter
