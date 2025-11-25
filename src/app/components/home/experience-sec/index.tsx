import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "2023+",
            title: "Data Developer",
            company: "https://www.avature.net/",
            type: "Fulltime",
            description: "Software developtment and maintenance in the area of integrations and data. Php, vue js, JavaScript, Python, Linux, sql, Amazon cloud "
        },
        {
            year: "2022+",
            title: "Co-Founder",
            company: "https://managmentapp.duckdns.org/",
            type: "CEO",
            description: "Construction of all management software > Next.js + Go + MongoDB + Google Cloud"
        },
        {
            year: "2022-2023",
            title: "Software Programmer",
            company: "https://www.innovasof.com/",
            type: "Fulltime",
            description: "Complete chat development with artificial intelligence. React and Next for the front, Python and fast api for the Backend with mongodb and pinecone for semantic searches and vector storage by openai"
        },
        {
            year: "2021-2022",
            title: "Data Engineer",
            company: "https://corebi.com.ar/",
            type: "Fulltime",
            description: "Maintaining data flow for customers. SQL, MySQL, teradata, power center, ssis, Google Cloud, Python, etc"
        },        {
            year: "2020",
            title: "Front End Developer",
            company: "https://kowa.studio/",
            type: "Fulltime",
            description: "Development web apps for clients. Given the design in figma, it is converted to code pixel perfect (React, next js, typescript, jquery, JavaScript vanila, etc) "
        },
        {
            year: "2019",
            title: "Ecommerce Maintenance",
            company: "https://trivento.com/",
            type: "Fulltime",
            description: "Creation of landing pages (HTML, CSS, JavaScript). Maintenance and implementation of improvements in Magento-based eCommerce platforms. Stock planning and SAP usage."
        },
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 0 || index ===1 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {(index === 0 || index ===1) && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <a href={exp.company} target='_blank' className="text-xl text-black font-normal max-w-[200px] break-words lg:max-w-[300px]">{exp.company}</a>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;