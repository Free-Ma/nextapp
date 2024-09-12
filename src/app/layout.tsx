import type { Metadata } from 'next';

import './styles/index.css';

import { FC, PropsWithChildren } from 'react';

export const metadata: Metadata = {
    title: 'nextapp',
    description: '3r教室Next.js全栈开发',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
    <html lang="en">
        <body>
            <div className="tw-app-layout">{children}</div>
        </body>
    </html>
);

export default RootLayout;
