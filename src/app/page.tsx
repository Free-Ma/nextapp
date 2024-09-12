// src/app/page.tsx
import Link from 'next/link';
import { FC } from 'react';

import { Button } from './_components/ui/button';
import $styles from './page.module.css';

const App: FC = () => (
    <main className="tw-page-container tw-items-center tw-justify-center">
        <div className={$styles.block}>
            欢迎来到3R教室，这是<span>Nextjs课程的开始</span>
            <Button asChild>
                <Link href="https://3rcd.com" target="_blank">
                    查看官网
                </Link>
            </Button>
        </div>
    </main>
);
export default App;
