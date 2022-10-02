import Head from 'next/head';
import {Container, Text, Grid} from '@nextui-org/react';
import {LinkCard} from '../components/link';
import {faCodeBranch} from '@fortawesome/free-solid-svg-icons';
import {faUserTie} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Fred Davison</title>
                <meta name='description' content='developer website'/>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <Container direction="column" css={{
                display: 'flex',
                width: '100vw',
                height: '100vh',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Grid.Container gap={2} justify="center">
                    <Grid xs={12} justify="center">
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
                            Fred Davison
                        </Text>
                    </Grid>
                    <Grid xs={12} justify="center">
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
                <Grid.Container gap={2} justify="center" direction="column" css={{
                    alignItems: 'center',
                    '@xs': {
                        fd: 'row',
                        m: '0 auto',
                    }
                }}>
                    <Grid xs={4} sm={3} md={2} xl={1.5} justify='center'>
                        {LinkCard('GitHub', 'https://github.com/crochetcode', faCodeBranch)}
                    </Grid>
                    <Grid xs={4} sm={3} md={2} xl={1.5} justify='center'>
                        {LinkCard('LinkedIn', 'https://www.linkedin.com/in/fdavison1', faUserTie)}
                    </Grid>
                </Grid.Container>
            </Container>
        </div>
    );
};
