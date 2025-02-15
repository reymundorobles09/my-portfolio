import { useState } from "react";
import Tab from "../components/Tab";
import { SKILL_TABS, SKILLS } from "../utils/data";
import SkillCard from "../components/SkillCard";
import { motion } from "framer-motion";

function TechnicalProficiency() {
    const [tabData, setTabData] = useState(SKILLS)
    const [activeTab, setActiveTab] = useState('all');

    const handleTableValueChange = (value) => {
        if(value === 'all'){
            setTabData(SKILLS);
            setActiveTab('all');
            return;
        }

        const updatedList = SKILLS.filter((skill) => skill.type === value);
        setTabData(updatedList);
        setActiveTab(value);

    }

    return (
        <section id="skill" className="bg-background mt-20">
            <div className="container mx-auto p-10">
                <div className="w-full lg:w-[60vw] p-10">
                <h4 className="section-title">
                    Technical Proficiency
                </h4>

                <p className="text-sm text-center mt-4 leading-6">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus sem egestas congue magna auctor scelerisque dolor vulputate eget. Lectus sem ullamcorper finibus mauris varius fusce. Mattis accumsan faucibus parturient rhoncus, et posuere volutpat. Maximus efficitur et elit vivamus vestibulum tempus interdum adipiscing. Sodales natoque dis accumsan erat imperdiet euismod eleifend. Senectus bibendum blandit nisi fames placerat; amet scelerisque congue velit. Aac aptent est class justo eu cubilia.
                </p>
            </div>

            <Tab
                tabList={SKILL_TABS}
                activeTab={activeTab}
                onChange={handleTableValueChange}
            />
                <div className="grid grid-cols-1 md-grid-cols-2 lg:grid-cols-4 gap-4 min-h-[430px]">
                    {tabData.map((skill, index) => (
                        <motion.div key={skill.id}
                            initial={{ opacity: 0, y: 20}}
                            animate={{ opacity: 1, y: 0}}
                            transition={{ duration:0.4, delay: index * 0.1 }} 
                        >
                            <SkillCard
                                icon={<skill.icon className="w-6 h-6 text-primary"/>}
                                skillName={skill.skill}
                                description={skill.description}
                                progress={skill.progress}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TechnicalProficiency
