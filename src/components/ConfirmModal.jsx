import React from 'react';

function ConfirmModal({ show, onClose, onConfirm, todoText }) {
    if (!show) return null;
    return (
        <div className="overlay" hidden={!show}>
            <div className="modal-custom">
                <div className="modal-header-custom">
                    <h5>Xác nhận</h5>
                    <i className="fas fa-xmark" onClick={onClose} />
                </div>
                <div className="modal-body-custom">
                    <p>Bạn chắc chắn muốn xóa công việc {todoText}?</p>
                </div>
                <div className="modal-footer-footer">
                    <button className="btn btn-light" onClick={onClose}>Hủy</button>
                    <button className="btn btn-danger" onClick={onConfirm}>Xóa</button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmModal;