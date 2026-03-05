import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/getDictionary";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { DictionaryProvider } from "@/components/DictionaryProvider";
import { SetHtmlLang } from "@/components/SetHtmlLang";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = await getDictionary(locale as Locale);

  return (
    <DictionaryProvider dict={dict} locale={locale as Locale}>
      <SetHtmlLang locale={locale} />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </DictionaryProvider>
  );
}
