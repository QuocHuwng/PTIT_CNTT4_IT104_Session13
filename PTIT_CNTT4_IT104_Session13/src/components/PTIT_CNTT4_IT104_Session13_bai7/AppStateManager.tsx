import React, { Component } from 'react';

type State = {
    theme: 'light' | 'dark';
    language: 'english' | 'vietnamese';
};

class AppStateManager extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            theme: 'light',
            language: 'vietnamese'
        };
    }

    toggleTheme = () => {
        this.setState((prevState) => ({
            theme: prevState.theme === 'light' ? 'dark' : 'light'
        }));
    };

    toggleLanguage = () => {
        this.setState((prevState) => ({
            language: prevState.language === 'english' ? 'vietnamese' : 'english'
        }));
    };

    render() {
        const { theme, language } = this.state;

        const backgroundColor = theme === 'light' ? '#fff' : '#000';
        const textColor = theme === 'light' ? '#000' : '#fff';

        const themeText = theme === 'light' ? 'Sáng' : 'Tối';
        const languageText = language === 'english' ? 'English' : 'Tiếng Việt';

        return (
            <div
                style={{
                    backgroundColor,
                    color: textColor,
                    padding: '20px',
                    marginTop: '20px'
                }}
            >
                <h2>Nền: {themeText}</h2>
                <h2>Ngôn ngữ: {languageText}</h2>

                <button onClick={this.toggleTheme}>Đổi nền</button>
                <button onClick={this.toggleLanguage} style={{ marginLeft: '10px' }}>
                    Đổi ngôn ngữ
                </button>
            </div>
        );
    }
}

export default AppStateManager;