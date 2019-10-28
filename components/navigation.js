import React from 'react';
import Link from 'next/link';
import {Breakpoint, BreakpointProvider} from 'react-socks';

import ExternalLink from './link';

const Navigation = () => (
	<BreakpointProvider>
		<Breakpoint small down>
			<ul>
				<li><Link scroll={false} href="/"><ExternalLink>[Home]</ExternalLink></Link></li>
				<li><Link scroll={false} href="/generator"><ExternalLink>[Generator]</ExternalLink></Link></li>
				<li><Link scroll={false} href="/about"><ExternalLink>[Informacje]</ExternalLink></Link></li>
			</ul>
		</Breakpoint>
		<Breakpoint large up>
			<p style={{margin: '2px', paddingBottom: '1.5em', paddingTop: '1em'}}><Link scroll={false} href="/"><ExternalLink>[Home]</ExternalLink></Link> &bull; <Link scroll={false} href="/generator"><ExternalLink>[Generator]</ExternalLink></Link> &bull; <Link scroll={false} href="/about"><ExternalLink>[Informacje]</ExternalLink></Link></p>
		</Breakpoint>
	</BreakpointProvider>
);

export default Navigation;
