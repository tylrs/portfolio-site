import GitHubIcon from "../assets/icons/githubIcon.svg?react"
import LinkedInIcon from "../assets/icons/linkedinIcon.svg?react"
import MediumIcon from "../assets/icons/mediumIcon.svg?react"
import { Link } from "react-router-dom"

const Homepage = () => {
    return <div className="grid grid-cols-12 bg-primary-navy h-screen py-20 px-32">
        <div className="flex flex-col col-span-4 justify-center items-center gap-12">
            <div className="bg-primary-cream py-8 px-10 rounded-xl flex justify-center items-center text-5xl">
                <h1 className="text-primary-maroon">Taylor Galloway</h1>
            </div>
            <p className="text-primary-cream max-w-[32ch]">Fullstack Software Engineer with two years of experience working as a consultant for start-ups and medium-sized companies. Experienced in the front-end and back-end working with React, Ruby on Rails, JavaScript, TypeScript, and React Native. Worked on greenfield web apps, migrated APIs, and developed a mobile app. </p>
            <div className="flex gap-4">
                <a href="https://github.com/tylrs">
                    <GitHubIcon className="h-14 fill-primary-cream hover:fill-primary-red" />
                </a>
                <a href="https://www.linkedin.com/in/taylor-galloway/">
                    <LinkedInIcon className="h-14 fill-primary-cream hover:fill-primary-red" />
                </a>
                <a href="https://medium.com/@galloway.taylor/list/taylor-galloway-blog-posts-7765d04e82d6">
                    <MediumIcon className="h-14 group" />
                    {/* hover state styling is on svg */}
                </a>
            </div>
        </div>
        <div className="grid grid-rows-5 grid-cols-3 col-start-6 col-span-7 text-primary-cream text-2xl">
            <button className="row-start-2 border-r-2 border-primary-cream hover:text-primary-red">About Me</button>
            <div className="row-start-2 col-start-2 border-2 [border-image:linear-gradient(to_top,#FDF0D5_60%,transparent_50%)_0_100%_10_0]"></div>
            <Link to="/projects" className="flex justify-center align-center row-start-2 col-start-3 hover:text-primary-red">Projects</Link>
            <div className="row-start-3 border-b-2 border-t-2 border-r-2 border-primary-cream"></div>
            <div className="row-start-3 col-start-2 flex justify-center items-center p-6 border-t-2 border-b-2 border-r-2 border-primary-cream">
                <button className="bg-[#4F4789] text-primary-cream p-8 rounded-xl hover:text-primary-red">Resumé</button>
            </div>
            <div className="row-start-3 col-start-3 border-b-2 border-t-2 border-primary-cream"></div>
            <div className="row-start-4 col-start-1 border-r-2 [border-image:linear-gradient(to_bottom,#FDF0D5_30%,transparent_30%)_0_100%_10_0]"></div>
            <div className="row-start-4 col-start-2 border-r-2 border-primary-cream"></div>
            <button className="row-start-4 col-start-3 hover:text-primary-red">Contact Me</button>
        </div>
    </div>
}

export default Homepage
