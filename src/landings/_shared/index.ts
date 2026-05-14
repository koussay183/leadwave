/**
 * Shared landing-page primitives.
 *
 * Use these to keep every landing visually consistent. The convention is:
 *
 *   <LandingHeader anchors={[…]} />
 *   <main>
 *     <Section ariaLabelledBy="…">              // hero (custom layout)
 *       …
 *     </Section>
 *
 *     <Section tone="surface" compact>          // stats strip
 *       <StatsStrip stats={[…]} />
 *     </Section>
 *
 *     <Section ariaLabelledBy="x-h2">
 *       <SectionHeader id="x-h2" eyebrow="…" title="…" lead="…" />
 *       <div className="mt-10 sm:mt-12 grid …">
 *         <Card>…</Card> | <PhotoCard photo={…}>…</PhotoCard>
 *       </div>
 *     </Section>
 *
 *     // Alternate tone="white" ↔ tone="surface" only — avoid 3+ tones in one page.
 *
 *     <Section tone="surface">                  // FAQ
 *       <SectionHeader … />
 *       <Accordion items={[…]} />
 *     </Section>
 *
 *     <FinalCta title="…" ctaLabel="…" />
 *   </main>
 *   <LandingFooter />
 */
export { Section, SectionHeader } from "./Section";
export { Card, PhotoCard, IconTile } from "./Card";
export { StatsStrip } from "./StatsStrip";
export { Accordion, type AccordionItemData } from "./Accordion";
export { LandingHeader, FinalCta, LandingFooter } from "./LandingChrome";
