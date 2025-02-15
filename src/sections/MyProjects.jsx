import useEmblaCarousel from "embla-carousel-react" ;
import { React, useEffect, useState, useCallback } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { PROJECTS } from "../utils/data";
import ProjectCard from "../components/ProjectCard";

function MyProjects() {

    const [emblaRef, embladApi ] = useEmblaCarousel({ loop: true, align: 'start'});
    const [canScrollPrev, setCanScrollPrev ] = useState(false);
    const [canScrollNext, setCanScrollNext ] = useState(false);

    const updateScrollButtons = useCallback(() => {
        if(!embladApi) return
        setCanScrollPrev(embladApi.canScrollPrev());
        setCanScrollNext(embladApi.canScrollNext());
    }, [embladApi]);

    useEffect(() => {
        if(!embladApi) return;
        embladApi.on("select", updateScrollButtons)
        updateScrollButtons();
    }, [embladApi, updateScrollButtons]);

    return (
        <section id="project" className="bg-background mt-14 my-16">
            <div className="container mx-auto px-8 md:px-10 py-10">
                <div className="w-full lg:w-[60vw] mx-auto">
                    <h4 className="section-title">My Recent Project</h4>

                    <p className="text-sm text-center mt-4 leading-6">
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus sem egestas congue magna auctor scelerisque dolor vulputate eget. Lectus sem ullamcorper finibus mauris varius fusce. Mattis accumsan faucibus parturient rhoncus, et posuere volutpat. Maximus efficitur et elit vivamus vestibulum
                    </p>
                </div>

                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex pt-14 pb-8">
                            {PROJECTS.map((project) => (
                                <div className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33%]">
                                    <ProjectCard
                                        key={project.id}
                                        imgUrl={project.image}
                                        title={project.title}
                                        tags={project.tags}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className={`arrow-btn -left-5 ${!canScrollPrev ? "opacity-50 cursor-not-allowed" : "" }`}
                        onClick={() => embladApi && embladApi.scrollPrev()}
                        disabled={!canScrollPrev}
                    >
                        <IoIosArrowForward className="rotate-180"/>
                    </button>

                    <button
                        className={`arrow-btn -right-5 ${!canScrollNext ? "opacity-50 cursor-not-allowed" : "" }`}
                        onClick={() => embladApi && embladApi.scrollNext()}
                        disabled={!canScrollNext}
                    >
                        <IoIosArrowForward className="rotate-270"/>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default MyProjects
