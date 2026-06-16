// Full landing page markup (Hinglish). Built as a string and rendered raw.
// Split across multiple parts for maintainability.

const HEADER = /* html */ `
<header class="site-header">
  <nav class="nav-pill" aria-label="Mukhya navigation">
    <a class="brand" href="#top" aria-label="Kisan Mitra home">
      <span class="brand-mark">क</span>
      <span class="brand-text">
        <span class="brand-name">Kisan Mitra</span>
        <span class="brand-sub">रूरल · ओएस</span>
      </span>
    </a>
    <div class="nav-links">
      <a href="#mission">Mission</a>
      <a href="#roles">Posts</a>
      <a href="#vacancies">Vacancies</a>
      <a href="#salary">Salary</a>
      <a href="#exam">Exam</a>
      <a href="#faq">FAQ</a>
    </div>
    <div class="nav-cta">
      <a href="#exam" class="btn btn-ghost">Pariksha Pattern</a>
      <a href="#apply" class="btn btn-primary">Form Bharein</a>
      <button id="hamburger" class="hamburger" aria-label="Menu kholein" aria-controls="mobileMenu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
</header>

<div id="menuOverlay" class="menu-overlay"></div>
<aside id="mobileMenu" class="mobile-menu" aria-label="Mobile menu">
  <button id="menuClose" class="menu-close" aria-label="Menu band karein">&times;</button>
  <a href="#mission">Mission <i class="fas fa-arrow-right"></i></a>
  <a href="#partnership">Partnership <i class="fas fa-arrow-right"></i></a>
  <a href="#roadmap">Roadmap <i class="fas fa-arrow-right"></i></a>
  <a href="#roles">Posts (VLE/VLM/TLO/DLO) <i class="fas fa-arrow-right"></i></a>
  <a href="#vacancies">Vacancies <i class="fas fa-arrow-right"></i></a>
  <a href="#salary">Salary <i class="fas fa-arrow-right"></i></a>
  <a href="#exam">Exam Pattern <i class="fas fa-arrow-right"></i></a>
  <a href="#prep">Taiyari <i class="fas fa-arrow-right"></i></a>
  <a href="#faq">FAQ <i class="fas fa-arrow-right"></i></a>
  <a href="#apply" class="btn btn-gold btn-block">Abhi Form Bharein</a>
</aside>
`;

const HERO = /* html */ `
<section class="hero" id="top">
  <div class="wrap">
    <div class="hero-grid">
      <div class="hero-copy reveal">
        <span class="kicker">Bharti Pariksha · 2026 · Uttar Pradesh</span>
        <h1>Apne gaon ke<br/>afsar bano.</h1>
        <p class="hero-subline">Kisan Mitra Village Officer Bharti — Gram Sevak &amp; Krishi Adhikari Pariksha.</p>
        <p class="hero-para">
          Apne hi gaon me reh kar, izzat ki salary wali naukri. Padhe-likhe gramin
          yuvaon ke liye ek samman-janak pariksha — chuno, train ho, aur apne gaon ke
          vikas ke afsar bano.
        </p>
        <div class="hero-actions">
          <a href="#apply" class="btn btn-primary">Form Bharein <i class="fas fa-arrow-right"></i></a>
          <a href="#exam" class="btn btn-ghost">Pariksha Pattern Dekho</a>
        </div>
        <div class="hero-stats">
          <div class="stat glass">
            <div class="stat-num" data-target="452">0</div>
            <div class="stat-label">Posts · Phase 1</div>
          </div>
          <div class="stat glass">
            <div class="stat-num" data-target="2">0</div>
            <div class="stat-label">Exams</div>
          </div>
          <div class="stat glass">
            <div class="stat-num" style="font-size:clamp(1.2rem,2.6vw,1.7rem)">&#8377;35k&ndash;80k</div>
            <div class="stat-label">Salary / month</div>
          </div>
          <div class="stat glass">
            <div class="stat-num" data-target="12">0</div>
            <div class="stat-label">Divisions</div>
          </div>
        </div>
      </div>
      <div class="hero-media reveal">
        <div class="km-img r-3xl ar-4-5">
          <img src="/static/img/hero-officer.webp" width="900" height="1125" alt="Gaon ka yuva Kisan Mitra officer khet me confident khada hai" loading="eager" fetchpriority="high" decoding="async" />
          <span class="img-chip tl"><i class="fas fa-location-dot"></i> Local posting · apne hi gaon me</span>
          <span class="img-chip br hide-xs"><i class="fas fa-shield-halved"></i> Computer-based · AI-proctored</span>
        </div>
      </div>
    </div>
  </div>
</section>
`;

export const PAGE_PARTS: string[] = [HEADER, HERO];

const MISSION = /* html */ `
<section class="section" id="mission">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="kicker">01 · Mission</span>
      <h2 class="display">Kisan Mitra kya hai?</h2>
      <p>
        Kisan Mitra ek poora "Rural Operating System" hai — gaon ke andar hi rozgaar,
        behtar kheti, aur tarakki ka mazboot dhaancha.
      </p>
    </div>
    <div class="split">
      <div class="reveal">
        <p class="lead" style="margin-bottom:18px">
          Hum gaon ke padhe-likhe yuvaon ko ek pariksha se chunte hain, train karte hain,
          aur unhe unke apne gaon ka officer bana dete hain. Yahi officer kisan ki har
          zaroorat — mitti-paani testing, sahi beej-khaad, machinery, drone, fasal ki
          kharid, storage, paani aur sarkaari yojnaon ka laabh — uske darwaaze tak
          pahunchata hai.
        </p>
        <p class="lead">
          Maqsad: youth ko shehar palayan se rokna, aur gaon me hi izzat ki naukri dena.
          <em>(Rajesh Kaithwas ji ke netritva me.)</em>
        </p>
        <div class="pill-cards">
          <span class="pill-card glass"><i class="fas fa-briefcase"></i> Employment generation</span>
          <span class="pill-card glass"><i class="fas fa-people-roof"></i> Palayan ka ant</span>
          <span class="pill-card glass"><i class="fas fa-seedling"></i> Farmer service</span>
          <span class="pill-card glass"><i class="fas fa-tractor"></i> Gaon ka vikas</span>
        </div>
      </div>
      <div class="split-media reveal">
        <div class="km-img r-3xl ar-4-3">
          <img src="/static/img/mission.webp" width="900" height="675" alt="Yuva Kisan Mitra officer ek budhe kisan ko tablet par jaankari dikhata hua" loading="lazy" decoding="async" />
          <span class="img-chip bl"><i class="fas fa-seedling"></i> Kisan ki seva, darwaaze tak</span>
        </div>
      </div>
    </div>
  </div>
</section>
`;

