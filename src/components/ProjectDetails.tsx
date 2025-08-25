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
    <div>
      
    </div>
  )
}

export default ProjectDetails
