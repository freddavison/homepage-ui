import {Card, Text, Grid} from '@nextui-org/react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {cardCss} from '../styles/link';

export const getLinkCard = (name, link, icon) => (
    <Grid xs={4} sm={3} md={2} xl={1.5} justify='center'>
        <Card css={cardCss}
              justify='center'
              isPressable
              isHoverable
              variant='bordered'
        >
            <a href={link} target='_self' rel='noreferrer'>
                <Card.Body justify='center'>
                    <Text css={{fontSize: '50px'}}>
                        <FontAwesomeIcon icon={icon} css={{fontSize: '200px'}}/>
                    </Text>
                    <Text size="$2xl" css={{textAlign: 'center'}}>
                        {name}
                    </Text>
                </Card.Body>
            </a>
        </Card>
    </Grid>
);