const PARTNERSHIP = /* html */ `
<section class="section section-dark has-bg-img" id="partnership">
  <img class="bg-photo" src="/static/img/partnership-camp.webp" width="1400" height="788" alt="Government kisan scheme camp me kisan registration karte hue" loading="lazy" decoding="async" aria-hidden="true" />
  <span class="bg-forest" aria-hidden="true"></span>
  <div class="wrap">
    <div class="section-head reveal">
      <span class="kicker">02 · Partnership</span>
      <h2 class="display">Sarkaar ki yojnaayein, har gaon tak.</h2>
    </div>
    <div class="reveal" style="max-width:820px">
      <p class="lead">
        Kisan Mitra, Uttar Pradesh ki government yojnaon ko zameen par har kisan tak
        pahunchane ke liye kaam karta hai. District administration, Krishi Vibhag/ATMA,
        agricultural universities, anganwadi aur gram panchayat ke saath milkar —
        PM-KISAN, fasal bima (PMFBY), Kisan Credit Card, PM-KUSUM solar pump, Jal Jeevan
        jaise scheme har eligible kisaan tak pahunchte hain. Aap, ek village officer ke
        roop me, isi mission ka chehra bante hain.
      </p>
      <div class="chips">
        <span class="chip dark"><i class="fas fa-building-columns"></i> District Administration</span>
        <span class="chip dark"><i class="fas fa-wheat-awn"></i> Krishi Vibhag (ATMA)</span>
        <span class="chip dark"><i class="fas fa-graduation-cap"></i> Agri-Universities (CSAUAT, NDUAT, SVPUAT, BUAT)</span>
        <span class="chip dark"><i class="fas fa-house-chimney"></i> Anganwadi / Gram Panchayat</span>
      </div>
      <p class="note-line" style="color:rgba(230,215,184,0.7);margin-top:24px">
        <i class="fas fa-circle-info"></i>
        Yeh ek sarkaari naukri nahi — balki government yojnaon ke saath milkar kaam karne
        wala ek partnership-based rural mission hai.
      </p>
    </div>
  </div>
</section>
`;

PAGE_PARTS.push(MISSION, PARTNERSHIP);

const ROADMAP = /* html */ `
<section class="section" id="roadmap">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="kicker">03 · Roadmap</span>
      <h2 class="display">Teen phase — 600 se 60,000 gaon tak.</h2>
    </div>
    <div class="timeline">
      <article class="tl-card glass reveal">
        <span class="dot"></span>
        <span class="tl-phase">Phase 1 · 2026</span>
        <h3>600 Gaon</h3>
        <p>12 division me pilot &amp; engine. <span class="tl-big">452</span> posts ke saath pehla batch.</p>
      </article>
      <article class="tl-card glass reveal">
        <span class="dot"></span>
        <span class="tl-phase">Phase 2 · 2027</span>
        <h3>6,000 Gaon</h3>
        <p>Scale-up phase. <span class="tl-big">4,000+</span> posts — system poore mandal me failta hai.</p>
      </article>
      <article class="tl-card glass reveal">
        <span class="dot"></span>
        <span class="tl-phase">Phase 3 · 2028 aage</span>
        <h3>60,000+ Gaon</h3>
        <p>Poore UP me. <span class="tl-big">45,000+</span> naukriyan — har gaon ka apna officer.</p>
      </article>
    </div>
    <p class="note-line reveal"><i class="fas fa-star"></i> Pehla batch banne ka matlab — itihaas ka hissa banna.</p>
    <div class="km-banner ar-21-9 reveal hide-xs">
      <img src="/static/img/roadmap-aerial.webp" width="1400" height="600" alt="Indian gaon ka aerial view — hare-bhare khet ka patchwork" loading="lazy" decoding="async" />
      <div class="banner-overlay"><span class="cap">600 → 6,000 → 60,000 gaon</span></div>
    </div>
  </div>
</section>
`;

