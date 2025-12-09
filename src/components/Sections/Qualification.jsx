import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi'; // Using Briefcase for all as in original or switch based on tab?
import { HiAcademicCap } from 'react-icons/hi';
import { SlCalender } from "react-icons/sl";


const Qualification = () => {
    const [activeTab, setActiveTab] = useState('education'); // education or work

    const toggleTab = (tab) => {
        setActiveTab(tab);
    };

    const educationData = [
        {
            title: "Angular: De cero a experto",
            subtitle: "Udemy (Málaga, ES)",
            calender: "2023 - 2023"
        },
        {
            title: "Desarrollo de Aplicaciones Multiplataforma",
            subtitle: "I.E.S Los Montecillos (Coín, ES)",
            calender: "2021 - 2023"
        },
        {
            title: "Curso JavaScript, NodeJS",
            subtitle: "Udemy (Málaga, ES)",
            calender: "2021 - 2022"
        },
        {
            title: "Bachillerato de la Salud",
            subtitle: "I.E.S Valle del Azahar (Cártama, ES)",
            calender: "2018 - 2020"
        }
    ];

    const experienceData = [
        {
            title: "Desarrollador FullStack",
            subtitle: "Minsait (Málaga, ES)",
            calender: "2023 - Presente",
            desc: "Angular, Java Server Pages, TypeScript, PL/SQL, Spring Boot"
        },
        {
            title: "Inyecciones SQL",
            subtitle: "AndyVap (Cártama, ES)",
            calender: "2021 - 2021",
            desc: ""
        }
    ];

    return (
        <div className="mt-10">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-title-color">Cualificaciones</h2>
                <span className="text-text-color text-sm">Mi Trayectoria</span>
            </div>

            <div className="flex justify-center gap-8 mb-10">
                <button
                    onClick={() => toggleTab('education')}
                    className={`flex items-center gap-2 text-lg font-medium transition-colors ${activeTab === 'education' ? 'text-skin' : 'text-text-color hover:text-skin'}`}
                >
                    <HiAcademicCap className="text-2xl" />
                    Educación
                </button>
                <button
                    onClick={() => toggleTab('work')}
                    className={`flex items-center gap-2 text-lg font-medium transition-colors ${activeTab === 'work' ? 'text-skin' : 'text-text-color hover:text-skin'}`}
                >
                    <FiBriefcase className="text-xl" />
                    Experiencia
                </button>
            </div>

            <div className="max-w-xl mx-auto">
                <div className="relative">
                    {/* Vertical Line - centered */}
                    {activeTab === 'education' && (
                        <div className="space-y-8 border-l-2 border-skin/20 ml-4 pl-8 py-2">
                            {educationData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-box-color bg-skin"></span>
                                    <h3 className="text-lg font-semibold text-title-color">{item.title}</h3>
                                    <span className="text-text-color block mb-1">{item.subtitle}</span>
                                    <div className="text-sm text-text-color/70 flex items-center gap-1">
                                        <SlCalender />
                                        {item.calender}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'work' && (
                        <div className="space-y-8 border-l-2 border-skin/20 ml-4 pl-8 py-2">
                            {experienceData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-box-color bg-skin"></span>
                                    <h3 className="text-lg font-semibold text-title-color">{item.title}</h3>
                                    <span className="text-text-color block mb-1">{item.subtitle}</span>
                                    <div className="text-sm text-text-color/70 flex items-center gap-1 mb-2">
                                        <SlCalender />
                                        {item.calender}
                                    </div>
                                    {item.desc && <p className="text-text-color/60 text-sm italic">{item.desc}</p>}
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Qualification;
