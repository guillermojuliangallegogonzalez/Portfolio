import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiArrowRight, FiMousePointer, FiArrowDown } from 'react-icons/fi';

import homeImg from '../../assets/img/home-img.png';

const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 md:pl-28 relative overflow-hidden bg-body-color">

            {/* Background Shapes (Optional for "wow" factor) */}
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-skin/20 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-skin/10 rounded-full blur-3xl opacity-30" />

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Social Links & Content */}
                <div className="order-2 md:order-1 flex flex-col gap-6">
                    <div className="flex gap-4 text-2xl text-text-color">
                        <a href="https://github.com/guillermojuliangallegogonzalez" target="_blank" rel="noopener noreferrer" className="hover:text-skin transition-colors"><FiGithub /></a>
                        <a href="https://www.instagram.com/guillermogallego01/" target="_blank" rel="noopener noreferrer" className="hover:text-skin transition-colors"><FiInstagram /></a>
                        <a href="https://www.linkedin.com/in/guillermo-juli%C3%A1n-gallego-gonz%C3%A1lez/" target="_blank" rel="noopener noreferrer" className="hover:text-skin transition-colors"><FiLinkedin /></a>
                    </div>

                    <div className="space-y-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-6xl font-bold text-title-color"
                        >
                            Hola, Soy <span className="text-skin">Guillermo</span>
                        </motion.h1>

                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-xl md:text-2xl font-medium text-text-color flex items-center gap-2"
                        >
                            <span className="h-[2px] w-10 bg-skin inline-block"></span>
                            Desarrollador FullStack
                        </motion.h3>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-text-color max-w-lg leading-relaxed"
                        >
                            Con amplios conocimientos en diseño web, aplicaciones móviles y aplicaciones de escritorio. Diseñando el futuro, pixel a pixel.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="pt-4"
                        >
                            <a href="#about" className="inline-flex items-center gap-2 bg-skin text-title-color px-6 py-3 rounded-lg hover:opacity-90 transition-all shadow-lg shadow-skin/20">
                                Más Acerca De Mí <FiArrowDown className="animate-bounce" />
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Image / Graphic */}
                <div className="order-1 md:order-2 flex justify-center relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 w-64 h-64 md:w-96 md:h-96"
                    >
                        {/* Profile Image blob shape mask or just rounded */}
                        <div className="w-full h-full rounded-full overflow-hidden border-4 border-skin shadow-2xl shadow-skin/20">
                            <img src={homeImg} alt="Guillermo Gallego" className="w-full h-full object-cover" />
                            {/* Fallback if image path is wrong (since I moved content to legacy_backup, need to copy images back!) */}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:hidden">
                <a href="#about" className="text-skin animate-bounce text-2xl"><FiArrowDown /></a>
            </div>

        </section>
    );
};

export default Home;
