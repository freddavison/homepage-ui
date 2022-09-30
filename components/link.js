import {Card, Text} from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const LinkCard = (name, link, icon) => {
    return (
        <Card css={{
            minWidth: '200px',
            '@xs': {
                minWidth: '100%',
            },
            margin: '0',
        }}
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
                    <Text size='$2xl' css={{textAlign: 'center'}}>
                        {name}
                    </Text>
                </Card.Body>
            </a>
        </Card>
    );
};