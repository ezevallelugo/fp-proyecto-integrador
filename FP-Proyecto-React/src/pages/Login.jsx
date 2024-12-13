import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [htmlContent, setHtmlContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loadHTML = async () => {
      try {
        const response = await fetch(new URL('../login.html', import.meta.url).href);
        const data = await response.text();
        setHtmlContent(data);
      } catch (error) {
        console.error('Failed to load HTML:', error);
      }
    };

    loadHTML();
  }, []);

  useEffect(() => {
    if (htmlContent) {
      // Parse the HTML content to dynamically load scripts
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = htmlContent;
      
      const scripts = Array.from(tempDiv.querySelectorAll('script[src]'));
      
      scripts.forEach(script => {
        const newScript = document.createElement('script');
        newScript.type = 'module';
        newScript.src = script.src;
        newScript.defer = true;
        document.body.appendChild(newScript);
      });

      // Add event listener for successful login
      const handleLoginSuccess = () => {
        navigate('/catalog');
      };

      window.addEventListener('loginSuccess', handleLoginSuccess);

      // Cleanup event listener
      return () => {
        window.removeEventListener('loginSuccess', handleLoginSuccess);
      };
    }
  }, [htmlContent, navigate]);

  return (
    <div 
      dangerouslySetInnerHTML={{ __html: htmlContent }} 
    />
  );
};

export default Login;