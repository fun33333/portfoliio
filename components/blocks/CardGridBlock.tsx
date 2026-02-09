import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface CardItem {
    title: string;
    description: string;
    link: string;
}

export default function CardGridBlock({ items }: { items: CardItem[] }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
            {items.map((item, idx) => (
                <Link
                    key={idx}
                    href={item.link}
                    className="group relative flex flex-col p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
                >
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-white group-hover:text-primary transition-colors text-sm">
                            {item.title}
                        </h3>
                        <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-xs text-gray-400 line-clamp-2">{item.description}</p>
                </Link>
            ))}
        </div>
    );
}
