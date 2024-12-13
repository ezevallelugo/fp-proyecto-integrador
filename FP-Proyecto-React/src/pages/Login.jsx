import React, { useState, useEffect } from 'react';

const Login = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const loadHTML = async () => {
      try {
        // Use import.meta.url to get the correct path
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
    }
  }, [htmlContent]);

  return (
    <div 
      dangerouslySetInnerHTML={{ __html: htmlContent }} 
    />
  );
};

export default Login;