const ROLES = /* html */ `
<section class="section section-sand" id="roles">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="kicker">04 · Posts</span>
      <h2 class="display">Char level, ek team.</h2>
      <p>VLE · VLM · TLO · DLO — gaon se division tak, ek poori officer chain.</p>
    </div>
    <div class="roles-grid">
      <article class="role-card glass has-img reveal">
        <div class="km-img r-t ar-16-9"><img src="/static/img/role-vle.webp" width="800" height="450" alt="Yuva VLE khet me mitti ka sample lete hue" loading="lazy" decoding="async" /></div>
        <div class="role-body">
          <span class="role-tag">VLE</span>
          <h3>Village Level Executive</h3>
          <p>3-gaon ke cluster ka mukhya kisan-sampark. Kaam: farmer enrollment, mitti ke
          sample lena, input/beej-khaad dena, fasal collection, rozana gaon ke daure.
          <strong>(Gram Sevak Pariksha se chune jaate hain.)</strong></p>
        </div>
      </article>
      <article class="role-card glass has-img reveal">
        <div class="km-img r-t ar-16-9"><img src="/static/img/role-vlm.webp" width="800" height="450" alt="VLM kisan se tablet par digital UPI payment lete hue" loading="lazy" decoding="async" /></div>
        <div class="role-body">
          <span class="role-tag">VLM</span>
          <h3>Village Level Manager</h3>
          <p>Cluster ka senior lead, VLE ke saath jodi me. Kaam: data/admin, device aur
          payments, shikayat nivaran, bank/panchayat se taalmel, monthly reporting.
          <strong>(VLM, VLE se senior aur zyada salary wala — dono ek hi Gram Sevak
          Pariksha se: top scorers → VLM, agle → VLE.)</strong></p>
        </div>
      </article>
      <article class="role-card glass has-img reveal">
        <div class="km-img r-t ar-16-9"><img src="/static/img/role-tlo.webp" width="800" height="450" alt="TLO field workers ki training meeting lete hue" loading="lazy" decoding="async" /></div>
        <div class="role-body">
          <span class="role-tag">TLO</span>
          <h3>Tehsil Leader Officer</h3>
          <p>~5 cluster / ~15 gaon ka supervisor. Kaam: bank camps, quality control, credit
          approvals, shikayat escalation, training.
          <strong>(Krishi Adhikari Pariksha se.)</strong></p>
        </div>
      </article>
      <article class="role-card glass has-img reveal">
        <div class="km-img r-t ar-16-9"><img src="/static/img/role-dlo.webp" width="800" height="450" alt="DLO desk par dashboard aur map review karte hue" loading="lazy" decoding="async" /></div>
        <div class="role-body">
          <span class="role-tag">DLO</span>
          <h3>Division Leader Officer</h3>
          <p>Poore division ka officer (1 per division). Kaam: partnerships, audits, bulk
          deals, P&amp;L, HQ reporting.
          <strong>(Krishi Adhikari Pariksha se.)</strong></p>
        </div>
      </article>
    </div>
    <div class="hierarchy reveal">
      <span class="hier-node hq">HQ</span>
      <span class="hier-arrow"><i class="fas fa-arrow-right-long"></i></span>
      <span class="hier-node">DLO</span>
      <span class="hier-arrow"><i class="fas fa-arrow-right-long"></i></span>
      <span class="hier-node">TLO</span>
      <span class="hier-arrow"><i class="fas fa-arrow-right-long"></i></span>
      <span class="hier-node">VLE + VLM</span>
    </div>
  </div>
</section>
`;

PAGE_PARTS.push(ROADMAP, ROLES);

const VACANCIES = /* html */ `
<section class="section" id="vacancies">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="kicker">05 · Vacancies</span>
      <h2 class="display">Phase 1 me 452 posts — poore UP me.</h2>
    </div>
    <div class="table-card glass reveal">
      <table class="data-table">
        <thead>
          <tr><th>Post</th><th>Pariksha</th><th>Posts (Phase 1)</th></tr>
        </thead>
        <tbody>
          <tr><td>VLE</td><td>Gram Sevak Pariksha</td><td class="num">200</td></tr>
          <tr><td>VLM</td><td>Gram Sevak Pariksha</td><td class="num">200</td></tr>
          <tr><td>TLO</td><td>Krishi Adhikari Pariksha</td><td class="num">40</td></tr>
          <tr><td>DLO</td><td>Krishi Adhikari Pariksha</td><td class="num">12</td></tr>
          <tr class="total-row"><td>Total</td><td></td><td class="num">452</td></tr>
        </tbody>
      </table>
    </div>
    <p class="note-line reveal"><i class="fas fa-location-dot"></i>
      12 division me faila hua — har division me lagbhag 37 posts. Forms target: ~22 lakh aavedan.
    </p>
    <div class="chips reveal">
      <span class="chip">Lucknow</span><span class="chip">Kanpur</span><span class="chip">Agra</span>
      <span class="chip">Meerut</span><span class="chip">Bareilly</span><span class="chip">Moradabad</span>
      <span class="chip">Varanasi</span><span class="chip">Prayagraj</span><span class="chip">Gorakhpur</span>
      <span class="chip">Ayodhya</span><span class="chip">Aligarh</span><span class="chip">Jhansi</span>
    </div>
  </div>
</section>
`;

const SALARY = /* html */ `
<section class="section section-sand" id="salary">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="kicker">06 · Salary</span>
      <h2 class="display">Izzat ki salary, poori suvidha.</h2>
    </div>
    <div class="table-card glass reveal">
      <table class="data-table">
        <thead>
          <tr><th>Post</th><th>Training/Provisioning (Mahina 1&ndash;4)</th><th>Full Salary (Mahina 5+)</th></tr>
        </thead>
        <tbody>
          <tr><td>VLE</td><td class="num">&#8377;15,000</td><td class="num">&#8377;35,000</td></tr>
          <tr><td>VLM</td><td class="num">&#8377;18,000</td><td class="num">&#8377;45,000</td></tr>
          <tr><td>TLO</td><td class="num">&#8377;22,000</td><td class="num">&#8377;60,000</td></tr>
          <tr><td>DLO</td><td class="num">&#8377;26,000</td><td class="num">&#8377;80,000</td></tr>
        </tbody>
      </table>
    </div>
    <p class="note-line reveal"><i class="fas fa-arrow-trend-up"></i> Rural market se 2&ndash;3 guna salary.</p>
    <div class="salary-feature reveal" style="margin-top:30px">
      <div class="km-img r-3xl ar-16-10">
        <img src="/static/img/salary-ev.webp" width="1000" height="625" alt="Kisan Mitra ka branded solar-roof electric scooter gaon ki sadak par" loading="lazy" decoding="async" />
        <span class="img-chip bl"><i class="fas fa-bolt"></i> Solar-roof EV · har officer ko</span>
      </div>
      <div>
        <h3 style="font-family:var(--serif);font-size:1.5rem;color:var(--forest);margin-bottom:10px">Branded Electric Vehicle</h3>
        <p style="color:var(--brown)">VLE/VLM ko solar-roof e-scooter, TLO/DLO ko EV car — kaam ke liye, gaon-gaon ghoomne ke liye, bina kisi petrol kharch ke. Har officer ki pehchaan.</p>
      </div>
    </div>
    <div class="card-grid reveal" style="margin-top:24px">
      <div class="feature-card glass"><div class="ic"><i class="fas fa-id-card"></i></div>
        <h3>Uniform + ID</h3><p>Official uniform aur photo ID card.</p></div>
      <div class="feature-card glass"><div class="ic"><i class="fas fa-tablet-screen-button"></i></div>
        <h3>Field Tablet/Device</h3><p>Kaam ke liye smart field device.</p></div>
      <div class="feature-card glass"><div class="ic"><i class="fas fa-bed"></i></div>
        <h3>Residential Training</h3><p>Hostel + khana included.</p></div>
      <div class="feature-card glass"><div class="ic"><i class="fas fa-gift"></i></div>
        <h3>Bonuses</h3><p>Attendance &#8377;2,000/quarter · enrollment &#8377;500 per 10 members · retention &#8377;10,000 after 2 saal · "Gram Shakti Champion" &#8377;25,000/saal.</p></div>
      <div class="feature-card glass"><div class="ic"><i class="fas fa-stairs"></i></div>
        <h3>Career Growth</h3><p>VLE → Senior VLE → TLO → DLO.</p></div>
      <div class="feature-card glass"><div class="ic"><i class="fas fa-scale-balanced"></i></div>
        <h3>Anti-corruption Support</h3><p>Grievance support + transparent system.</p></div>
    </div>
  </div>
</section>
`;

PAGE_PARTS.push(VACANCIES, SALARY);

const PROCESS = /* html */ `
<section class="section" id="process">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="kicker">07 · Process</span>
      <h2 class="display">Chayan kaise hoga — 5 simple kadam.</h2>
    </div>
    <div class="steps reveal">
      <div class="step"><div class="step-dot">1</div><h4>Form + KYC</h4><p>Aadhaar + OTP se register.</p></div>
      <div class="step"><div class="step-dot">2</div><h4>Computer-Based Exam</h4><p>Paas ke center par.</p></div>
      <div class="step"><div class="step-dot">3</div><h4>Result + Merit List</h4><p>Cut-off public.</p></div>
      <div class="step"><div class="step-dot">4</div><h4>Interview</h4><p>Panel ke saamne.</p></div>
      <div class="step"><div class="step-dot">5</div><h4>Training → Posting</h4><p>4 mahine, fir gaon.</p></div>
    </div>
    <p class="note-line reveal"><i class="fas fa-shield-halved"></i>
      Poori prakriya transparent — AI-proctored exam, merit list aur cut-off public.
    </p>
    <div class="km-banner ar-21-9 reveal hide-xs">
      <img src="/static/img/process-hall.webp" width="1400" height="600" alt="Exam hall me candidates computer terminals par baithe hue" loading="lazy" decoding="async" />
      <div class="banner-overlay" style="background:linear-gradient(180deg, rgba(31,58,46,0.6), rgba(31,58,46,0.62))"></div>
      <span class="banner-chip"><i class="fas fa-robot"></i> AI-proctored · transparent</span>
    </div>
  </div>
</section>
`;

const ELIGIBILITY = /* html */ `
<section class="section section-dark" id="eligibility">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="kicker">08 · Eligibility</span>
      <h2 class="display">Kya aap eligible hain?</h2>
      <p>Yeh yogyata indicative hai — exact umar/yogyata final notification me confirm hogi.</p>
    </div>
    <div class="roles-grid">
      <article class="role-card glass-dark reveal" style="padding:30px">
        <span class="role-tag">VLE / VLM</span>
        <h3 style="color:var(--cream);font-family:var(--serif);font-size:1.4rem;margin-bottom:10px">Gram Sevak Pariksha</h3>
        <p style="color:rgba(230,215,184,0.85)">Education: kam se kam 12th paas (graduate behtar). UP ka niwasi.
        Basic digital literacy + Hindi. Umar: 18&ndash;35 saal (aarakshit varg ko chhoot).</p>
      </article>
      <article class="role-card glass-dark reveal" style="padding:30px">
        <span class="role-tag">TLO / DLO</span>
        <h3 style="color:var(--cream);font-family:var(--serif);font-size:1.4rem;margin-bottom:10px">Krishi Adhikari Pariksha</h3>
        <p style="color:rgba(230,215,184,0.85)">Education: Graduate (Agriculture/Management behtar).
        Leadership/management aptitude. UP ka niwasi. Umar: 18&ndash;35 saal (chhoot ke saath).</p>
      </article>
    </div>
    <p class="note-line reveal" style="color:var(--gold);margin-top:24px"><i class="fas fa-hand-holding-heart"></i>
      SC/ST, gramin ladkiyan aur BPL parivaaron ke liye fee waiver / scholarship.
    </p>
    <p class="form-note reveal" style="color:rgba(230,215,184,0.6)">Note: Exact umar/yogyata final notification me confirm hogi.</p>
  </div>
</section>
`;

const EXAM = /* html */ `
<section class="section" id="exam">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="kicker">09 · Exam Pattern</span>
      <h2 class="display">Pariksha ka pattern.</h2>
    </div>
    <div class="km-img r-3xl ar-16-9 reveal" style="max-width:760px;margin-bottom:28px">
      <img src="/static/img/exam-terminal.webp" width="1000" height="563" alt="Candidate touchscreen terminal par webcam ke saath computer-based exam dete hue" loading="lazy" decoding="async" />
    </div>
    <div class="roles-grid">
      <article class="role-card glass reveal">
        <span class="role-tag">VLE / VLM</span>
        <h3>Gram Sevak Pariksha — Computer-based</h3>
        <p style="margin-bottom:14px">Samay: <strong>90 minute</strong> · Prashn: <strong>100 MCQ</strong> (1 ank) ·
        Negative: <strong>&minus;0.25</strong> per galat · Qualifying: <strong>60/100</strong> · Fee: <strong>&#8377;500</strong></p>
        <div class="chips" style="margin-top:6px">
          <span class="chip">GK · 25</span><span class="chip">Agriculture &amp; Rural Dev · 50</span>
          <span class="chip">Hindi · 15</span><span class="chip">Numerical · 10</span>
        </div>
      </article>
      <article class="role-card glass reveal">
        <span class="role-tag">TLO / DLO</span>
        <h3>Krishi Adhikari Pariksha — Computer-based</h3>
        <p style="margin-bottom:14px">Samay: <strong>120 minute</strong> · Prashn: <strong>150 MCQ</strong> (1 ank) +
        <strong>10 short-answer</strong> (2 ank) = <strong>170</strong> ·
        Negative: <strong>&minus;0.33</strong> per galat MCQ · Qualifying: <strong>100/170</strong> · Fee: <strong>&#8377;1,000</strong></p>
        <div class="chips" style="margin-top:6px">
          <span class="chip">GK · 30</span><span class="chip">Agri Policy · 40</span>
          <span class="chip">Leadership &amp; Mgmt · 40</span><span class="chip">Hindi · 20</span>
          <span class="chip">Case studies · 20</span><span class="chip">Essays · 10</span>
        </div>
      </article>
    </div>
    <p class="note-line reveal"><i class="fas fa-desktop"></i>
      Pariksha aapke paas ke center (govt school/college) me, secure computer terminal par,
      AI-proctored. Reschedule: &#8377;3,000 (ek baar, &ge;48 ghante pehle). Agar appear kiya par
      select nahi hue — agli baar 10% fee waiver.
    </p>
  </div>
</section>
`;

PAGE_PARTS.push(PROCESS, ELIGIBILITY, EXAM);

const SAMPLES = /* html */ `
<section class="section section-sand" id="samples">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="kicker">10 · Sample Paper</span>
      <h2 class="display">Kuch namune ke prashn.</h2>
      <p>Prashn par click karke jawab dekho.</p>
    </div>
    <div class="roles-grid" style="align-items:start">
      <div class="reveal">
        <h3 style="font-family:var(--serif);font-size:1.3rem;margin-bottom:14px;color:var(--forest)">Gram Sevak (VLE/VLM)</h3>
        <div class="accordion">
          <div class="acc-item glass"><button class="acc-head">UP me zyadatar faslon ke liye sahi soil pH range?<span class="acc-ico"><i class="fas fa-plus"></i></span></button><div class="acc-body"><div class="acc-body-inner"><span class="acc-answer">6.0&ndash;7.5</span></div></div></div>
          <div class="acc-item glass"><button class="acc-head">PM-KISAN me eligible kisaan ko saalana DBT kitna?<span class="acc-ico"><i class="fas fa-plus"></i></span></button><div class="acc-body"><div class="acc-body-inner"><span class="acc-answer">&#8377;6,000</span></div></div></div>
          <div class="acc-item glass"><button class="acc-head">KCC par &#8377;3 lakh tak fasal-loan ka byaaj lagbhag?<span class="acc-ico"><i class="fas fa-plus"></i></span></button><div class="acc-body"><div class="acc-body-inner"><span class="acc-answer">4%</span></div></div></div>
          <div class="acc-item glass"><button class="acc-head">MGNREGA saal me kitne din rozgaar guarantee karta hai?<span class="acc-ico"><i class="fas fa-plus"></i></span></button><div class="acc-body"><div class="acc-body-inner"><span class="acc-answer">100 din</span></div></div></div>
        </div>
      </div>
      <div class="reveal">
        <h3 style="font-family:var(--serif);font-size:1.3rem;margin-bottom:14px;color:var(--forest)">Krishi Adhikari (TLO/DLO)</h3>
        <div class="accordion">
          <div class="acc-item glass"><button class="acc-head">PMFBY me Kharif food/oilseed crop ke liye kisaan premium share max?<span class="acc-ico"><i class="fas fa-plus"></i></span></button><div class="acc-body"><div class="acc-body-inner"><span class="acc-answer">2%</span></div></div></div>
          <div class="acc-item glass"><button class="acc-head">TLO ka ek cluster target miss kar raha hai — pehla management kadam?<span class="acc-ico"><i class="fas fa-plus"></i></span></button><div class="acc-body"><div class="acc-body-inner"><span class="acc-answer">Data review + field visit (root cause dhoondho)</span></div></div></div>
          <div class="acc-item glass"><button class="acc-head">0.4% referral par &#8377;5 Cr KCC facilitate karne par income?<span class="acc-ico"><i class="fas fa-plus"></i></span></button><div class="acc-body"><div class="acc-body-inner"><span class="acc-answer">&#8377;2,00,000</span></div></div></div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

const INTERVIEW = /* html */ `
<section class="section" id="interview">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="kicker">11 · Interview</span>
      <h2 class="display">Interview kaise hoga.</h2>
    </div>
    <div class="split" style="margin-bottom:22px">
      <div class="split-media reveal">
        <div class="km-img r-3xl ar-4-3">
          <img src="/static/img/interview-panel.webp" width="800" height="600" alt="3-member panel ek yuva candidate ka interview lete hue" loading="lazy" decoding="async" />
        </div>
      </div>
      <div class="reveal">
        <p class="lead">Interview ek dostana, structured panel ke saamne hota hai — aapki samajh,
        leadership aur gaon-seva ki niyat dekhi jaati hai. Ghabrane ki zaroorat nahi.</p>
      </div>
    </div>
    <div class="roles-grid">
      <article class="role-card glass reveal">
        <span class="role-tag">VLE / VLM</span>
        <h3>Panel &amp; Weightage</h3>
        <p>Panel: 1 TLO + 1 DLO + 1 HR · <strong>15 minute</strong> ·
        Weightage: <strong>Exam 70% + Interview 30%</strong>.</p>
      </article>
      <article class="role-card glass reveal">
        <span class="role-tag">TLO / DLO</span>
        <h3>Panel &amp; Weightage</h3>
        <p>Panel: 1 DLO + 1 senior officer + 1 bahari expert (KVK scientist/bank manager) ·
        <strong>30 minute</strong> · Weightage: <strong>Exam 60% + Interview 40%</strong>.</p>
      </article>
    </div>
    <div class="feature-card glass reveal" style="margin-top:22px">
      <div class="ic"><i class="fas fa-comments"></i></div>
      <h3>Sample interview prashn</h3>
      <ul style="margin-top:10px;display:flex;flex-direction:column;gap:8px;color:var(--brown)">
        <li>&bull; "Achhi fasal ke baad bhi kisaan membership fee na de to kaise samjhaoge?"</li>
        <li>&bull; "Soil sampling ka process batao."</li>
        <li>&bull; "Pehle 30 din ka plan?"</li>
        <li>&bull; "VLE-VLM ke beech conflict kaise suljhaoge?"</li>
        <li>&bull; "1,000 kisaanon ke liye 30 din me crop-insurance awareness campaign design karo."</li>
      </ul>
    </div>
  </div>
