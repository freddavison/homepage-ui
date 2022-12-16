export const linkContainerCss = {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    background: '$primary'
};

export const gridContainerCss = {
    alignItems: 'center',
    '@xs': {
        fd: 'row',
        m: '0 auto',
    }
};

export const h1Css = {
    lineHeight: '0',
    '@xs': {
        fontSize: '85px',
        lineHeight: '25px',
    },
    '@md': {
        fontSize: '105px',
    },
};

export const h2Css = {
    '@xs': {
        fontSize: '55px'
    },
    '@md': {
        fontSize: '65px'
    }
};