interface Tag {
  id: number;
  name: string;
  path: string;
}

interface Props {
  title: string;
  description: string;
  subDescription: string[];
  href: string;
  image: string;
  tags: Tag[];   
}


const Project = ({title, description, subDescription, href, image, tags}:Props) => {
  return (
    <>
    <div className='flex-wrap items-center py-10 justify-between space-y-14 sm:flex sm:space-y-0'>
      <div>

      <p className='text-2xl'>{title}</p>
      <div className='flex gap-5 mt-2 text-sand'>
        {tags.map((tag)=>(
          <span key={tag.id}>{tag.name}
          
          </span>
          
        ))}
      </div>
      </div>
      <button className='flex items-center gap-1 cursor-pointer hover-animation'>
        Discover
        <img src="assets/arrow-right.svg"  className='w-5'   />
      </button>
    </div>
    <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full'/>
    </>
  )
}

export default Project
