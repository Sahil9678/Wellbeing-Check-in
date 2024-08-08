import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EmojiSelector from './EmojiSelector';

describe('EmojiSelector', () => {
    //First test case
    it('should render the component with a heading and prompt', () => {
        render(<EmojiSelector />);
        
        // 1.Verify  heading
        const headingElement = screen.getByText(/Wellbeing Check-in/i);
        expect(headingElement).toBeInTheDocument();

        // 2. Verify prompt text
        const promptElement = screen.getByText(/Hello! How are you feeling today?/i);
        expect(promptElement).toBeInTheDocument();
    });

    //Second test case
    it('should render all emojis with their labels', () => {
        render(<EmojiSelector />);
        
        const emojis = [
            { emoji: '😞', label: 'Terrible' },
            { emoji: '😟', label: 'Bad' },
            { emoji: '😐', label: 'Alright' },
            { emoji: '😊', label: 'Pretty Good' },
            { emoji: '😁', label: 'Fantastic' }
        ];

        //3. Verify each emoji and its label is rendered
        emojis.forEach(({ emoji, label }) => {
            const emojiElement = screen.getByRole('img', { name: label });
            const labelElement = screen.getByText(label);

            expect(emojiElement).toBeInTheDocument();
            expect(emojiElement).toHaveTextContent(emoji);
            expect(labelElement).toBeInTheDocument();
        });
    });

    //Third test case
    it('should update the selected emoji on click', () => {
        render(<EmojiSelector />);
        
        const firstEmoji = screen.getByText('Terrible');
        
        // Click the first emoji
        fireEvent.click(firstEmoji);
        
        // Check if the first emoji is selected
        expect(firstEmoji.closest('.emoji-item')).toHaveClass('selected');
        
        const secondEmoji = screen.getByText('Bad');
        
        // Click the second emoji
        fireEvent.click(secondEmoji);
        
        // Check if the second emoji is selected
        expect(secondEmoji.closest('.emoji-item')).toHaveClass('selected');
        
        // Ensure the first emoji is no longer selected
        expect(firstEmoji.closest('.emoji-item')).not.toHaveClass('selected');
    });

    //Fourth test case
    it('should match the snapshot', () => {
        const { asFragment } = render(<EmojiSelector />);
        expect(asFragment()).toMatchSnapshot();
    });
});
