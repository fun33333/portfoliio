
export default function ListBlock({ items }: { items: string[] }) {
    return (
        <ul className="space-y-2 my-3">
            {items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}
