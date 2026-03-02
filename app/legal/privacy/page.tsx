export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-serif text-3xl leading-tight text-foreground">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-foreground/60">
        Last updated: 2024
      </p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-foreground/80">
        <p>
          Lady Angel Network (&quot;LAN&quot;, &quot;we&quot;, &quot;us&quot;)
          is a private member network of women investors supporting
          women-led businesses. This Privacy Policy explains how we collect,
          use, and safeguard personal information relating to our members,
          prospective members, founders, and partners.
        </p>

        <section>
          <h2 className="font-semibold text-foreground">1. Scope</h2>
          <p>
            This Policy applies to information collected through our website,
            application forms, email communications, and other channels used
            in the operation of the LAN network and its investment activities.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">
            2. Information We Collect
          </h2>
          <p>We may collect the following categories of information:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <span className="font-medium">Member information:</span> name,
              contact details, professional background, investment profile,
              and mentoring interests.
            </li>
            <li>
              <span className="font-medium">Founder information:</span>{" "}
              company details, pitch materials, financial and operational data
              submitted for evaluation.
            </li>
            <li>
              <span className="font-medium">Operational data:</span> meeting
              notes, diligence reports, and committee decisions relating to
              specific opportunities.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">
            3. How We Use Information
          </h2>
          <p>We use personal information to:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Assess membership applications and maintain member records.</li>
            <li>Evaluate, structure, and monitor investment opportunities.</li>
            <li>
              Coordinate mentoring, bootcamps, and other LAN programmes for
              founders.
            </li>
            <li>
              Comply with legal, regulatory, and governance obligations
              applicable to private investment networks.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">
            4. Data Sharing and Confidentiality
          </h2>
          <p>
            LAN does not sell personal data. Information may be shared
            internally with members, committees, and advisors strictly on a
            need-to-know basis to evaluate and support investment opportunities.
            Where required, data may be shared with legal, tax, or regulatory
            advisors subject to confidentiality obligations.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">
            5. Data Security and Retention
          </h2>
          <p>
            We implement technical and organisational measures to protect
            information from unauthorised access, loss, or misuse. Data is
            retained only for as long as necessary to fulfil the purposes
            described above or to comply with applicable laws and regulations.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">
            6. Your Rights
          </h2>
          <p>
            Depending on your jurisdiction, you may have rights to access,
            correct, or request deletion of your personal data, or to object to
            certain forms of processing. To exercise these rights, please
            contact LAN using the details provided on our website.
          </p>
        </section>
      </div>
    </div>
  );
}

