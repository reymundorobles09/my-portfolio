import { motion } from "framer-motion";

function Tab({tabList,activeTab,onChange}) {
    const getActiveStyles = (value) => {
        return activeTab === value ? "text-white bg-gradient-primary" : "text-navy bg-transparent";
    }

    return (
        <div className="flex items-center justify-center my-10">
            <div className="bg-[#e6f5ff] rounded-full flex">
                {tabList.map((tab) => (
                    <motion.button  
                        key={tab.id} 
                        initial={{ opacity: 0.8, scale: 1}}
                        animate={{ opacity: activeTab === tab.value ? 1 : 0.8, scale: activeTab === tab.value ? 1.05 : 1 }}
                        transition={{ duration: 0.2 }}
                        className={`text-xs md:text-[15px] ${getActiveStyles(tab.value)} rounded-full px md:px-10 py-[6px] md:py-3`}
                        onClick={() => onChange(tab.value)}
                    >{tab.label} </motion.button>
                ))}

            </div>
        </div>
    )
}

export default Tab