</section>
`;

PAGE_PARTS.push(SAMPLES, INTERVIEW);

const TRAINING = /* html */ `
<section class="section section-dark" id="training">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="kicker">12 · Training</span>
      <h2 class="display">Chayan ke baad — 4 mahine ki training.</h2>
    </div>
    <div class="reveal" style="max-width:840px">
      <p class="lead">
        Pehle 2 mahine residential training ("School for Rural Services") — UP ki
        agri-universities (CSAUAT Kanpur, NDUAT Ayodhya, SVPUAT Meerut, BUAT Banda) aur
        KVK ke saath; hostel + khana included. Fir 2 mahine supervised provisioning
        (gaon me mini-office, farmer mapping, pehla soil-testing drive, pehla scheme camp).
        5ve mahine se poori salary.
      </p>
    </div>
    <div class="train-grid reveal">
      <div class="km-img r-3xl ar-4-3">
        <img src="/static/img/training-class.webp" width="800" height="600" alt="Agri-university me trainees classroom training me" loading="lazy" decoding="async" />
        <span class="img-chip bl"><i class="fas fa-bed"></i> Residential · hostel + khana</span>
      </div>
      <div class="km-img r-3xl ar-4-3">
        <img src="/static/img/training-field.webp" width="800" height="600" alt="Trainees khet me soil-testing demo karte hue" loading="lazy" decoding="async" />
        <span class="img-chip bl"><i class="fas fa-person-digging"></i> Field practicum</span>
      </div>
    </div>
    <div class="card-grid reveal" style="margin-top:30px">
      <div class="feature-card glass-dark"><div class="ic"><i class="fas fa-flag"></i></div><h3 style="color:var(--cream)">W1 · Orientation</h3><p style="color:rgba(230,215,184,0.8)">Mission &amp; culture.</p></div>
      <div class="feature-card glass-dark"><div class="ic"><i class="fas fa-seedling"></i></div><h3 style="color:var(--cream)">W2 · Agronomy</h3><p style="color:rgba(230,215,184,0.8)">Kheti ke basics.</p></div>
      <div class="feature-card glass-dark"><div class="ic"><i class="fas fa-file-contract"></i></div><h3 style="color:var(--cream)">W3 · Schemes</h3><p style="color:rgba(230,215,184,0.8)">Government yojnaayein.</p></div>
      <div class="feature-card glass-dark"><div class="ic"><i class="fas fa-indian-rupee-sign"></i></div><h3 style="color:var(--cream)">W4 · Finance</h3><p style="color:rgba(230,215,184,0.8)">Banking &amp; credit.</p></div>
      <div class="feature-card glass-dark"><div class="ic"><i class="fas fa-satellite-dish"></i></div><h3 style="color:var(--cream)">W5 · Technology</h3><p style="color:rgba(230,215,184,0.8)">Field app, GPS, sensors, device.</p></div>
      <div class="feature-card glass-dark"><div class="ic"><i class="fas fa-handshake"></i></div><h3 style="color:var(--cream)">W6 · Soft skills</h3><p style="color:rgba(230,215,184,0.8)">Communication.</p></div>
      <div class="feature-card glass-dark"><div class="ic"><i class="fas fa-person-walking"></i></div><h3 style="color:var(--cream)">W7 · Field practicum</h3><p style="color:rgba(230,215,184,0.8)">Asli gaon experience.</p></div>
      <div class="feature-card glass-dark"><div class="ic"><i class="fas fa-clipboard-check"></i></div><h3 style="color:var(--cream)">W8 · Assessment</h3><p style="color:rgba(230,215,184,0.8)">Test &amp; deployment.</p></div>
    </div>
    <p class="note-line reveal" style="color:var(--gold);margin-top:24px"><i class="fas fa-house-flag"></i>
      <strong>Posting:</strong>&nbsp;Local-first — jahan tak ho sake apne ya paas wale cluster/area me posting, taaki local bharosa bana rahe.
    </p>
  </div>
