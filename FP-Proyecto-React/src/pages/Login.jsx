import React, { useState, useEffect } from 'react';

const Login = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('/src/login.html')
      .then((response) => response.text())
      .then((data) => {
        setHtmlContent(data);
      });
  }, []);

  useEffect(() => {
    if (htmlContent) {
      const scripts = Array.from(
        document.querySelectorAll("script")
      ).filter(script => script.src);
      
      scripts.forEach(script => {
        const newScript = document.createElement("script");
        newScript.src = script.src;
        newScript.defer = script.defer;
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
