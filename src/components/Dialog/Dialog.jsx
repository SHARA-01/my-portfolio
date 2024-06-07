import React from 'react';

const Dialog = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="dialog-overlay">
            <div className="dialog">
                <button className="dialog-close" onClick={onClose}>X</button>
                <div className="dialog-content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Dialog;
