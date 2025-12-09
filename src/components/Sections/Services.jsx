import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLayout, FiCreditCard, FiPenTool, FiX, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            title: "Diseño Web",
            icon: <FiLayout />,
            description: "Diseñador web independiente con más de dos años de experiencia, ofreciendo trabajos de calidad.",
            features: [
                "Desarrollo Interfaces de Usuario.",
                "Desarrollo de Páginas Web.",
                "Interacción de elementos UX.",
                "Posicionamiento SEO.",
                "Diseños de Mockups."
            ]
        },
        {
            title: "Diseño UI/UX",
            icon: <FiCreditCard />, // Using CreditCard as generic or Layout
            description: "Ofreciendo servicios de diseños de interfaces con más de un año de experiencia, centrando mis trabajos en la usabilidad.",
            features: [
                "Desarrollo de interfaces.",
                "Desarrollo de interfaces web.",
                "Componentes personalizados.",
                "Estilos innovadores.",
                "Funcionalidades personalizadas."
            ]
        },
        {
            title: "Diseño de Logos",
            icon: <FiPenTool />,
            description: "Services with more than 3 years of experience. Providing quality work to clients and companies.",
            features: [
                "Diseño de logos vectorizados.",
                "Diseño a partir de imágenes.",
                "Diseño a partir de letras.",
                "Diseño conceptual."
            ]
        }
    ];

    return (
        <section id="services" className="py-20 bg-body-color">
            <div className="container mx-auto px-4 md:px-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-title-color mb-2">Qué ofrezco</h2>
                    <span className="text-skin block text-sm font-semibold uppercase tracking-wider">Servicios</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {services.map((service, index) => (
                        <div key={index} className="bg-box-color p-8 rounded-xl shadow-lg border-b-2 border-transparent hover:border-skin transition-all relative overflow-hidden group">

                            {/* Hover Effect Background */}
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <span className="text-9xl text-skin">{service.icon}</span>
                            </div>

                            <div className="text-skin text-4xl mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-title-color mb-4 leading-tight">
                                {service.title.split(' ').map((word, i) => <div key={i}>{word}</div>)}
                            </h3>

                            <button
                                onClick={() => setSelectedService(service)}
                                className="flex items-center gap-2 text-sm font-medium text-skin hover:text-skin/80 transition-colors group-hover:translate-x-1 duration-300"
                            >
                                Ver Más <FiArrowRight />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                <AnimatePresence>
                    {selectedService && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedService(null)}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()} // Prevent click from closing when clicking inside content
                                className="bg-box-color p-8 rounded-2xl w-full max-w-lg relative shadow-2xl border border-white/10"
                            >
                                <button
                                    onClick={() => setSelectedService(null)}
                                    className="absolute top-4 right-4 text-text-color hover:text-red-500 transition-colors text-xl"
                                >
                                    <FiX />
                                </button>

                                <h3 className="text-2xl font-bold text-title-color mb-4 text-center">
                                    {selectedService.title}
                                </h3>
                                <p className="text-text-color mb-6 text-center">
                                    {selectedService.description}
                                </p>

                                <ul className="space-y-3">
                                    {selectedService.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-text-color">
                                            <FiCheckCircle className="text-skin shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
};

export default Services;
