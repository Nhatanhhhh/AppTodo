import React from 'react';

function ErrorModal({ show, onClose }) {
    if (!show) return null;
    return (
        <div className="overlay" hidden={!show}>
            <div className="modal-custom">
                <div className="modal-header-custom">
                    <h5>Cảnh báo</h5>
                    <i className="fas fa-xmark" onClick={onClose} />
                </div>
                <div className="modal-body-custom">
                    <p>Tên công việc không được phép để trống.</p>
                </div>
                <div className="modal-footer-footer">
                    <button className="btn btn-light" onClick={onClose}>Đóng</button>
                </div>
            </div>
        </div>
    );
}

export default ErrorModal;