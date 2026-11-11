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
const areasEl = document.getElementById('areas');
if (areasEl) areasEl.innerHTML = AREAS.map(a =>
  `<a class="area-card" href="practice-areas/${a.slug}.html">
    <b>${esc(a.name)}</b>
    <span>${esc(a.short)}</span>
    <span class="area-card-cta">Learn more &rarr;</span>
  </a>`
).join('');

// Populate the contact form select
const subjectEl = document.getElementById('subject');
if (subjectEl) subjectEl.innerHTML = '<option value="">Select a practice area</option>' +
  AREAS.map(a => `<option>${esc(a.name)}</option>`).join('') + '<option>Other</option>';

const yrEl = document.getElementById('yr');
if (yrEl) yrEl.textContent = new Date().getFullYear();
const btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
if (btn && nav) {
  btn.addEventListener('click', () => btn.setAttribute('aria-expanded', nav.classList.toggle('open')));
  nav.addEventListener('click', e => { if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); } });
}

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

// Make sure "Home" is the first item in the header nav on every page.
if (nav && !nav.querySelector('[data-home]') && !Array.from(nav.querySelectorAll('a')).some(a => a.textContent.trim() === 'Home')) {
  const home = document.createElement('a');
  home.textContent = 'Home';
  home.href = '/';
  home.setAttribute('data-home', '');
  nav.insertBefore(home, nav.firstChild);
}

