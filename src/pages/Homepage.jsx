import GitHubIcon from "../assets/icons/githubIcon.svg?react"
import LinkedInIcon from "../assets/icons/linkedinIcon.svg?react"
import MediumIcon from "../assets/icons/mediumIcon.svg?react"

const Homepage = () => {
    return <div className="grid grid-cols-12 bg-primary-navy h-screen py-20 px-32">
        <div className="flex flex-col col-span-4 justify-center items-center gap-12">
            <div className="bg-primary-cream py-8 px-10 rounded-xl flex justify-center items-center text-5xl">
                <h1 className="text-primary-maroon">Taylor Galloway</h1>
            </div>
            <p className="text-primary-cream max-w-[32ch]">Fullstack Software Engineer with two years of experience working as a consultant for start-ups and medium-sized companies. Experienced in the front-end and back-end working with React, Ruby on Rails, JavaScript, TypeScript, and React Native. Worked on greenfield web apps, migrated APIs, and developed a mobile app. </p>
            <div className="flex gap-4">
                <a href="https://github.com/tylrs">
                    <GitHubIcon className="h-14" />
                </a>
                <a href="https://www.linkedin.com/in/taylor-galloway/">
                    <LinkedInIcon className="h-14" />
                </a>
                <a href="https://medium.com/@galloway.taylor/list/taylor-galloway-blog-posts-7765d04e82d6">
                    <MediumIcon className="h-14" />
                </a>
            </div>
        </div>
        <div className="grid grid-rows-5 grid-cols-3 col-start-6 col-span-7 text-primary-cream border-primary-cream text-2xl">
            <button className="row-start-2 border-r-2">About Me</button>
            <div className="row-start-2 col-start-2 border-2 [border-image:linear-gradient(to_top,#FDF0D5_60%,transparent_50%)_0_100%_10_0]"></div>
            <button className="row-start-2 col-start-3">Projects</button>
            <div className="row-start-3 border-b-2 border-t-2 border-r-2"></div>
            <div className="row-start-3 col-start-2 flex justify-center items-center p-6 border-t-2 border-b-2 border-r-2 border-primary-cream">
                <button className="bg-[#4F4789] text-primary-cream p-8 rounded-xl">Resumé</button>
            </div>
            <div className="row-start-3 col-start-3 border-b-2 border-t-2"></div>
            <div className="row-start-4 col-start-1 border-r-2 [border-image:linear-gradient(to_bottom,#FDF0D5_30%,transparent_30%)_0_100%_10_0]"></div>
            <div className="row-start-4 col-start-2 border-r-2"></div>
            <button className="row-start-4 col-start-3">Contact Me</button>
        </div>
    </div>
}

export default Homepage
