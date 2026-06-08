import { useEffect, Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar           from './Components/Navbar'
import Footer           from './Components/Footer'
import FloatingWhatsApp from './Components/FloatingWhatsApp'
import BackToTop        from './Components/BackToTop'
import PageLoader       from './Components/PageLoader'

// Lazy-load every page — only loads what the user visits
const Home        = lazy(() => import('./pages/Home'))
const About       = lazy(() => import('./pages/About'))
const Products    = lazy(() => import('./pages/Products'))
const Process     = lazy(() => import('./pages/Process'))
const WhyUs       = lazy(() => import('./pages/WhyUs'))
const GlobalReach = lazy(() => import('./pages/GlobalReach'))
const Contact     = lazy(() => import('./pages/Contact'))

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

// Global scroll-reveal observer
function useScrollReveal() {
  const { pathname } = useLocation()
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    const observed = new Set()

    const attachEl = (el) => {
      if (observed.has(el)) return
      el.classList.remove('revealed')
      observer.observe(el)
      observed.add(el)
    }

    const attachAll = () => {
      document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(attachEl)
    }

    // Attach immediately + after paint + after lazy-load settles
    attachAll()
    const t1 = setTimeout(attachAll, 150)
    const t2 = setTimeout(attachAll, 600)

    // Also watch for new elements added by lazy-loaded pages
    const mutation = new MutationObserver(attachAll)
    mutation.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutation.disconnect()
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [pathname])
}

function AppInner() {
  useScrollReveal()
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/"            element={<Home />}        />
            <Route path="/about"       element={<About />}       />
            <Route path="/products"    element={<Products />}    />
            <Route path="/process"     element={<Process />}     />
            <Route path="/why-us"      element={<WhyUs />}       />
            <Route path="/global-reach" element={<GlobalReach />} />
            <Route path="/contact"     element={<Contact />}     />
            {/* Catch-all → Home */}
            <Route path="*"            element={<Home />}        />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </>
  )
}

export default function App() {
  return <AppInner />
}


