    import React, { useState } from 'react';
    import  '../../assets/styles/faq.css'

    const FaqCard = ({ question, answer, isOpen, toggleCard }) => {
    return (
        <div className="faq-card">
        <div className="faq-question" onClick={toggleCard}>
            {question}
        </div>
        {isOpen && <div className="faq-answer">{answer}</div>}
        </div>
    );
    };

    const FAQ = () => {
    const faqData = [
        {
        id: 1,
        question: 'Como posso adicionar novos cards?',
        answer: 'Para adicionar novos cards, basta modificar a matriz `faqData` no componente App.',
        },
        {
        id: 2,
        question: 'Como faço para expandir/contrair um card?',
        answer: 'Clique na pergunta para expandir ou contrair a resposta.',
        },
        // Adicione mais cards conforme necessário
    ];

    const [cards, setCards] = useState(faqData.map((faq) => ({ ...faq, isOpen: false })));

    const toggleCard = (id) => {
        setCards((prevCards) =>
        prevCards.map((card) =>
            card.id === id ? { ...card, isOpen: !card.isOpen } : { ...card, isOpen: false }
        )
        );
    };

    return (
        <div className="App">
        <h1>FAQ</h1>
        <div className="faq-container">
            {cards.map((card) => (
            <FaqCard
                key={card.id}
                question={card.question}
                answer={card.answer}
                isOpen={card.isOpen}
                toggleCard={() => toggleCard(card.id)}
            />
            ))}
        </div>
        </div>
    );
    };

    export default FAQ;
