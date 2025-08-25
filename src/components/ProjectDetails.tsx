interface Tag {
  id: number;
  name: string;
  path: string;
}

interface ProjectDetailsProps {
  title: string;
  description: string;
  subDescription: string[];
  image: string;
  href: string;
  tags: Tag[];
  closeModal: ()=>void;
}

const ProjectDetails = ({title, description, image, href, tags, subDescription, closeModal}:ProjectDetailsProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <div className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10" >
      <button  onClick={closeModal}  className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500 ">
        <img src="assets/close.svg" alt="close" className="w-6 h-6" />
      </button>
      <img src={image} alt={title} className="w-full rounded-t-2xl" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold text-white" >{title}</h5>
        <p className="mb-3 font-normal text-neutral-400">{description}</p>
        {subDescription.map((subDes, index)=>(
          <p className="mb-3 font-normal text-neutral-400">{subDes}</p>
        ))}
        <div className="flex items-center justify-between-mt-4">
          <div className="flex gap-3">
            {tags.map((tag)=>(
              <img 
              key={tag.id}
              src={tag.path} 
              alt={tag.name} 
              className="rounded-lg size-10 hover:animation"
              />
            ))}
          </div>
          <a href={href} className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation">
            View Project
          </a>
          <img src="assets/arrow-up.svg" alt="" className="size-4" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default ProjectDetails
