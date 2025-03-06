import { Smile } from "lucide-react"
import TeamMembers from "./component/team"

const team = [
    { name: "Érika Stocker", role: "Business Owner", photo: "/images/cl.jpeg" },
    { name: "Jane Doe", role: "UI/UX Designer", photo: "/images/about-hero.avif" },
    { name: "John Smith", role: "Backend Developer", photo: "/images/about-hero.avif" },
    { name: "Alice Brown", role: "Project Manager", photo: "/images/about-hero.avif" }
  ];
export default function Team () {
    return (
    
    <main>
    <section className="bg-white">
    <div className="max-w-7xl mx-auto container ">
    {/* Our Team Header */}
        <div className="space-y-4 flex flex-col items-center justify-center py-8 " >
        <div className="flex space-x-2 justify-center items-center bg-gray-200 px-4 py-2 rounded-full">
        <Smile className="w-4 h-4"/>
        <p>
            Our team
        </p>
        </div>
            
            <h2 className="text-4xl font-semibold">
                Behind the Scenes
            </h2>
            <p className="max-w-[830px] text-center">
                Our team is the heart of our design process, bringing together a wealth of expertise and a passion for innovation. Get acquainted with the people powerig your digital experience 
            </p>
        </div>

        {/* Team members card */}
        <TeamMembers members={team} />
    </div>
    </section>
    </main>
    
    ) 
    }