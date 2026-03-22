export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            Please read these terms and conditions carefully before using our digital services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24 max-w-4xl">
        <div className="space-y-12 text-muted-foreground text-lg leading-relaxed">
          <div>
            <p className="text-foreground/90">
              Welcome to Lioncode, a fully owned subsidiary of Ealop (PVT) Ltd. By accessing our website (lioncode.tech) or obtaining our digital services, you legally agree to be bound by the following terms and conditions.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Provision of Services</h2>
            <p>
              Every project (website design, maintenance, etc.) provided by Lioncode is subject to a separate &quot;Service Level Agreement&quot; (SLA) signed between us and the client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Payments, Late Fees &amp; Abandoned Projects</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Advance Payment:</strong> The advance payment obtained before starting a project is non-refundable for any reason.</li>
              <li><strong>Late Fees:</strong> The client is obligated to settle the final invoices within 7 days of project completion. If the payment is not completed by the due date, a 5% late fee of the total remaining balance will be added for every week of delay.</li>
              <li><strong>Ghosting/Abandoned Projects:</strong> If there is no response from the client regarding required information or final payments for more than 45 days, we reserve the full right to consider the project completely abandoned and delete it from our servers. To reactivate it, new payments must be made under a new agreement.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Intellectual Property &amp; Portfolio Rights</h2>
            <p>
              According to the service agreement, the ownership of the website will be transferred to the client after the final payment for the project is completed. However, Lioncode retains the full and irrevocable right to display the website or system created by us for our corporate marketing purposes and in our &quot;Portfolio&quot;.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Third-Party Licenses &amp; Renewals</h2>
            <p>
              All annual renewal fees (for Premium software, Plugins/Themes, Domain names, and web hosting services used for the website) that occur after the initial period (usually one year) must be borne directly by the client. We are not responsible for system failures caused by the default of such payments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Lioncode or Ealop (PVT) Ltd shall not be financially or legally responsible for any loss of revenue, data loss, server downtimes, or hacking resulting from the use of our services. Our maximum liability limit is restricted solely to the total amount paid by the customer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Dispute Resolution</h2>
            <p>
              If any legal dispute arises in connection with this agreement, both parties must agree to resolve the issue through discussion or independent Arbitration before directly preceding to judicial action.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact Us</h2>
            <p className="mb-4">If you wish to make an inquiry regarding these terms of service, please contact us:</p>
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