</section>
`;

const PREP = /* html */ `
<section class="section" id="prep">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="kicker">13 · Taiyari</span>
      <h2 class="display">Taiyari kahan se karein?</h2>
    </div>
    <div class="card-grid reveal">
      <div class="feature-card glass"><div class="ic"><i class="fas fa-book-open"></i></div>
        <h3>Official Prep Portal</h3>
        <p>Hindi/English guidebooks, <strong>10 mock test series</strong> (asli exam jaisa interface),
        recorded <strong>Hindi video courses</strong>, combo packs.</p></div>
      <div class="feature-card glass"><div class="ic"><i class="fas fa-chalkboard-user"></i></div>
        <h3>Affiliated Coaching Network</h3>
        <p>UP ke districts me authorized/affiliated coaching centres — official partner
        institutes jahan se taiyari kar sakte hain.</p></div>
      <div class="feature-card glass"><div class="ic"><i class="fas fa-list-check"></i></div>
        <h3>Syllabus &amp; Question Bank</h3>
        <p>UP ki agri-universities (CSAUAT, NDUAT, SVPUAT, BUAT) + KVK ke saath taiyaar —
        official syllabus portal par milega.</p></div>
    </div>
    <div class="split media-aside">
      <div class="split-media reveal">
        <div class="km-img r-3xl ar-4-3">
          <img src="/static/img/taiyari-study.webp" width="800" height="600" alt="Gaon ka student raat me lamp ke neeche mock-test app par padhai karta hua" loading="lazy" decoding="async" />
        </div>
      </div>
      <div class="reveal">
        <p class="lead" style="margin-bottom:20px">Mehnat se taiyari karo — official portal, mock tests aur
        affiliated coaching ke saath aap apne sapne ko sach kar sakte ho. Padhega gaon, badhega gaon.</p>
        <a href="#apply" class="btn btn-gold">Study Material Dekho <i class="fas fa-arrow-right"></i></a>
        <p class="form-note">Note: Affiliated coaching centres dynamically list honge; koi unverified institute name pehle se nahi diya gaya.</p>
      </div>
    </div>
  </div>
</section>
`;

PAGE_PARTS.push(TRAINING, PREP);

const APPLY = /* html */ `
<section class="section section-sand" id="apply">
  <div class="wrap">
    <div class="section-head reveal" style="margin:0 auto;text-align:center">
      <span class="kicker" style="justify-content:center">14 · Apply</span>
      <h2 class="display">Form kaise bharein — 4 aasaan kadam.</h2>
    </div>
    <form id="applyForm" class="form-shell glass reveal" onsubmit="return false">
      <div class="step-dots">
        <div class="sd active" data-dot="1"><span class="sd-num">1</span><span class="sd-line"></span></div>
        <div class="sd" data-dot="2"><span class="sd-num">2</span><span class="sd-line"></span></div>
        <div class="sd" data-dot="3"><span class="sd-num">3</span><span class="sd-line"></span></div>
        <div class="sd" data-dot="4"><span class="sd-num">4</span></div>
      </div>

      <!-- Step 1: KYC -->
      <div class="fstep active" data-step="1">
        <h3>Step 1 — KYC</h3>
        <p class="sub">Aadhaar number + mobile OTP se identity verify (KYC pehle).</p>
        <div class="field"><label for="aadhaar">Aadhaar Number</label>
          <input id="aadhaar" type="text" inputmode="numeric" maxlength="12" placeholder="12 ank ka Aadhaar" /></div>
        <div class="field"><label for="mobile">Mobile Number</label>
          <input id="mobile" type="tel" inputmode="numeric" maxlength="10" placeholder="10 ank ka mobile" /></div>
        <button type="button" id="sendOtp" class="btn btn-ghost">OTP Bhejein</button>
        <div class="field" id="otpField" style="display:none;margin-top:16px"><label for="otp">OTP daalein</label>
          <input id="otp" type="text" inputmode="numeric" maxlength="6" placeholder="6 ank ka OTP" /></div>
        <div class="form-nav"><span></span>
          <button type="button" class="btn btn-primary" data-next>Aage <i class="fas fa-arrow-right"></i></button></div>
      </div>

      <!-- Step 2: Form -->
      <div class="fstep" data-step="2">
        <h3>Step 2 — Form bharein</h3>
        <p class="sub">Apni jaankari bharein aur pariksha chuno.</p>
        <div class="field"><label for="fullName">Poora Naam</label><input id="fullName" type="text" placeholder="Jaise: Ramesh Kumar" /></div>
        <div class="field-row">
          <div class="field"><label for="education">Education</label>
            <select id="education"><option value="">Chuno</option><option>10th</option><option>12th</option><option>Graduate</option><option>Post-Graduate</option></select></div>
          <div class="field"><label for="category">Category</label>
            <select id="category"><option value="">Chuno</option><option>General</option><option>OBC</option><option>SC</option><option>ST</option><option>EWS</option></select></div>
        </div>
        <div class="field"><label for="district">District</label>
          <select id="district"><option value="">Chuno</option><option>Lucknow</option><option>Kanpur</option><option>Agra</option><option>Meerut</option><option>Bareilly</option><option>Moradabad</option><option>Varanasi</option><option>Prayagraj</option><option>Gorakhpur</option><option>Ayodhya</option><option>Aligarh</option><option>Jhansi</option></select></div>
        <label style="display:block;font-size:0.82rem;font-weight:600;margin-bottom:9px">Pariksha chuno</label>
        <div class="exam-choice">
          <div class="exam-opt" data-exam="gram"><strong>Gram Sevak</strong><span>VLE / VLM ke liye</span><div class="fee">Fee &#8377;500</div></div>
          <div class="exam-opt" data-exam="krishi"><strong>Krishi Adhikari</strong><span>TLO / DLO ke liye</span><div class="fee">Fee &#8377;1,000</div></div>
        </div>
        <div class="field" style="margin-top:14px"><label for="docs">Photo + Documents upload</label><input id="docs" type="file" multiple /></div>
        <div class="form-nav">
          <button type="button" class="btn btn-ghost" data-prev><i class="fas fa-arrow-left"></i> Peeche</button>
          <button type="button" class="btn btn-primary" data-next>Aage <i class="fas fa-arrow-right"></i></button></div>
      </div>

      <!-- Step 3: Payment -->
      <div class="fstep" data-step="3">
        <h3>Step 3 — Registration Fee</h3>
        <p class="sub">KYC ke baad — UPI/Card se payment.</p>
        <div class="pay-box">
          <div><div style="font-weight:600" id="payExamName">Gram Sevak Pariksha</div>
          <div style="font-size:0.85rem;color:var(--brown)">Registration fee</div></div>
          <div class="amt" id="feeAmount">&#8377;500</div>
        </div>
        <div class="field"><label for="payMethod">Payment method</label>
          <select id="payMethod"><option>UPI</option><option>Debit / Credit Card</option><option>Net Banking</option></select></div>
        <button type="button" id="payBtn" class="btn btn-gold btn-block">Pay &amp; Submit</button>
        <p class="form-note"><i class="fas fa-lock"></i> Integration note (dev): Razorpay/UPI + Aadhaar KYC API yahan jodein.</p>
        <div class="form-nav">
          <button type="button" class="btn btn-ghost" data-prev><i class="fas fa-arrow-left"></i> Peeche</button><span></span></div>
      </div>

      <!-- Step 4: Confirmation -->
      <div class="fstep" data-step="4">
        <div class="confirm-box">
          <div class="confirm-ico"><i class="fas fa-check"></i></div>
          <h3>Aapka aavedan jama ho gaya!</h3>
          <p class="sub">Aapki Application ID:</p>
          <div class="app-id" id="appIdValue">KM26-XXXXXX</div>
          <p style="color:var(--brown);max-width:420px;margin:0 auto">
            QR-coded admit card aapko exam se ~1 hafta pehle mil jaayega. SMS aur portal par update milega.
          </p>
        </div>
      </div>
    </form>
  </div>
