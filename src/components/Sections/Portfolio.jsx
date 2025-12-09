import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiX, FiCalendar, FiCode, FiUser, FiExternalLink } from 'react-icons/fi';
import work1 from '../../assets/img/work-1.png';
import work2 from '../../assets/img/work-2.png';
import work3 from '../../assets/img/work-3.png';

const Portfolio = () => {
    const [filter, setFilter] = useState('all');
    const [selectedItem, setSelectedItem] = useState(null);

    const filters = [
        { id: 'all', label: 'Todos' },
        { id: 'web', label: 'Web' },
        { id: 'app', label: 'App' },
        { id: 'design', label: 'Diseño' }
    ];

    const works = [
        {
            id: 1,
            title: "App Academia",
            category: "app",
            img: work1,
            desc: "App Academia es una aplicación de gestión de cursos, permitiendonos listar, dar de alta y dar de baja a los diferentes alumnos de un centro en su respectiva base de datos.",
            date: "15 enero 2023",
            tech: "Java, JavaFX",
            role: "FrontEnd - BackEnd",
            link: "https://github.com/ieslosmontecillos-di/appacademia-janus.git"
        },
        {
            id: 2,
            title: "ModuHelp",
            category: "web",
            img: work2,
            desc: "Página web diseñada para la presentación del proyecto ModuHelp.",
            date: "8 junio 2021",
            tech: "Html - CSS - JavaScript",
            role: "Frontend",
            link: "https://gcodelm.000webhostapp.com/"
        },
        {
            id: 3,
            title: "App Encuestas",
            category: "design", // Original used design class, keeping it.
            img: work3,
            desc: "App Encuestas nos permite realizar 4 tipos de encuestas y guardar el resultado en un archivo csv.",
            date: "4 dec 2020",
            tech: "Java - JavaFX",
            role: "FrontEnd",
            link: "https://github.com/guillermojuliangallegogonzalez/AppEncuestas.git"
        }
    ];

    const filteredWorks = filter === 'all' ? works : works.filter(work => work.category === filter);

    return (
        <section id="work" className="py-20 bg-body-color">
            <div className="container mx-auto px-4 md:px-10">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-title-color mb-2">Mis Trabajos</h2>
                    <span className="text-skin block text-sm font-semibold uppercase tracking-wider">Trabajos Recientes</span>
                </div>

                {/* Filters */}
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    {filters.map(f => (
                        <button
                            key={f.id}
                            onClick={() => setFilter(f.id)}
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${filter === f.id ? 'bg-skin text-title-color shadow-lg shadow-skin/30' : 'text-text-color hover:bg-box-color'}`}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredWorks.map(work => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                key={work.id}
                                className="bg-box-color p-4 rounded-xl shadow-md cursor-pointer group hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className="overflow-hidden rounded-lg mb-4">
                                    <img src={work.img} alt={work.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <h3 className="text-xl font-bold text-title-color mb-2">{work.title}</h3>
                                <button
                                    onClick={() => setSelectedItem(work)}
                                    className="flex items-center gap-2 text-sm text-skin font-medium hover:gap-3 transition-all"
                                >
                                    Saber más <FiArrowRight />
                                </button>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Modal */}
                <AnimatePresence>
                    {selectedItem && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedItem(null)}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                        >
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 50, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-box-color rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl border border-white/10"
                            >
                                <div className="relative h-64">
                                    <img src={selectedItem.img} alt={selectedItem.title} className="w-full h-full object-cover" />
                                    <button
                                        onClick={() => setSelectedItem(null)}
                                        className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white p-2 rounded-full hover:bg-black/60 transition-colors"
                                    >
                                        <FiX size={24} />
                                    </button>
                                </div>
                                <div className="p-8">
                                    <span className="text-skin text-sm font-bold uppercase tracking-wider mb-2 block text-center md:text-left">Detalles del Proyecto</span>
                                    <h3 className="text-3xl font-bold text-title-color mb-4 text-center md:text-left">{selectedItem.title}</h3>
                                    <p className="text-text-color mb-6 leading-relaxed">
                                        {selectedItem.desc}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm text-text-color">
                                        <div className="flex items-center gap-2">
                                            <FiCalendar className="text-skin" />
                                            <span className="font-semibold">Creado:</span> {selectedItem.date}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FiCode className="text-skin" />
                                            <span className="font-semibold">Tecnologías:</span> {selectedItem.tech}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FiUser className="text-skin" />
                                            <span className="font-semibold">Rol:</span> {selectedItem.role}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FiExternalLink className="text-skin" />
                                            <span className="font-semibold">Ver:</span>
                                            <a href={selectedItem.link} target="_blank" rel="noopener noreferrer" className="text-skin hover:underline truncate max-w-[150px]">
                                                {selectedItem.link}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
};

export default Portfolio;
