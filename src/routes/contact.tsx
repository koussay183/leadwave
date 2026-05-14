import { Layout } from "@/components/site/Layout";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import contact from "@/assets/contact-illustration.png";

export default function Contact() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);

  const infoCards = [
    { i: Mail, t: t("contact.email_label"), v: "info@leadwave.tn", c: "var(--brand-blue)" },
    { i: Phone, t: t("contact.phone_label"), v: "+216 28 776 710", c: "var(--brand-red)" },
    { i: MapPin, t: t("contact.address_label"), v: t("contact.address_value"), c: "var(--brand-yellow)" },
  ];

  const contactDetails = [
    { i: MapPin, t: t("contact.location_label"), v: t("contact.location_value"), c: "var(--brand-red)" },
    { i: Phone, t: t("contact.call_label"), v: "+216 28 776 710", c: "var(--brand-blue)" },
    { i: Mail, t: t("contact.email_send_label"), v: "info@leadwave.tn", c: "var(--brand-yellow)" },
  ];

  return (
    <Layout>
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="blob bg-[var(--brand-yellow)] w-72 h-72 -top-10 right-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="animate-fade-up">
            <span className="chip">{t("contact.chip")}</span>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold leading-tight">
              {t("contact.title_1")} <span className="text-[var(--brand-blue)]">{t("contact.title_highlight")}</span>{t("contact.title_2")}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">{t("contact.description")}</p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {infoCards.map((x) => (
                <div key={x.t} className="rounded-2xl bg-white border border-border p-4">
                  <span className="h-10 w-10 grid place-items-center rounded-lg" style={{ background: `color-mix(in oklab, ${x.c} 18%, white)`, color: x.c }}><x.i size={18} /></span>
                  <div className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">{x.t}</div>
                  <div className="text-sm font-semibold">{x.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-float justify-self-center max-w-sm w-full">
            <div className="absolute inset-0 -z-10 rounded-[40%_60%_50%_50%/40%_40%_60%_60%] bg-[color-mix(in_oklab,var(--brand-blue)_18%,transparent)]" />
            <img src={contact} alt="Contactez LeadWave" className="w-full h-auto" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <span className="chip">{t("contact.more_chip")}</span>
            <h2 className="mt-3 text-3xl font-bold">{t("contact.more_title")}</h2>
          </div>
          <div className="space-y-4">
            {contactDetails.map((x) => (
              <div key={x.t} className="flex gap-4 p-4 rounded-2xl border border-border bg-card">
                <span className="h-12 w-12 grid place-items-center rounded-xl shrink-0" style={{ background: `color-mix(in oklab, ${x.c} 18%, white)`, color: x.c }}><x.i size={22} /></span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{x.t}</div>
                  <div className="text-sm font-semibold mt-1">{x.v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <form
          className="lg:col-span-3 rounded-3xl bg-card border border-border p-6 sm:p-10 space-y-5"
          style={{ boxShadow: "var(--shadow-soft)" }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        >
          <h3 className="text-2xl font-bold">{t("contact.form_title")}</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label={t("contact.field_name")} name="name" />
            <Field label={t("contact.field_email")} name="email" type="email" />
          </div>
          <Field label={t("contact.field_company")} name="company" />
          <div>
            <label className="text-sm font-semibold">{t("contact.field_message")}</label>
            <textarea required rows={5} className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-[var(--brand-blue)]" />
          </div>
          <button className="btn btn-primary w-full sm:w-auto">
            <Send size={16} /> {t("contact.submit")}
          </button>
          {sent && <p className="text-sm text-[var(--brand-blue)] font-semibold">{t("contact.success")}</p>}
        </form>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-sm font-semibold" htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} required className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-[var(--brand-blue)]" />
    </div>
  );
}
