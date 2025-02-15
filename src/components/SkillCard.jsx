function SkillCard({icon,skillName,description,progress}) {
    return (
        <div className="bg-white rounded-2xl border border-[#e6f5ff] p-4 ">
            <div className="flex gap-3">
                <div className="flex w-10 h-10 items-center justify-center bg-gradient-to-b from-third to-white rounded-[7px]">{icon}</div>

                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <p className="text-[13px] text-dark font-medium">{skillName}</p>
                        <p className="text-xs text-secondary font-medium">{progress} %</p>
                    </div>

                    <div className="w-full bg-background rounded-md h-[5px] relative mt-2">
                        <div className="bg-primary h-[5px] rounded-md" style={{width: `${progress}%`}}></div>
                    </div>
                </div>

            </div>
            <p className="text-xs text-dark text-justify leading-5 mt-2">{description}</p>
        </div>
    )
}

export default SkillCard
