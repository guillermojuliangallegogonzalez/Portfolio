import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBriefcase, FiHeadphones } from 'react-icons/fi';
import Qualification from './Qualification';

const About = () => {
    return (
        <section id="about" className="py-20 bg-body-color">
            <div className="container mx-auto px-4 md:px-10">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-title-color mb-2"
                    >
                        Sobre mí
                    </motion.h2>
                    <span className="text-skin block text-sm font-semibold uppercase tracking-wider">Introducción</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-skin to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                            <img
                                src="/assets/img/about-img.jpg"
                                alt="About Me"
                                className="relative rounded-2xl shadow-xl w-full max-w-sm object-cover aspect-[3/4]"
                            />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-title-color">
                            Hola, Soy Guillermo, Desarrollador FullStack
                        </h3>
                        <p className="text-text-color mb-6 leading-relaxed text-justify">
                            Tengo una amplia experiencia en tecnologías web, de escritorio y diseño UI/UX. Mis habilidades
                            incluyen un profundo conocimiento en lenguajes como C, C++, C#, Java y JavaScript, así como experiencia en frameworks y tecnologías como JavaFX, JSP, MySQL, PL/SQL, Angular, Android Java y Swift.
                            Estoy dedicado a crear soluciones innovadoras y funcionales que mejoren la experiencia del usuario y aporten valor a cada proyecto en el que participo.
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-6 mb-8">
                            <div className="bg-box-color p-4 rounded-xl shadow-md flex-1 text-center min-w-[120px]">
                                <FiAward className="text-2xl text-skin mx-auto mb-2" />
                                <h3 className="font-bold text-lg text-title-color">02+</h3>
                                <span className="text-sm text-text-color">Años de <br />Experiencia</span>
                            </div>

                            <div className="bg-box-color p-4 rounded-xl shadow-md flex-1 text-center min-w-[120px]">
                                <FiBriefcase className="text-2xl text-skin mx-auto mb-2" />
                                <h3 className="font-bold text-lg text-title-color">08+</h3>
                                <span className="text-sm text-text-color">Proyectos <br />Terminados</span>
                            </div>

                            <div className="bg-box-color p-4 rounded-xl shadow-md flex-1 text-center min-w-[120px]">
                                <FiHeadphones className="text-2xl text-skin mx-auto mb-2" />
                                <h3 className="font-bold text-lg text-title-color">24/7</h3>
                                <span className="text-sm text-text-color">Soporte <br />Online</span>
                            </div>
                        </div>

                        <a href="#contact" className="inline-block bg-skin text-title-color px-8 py-3 rounded-lg hover:opacity-90 transition-colors shadow-lg shadow-skin/20">
                            Contactame
                        </a>
                    </motion.div>
                </div>

                {/* Helper component for timeline */}
                <Qualification />

            </div>
        </section>
    );
};

export default About;
