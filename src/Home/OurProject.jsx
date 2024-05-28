import React from 'react'

const projectData = [
  {
    image: 'Cardimage.jpg',
    title: 'Thalachaikkanoridom',
    description: 'Dessaya seva Bharathi Kerallam is a Commoted & dedicated NGO engagged in multiple area.'
  },
  {
    image: 'Cardimage.jpg',
    title: 'Garamma Baibhavam',
    description: 'Dessaya seva Bharathi Kerallam is a Commoted & dedicated NGO engagged in multiple area.'
  },
  {
    image: 'Cardimage.jpg',
    title: 'Vidya Darsan',
    description: 'Dessaya seva Bharathi Kerallam is a Commoted & dedicated NGO engagged in multiple area.'

  }
];


const OurProject = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-10">
        <h2 className="text-3xl font-bold mb-4">Let's explore the projects</h2>
        <p className="text-gray-600 font-semibold mb-10">Product portfolio includes</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl p-3 overflow-hidden border border-gray-300">
              <img src={`/${project.image}`} alt={project.title} className="w-full rounded-2xl h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 font-semibold">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurProject