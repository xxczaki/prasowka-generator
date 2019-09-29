import React from 'react';
import Link from 'next/link';

import ExternalLink from './link';

const Navigation = () => <p style={{margin: '2px', paddingBottom: '1.5em', paddingTop: '1em'}}><Link scroll={false} href="/"><ExternalLink>[Home]</ExternalLink></Link> &bull; <Link scroll={false} href="/about"><ExternalLink>[Informacje]</ExternalLink></Link></p>;

export default Navigation;