</section>
`;

PAGE_PARTS.push(APPLY);

const FAQ = /* html */ `
<section class="section" id="faq">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="kicker">15 · FAQ</span>
      <h2 class="display">Aksar pooche jaane wale sawaal.</h2>
    </div>
    <div class="accordion reveal" style="max-width:820px">
      <div class="acc-item glass"><button class="acc-head">Kya ye sarkari naukri hai?<span class="acc-ico"><i class="fas fa-plus"></i></span></button>
        <div class="acc-body"><div class="acc-body-inner">Ye Kisan Mitra ecosystem ki bharti hai, jo government yojnaon ke saath milkar kaam karti hai; salary ecosystem deti hai, aur officer ko government-officer jaisi prestige milti hai.</div></div></div>
      <div class="acc-item glass"><button class="acc-head">Posting kahan hogi?<span class="acc-ico"><i class="fas fa-plus"></i></span></button>
        <div class="acc-body"><div class="acc-body-inner">Local-first — jahan tak ho sake aapke apne ya paas wale cluster/area me, taaki gaon me local bharosa bana rahe.</div></div></div>
      <div class="acc-item glass"><button class="acc-head">Fee wapas hoti hai?<span class="acc-ico"><i class="fas fa-plus"></i></span></button>
        <div class="acc-body"><div class="acc-body-inner">Aam taur par registration fee non-refundable hai (force-majeure jaise halaat chhod kar).</div></div></div>
      <div class="acc-item glass"><button class="acc-head">Reschedule kaise?<span class="acc-ico"><i class="fas fa-plus"></i></span></button>
        <div class="acc-body"><div class="acc-body-inner">Ek baar reschedule kar sakte hain — &#8377;3,000 fee ke saath, exam se kam se kam 48 ghante pehle.</div></div></div>
      <div class="acc-item glass"><button class="acc-head">Reservation / scholarship?<span class="acc-ico"><i class="fas fa-plus"></i></span></button>
        <div class="acc-body"><div class="acc-body-inner">SC/ST, gramin ladkiyan aur BPL parivaaron ke liye fee waiver / scholarship available hai.</div></div></div>
      <div class="acc-item glass"><button class="acc-head">Exam online hai ya offline?<span class="acc-ico"><i class="fas fa-plus"></i></span></button>
        <div class="acc-body"><div class="acc-body-inner">Aapke paas ke center (govt school/college) par computer-based, secure terminal par, AI-proctored exam hota hai.</div></div></div>
    </div>
  </div>
</section>
`;

const FINAL = /* html */ `
<section class="section section-dark final-cta has-bg-img bg-sunrise">
  <img class="bg-photo" src="/static/img/final-sunrise.webp" width="1600" height="900" alt="Sunrise par hare khet me confident yuva officers khade hue" loading="lazy" decoding="async" aria-hidden="true" />
  <span class="bg-forest" aria-hidden="true"></span>
  <div class="wrap reveal">
    <span class="kicker" style="justify-content:center">Pehla Batch · 2026</span>
    <h2 class="display">Pehla batch — itihaas banao.<br/>Apne gaon ke afsar bano.</h2>
    <a href="#apply" class="btn btn-gold">Abhi Apply Karein <i class="fas fa-arrow-right"></i></a>
  </div>
</section>

<footer class="site-footer">
  <div class="wrap">
    <div class="footer-grid">
      <div class="footer-brand">
        <a class="brand" href="#top">
          <span class="brand-mark">क</span>
          <span class="brand-text"><span class="brand-name">Kisan Mitra</span>
          <span class="brand-sub" style="color:var(--gold)">रूरल · ओएस</span></span>
        </a>
        <p>Gaon ke andar hi rozgaar, behtar kheti aur tarakki — ek Rural Operating System.
        Apne gaon ke afsar bano.</p>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <a href="#mission">Mission</a><a href="#roles">Posts</a><a href="#vacancies">Vacancies</a>
        <a href="#salary">Salary</a><a href="#exam">Exam Pattern</a><a href="#prep">Taiyari</a><a href="#faq">FAQ</a>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <a href="#apply"><i class="fas fa-pen-to-square"></i> Form Bharein</a>
        <a href="mailto:help@kisanmitra.example"><i class="fas fa-envelope"></i> help@kisanmitra.example</a>
        <a href="tel:18000000000"><i class="fas fa-phone"></i> 1800-000-0000 (toll-free)</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; <span id="year">2026</span> Kisan Mitra · by Argus / RKF · Rajesh Kaithwas ke netritva me</span>
      <span>Bharti Pariksha 2026 · Uttar Pradesh</span>
    </div>
  </div>
</footer>
`;

PAGE_PARTS.push(FAQ, FINAL);

export const PAGE: string = PAGE_PARTS.join('\n');

export default function Home() {
  return <div dangerouslySetInnerHTML={{ __html: PAGE }} />;
}
