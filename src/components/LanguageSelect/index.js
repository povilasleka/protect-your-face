import React, { useState, useEffect } from 'react'
import { navigate } from 'gatsby'
import Cookie from 'universal-cookie'

const LanguageSelect = () => {
    const cookies = new Cookie();
    const [language, setLanguage] = useState(cookies.get('language'));
    const [location, setLocation] = useState();

    useEffect(() => {
        setLocation(window.location.pathname);
    }, []);

    function handleSelectValueChange(event) {
        setLanguage(event.target.value);
        cookies.set('language', event.target.value, { path: '/' });
        navigate(location);
    }


    return (
        <select class="form-control" id="exampleFormControlSelect1" style={{
            width: '150px',
            background: 'none',
            color: 'whitesmoke'
        }} value={language} onChange={e => handleSelectValueChange(e)}>
            <option value="en" style={{ color: 'black' }}>English</option>
            <option value="sp" style={{ color: 'black' }}>Espanol</option>
            <option value="it" style={{ color: 'black' }}>Italiano</option>
            <option value="gr" style={{ color: 'black' }}>Deutsch</option>
            <option value="fr" style={{ color: 'black' }}>Le français</option>
        </select>
    );
}

export default LanguageSelect