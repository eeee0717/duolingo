import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const Footer = () => {
	return (
		<footer className="hidden lg:block h-20 w-full boder-t-2 border-slate-200">
			<div className=" max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
				<Button
					size={'lg'}
					variant={'ghost'}
					className="w-full"
				>
					<Image
						src={'/hr.svg'}
						alt="Croatian"
						height={32}
						width={32}
            className='mr-4 rounded-md'
					/>
					Croatian
				</Button>
        <Button
					size={'lg'}
					variant={'ghost'}
					className="w-full"
				>
					<Image
						src={'/fr.svg'}
						alt="French"
						height={32}
						width={32}
            className='mr-4 rounded-md'
					/>
					French
				</Button>
        <Button
					size={'lg'}
					variant={'ghost'}
					className="w-full"
				>
					<Image
						src={'/it.svg'}
						alt="Italian"
						height={32}
						width={32}
            className='mr-4 rounded-md'
					/>
					Italian
				</Button>
			</div>
		</footer>
	);
};
