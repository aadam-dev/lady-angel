export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-serif text-3xl leading-tight text-foreground">
        Investment Disclaimer
      </h1>
      <p className="mt-3 text-sm text-foreground/60">
        Last updated: 2024
      </p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-foreground/80">
        <section>
          <h2 className="font-semibold text-foreground">
            1. Nature of the Network and Investments
          </h2>
          <p className="mt-2">
            Lady Angel Network is a private member network. Investment involves
            risk. Members invest personal funds. LAN does not provide
            guaranteed returns.
          </p>
          <p className="mt-2">
            Any information shared through LAN, including pitch materials,
            financial models, or commentary from other members, is provided
            for discussion and diligence purposes only and does not constitute
            investment, legal, tax, or financial advice.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">
            2. No Offer or Solicitation
          </h2>
          <p>
            Nothing on this website or in LAN communications should be
            interpreted as a public offer, solicitation, or invitation to the
            general public to invest in any security or financial product.
            Opportunities are shared solely within the private LAN membership
            community.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">
            3. Risk of Loss
          </h2>
          <p>
            Investments in early-stage and growth companies are inherently
            risky and speculative. Investors may lose part or all of the
            capital invested and may not be able to liquidate their positions
            easily, if at all. Past performance of any company or member is not
            indicative of future results.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">
            4. Member Responsibility
          </h2>
          <p>
            Each member is responsible for performing their own independent
            due diligence and for making their own investment decisions. Where
            appropriate, members should consult independent professional
            advisors regarding legal, tax, regulatory, and financial
            implications before committing capital.
          </p>
        </section>
      </div>
    </div>
  );
}

