import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TypeWriterText = styled.span`
    border-right: 2px solid #FC2E2E;
    padding-right: 5px;
`;
interface TypeWriterProps {
    text: string;
}

export default function TypeWriterEffect({ text }: TypeWriterProps) {
    const [content, setContent] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            setTimeout(() => {
                setContent(content + text.charAt(index));
                setIndex(index + 1);
            }, 100);  // Velocidade de digitação
        }
    }, [index, text, content]);

    return <TypeWriterText>{content}</TypeWriterText>;
}

{/* <TypeWriterEffect text="texto" />
basta importar e utilizar como na linha acima */}