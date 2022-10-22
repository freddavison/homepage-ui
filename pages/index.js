import Head from 'next/head';
import {LinkContainer} from '../components/link-container';

export default function Home() {
    return (
        <div>
            <Head>
                <title>{'Fred Davison'}</title>
                <meta name='description' content='developer website'/>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <LinkContainer/>
        </div>
    );
};
