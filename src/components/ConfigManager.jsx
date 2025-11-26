/**
 * ConfigManager Component
 * Allows users to save and load practice sheet configurations
 */

import React, { useState, useEffect } from 'react';
import '../styles/ConfigManager.css';

const STORAGE_KEY = 'alphabet_practice_configs';

const ConfigManager = ({ currentConfig, onApplyConfig }) => {
    const [savedConfigs, setSavedConfigs] = useState([]);
    const [configName, setConfigName] = useState('');
    const [showSaveInput, setShowSaveInput] = useState(false);

    // Load configs from local storage on mount
    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            try {
                setSavedConfigs(JSON.parse(stored));
            } catch (e) {
                console.error('Failed to parse saved configs', e);
            }
        }
    }, []);

    const handleSave = () => {
        if (!configName.trim()) {
            alert('Please enter a name for the configuration');
            return;
        }

        const newConfig = {
            id: Date.now(),
            name: configName.trim(),
            data: currentConfig,
            timestamp: new Date().toISOString()
        };

        const updatedConfigs = [...savedConfigs, newConfig];
        setSavedConfigs(updatedConfigs);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedConfigs));

        setConfigName('');
        setShowSaveInput(false);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this configuration?')) {
            const updatedConfigs = savedConfigs.filter(c => c.id !== id);
            setSavedConfigs(updatedConfigs);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedConfigs));
        }
    };

    const handleLoad = (config) => {
        onApplyConfig(config.data);
    };

    return (
        <div className="config-manager">
            <h3 className="config-title">Saved Configurations</h3>

            <div className="config-actions">
                {!showSaveInput ? (
                    <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => setShowSaveInput(true)}
                    >
                        Save Current Config
                    </button>
                ) : (
                    <div className="save-input-group">
                        <input
                            type="text"
                            value={configName}
                            onChange={(e) => setConfigName(e.target.value)}
                            placeholder="Config Name (e.g. 'Standard A4')"
                            className="config-name-input"
                        />
                        <button className="btn btn-primary btn-sm" onClick={handleSave}>Save</button>
                        <button className="btn btn-outline btn-sm" onClick={() => setShowSaveInput(false)}>Cancel</button>
                    </div>
                )}
            </div>

            <div className="saved-list">
                {savedConfigs.length === 0 ? (
                    <p className="no-configs">No saved configurations</p>
                ) : (
                    savedConfigs.map(config => (
                        <div key={config.id} className="config-item">
                            <span className="config-name" title={new Date(config.timestamp).toLocaleString()}>
                                {config.name}
                            </span>
                            <div className="item-actions">
                                <button
                                    className="btn-icon load-btn"
                                    onClick={() => handleLoad(config)}
                                    title="Load"
                                >
                                    📂
                                </button>
                                <button
                                    className="btn-icon delete-btn"
                                    onClick={() => handleDelete(config.id)}
                                    title="Delete"
                                >
                                    🗑️
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ConfigManager;
