import React, { useState } from 'react';
import './EmojiSelector.css';

const emojis = [
    { emoji: '😞', label: 'Terrible' },
    { emoji: '😟', label: 'Bad' },
    { emoji: '😐', label: 'Alright' },
    { emoji: '😊', label: 'Pretty Good' },
    { emoji: '😁', label: 'Fantastic' }
];

const EmojiSelector = () => {
    const [selectedEmoji, setSelectedEmoji] = useState(null);

    const handleClick = (label) => {
        setSelectedEmoji(label);
    };

    return (
        <div className="emoji-selector">
            <h2>Wellbeing Check-in</h2>
            <p>Hello! How are you feeling today?</p>
            <div className="emoji-container">
                {emojis.map((item) => (
                    <div
                        key={item.label}
                        className={`emoji-item ${selectedEmoji === item.label ? 'selected' : ''}`}
                        onClick={() => handleClick(item.label)}
                    >
                        <span role="img" aria-label={item.label}>
                            {item.emoji}
                        </span>
                        <p>{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EmojiSelector;