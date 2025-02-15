function StatInfoCard({count, label}) {
    return (
        <div className="flex flex-1 gap-3 md:gap-5 bg-gradient-to-b from-[#ccebff] to-white rounded-[14px] p-5">
            <h4 className="text-4xl md:text-5xl font-medium text-navy">{count}</h4>
            <p className="text-sm md:text-[16px] font-normal text-navy leading-6 whitespace-pre-line">{label}</p>
        </div>
    )
}

export default StatInfoCard