// ── Interactive Consultation Wizard Controller ─────────────────
(function initConsultationWizard() {
  const wizardForm = document.getElementById('consult-wizard');
  if (!wizardForm) return;

  const areasGrid = document.getElementById('wizard-areas-grid');
  const hiddenAreaInput = document.getElementById('hidden-practice-area');
  const hiddenContactInput = document.getElementById('hidden-preferred-contact');
  const hiddenSubjectInput = document.getElementById('wizard-form-subject');
  const hiddenWaLink = document.getElementById('hidden-wa-link');

  const stepTag = document.getElementById('wizard-step-tag');
  const stepName = document.getElementById('wizard-step-name');
  const progressBar = document.getElementById('wizard-progress-bar');
  const steps = wizardForm.querySelectorAll('.wizard-step');
  const step1NextBtn = document.getElementById('step1-next');
  const step2NextBtn = document.getElementById('step2-next');
  const messageInput = document.getElementById('wizard-message');
  const tagsLabel = document.getElementById('wizard-tags-label');
  const quickTagsContainer = document.getElementById('wizard-quick-tags');
  const channelOptions = wizardForm.querySelectorAll('.wizard-channel-option');
  const step4Heading = document.getElementById('step4-heading');
  const fieldPhoneLabel = document.getElementById('field-phone-label');
  const fieldEmailLabel = document.getElementById('field-email-label');
  const nameInput = document.getElementById('wizard-name');
  const phoneInput = document.getElementById('wizard-phone');
  const emailInput = document.getElementById('wizard-email');
  const consentInput = document.getElementById('wizard-consent');
  const submitBtn = document.getElementById('wizard-submit-btn');
  const alertMsg = document.getElementById('wizard-alert-msg');
  const successCard = document.getElementById('wizard-success-card');
  const successBodyText = document.getElementById('success-body-text');
  const successWaBox = document.getElementById('success-wa-box');
  const successWaBtn = document.getElementById('success-wa-btn');
  const resetBtn = document.getElementById('wizard-reset-btn');

  let currentStep = 1;
  const totalSteps = 4;
  const stepTitles = {
    1: 'Practice Area',
    2: 'Matter Overview',
    3: 'Contact Preference',
    4: 'Your Details'
  };

  // Smart topic suggestions and contextual placeholders mapped to each practice area
  const PRACTICE_AREA_TOPICS = {
    "aviation": {
      topics: [
        "Aircraft leasing & financing",
        "KCAA regulatory compliance",
        "Carrier liability & cargo claims",
        "Aviation accident litigation",
        "Drone & UAV regulatory advisory"
      ],
      placeholder: "e.g. We are negotiating an aircraft dry lease and need regulatory compliance review under KCAA regulations..."
    },
    "corporate-commercial": {
      topics: [
        "Company incorporation & setup",
        "Shareholder & JV agreements",
        "Mergers & acquisitions (M&A)",
        "Commercial contract drafting",
        "Corporate governance & compliance"
      ],
      placeholder: "e.g. We are incorporating a Kenyan company and need shareholder agreements and founding contracts drafted..."
    },
    "dispute-resolution": {
      topics: [
        "Commercial court litigation",
        "Arbitration & ADR",
        "Debt recovery & enforcement",
        "Injunctions & urgent court orders",
        "Tribunal representation"
      ],
      placeholder: "e.g. We have an ongoing commercial dispute regarding unpaid supplies and require litigation representation in court..."
    },
    "employment-labour": {
      topics: [
        "Employment contracts & policies",
        "Unfair termination & redundancy",
        "Workplace dispute defence",
        "Executive exit & severance",
        "Labour law compliance audit"
      ],
      placeholder: "e.g. We are restructuring our staff and need legal guidance on fair redundancy procedures under Kenyan labour law..."
    },
    "real-estate": {
      topics: [
        "Property purchase or sale",
        "Title search & due diligence",
        "Commercial & residential leases",
        "Land transfer & registration",
        "Construction contracts & planning"
      ],
      placeholder: "e.g. We are acquiring land in Nairobi and require thorough title deed search, sale agreement drafting, and transfer registration..."
    },
    "banking-finance": {
      topics: [
        "Loan facility agreements",
        "Security creation & debentures",
        "Corporate guarantees & charges",
        "Debt restructuring",
        "Banking & CBK regulatory compliance"
      ],
      placeholder: "e.g. We are securing a credit facility and need legal review of the loan agreement, charge documentation, and debentures..."
    },
    "ip-technology": {
      topics: [
        "Trademark registration & protection",
        "Software licensing & SaaS agreements",
        "Data protection & privacy audit",
        "Patent & copyright advisory",
        "Fintech & startup structuring"
      ],
      placeholder: "e.g. We are launching a digital platform in Kenya and need our trademark registered and data privacy terms drafted under the Data Protection Act..."
    },
    "family-succession": {
      topics: [
        "Wills & estate planning",
        "Probate & estate administration",
        "Matrimonial property division",
        "Child custody & maintenance",
        "Divorce & separation agreement"
      ],
      placeholder: "e.g. We need confidential advice on estate succession planning and drafting a comprehensive family trust and will..."
    },
    "immigration": {
      topics: [
        "Work permits (Class D / G)",
        "Dependent & student passes",
        "Dual citizenship & naturalisation",
        "Permanent residency application",
        "Special passes & foreign investor visas"
      ],
      placeholder: "e.g. Our international directors require Class D work permits and dependent passes for their families in Kenya..."
    },
    "tax": {
      topics: [
        "KRA tax dispute & appeal tribunal",
        "Corporate tax advisory",
        "VAT & withholding tax review",
        "Transaction & M&A tax planning",
        "Tax exemption & compliance"
      ],
      placeholder: "e.g. We have received an assessment from the Kenya Revenue Authority and need advocate representation before the Tax Appeals Tribunal..."
    },
    "energy-projects": {
      topics: [
        "Power Purchase Agreements (PPA)",
        "Renewable energy licensing (EPRA)",
        "EPC & construction contracts",
        "Public-Private Partnerships (PPP)",
        "Environmental compliance advisory"
      ],
      placeholder: "e.g. We are developing a solar energy project and need PPA drafting and EPRA regulatory licensing advisory..."
    },
    "constitutional-administrative": {
      topics: [
        "Constitutional petition",
        "Judicial review against public bodies",
        "Public procurement dispute (PPARB)",
        "Statutory compliance challenge",
        "Regulatory enforcement defence"
      ],
      placeholder: "e.g. We are seeking judicial review against a regulatory agency's administrative decision affecting our operating licence..."
    },
    "competition-antitrust": {
      topics: [
        "CAK merger control notification",
        "Restrictive trade practices review",
        "Abuse of buyer power defence",
        "Consumer protection compliance",
        "Competition compliance audit"
      ],
      placeholder: "e.g. We are completing an acquisition and require merger notification filing with the Competition Authority of Kenya (CAK)..."
    },
    "insolvency-restructuring": {
      topics: [
        "Corporate debt restructuring",
        "Company administration & workouts",
        "Liquidation & winding-up petitions",
        "Receivership advisory",
        "Creditor representation"
      ],
      placeholder: "e.g. We are advising a company undergoing financial distress and require restructuring advisory and negotiated creditor workouts..."
    },
    "private-client": {
      topics: [
        "Family trust structuring",
        "High-net-worth estate preservation",
        "Cross-border asset protection",
        "Family office legal governance",
        "Asset transfer & succession"
      ],
      placeholder: "e.g. We require bespoke advisory on establishing a private family trust and offshore asset protection structuring..."
    },
    "other": {
      topics: [
        "Contract drafting & review",
        "Urgent legal advisory",
        "Pending dispute or negotiation",
        "Regulatory compliance check",
        "General legal consultation"
      ],
      placeholder: "e.g. Briefly describe your situation, goals, or any upcoming deadlines..."
    }
  };

  function updateSmartTopics(slug, name) {
    const config = PRACTICE_AREA_TOPICS[slug] || PRACTICE_AREA_TOPICS["other"];
    if (tagsLabel) {
      if (name && slug !== 'other') {
        tagsLabel.textContent = `Suggested topics for ${name} (click to add):`;
      } else {
        tagsLabel.textContent = 'Quick topics (click to add):';
      }
    }
    if (messageInput && config.placeholder) {
      messageInput.placeholder = config.placeholder;
    }
    if (quickTagsContainer && config.topics) {
      quickTagsContainer.innerHTML = config.topics.map(t => {
        return `<button type="button" class="wizard-tag" data-tag="${esc(t)}">${esc(t)}</button>`;
      }).join('');
    }
  }

  // 1. Populate Step 1 Practice Area Cards dynamically (Clean corporate typography, no emojis)
  if (areasGrid && typeof AREAS !== 'undefined') {
    const areasHtml = AREAS.map(a => {
      return `<button type="button" class="wizard-area-card" data-slug="${a.slug}" data-name="${esc(a.name)}">
        <span class="area-title">${esc(a.name)}</span>
      </button>`;
    }).join('') + `
      <button type="button" class="wizard-area-card" data-slug="other" data-name="Other / General Legal Matter">
        <span class="area-title">Other / Not Sure</span>
      </button>
    `;
    areasGrid.innerHTML = areasHtml;
  }

  function updateStepUI() {
    steps.forEach(s => {
      const stepNum = parseInt(s.dataset.step, 10);
      s.style.display = '';
      if (stepNum === currentStep) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
      }
    });

    if (stepTag) stepTag.textContent = `Question ${currentStep} of ${totalSteps}`;
    if (stepName) stepName.textContent = stepTitles[currentStep] || '';
    if (progressBar) {
      const pct = (currentStep / totalSteps) * 100;
      progressBar.style.width = `${pct}%`;
    }

    if (alertMsg) alertMsg.style.display = 'none';

    // Auto-focus input on step change
    if (currentStep === 2 && messageInput) {
      setTimeout(() => messageInput.focus(), 150);
    } else if (currentStep === 4 && nameInput) {
      setTimeout(() => nameInput.focus(), 150);
    }
  }

  function goToStep(n) {
    if (n < 1 || n > totalSteps) return;
    currentStep = n;
    updateStepUI();
  }

  // Reset wizard completely back to Question 1
  function resetWizardToStep1() {
    wizardForm.reset();
    hiddenAreaInput.value = '';
    hiddenContactInput.value = 'WhatsApp';

    if (areasGrid) {
      areasGrid.querySelectorAll('.wizard-area-card').forEach(c => c.classList.remove('selected'));
    }
    channelOptions.forEach((o, i) => {
      if (i === 0) o.classList.add('selected');
      else o.classList.remove('selected');
    });

    if (step1NextBtn) step1NextBtn.setAttribute('disabled', 'true');
    if (alertMsg) alertMsg.style.display = 'none';
    if (successCard) successCard.style.display = 'none';

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<span>Book Consultation &rarr;</span>';
    }

    const headerEl = wizardForm.querySelector('.wizard-header');
    if (headerEl) headerEl.style.display = '';
    steps.forEach(s => s.style.display = '');

    updateSmartTopics('other', '');
    goToStep(1);
  }

  // Ensure clicking ANY "Book a consultation" link anywhere directs directly to Question 1
  document.querySelectorAll('a[href*="#contact"]').forEach(link => {
    link.addEventListener('click', () => {
      resetWizardToStep1();
    });
  });

  window.addEventListener('hashchange', () => {
    if (window.location.hash.includes('contact')) {
      resetWizardToStep1();
    }
  });

  // Next and Back navigation
  wizardForm.querySelectorAll('.wizard-btn-prev').forEach(btn => {
    btn.addEventListener('click', () => {
      goToStep(currentStep - 1);
    });
  });

  if (step1NextBtn) {
    step1NextBtn.addEventListener('click', () => {
      if (hiddenAreaInput.value) {
        goToStep(2);
      }
    });
  }

  if (step2NextBtn) {
    step2NextBtn.addEventListener('click', () => {
      if (!messageInput.value.trim()) {
        messageInput.focus();
        messageInput.style.borderColor = '#E05D5D';
        setTimeout(() => { messageInput.style.borderColor = ''; }, 2000);
        return;
      }
      goToStep(3);
    });
  }

  // Handle Practice Area selection
  if (areasGrid) {
    areasGrid.addEventListener('click', e => {
      const card = e.target.closest('.wizard-area-card');
      if (!card) return;

      areasGrid.querySelectorAll('.wizard-area-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');

      const chosenName = card.dataset.name;
      const chosenSlug = card.dataset.slug || 'other';
      hiddenAreaInput.value = chosenName;
      if (step1NextBtn) step1NextBtn.removeAttribute('disabled');

      // Smart suggestions: dynamically update Step 2 topics and placeholder based on selected practice area
      updateSmartTopics(chosenSlug, chosenName);

      // Auto-advance after gentle delay
      setTimeout(() => {
        if (currentStep === 1) goToStep(2);
      }, 220);
    });
  }

  // Step 2 Quick Topic Tags
  if (quickTagsContainer) {
    quickTagsContainer.addEventListener('click', e => {
      const tagBtn = e.target.closest('.wizard-tag');
      if (!tagBtn) return;
      const tagText = tagBtn.dataset.tag;
      if (!tagText) return;

      tagBtn.classList.toggle('selected');

      if (!messageInput.value.trim()) {
        messageInput.value = tagText + ': ';
      } else if (!messageInput.value.includes(tagText)) {
        messageInput.value = messageInput.value.trim() + ' (' + tagText + ')';
      }
      messageInput.focus();
    });
  }

  // Step 3 Channel selection
  channelOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      channelOptions.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');

      const chosenChannel = opt.dataset.channel || 'WhatsApp';
      hiddenContactInput.value = chosenChannel;

      // Update Step 4 labels
      if (chosenChannel === 'WhatsApp') {
        if (step4Heading) step4Heading.textContent = 'Where should we WhatsApp you?';
        if (fieldPhoneLabel) fieldPhoneLabel.innerHTML = 'WhatsApp Number <strong class="req">*</strong>';
        if (fieldEmailLabel) fieldEmailLabel.innerHTML = 'Email address <strong class="req">*</strong>';
        if (phoneInput) phoneInput.placeholder = '+254 7XX XXX XXX';
      } else if (chosenChannel === 'Email') {
        if (step4Heading) step4Heading.textContent = 'Where should we email you?';
        if (fieldPhoneLabel) fieldPhoneLabel.innerHTML = 'Phone / WhatsApp <strong class="req">*</strong>';
        if (fieldEmailLabel) fieldEmailLabel.innerHTML = 'Email address <strong class="req">*</strong>';
        if (phoneInput) phoneInput.placeholder = '+254 7XX XXX XXX';
      } else {
        if (step4Heading) step4Heading.textContent = 'What number should we call you on?';
        if (fieldPhoneLabel) fieldPhoneLabel.innerHTML = 'Phone number <strong class="req">*</strong>';
        if (fieldEmailLabel) fieldEmailLabel.innerHTML = 'Email address <strong class="req">*</strong>';
        if (phoneInput) phoneInput.placeholder = '+254 7XX XXX XXX';
      }

      // Auto-advance after brief pause
      setTimeout(() => {
        if (currentStep === 3) goToStep(4);
      }, 220);
    });
  });

  const step3NextBtn = wizardForm.querySelector('.wizard-step[data-step="3"] .wizard-btn-next');
  if (step3NextBtn) {
    step3NextBtn.addEventListener('click', () => goToStep(4));
  }

  // Form Submission via Formspree AJAX
  wizardForm.addEventListener('submit', async e => {
    e.preventDefault();

    if (!wizardForm.checkValidity()) {
      wizardForm.reportValidity();
      return;
    }

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();
    const area = hiddenAreaInput.value || 'General Enquiry';
    const channel = hiddenContactInput.value || 'WhatsApp';
    const message = messageInput.value.trim();

    // Format Formspree email subject for the advocates
    if (hiddenSubjectInput) {
      hiddenSubjectInput.value = `New Consultation Request: ${area} - ${name} (Prefers ${channel})`;
    }

    // Direct WhatsApp click link for the advocates in their notification email
    const cleanPhoneDigits = phone.replace(/[^0-9]/g, '');
    if (hiddenWaLink && cleanPhoneDigits) {
      hiddenWaLink.value = `https://wa.me/${cleanPhoneDigits}`;
    }

    // Submit button loading state
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Sending Request...</span>';
    if (alertMsg) alertMsg.style.display = 'none';

    try {
      const formData = new FormData(wizardForm);
      const res = await fetch(wizardForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (res.ok) {
        // Success state
        wizardForm.querySelectorAll('.wizard-step, .wizard-header').forEach(el => el.style.display = 'none');
        if (successCard) successCard.style.display = 'block';

        if (successBodyText) {
          successBodyText.textContent = `Thank you, ${name}! Your consultation request regarding ${area} has been emailed directly to our senior partners. Trevis Njoroge Wamwiri or Wantahe Elijah Chacha will review your file and respond via ${channel} within one business day.`;
        }

        // Configure direct WhatsApp quick-chat link
        if (successWaBtn) {
          const waText = encodeURIComponent(`Hello C&W Advocates, I just booked a consultation on your website for ${area}.\n\nName: ${name}\nMatter: ${message}`);
          successWaBtn.href = `https://wa.me/254769465707?text=${waText}`;
        }
      } else {
        const data = await res.json().catch(() => ({}));
        throw new Error((data && data.errors && data.errors.map(err => err.message).join(', ')) || 'Failed to submit form.');
      }
    } catch (err) {
      // If fetch fails (network/adblocker), gracefully submit via standard HTML POST
      console.warn('Formspree AJAX error, falling back to standard submit:', err);
      wizardForm.submit();
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });

  // Reset / submit another enquiry -> Always returns cleanly to Question 1
  if (resetBtn) {
    resetBtn.addEventListener('click', e => {
      e.preventDefault();
      resetWizardToStep1();
      const contactSec = document.getElementById('contact');
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Initial step setup: always start on Question 1
  resetWizardToStep1();
})();