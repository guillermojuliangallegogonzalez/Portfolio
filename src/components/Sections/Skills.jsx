import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiDatabase, FiChevronDown } from 'react-icons/fi';

const Skills = () => {
    const [openCategory, setOpenCategory] = useState('frontend'); // frontend, design, backend

    const toggleCategory = (category) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    const categories = [
        {
            id: 'frontend',
            title: 'Desarrollador FrontEnd',
            subtitle: 'Más de 2 años de experiencia',
            icon: <FiCode />,
            skills: [
                { name: 'HTML', percentage: 90 },
                { name: 'CSS', percentage: 70 },
                { name: 'TypeScript', percentage: 80 },
                { name: 'Angular', percentage: 85 },
            ]
        },
        {
            id: 'design',
            title: 'Diseño de Interfaces',
            subtitle: 'Más de 1 año de experiencia',
            icon: <FiLayout />,
            skills: [
                { name: 'JavaFX', percentage: 90 },
                { name: 'Sketch', percentage: 80 },
                { name: 'Photoshop', percentage: 70 },
            ]
        },
        {
            id: 'backend',
            title: 'Desarrollador Backend',
            subtitle: 'Más de 1 año de experiencia',
            icon: <FiDatabase />,
            skills: [
                { name: 'PHP', percentage: 60 },
                { name: 'MongoDB', percentage: 80 },
                { name: 'OracleDB', percentage: 60 },
                { name: 'MySQL', percentage: 85 },
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-body-color">
            <div className="container mx-auto px-4 md:px-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-title-color mb-2">Mis Habilidades</h2>
                    <span className="text-skin block text-sm font-semibold uppercase tracking-wider">Mi Experiencia</span>
                </div>

                <div className="flex flex-col md:flex-row gap-10 justify-center items-start max-w-5xl mx-auto">
                    {/* Render all categories in a grid or flex list, user had accordion feel. 
                        Let's do accordion/expandable list.
                    */}
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {categories.map((category) => (
                            <div key={category.id} className="bg-transparent">
                                <div
                                    onClick={() => toggleCategory(category.id)}
                                    className="flex items-center gap-4 cursor-pointer mb-6 group"
                                >
                                    <div className="text-2xl text-skin bg-box-color p-3 rounded-lg group-hover:text-skin transition-colors duration-300">
                                        {category.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h1 className="text-xl font-bold text-title-color">{category.title}</h1>
                                        <span className="text-sm text-text-color">{category.subtitle}</span>
                                    </div>
                                    <FiChevronDown className={`text-2xl text-skin transition-transform duration-300 ${openCategory === category.id ? 'rotate-180' : ''}`} />
                                </div>

                                <motion.div
                                    initial={false}
                                    animate={{ height: openCategory === category.id ? 'auto' : 0, opacity: openCategory === category.id ? 1 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="pl-2 pr-2 pb-6 space-y-6">
                                        {category.skills.map((skill, index) => (
                                            <div key={index}>
                                                <div className="flex justify-between mb-2">
                                                    <h3 className="font-medium text-title-color">{skill.name}</h3>
                                                    <span className="text-text-color">{skill.percentage}%</span>
                                                </div>
                                                <div className="h-2 w-full bg-box-color rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${skill.percentage}%` }}
                                                        transition={{ duration: 1, ease: "easeOut" }}
                                                        className="h-full bg-skin rounded-full"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;
