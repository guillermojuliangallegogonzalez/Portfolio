import React from 'react';
import { FiMail, FiGithub, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-body-color">
            <div className="container mx-auto px-4 md:px-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-title-color mb-2">Ponte en contacto</h2>
                    <span className="text-skin block text-sm font-semibold uppercase tracking-wider">Contactame</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">

                    {/* Contact Info Cards */}
                    <div className="flex flex-col gap-6">
                        <div className="bg-box-color p-6 rounded-xl shadow-md text-center group hover:-translate-y-1 transition-transform duration-300">
                            <div className="text-3xl text-skin mb-3 flex justify-center"><FiMail /></div>
                            <h3 className="text-lg font-bold text-title-color">Email</h3>
                            <span className="block text-text-color text-sm mb-4">guillermojulian.gallegogonzalez@gmail.com</span>
                            <a href="mailto:guillermojulian.gallegogonzalez@gmail.com" className="inline-flex items-center gap-2 text-skin text-sm font-medium hover:gap-3 transition-all">
                                Escríbeme! <FiArrowRight />
                            </a>
                        </div>

                        <div className="bg-box-color p-6 rounded-xl shadow-md text-center group hover:-translate-y-1 transition-transform duration-300">
                            <div className="text-3xl text-green-500 mb-3 flex justify-center"><FaWhatsapp /></div>
                            <h3 className="text-lg font-bold text-title-color">Whatsapp</h3>
                            <span className="block text-text-color text-sm mb-4">653-589-211</span>
                            <a href="https://api.whatsapp.com/send?phone=653589211&text=Hola, Quiero más información!" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-skin text-sm font-medium hover:gap-3 transition-all">
                                Escríbeme! <FiArrowRight />
                            </a>
                        </div>

                        <div className="bg-box-color p-6 rounded-xl shadow-md text-center group hover:-translate-y-1 transition-transform duration-300">
                            <div className="text-3xl text-title-color mb-3 flex justify-center"><FiGithub /></div>
                            <h3 className="text-lg font-bold text-title-color">GitHub</h3>
                            <span className="block text-text-color text-sm mb-4">guillermojuliangallegogonzalez</span>
                            <a href="https://github.com/guillermojuliangallegogonzalez" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-skin text-sm font-medium hover:gap-3 transition-all">
                                Hecha un vistazo! <FiArrowRight />
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-box-color p-8 rounded-2xl shadow-lg">
                        <form className="space-y-6">
                            <div className="relative group">
                                <label className="block text-sm font-medium text-text-color mb-1">Usuario</label>
                                <input type="text" placeholder="Username" className="w-full bg-body-color border border-transparent rounded-lg p-3 text-title-color focus:outline-none focus:ring-2 focus:ring-skin focus:bg-body-color transition-shadow" />
                            </div>

                            <div className="relative group">
                                <label className="block text-sm font-medium text-text-color mb-1">Email</label>
                                <input type="email" placeholder="Email" className="w-full bg-body-color border border-transparent rounded-lg p-3 text-title-color focus:outline-none focus:ring-2 focus:ring-skin focus:bg-body-color transition-shadow" />
                            </div>

                            <div className="relative group">
                                <label className="block text-sm font-medium text-text-color mb-1">Teléfono</label>
                                <input type="tel" placeholder="Phone" className="w-full bg-body-color border border-transparent rounded-lg p-3 text-title-color focus:outline-none focus:ring-2 focus:ring-skin focus:bg-body-color transition-shadow" />
                            </div>

                            <div className="relative group">
                                <label className="block text-sm font-medium text-text-color mb-1">Mensaje</label>
                                <textarea rows="4" placeholder="Message" className="w-full bg-body-color border border-transparent rounded-lg p-3 text-title-color focus:outline-none focus:ring-2 focus:ring-skin focus:bg-body-color transition-shadow"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-skin text-title-color font-bold py-4 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-skin/30 flex items-center justify-center gap-2">
                                Enviar Mensaje <FiArrowRight className="text-xl" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            {/* Footer attached here or separate component? Original had footer. */}
            <footer className="mt-20 bg-box-color text-white py-10 border-t border-white/5">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-2 text-title-color">Guillermo Gallego</h2>
                    <p className="text-skin mb-6">Desarrollador FullStack</p>

                    <div className="flex justify-center gap-6 mb-8 text-2xl text-title-color">
                        <a href="https://github.com/guillermojuliangallegogonzalez" className="hover:text-skin transition-colors"><FiGithub /></a>
                    </div>

                    <div className="flex justify-center gap-6 mb-8 text-sm font-medium text-text-color">
                        <a href="#services" className="hover:text-skin">Servicios</a>
                        <a href="#work" className="hover:text-skin">Trabajos</a>
                        <a href="#contact" className="hover:text-skin">Contacto</a>
                    </div>

                    <p className="text-xs text-text-color/50">© Guillermo Gallego. Todos los derechos reservados.</p>
                </div>
            </footer>
        </section>
    );
};

export default Contact;
