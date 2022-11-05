import {Container, Grid, Text} from '@nextui-org/react';
import {getLinkCard} from './link';
import {faCodeBranch, faUserTie} from '@fortawesome/free-solid-svg-icons';
import {gridContainerCss, h1Css, h2Css, linkContainerCss} from '../styles/link-container';

export const LinkContainer = () => (
    <Container direction="column" css={linkContainerCss}>
        <Grid.Container gap={2} justify="center">
            <Grid xs={12} justify="center">
                <Text h1 css={h1Css}>
                    {'Fred Davison'}
                </Text>
            </Grid>
            <Grid xs={12} justify="center">
                <Text h2 css={h2Css}
                >{'full-stack developer'}</Text>
            </Grid>
        </Grid.Container>
        <Grid.Container gap={2} justify="center" direction="column" css={gridContainerCss}>
            {getLinkCard('GitHub', 'https://github.com/freddavison', faCodeBranch)}
            {getLinkCard('LinkedIn', 'https://www.linkedin.com/in/fdavison1', faUserTie)}
        </Grid.Container>
    </Container>
);
