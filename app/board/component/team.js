export default function TeamMembers({ members }) {
    return (
      <section className="py-12 ">
        <div className="max-w-5xl mx-auto ">
          <h2 className="text-3xl font-semibold text-center mb-8">Meet Our Team</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {members.map((member, index) => (
              <div key={index} className=" rounded-lg  p-6 flex flex-col items-center">
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  className="w-80 h-80 object-cover rounded-md md:rounded-lg border-4 border-gray-300"
                />
                <h3 className="mt-6 text-2xl font-semibold">{member.name}</h3>
                <p className="text-gray-600 text-lg">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  