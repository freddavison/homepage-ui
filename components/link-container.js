import {Container, Grid, Text} from '@nextui-org/react';
import {getLinkCard} from './link';
import {faCodeBranch, faUserTie} from '@fortawesome/free-solid-svg-icons';

export const LinkContainer = () => (
    <Container direction='column' css={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <Grid.Container gap={2} justify='center'>
            <Grid xs={12} justify='center'>
                <Text h1
                      css={{
                          lineHeight: '0',
                          '@xs': {
                              fontSize: '85px',
                              lineHeight: '25px',
                          },
                          '@md': {
                              fontSize: '105px',
                          },
                      }}
                >
                    {'Fred Davison'}
                </Text>
            </Grid>
            <Grid xs={12} justify='center'>
                <Text h2 css={{
                    '@xs': {
                        fontSize: '55px'
                    },
                    '@md': {
                        fontSize: '65px'
                    }
                }}
                >full-stack developer</Text>
            </Grid>
        </Grid.Container>
        <Grid.Container gap={2} justify='center' direction='column' css={{
            alignItems: 'center',
            '@xs': {
                fd: 'row',
                m: '0 auto',
            }
        }}>
            {getLinkCard('GitHub', 'https://github.com/freddavison', faCodeBranch)}
            {getLinkCard('LinkedIn', 'https://www.linkedin.com/in/fdavison1', faUserTie)}
        </Grid.Container>
    </Container>
);
