import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Section = styled.section`
  padding: 6rem 2rem;
  background: white;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #202124;
  text-align: center;
  margin-bottom: 4rem;
  line-height: 1.2;
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FAQItem = styled(motion.div)`
  border: 1px solid #e8eaed;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #1a73e8;
    box-shadow: 0 4px 12px rgba(26, 115, 232, 0.1);
  }
`;

const FAQQuestion = styled.button`
  width: 100%;
  padding: 1.5rem;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.1rem;
  font-weight: 500;
  color: #202124;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f8f9fa;
  }
  
  &:focus {
    outline: none;
    background: #f8f9fa;
  }
`;

const QuestionText = styled.span`
  flex: 1;
  margin-right: 1rem;
`;

const ExpandIcon = styled(motion.div)`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1a73e8;
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.3s ease;
`;

const FAQAnswer = styled(motion.div)`
  padding: 0 1.5rem 1.5rem;
  color: #5f6368;
  line-height: 1.6;
  font-size: 1rem;
  border-top: 1px solid #e8eaed;
`;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I install Chrome?",
      answer: "To install Chrome, simply download the installation file, then look for it in your downloads folder. Open the file and follow the instructions. Once Chrome is installed, you can delete the install file. Learn more about downloading Chrome here."
    },
    {
      question: "Does Chrome work on my operating system?",
      answer: "Chrome is compatible with devices that run Windows and Mac operating systems, provided they meet the minimum system requirements. In order to install Chrome and receive adequate support, you must meet the system requirements. Learn more about using Chrome on your device."
    },
    {
      question: "How do I make Chrome my default browser?",
      answer: "You can set Chrome as your default browser on Windows or Mac operating systems as well as your iPhone, iPad or Android device. When you set Chrome as your default browser, any link you click will automatically open in Chrome. Find specific instructions for your device here."
    },
    {
      question: "What are Chrome's safety settings?",
      answer: "Chrome uses cutting-edge safety and security features to help you manage your safety. Use Safety Check to instantly audit for compromised passwords, safe browsing status and any available Chrome updates. Learn more about safety and security on Chrome."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const answerVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      paddingTop: 0,
      paddingBottom: 0
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      paddingTop: "1.5rem",
      paddingBottom: "1.5rem",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <Section>
      <Container>
        <SectionTitle
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          Frequently asked questions
        </SectionTitle>
        
        <FAQList
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              variants={itemVariants}
              whileHover={{ y: -2 }}
            >
              <FAQQuestion onClick={() => toggleFAQ(index)}>
                <QuestionText>{faq.question}</QuestionText>
                <ExpandIcon
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? '×' : '+'}
                </ExpandIcon>
              </FAQQuestion>
              
              <AnimatePresence>
                {openIndex === index && (
                  <FAQAnswer
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={answerVariants}
                  >
                    {faq.answer}
                  </FAQAnswer>
                )}
              </AnimatePresence>
            </FAQItem>
          ))}
        </FAQList>
      </Container>
    </Section>
  );
};

export default FAQ; 