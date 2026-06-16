/* ============================================================
   KISAN MITRA — Bharti Pariksha 2026  | interactions
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Mobile hamburger menu ---------- */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('menuOverlay');
  const menuClose = document.getElementById('menuClose');

  function openMenu() {
    mobileMenu.classList.add('open');
    overlay.classList.add('open');
    hamburger.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    mobileMenu.classList.remove('open');
    overlay.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  }
  if (hamburger) hamburger.addEventListener('click', () =>
    mobileMenu.classList.contains('open') ? closeMenu() : openMenu());
  if (overlay) overlay.addEventListener('click', closeMenu);
  if (menuClose) menuClose.addEventListener('click', closeMenu);
  document.querySelectorAll('#mobileMenu a').forEach(a =>
    a.addEventListener('click', closeMenu));

  /* ---------- Count-up stats ---------- */
  function animateCount(el) {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const dur = 1600;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.floor(eased * target);
      el.textContent = prefix + val.toLocaleString('en-IN') + suffix;
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = prefix + target.toLocaleString('en-IN') + suffix;
    }
    requestAnimationFrame(tick);
  }

  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting && !e.target.dataset.done) {
        e.target.dataset.done = '1';
        animateCount(e.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-target]').forEach(el => statObserver.observe(el));

  /* ---------- Reveal on scroll ---------- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); revealObserver.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ---------- Accordion (sample Q&A + FAQ) ---------- */
  document.querySelectorAll('.acc-head').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.acc-item');
      const body = item.querySelector('.acc-body');
      const isOpen = item.classList.contains('open');
      // close siblings in same accordion
      const group = item.closest('.accordion');
      if (group) {
        group.querySelectorAll('.acc-item.open').forEach(other => {
          if (other !== item) {
            other.classList.remove('open');
            other.querySelector('.acc-body').style.maxHeight = null;
          }
        });
      }
      if (isOpen) {
        item.classList.remove('open');
        body.style.maxHeight = null;
      } else {
        item.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  /* ---------- Multi-step application form ---------- */
  const form = document.getElementById('applyForm');
  if (form) {
    let current = 1;
    const totalSteps = 4;
    const steps = form.querySelectorAll('.fstep');
    const dots = form.querySelectorAll('.sd');
    let selectedExam = null; // 'gram' | 'krishi'

    function showStep(n) {
      steps.forEach(s => s.classList.toggle('active', +s.dataset.step === n));
      dots.forEach(d => {
        const sn = +d.dataset.dot;
        d.classList.toggle('active', sn === n);
        d.classList.toggle('done', sn < n);
      });
      current = n;
      const sec = document.getElementById('apply');
      if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // exam choice
    form.querySelectorAll('.exam-opt').forEach(opt => {
      opt.addEventListener('click', () => {
        form.querySelectorAll('.exam-opt').forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        selectedExam = opt.dataset.exam;
        const fee = selectedExam === 'krishi' ? 1000 : 500;
        const feeEl = document.getElementById('feeAmount');
        const examName = document.getElementById('payExamName');
        if (feeEl) feeEl.textContent = '\u20B9' + fee.toLocaleString('en-IN');
        if (examName) examName.textContent = selectedExam === 'krishi'
          ? 'Krishi Adhikari Pariksha' : 'Gram Sevak Pariksha';
      });
    });

    // KYC: send OTP (placeholder)
    const sendOtpBtn = document.getElementById('sendOtp');
    if (sendOtpBtn) {
      sendOtpBtn.addEventListener('click', async () => {
        const aadhaar = document.getElementById('aadhaar').value.replace(/\s/g, '');
        const mobile = document.getElementById('mobile').value;
        if (aadhaar.length !== 12 || mobile.length !== 10) {
          alert('Sahi Aadhaar (12 ank) aur mobile (10 ank) number daalein.');
          return;
        }
        sendOtpBtn.textContent = 'Bhej rahe hain...';
        try {
          // Placeholder: integrate real Aadhaar/OTP KYC API
          await fetch('/api/kyc/send-otp', {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ aadhaar, mobile })
          });
        } catch (e) {}
        document.getElementById('otpField').style.display = 'block';
        sendOtpBtn.textContent = 'OTP dobara bhejein';
      });
    }

    // navigation
    form.querySelectorAll('[data-next]').forEach(b => b.addEventListener('click', () => {
      if (current === 1) {
        const otp = document.getElementById('otp');
        if (!otp || otp.value.length < 4) { alert('Pehle mobile OTP se KYC verify karein.'); return; }
      }
      if (current === 2 && !selectedExam) { alert('Apni pariksha chuno (Gram Sevak ya Krishi Adhikari).'); return; }
      if (current < totalSteps) showStep(current + 1);
    }));
    form.querySelectorAll('[data-prev]').forEach(b => b.addEventListener('click', () => {
      if (current > 1) showStep(current - 1);
    }));

    // payment -> confirmation (placeholder)
    const payBtn = document.getElementById('payBtn');
    if (payBtn) {
      payBtn.addEventListener('click', async () => {
        payBtn.textContent = 'Payment ho raha hai...';
        let appId = 'KM26-' + Math.random().toString(36).slice(2, 8).toUpperCase();
        try {
          // Placeholder: integrate Razorpay/UPI order + verification
          const r = await fetch('/api/apply', {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              exam: selectedExam,
              name: (document.getElementById('fullName') || {}).value,
              district: (document.getElementById('district') || {}).value
            })
          });
          const d = await r.json();
          if (d && d.applicationId) appId = d.applicationId;
        } catch (e) {}
        const idEl = document.getElementById('appIdValue');
        if (idEl) idEl.textContent = appId;
        showStep(4);
        payBtn.textContent = 'Pay & Submit';
      });
    }
  }

  /* ---------- Header shrink on scroll ---------- */
  const header = document.querySelector('.site-header');
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (header) header.style.top = (y > lastY && y > 200) ? '-80px' : '16px';
    lastY = y;
  }, { passive: true });

  /* ---------- year ---------- */
  const yEl = document.getElementById('year');
  if (yEl) yEl.textContent = new Date().getFullYear();
})();
