export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-muted/30 py-24 md:py-32 border-b border-border/40">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
        <div className="container relative mx-auto px-4 md:px-6 flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6 shadow-sm backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Last Updated: March 21, 2026
          </div>
          <h1 className="font-headline text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl mb-6">
            Privacy Policy
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            We are committed to protecting your privacy and keeping your data secure in accordance with international standards.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24 max-w-4xl">
        <div className="space-y-12 text-muted-foreground text-lg leading-relaxed">
          <div>
            <p className="text-foreground/90">
              Lioncode, a fully owned subsidiary of Ealop (PVT) Ltd (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), is committed to protecting your privacy and keeping your data secure in accordance with international standards. We enforce this policy subject to the Personal Data Protection Act, No. 9 of 2022 (PDPA) of Sri Lanka and the General Data Protection Regulation (GDPR) of the European Union.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
            <p className="mb-4">To provide our services with maximum quality, we collect the following information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personally Identifiable Information:</strong> Your name, email address, phone number, and designation.</li>
              <li><strong>Business Information:</strong> Business name, address, and content required for the website.</li>
              <li><strong>Technical Information:</strong> When you visit our website, your IP address, browser type, and browsing behavior on the website are automatically captured.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the collected information only for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide the website design and digital services you request and to execute contracts.</li>
              <li>To handle project-related communications, send billing, and confirm payments.</li>
              <li>To fulfill legal obligations and prevent fraud.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Data Retention Period</h2>
            <p>
              We store your personal data only for the period necessary to complete the relevant business activities. 5 years after the termination of business contracts or after the relevant legal period, we will securely and permanently delete (Delete/Anonymize) that data from our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Children&apos;s Privacy - COPPA Compliance</h2>
            <p>
              Our services are not targeted at children under 13 years of age. Therefore, we do not knowingly collect data from anyone under 13. If it is confirmed that we have received such data, we will immediately take steps to delete it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Breach Procedures</h2>
            <p>
              We use SSL and advanced software security systems to prevent misuse, alteration, or destruction of your data in our possession. However, if a cyber attack or Data Breach occurs, Lioncode is legally obligated to inform the relevant legal authorities and affected customers within 72 hours of its discovery.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Information Sharing</h2>
            <p>
              We do not sell your personal data to any marketing agency. However, data may only be shared under strict confidentiality agreements with web hosting providers and legitimate payment gateways essential to maintaining our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Data Rights - GDPR &amp; PDPA</h2>
            <p className="mb-4">You are legally entitled to the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To access your data in our possession and obtain a copy of it.</li>
              <li>To request the correction of incorrect data.</li>
              <li>To request the complete deletion of your data from our systems (Right to be forgotten).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact Us</h2>
            <p className="mb-4">If you have any issues regarding this privacy policy or wish to make a request regarding your data, please contact us via the following details:</p>
            <ul className="list-none space-y-2">
              <li><strong>Email:</strong> Send us an email for inquiries - info@lioncode.tech</li>
              <li><strong>Phone:</strong> Give us a call during business hours - +94 72 621 1888</li>
              <li><strong>Address:</strong> Ealop (PVT) Ltd, 906/1, New Town, Digana, Rajawella.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
