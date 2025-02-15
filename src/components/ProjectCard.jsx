function ProjectCard({imgUrl,title,tags}) {
    return (
        <div className="bg-white rounded-xl overflow=hidden shadow-md mx-2">
            <img src={imgUrl} alt={title} className="w-full h-72 md:h-80 object-cover" />

            <div className="px-4 py-5">
                <h3 className="text-base font-semibold line-camp-2 overflow-hidden text-ellipsis">{title}</h3>

                <div className="flex flex-wrap gap-2 mt-2">
                    { tags.map((tag,index) => (
                        <span key={index} className="text-xs text-navy bg-blue-100/70 px-3 py-1 rounded">
                            {tag}
                        </span>
                    )) }
                </div>

            </div>
        </div>
    )
}

export default ProjectCard
