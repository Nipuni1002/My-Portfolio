import Hero from '@/components/Hero'
import RecentProjects from '@/components/RecentProjects'
import Experience from '@/components/Experience'
import About from '@/components/About'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
   <main className="relative bg-[#000319] flex
   justify-center items-center flex-col overflow-hidden
   mx-auto w-full text-white">
    <div className="max-w-7xl w-full">
      <Hero />
      <RecentProjects />
      <Experience />
      <About />
      <Footer />
    </div>
   </main>
  )
}
