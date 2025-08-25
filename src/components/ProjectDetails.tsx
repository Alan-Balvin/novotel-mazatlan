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
}

const ProjectDetails = ({title, description, image, href, tags, subDescription}:ProjectDetailsProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      
    </div>
  )
}

export default ProjectDetails
