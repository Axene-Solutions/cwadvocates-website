const AREAS = [
  {
    slug: "corporate-commercial",
    name: "Corporate & Commercial",
    short: "Formation, governance, transactions and the agreements that hold a business together.",
    detail: "We handle company incorporation and business registration, board and shareholder advisory, corporate governance and compliance, mergers and acquisitions, joint ventures, shareholder agreements, capital markets transactions and general commercial contracting. Our work spans the full lifecycle of a business, from the founding documents that set the terms of ownership to the transaction agreements that carry it into its next stage."
  },
  {
    slug: "dispute-resolution",
    name: "Dispute Resolution & Litigation",
    short: "Representation before Kenyan courts and tribunals, and negotiated resolution where it serves the client better.",
    detail: "We appear before the Small Claims Court, Magistrates' Courts, the High Court, the Court of Appeal and the Supreme Court, as well as specialised tribunals. Our practice covers commercial and civil litigation, constitutional petitions, judicial review and arbitration and alternative dispute resolution, including construction and commercial arbitrations. Where negotiation, mediation or settlement serves the client's interests better than a judgment, we pursue it with the same rigour."
  },
  {
    slug: "employment-labour",
    name: "Employment & Labour",
    short: "Workplace policy, contracts, and representation in employment disputes for employers and senior staff.",
    detail: "We draft employment contracts, workplace policies, redundancy and termination procedures and collective bargaining agreements. We advise employers on compliance with Kenyan labour law and represent them before the Employment and Labour Relations Court. For senior staff and executives, we advise on executive contracts, exit arrangements and disputes."
  },
  {
    slug: "real-estate",
    name: "Real Estate & Conveyancing",
    short: "Title, transfer and development matters across residential and commercial property.",
    detail: "We conduct title searches and due diligence, and handle transfers, charges and mortgages, leases and licences for residential and commercial property. Our development work covers land use planning, construction contracts and the structuring of property transactions from acquisition through to disposal."
  },
  {
    slug: "banking-finance",
    name: "Banking & Finance",
    short: "Facility agreements, security structuring and regulatory matters for lenders and borrowers.",
    detail: "We act for lenders and borrowers on facility agreements, security documentation, including debentures, charges and guarantees, and regulatory compliance. Our practice extends to project finance and structured finance for infrastructure and large-scale transactions."
  },
  {
    slug: "ip-technology",
    name: "Intellectual Property & Technology",
    short: "Protection, licensing and commercial structuring for brands, platforms and products.",
    detail: "We handle trademark and patent registration, licensing and technology transfer, and advise on the commercial structuring of brands, platforms and products. Our technology work includes data protection and privacy compliance under the Data Protection Act, and advisory for tech platforms and fintech products."
  },
  {
    slug: "family-succession",
    name: "Family & Succession",
    short: "Estate planning, succession and family matters handled with the discretion they require.",
    detail: "We advise on estate planning, including wills and trusts, probate and administration, and family law matters including divorce, custody and matrimonial property. These are private matters, and we handle them with the discretion and sensitivity they require."
  },
  {
    slug: "constitutional-administrative",
    name: "Constitutional & Administrative",
    short: "Public law matters, judicial review and representation before regulatory bodies.",
    detail: "We handle public law litigation, constitutional petitions and judicial review applications, and represent clients before regulatory bodies. We also advise public entities and private clients on their interactions with government regulators."
  },
  {
    slug: "tax",
    name: "Tax",
    short: "Corporate tax, VAT, tax disputes and transaction planning.",
    detail: "We advise on corporate tax, VAT and tax planning for transactions, and represent clients in disputes with the Kenya Revenue Authority. Tax considerations are built into our transaction work from the outset rather than treated as an afterthought."
  },
  {
    slug: "energy-projects",
    name: "Energy, Projects & Infrastructure",
    short: "Project development, power purchase agreements and construction contracts.",
    detail: "Kenya's energy and infrastructure sector is active across renewable energy, geothermal, solar and wind, as well as transport and water projects. We advise on project development, power purchase agreements, construction contracts and the regulatory framework governing these projects."
  },
  {
    slug: "immigration",
    name: "Immigration",
    short: "Work permits, dependent passes and citizenship matters.",
    detail: "We assist corporate clients and individuals with work permits, dependent passes and citizenship matters, coordinating with the relevant Kenyan authorities to keep timelines predictable."
  },
  {
    slug: "competition-antitrust",
    name: "Competition & Antitrust",
    short: "Merger control filings and competition law compliance.",
    detail: "We advise on merger control filings with the Competition Authority of Kenya and on compliance with competition law. This work is closely integrated with our M&A practice, where competition clearance is often a condition of closing."
  },
  {
    slug: "insolvency-restructuring",
    name: "Insolvency & Restructuring",
    short: "Representation of creditors, debtors and administrators in insolvency and restructuring.",
    detail: "We represent creditors, debtors and administrators in insolvency proceedings and receiverships, and advise on corporate restructuring. Our work covers both formal insolvency processes and negotiated workouts."
  },
  {
    slug: "aviation",
    name: "Aviation",
    short: "Aircraft financing and leasing, regulatory compliance and accident litigation.",
    detail: "Kenya's position as a regional aviation hub supports a distinct aviation practice. We advise on aircraft financing and leasing, regulatory compliance and accident litigation."
  },
  {
    slug: "private-client",
    name: "Private Client & Wealth Management",
    short: "Trusts, structuring and wealth preservation for high-net-worth individuals.",
    detail: "Beyond family and succession, we advise high-net-worth individuals on trusts, offshore structuring and wealth preservation, work that is distinct from general family law and demands its own discipline."
  }
];

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

// Render practice area cards with links to individual pages
document.getElementById('areas').innerHTML = AREAS.map(a =>
  `<a class="area-card" href="practice-areas/${a.slug}.html">
    <b>${esc(a.name)}</b>
    <span>${esc(a.short)}</span>
    <span class="area-card-cta">Learn more &rarr;</span>
  </a>`
).join('');

// Populate the contact form select
document.getElementById('subject').innerHTML = '<option value="">Select a practice area</option>' +
  AREAS.map(a => `<option>${esc(a.name)}</option>`).join('') + '<option>Other</option>';

document.getElementById('yr').textContent = new Date().getFullYear();
const btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
btn.addEventListener('click', () => btn.setAttribute('aria-expanded', nav.classList.toggle('open')));
nav.addEventListener('click', e => { if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); } });

// Scroll-triggered animation for "Why work with us" cards
const whyCards = document.querySelectorAll('[data-why]');
if (whyCards.length && 'IntersectionObserver' in window) {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  whyCards.forEach(card => obs.observe(card));
} else {
  // Fallback: show cards immediately if IntersectionObserver not supported
  whyCards.forEach(card => card.classList.add('in-view'));
}

// Scroll-triggered reveal for the client reviews and chat bubbles.
// style.css hides .review/.chat (opacity: 0) until they get the "in" class.
const reviewCards = document.querySelectorAll('.review, .chat');
reviewCards.forEach((card, i) => card.style.setProperty('--d', (i % 3) * 0.12 + 's'));
if (reviewCards.length && 'IntersectionObserver' in window) {
  const reviewObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        reviewObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  reviewCards.forEach(card => reviewObs.observe(card));
} else {
  reviewCards.forEach(card => card.classList.add('in'));
}
