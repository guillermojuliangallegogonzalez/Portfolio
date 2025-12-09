import React, { useState } from 'react';
import { FiHome, FiUser, FiBriefcase, FiFileText, FiMessageSquare, FiMenu, FiX } from 'react-icons/fi';
import { BiLayer } from 'react-icons/bi';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const navItems = [
        { id: '#home', icon: <FiHome />, label: 'Inicio' },
        { id: '#about', icon: <FiUser />, label: 'Acerca de mí' },
        { id: '#services', icon: <FiBriefcase />, label: 'Servicios' },
        { id: '#work', icon: <BiLayer />, label: 'Trabajos' }, // Using BiLayer as a substitute for "Work"/"Portfolio"
        { id: '#skills', icon: <FiFileText />, label: 'Habilidades' },
        { id: '#contact', icon: <FiMessageSquare />, label: 'Contacto' },
    ];

    return (
        <>
            {/* Mobile Toggle */}
            <div
                className={`fixed top-4 right-4 z-50 p-2 text-2xl cursor-pointer rounded-md bg-box-color text-title-color md:hidden transition-colors ${isOpen ? 'text-skin' : ''}`}
                onClick={toggleSidebar}
            >
                {isOpen ? <FiX /> : <FiMenu />}
            </div>

            {/* Sidebar */}
            <aside className={`fixed top-0 left-0 h-full bg-body-color border-r border-box-color flex flex-col justify-between py-6 transition-transform duration-300 z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 w-64 md:w-20 shadow-2xl md:shadow-none`}>
                <div className="flex justify-center">
                    <a href="#" className="flex items-center justify-center w-10 h-10 bg-skin text-title-color font-bold rounded-full text-xl hover:opacity-80 transition-opacity">
                        G
                    </a>
                </div>

                <nav className="flex flex-col items-center md:items-center gap-y-4 px-4 md:px-0">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={item.id}
                            onClick={() => setIsOpen(false)} // Close sidebar on click (mobile)
                            className="flex items-center w-full md:w-auto md:justify-center p-3 text-text-color hover:text-skin text-xl transition-colors relative group rounded-lg hover:bg-box-color md:hover:bg-transparent"
                        >
                            {item.icon}
                            {/* Mobile Label */}
                            <span className="ml-4 text-base font-medium md:hidden">{item.label}</span>

                            {/* Desktop Tooltip */}
                            <span className="absolute left-14 bg-box-color text-text-color px-2 py-1 rounded text-sm shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 md:block hidden">
                                {item.label}
                            </span>
                        </a>
                    ))}
                </nav>

                <div className="flex justify-center text-text-color text-xs text-center px-1">
                    <span className="md:block hidden">© 2025</span>
                    <span className="md:hidden block">© 2025 Guillermo Gallego</span>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm"
                    onClick={toggleSidebar}
                />
            )}
        </>
    );
};

export default Sidebar;
