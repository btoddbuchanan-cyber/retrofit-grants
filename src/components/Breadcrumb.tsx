import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({
  items,
  locale,
  homeLabel = "Home",
}: {
  items: BreadcrumbItem[];
  locale: string;
  homeLabel?: string;
}) {
  return (
    <nav className="gc-breadcrumb" aria-label="Breadcrumb">
      <Link href={`/${locale}`}>{homeLabel}</Link>
      {items.map((item, i) => (
        <span key={i}>
          <span aria-hidden="true"> &gt; </span>
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span className="text-gc-gray-dark">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
