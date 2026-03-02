export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-serif text-3xl leading-tight text-foreground">
        Terms of Service
      </h1>
      <p className="mt-3 text-sm text-foreground/60">
        Last updated: 2024
      </p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-foreground/80">
        <p>
          These Terms of Service (&quot;Terms&quot;) govern participation in and
          use of the Lady Angel Network (&quot;LAN&quot;) platform. By applying
          for membership or engaging with LAN activities, you agree to these
          Terms.
        </p>

        <section>
          <h2 className="font-semibold text-foreground">
            1. Nature of the Network
          </h2>
          <p>
            LAN is a private, invitation-only member network through which
            individual members invest their own personal funds in
            women-led businesses. LAN itself is not a bank, collective
            investment scheme, or public fundraising vehicle.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">
            2. Membership Obligations
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              Maintain the confidentiality of all deal, founder, and member
              information shared through LAN.
            </li>
            <li>
              Commit to at least one investment within a two-year period,
              subject to your own independent assessment.
            </li>
            <li>
              Contribute mentoring, coaching, or board-level support to
              founders where reasonably possible.
            </li>
            <li>
              Pay any applicable membership subscriptions or fees on time.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">
            3. No Advice, No Guaranteed Returns
          </h2>
          <p>
            LAN may facilitate sharing of information, analysis, and viewpoints
            between members, but does not provide personalised investment,
            legal, tax, or financial advice. Each member is solely responsible
            for their own decisions and should obtain independent professional
            advice where appropriate.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">
            4. Code of Conduct
          </h2>
          <p>
            Members are expected to uphold high standards of professional
            conduct, including fairness, non-discrimination, respect for
            founders and fellow members, and adherence to applicable laws
            and regulations in their jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">
            5. Changes to These Terms
          </h2>
          <p>
            LAN may update these Terms from time to time to reflect changes in
            operations, regulation, or best practice. Material changes will
            be communicated to members using the contact details on file.
          </p>
        </section>
      </div>
    </div>
  );
}

