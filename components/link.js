import {Card, Text} from '@nextui-org/react';
import {Link} from '@nextui-org/react';

export const LinkCard = (name, link) => {
    return (
        <Card justify="center"
              css={{
                  minWidth: '200px',
                  '@xs': {
                      minWidth: '0',
                  },
                  margin: '0',
              }}
              isPressable
              isHoverable
              variant="bordered"
        >
            <Card.Body justify='center'>
                <Link href={link} target="_blank" rel="noreferrer"
                      css={{margin: '0 auto'}}>
                    <Text size="$2xl" css={{
                        textAlign: 'center'
                    }}>{name}</Text>
                </Link>
            </Card.Body>
        </Card>
    );
};