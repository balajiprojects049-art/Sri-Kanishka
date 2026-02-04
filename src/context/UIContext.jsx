import React, { createContext, useContext, useState } from 'react';

const UIContext = createContext();

export const UIProvider = ({ children }) => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [serviceModal, setServiceModal] = useState({ isOpen: false, type: null, title: '' });

    const openLogin = () => setIsLoginOpen(true);
    const closeLogin = () => setIsLoginOpen(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    const openServiceModal = (type, title) => setServiceModal({ isOpen: true, type, title });
    const closeServiceModal = () => setServiceModal({ isOpen: false, type: null, title: '' });

    return (
        <UIContext.Provider value={{
            isLoginOpen,
            openLogin,
            closeLogin,
            isMobileMenuOpen,
            toggleMobileMenu,
            closeMobileMenu,
            serviceModal,
            openServiceModal,
            closeServiceModal
        }}>
            {children}
        </UIContext.Provider>
    );
};

export const useUI = () => useContext(UIContext);
