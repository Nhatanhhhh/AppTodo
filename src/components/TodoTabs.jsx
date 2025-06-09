import React from 'react';

function TodoTabs({ activeTab, setActiveTab }) {
    return (
        <ul className="nav nav-tabs mb-4 pb-2">
            <li className="nav-item" role="presentation">
                <a className={`nav-link ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')} style={{ cursor: 'pointer' }}>Tất cả</a>
            </li>
            <li className="nav-item" role="presentation">
                <a className={`nav-link ${activeTab === 'completed' ? 'active' : ''}`} onClick={() => setActiveTab('completed')} style={{ cursor: 'pointer' }}>Đã hoàn thành</a>
            </li>
            <li className="nav-item" role="presentation">
                <a className={`nav-link ${activeTab === 'incomplete' ? 'active' : ''}`} onClick={() => setActiveTab('incomplete')} style={{ cursor: 'pointer' }}>Chưa hoàn thành</a>
            </li>
        </ul>
    );
}

export default TodoTabs;