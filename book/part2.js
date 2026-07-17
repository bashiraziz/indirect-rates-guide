window.BOOK=window.BOOK||{};Object.assign(window.BOOK,{
ch4:`<h1>What Indirect Rates Are and Why They Matter</h1>
<p class="lead">An indirect rate is a fraction: a pool of indirect cost divided by a base of direct cost. That one ratio determines what you charge the government, whether your bids win, and whether your year ends in a writeback to the customer or a check from them.</p>
<h2>The core ratio</h2>
<div class="formula">Indirect Rate = Indirect Cost Pool ($) ÷ Allocation Base ($)</div>
<p>The government cannot be handed a share of your rent invoice. Instead, every contract carries indirect cost <em>in proportion to the direct cost it consumes</em>. The rate is the proportion. If your overhead pool is $260,000 and your overhead base is $650,000, every base dollar carries 40 cents of overhead — a 40% rate.</p>
<div class="example"><div class="ex-tag">Worked example — the simplest possible case</div>
<p>Meridian spends $88,000/month on health insurance and payroll taxes total $62,000 — a $150,000 fringe pool. Direct labor is $500,000.</p>
<div class="formula">Fringe Rate = $150,000 ÷ $500,000 = 30.0%</div>
<p>A contract that uses $10,000 of Meridian labor is billed $3,000 of fringe. A contract using $100,000 is billed $30,000. Each customer pays for benefits in exact proportion to the labor they consumed. Nobody subsidizes anybody — which is the whole point.</p></div>
<h2>Who audits your rates</h2>
<p>On <strong>cost-reimbursable work</strong> the customer literally pays your indirect rates — so someone verifies them: that pools contain only allowable costs, that bases are consistent, and that the same costing logic applies to every contract.</p>
<div class="gov"><div class="g-tag">Government contracting</div><p>For federal cost-type contracts (CPFF, CPIF, CPAF) that someone is the <strong>Defense Contract Audit Agency (DCAA)</strong>, applying FAR 31.203 and CAS consistency rules. Commercial equivalents — customer cost audits, rate reviews by a prime — test the same things with less paperwork.</p></div>
<p>Three versions of your rates exist at any time, and reconciling them is the annual rhythm of rate accounting:</p>
<table><thead><tr><th>Rate</th><th>What it is</th><th>When it's used</th></tr></thead><tbody>
<tr><td><strong>Provisional</strong></td><td>Approved billing rates for the current year</td><td>Interim invoices on cost-type work</td></tr>
<tr><td><strong>Actual</strong></td><td>What the ratio really turned out to be</td><td>Year-end settlement / true-up</td></tr>
<tr><td><strong>Forward pricing</strong></td><td>Projected rates for future years</td><td>Proposals and negotiations (Chapter 21)</td></tr>
</tbody></table>
<div class="warnbox"><p><strong>The year-end true-up.</strong> Bill all year at a 40% provisional overhead rate, finish the year at 44% actual, and you under-billed — you eat the difference or file for recovery. Finish at 36% and you owe the customer money back. This is why <em>forecasting</em> rates mid-year, rather than discovering them in February, is worth real money.</p></div>
<h2>Why executives care</h2>
<ul><li><strong>Competitiveness.</strong> Rates are most of the difference between your $185/hr fully-burdened engineer and a competitor's $155/hr one.</li>
<li><strong>Profit.</strong> On FFP work, every point of rate growth comes straight out of margin.</li>
<li><strong>Early warning.</strong> Rates rising against plan means the cost structure is outgrowing the business — visible in a rate forecast months before it shows in net income.</li></ul>
<div class="keybox"><div class="kb-tag">Key insight</div><p>A rate is never good or bad in isolation — it is good or bad against what you bid, what you're billing provisionally, and what your competitors carry. That's why every serious contractor tracks forecast rates against provisional and budget rates continuously, not annually.</p></div>
<div class="appbox"><div class="ab-head">In ForwardRates</div><div class="ab-body"><p>The dashboard's three <strong>rate cards</strong> (Fringe, Overhead, G&amp;A) show the latest forecast rate with a trend sparkline. When any forecast rate exceeds your provisional rate by more than 0.1&nbsp;pp, an amber <strong>Rate Alert</strong> banner names the rate and the overage — the true-up warning, surfaced automatically. Provisional and budget reference rates are managed on the Rates page.</p></div></div>`,

ch5:`<h1>The Three Pools</h1>
<p class="lead">GovCon convention groups indirect costs into three pools — Fringe, Overhead, and G&amp;A — distinguished by <em>what the cost benefits</em>: people, operations, or the whole enterprise.</p>
<h2>Fringe — the cost of employing people</h2>
<p>Everything you pay because you have employees, beyond wages themselves:</p>
<ul><li>Employer payroll taxes (FICA, FUTA, SUTA)</li><li>Health, dental, vision, life insurance</li><li>Retirement match</li><li>Paid time off and holidays</li><li>Workers' comp</li></ul>
<p>Fringe attaches to labor and only labor. Its base is total labor dollars, and fringe on <em>direct</em> labor follows that labor into the overhead base — the first step of the cascade.</p>
<h2>Overhead — the cost of doing the work</h2>
<p>Costs that support contract execution but no single contract:</p>
<ul><li>Facilities: rent, utilities, maintenance</li><li>IT infrastructure and equipment</li><li>Operations management and supervision</li><li>Indirect labor of billable staff (bench time, internal meetings)</li><li>Training and certifications</li></ul>
<p>Companies with distinct cost environments split overhead into multiple pools — a <strong>client-site</strong> pool (staff at government facilities consume no rent) and a <strong>company-site</strong> pool. One overhead pool is fine until the environments genuinely diverge; more pools mean more precision and more bookkeeping.</p>
<h2>G&amp;A — the cost of being a company</h2>
<p>General &amp; Administrative costs benefit the enterprise as a whole and would exist regardless of which contracts you hold:</p>
<ul><li>Executive salaries</li><li>Accounting, finance, HR, legal</li><li>Business development and bid &amp; proposal</li><li>Corporate insurance, bank fees, audits</li></ul>
<p>G&amp;A is allocated over the broadest base — usually <strong>Total Cost Input</strong> (all direct cost plus fringe and overhead) — because the whole enterprise benefits from it.</p>
<div class="example"><div class="ex-tag">Worked example — sorting Meridian's March indirects</div>
<table><thead><tr><th>Cost</th><th class="num">Amount</th><th>Pool</th><th>Why</th></tr></thead><tbody>
<tr><td>Payroll taxes + insurance + PTO accrual</td><td class="num">$150,000</td><td>Fringe</td><td>Cost of employing people</td></tr>
<tr><td>Rent, utilities, IT</td><td class="num">$68,000</td><td>Overhead</td><td>Supports contract work broadly</td></tr>
<tr><td>Delivery managers, bench time</td><td class="num">$192,000</td><td>Overhead</td><td>Supervision + unbillable labor</td></tr>
<tr><td>Executives, finance, BD</td><td class="num">$127,000</td><td>G&amp;A</td><td>Whole-enterprise</td></tr>
<tr><td>Entertainment</td><td class="num">$4,200</td><td><strong>None</strong></td><td>Unallowable — segregated</td></tr>
</tbody></table></div>
<h2>Boundary calls</h2>
<p>Real charts have judgment calls. The classics:</p>
<ul><li><strong>The PM who also does BD.</strong> Time supervising contracts → overhead; time writing proposals → G&amp;A (B&amp;P). Split by timesheet.</li><li><strong>IT.</strong> Serving delivery teams → overhead; serving the back office → G&amp;A. Many companies allocate.</li><li><strong>Facilities for executives.</strong> Strictly, their share of rent is G&amp;A. Most small contractors leave all rent in overhead — acceptable if consistent.</li></ul>
<div class="keybox"><div class="kb-tag">Key insight</div><p>Consistency beats theoretical purity. DCAA will accept a range of reasonable pool definitions; what it will not accept is the definition changing when it benefits you. Document the rules, then follow them every month.</p></div>
<div class="appbox"><div class="ab-head">In ForwardRates</div><div class="ab-body"><p><strong>Pool Setup</strong> models exactly this structure: a Rate Group contains pool groups (Fringe, Overhead, G&amp;A), each with optional sub-pools (e.g., FICA, Health) and a two-panel shuttle for assigning chart accounts to the pool's numerator. <strong>AI Suggest</strong> proposes a pool for each unmapped account with a reason — including unallowable flags with FAR citations — which you review, accept, and save.</p></div></div>`,

ch6:`<h1>Pool Setup and Base Selection</h1>
<p class="lead">A rate has a numerator (the pool) and a denominator (the base). Chapter 5 covered numerators. Choosing denominators — and the order pools feed each other — is where rate structures are actually designed.</p>
<h2>What makes a good base</h2>
<p>FAR 31.203(c) requires the base to distribute the pool "on the basis of the benefits accruing" — the base should measure <em>consumption</em> of whatever the pool provides:</p>
<table><thead><tr><th>Pool</th><th>Standard base</th><th>Logic</th></tr></thead><tbody>
<tr><td>Fringe</td><td>Total labor $ (direct + indirect)</td><td>Benefits attach to people; labor measures people</td></tr>
<tr><td>Overhead</td><td>Direct labor $ + fringe on DL</td><td>Operations support the people doing contract work</td></tr>
<tr><td>G&amp;A</td><td>Total Cost Input (TCI)</td><td>The enterprise supports all cost activity</td></tr>
</tbody></table>
<h2>Total Cost Input vs. Value Added</h2>
<p>The G&amp;A base has one big design decision:</p>
<ul><li><strong>TCI</strong> — everything: DL + fringe + overhead + subk + ODC + travel. The default, simplest, most common.</li><li><strong>Value Added</strong> — TCI <em>minus subcontracts and materials</em>. Used when pass-through costs are so large they'd absorb G&amp;A they don't really consume. Usually paired with a small handling rate on the excluded costs.</li></ul>
<div class="example"><div class="ex-tag">Worked example — why the base choice matters</div>
<p>Meridian's G&amp;A pool is $139,200/month. Compare bases in a month with $370,000 of subk+ODC:</p>
<table><thead><tr><th>Base choice</th><th class="num">Base $</th><th class="num">G&amp;A rate</th><th>Effect</th></tr></thead><tbody>
<tr><td>TCI</td><td class="num">$1,160,000</td><td class="num">12.0%</td><td>Subk carries $44K of the G&amp;A</td></tr>
<tr><td>Value added</td><td class="num">$790,000</td><td class="num">17.6%</td><td>Labor-heavy contracts carry more</td></tr>
</tbody></table>
<p>Same pool, same company — but which <em>contracts</em> absorb the G&amp;A shifts substantially. A subk-heavy prime wants value added; a labor shop is fine with TCI. Choose once, justify it, stay consistent.</p></div>
<h2>Cascade order</h2>
<p>Pools feed each other in a fixed sequence, because one pool's output is part of the next pool's base:</p>
<div class="formula">1. Fringe   → rate on labor
2. Overhead → base includes DL + fringe-on-DL
3. G&amp;A      → base includes everything above</div>
<p>Fringe must compute first (its dollars enter the overhead base), overhead second (its dollars enter TCI), G&amp;A last. Get the order wrong and every downstream rate is wrong.</p>
<h2>Design rules</h2>
<ul><li><strong>Every account in exactly one numerator.</strong> An account in two pools double-charges the government.</li><li><strong>Base includes unallowable direct cost.</strong> Counterintuitive but required (FAR 31.203(d)): unallowable costs are excluded from <em>pools</em> but still <em>absorb</em> indirect cost in bases.</li><li><strong>Change structures at fiscal year boundaries</strong>, with notice to your ACO if you have cost-type work.</li></ul>
<div class="appbox"><div class="ab-head">In ForwardRates</div><div class="ab-body"><p>In <strong>Pool Setup</strong>, each pool group has Cost Accounts (numerator) and Base Accounts (denominator) shuttles, plus a cascade-order field in its Edit dialog — lower numbers compute earlier. The <strong>Cost Structure</strong> page renders the resulting formulas so you can verify how every account flows before running a forecast. <strong>Copy from FY</strong> clones an entire structure into a new year.</p></div></div>`,

ch7:`<h1>The Rate Cascade</h1>
<p class="lead">This chapter runs the full calculation, top to bottom, with every number shown. If you internalize one chapter of this book, make it this one — everything in Parts III through VI is this arithmetic, repeated.</p>
<h2>Meridian's month, assembled</h2>
<p>Inputs from Chapters 1–6 (one month, allowables only):</p>
<table><thead><tr><th>Input</th><th class="num">Amount</th></tr></thead><tbody>
<tr><td>Direct Labor (DL)</td><td class="num">$500,000</td></tr>
<tr><td>Subcontracts</td><td class="num">$320,000</td></tr>
<tr><td>ODC</td><td class="num">$40,000</td></tr>
<tr><td>Travel</td><td class="num">$10,000</td></tr>
<tr><td>Fringe pool</td><td class="num">$150,000</td></tr>
<tr><td>Overhead pool</td><td class="num">$260,000</td></tr>
<tr><td>G&amp;A pool</td><td class="num">$139,200</td></tr>
</tbody></table>
<p style="font-size:13px;color:var(--ink-3)">Simplification: all labor is direct, so the fringe base = DL. Real structures put fringe on indirect labor into the overhead pool.</p>
<h2>Step 1 — Fringe</h2>
<div class="formula">Fringe Rate = $150,000 ÷ $500,000 = <strong>30.0%</strong></div>
<h2>Step 2 — Overhead</h2>
<p>The overhead base is DL <em>plus the fringe that rode in on it</em>:</p>
<div class="formula">OH Base = $500,000 + $150,000            = $650,000
OH Rate = $260,000 ÷ $650,000            = <strong>40.0%</strong></div>
<h2>Step 3 — G&amp;A</h2>
<p>Total Cost Input gathers everything above plus the non-labor directs:</p>
<div class="formula">TCI      = $500,000 + $150,000 + $260,000
         + $320,000 + $40,000 + $10,000  = $1,280,000
G&amp;A Rate = $139,200 ÷ $1,280,000         = <strong>10.9%</strong></div>
<h2>Applying the cascade to one contract</h2>
<div class="example"><div class="ex-tag">Worked example — burdening the Navy contract</div>
<p>The Navy contract consumed $310,000 DL, $120,000 subk, $31,000 ODC, $6,000 travel. What does the Navy owe?</p>
<table><thead><tr><th>Layer</th><th>Computation</th><th class="num">Amount</th></tr></thead><tbody>
<tr><td>Direct Labor</td><td>—</td><td class="num">$310,000</td></tr>
<tr><td>Fringe</td><td>$310,000 × 30.0%</td><td class="num">$93,000</td></tr>
<tr><td>Overhead</td><td>($310,000 + $93,000) × 40.0%</td><td class="num">$161,200</td></tr>
<tr><td>Subk + ODC + Travel</td><td>—</td><td class="num">$157,000</td></tr>
<tr><td>Subtotal (TCI share)</td><td></td><td class="num">$721,200</td></tr>
<tr><td>G&amp;A</td><td>$721,200 × 10.9%</td><td class="num">$78,611</td></tr>
<tr class="total"><td>Burdened cost</td><td></td><td class="num">$799,811</td></tr>
</tbody></table>
<p>Add a 7% fee on a CPFF contract and the invoice approaches $856,000 — from $467,000 of direct cost. The burden multiplier on labor alone: $310,000 direct becomes $310,000 × 1.30 × 1.40 × 1.109 ≈ <strong>$624,900</strong>, a 2.02× wrap rate.</p></div>
<div class="warnbox"><p><strong>Rates compound.</strong> G&amp;A applies on top of overhead, which applies on top of fringe. A 1-point rise in fringe raises the fully burdened labor cost by more than 1 point — roughly 1.55 points here, because each downstream base inflates.</p></div>
<div class="keybox"><div class="kb-tag">Key insight</div><p>The cascade is why rate forecasting is a system, not three separate fractions. Any event that touches direct labor touches all three bases at once — which is exactly what the scenario engine in Part IV automates.</p></div>
<div class="appbox"><div class="ab-head">In ForwardRates</div><div class="ab-body"><p>This computation runs deterministically inside the forecast engine — <code>rate = pool$ ÷ base$</code> per period, traced to GL entries; no AI touches the math (DCAA requires full auditability). The <strong>Cost Structure</strong> page shows the cascade formulas; the <strong>Rates</strong> page shows the outputs; the Base Computation sheet in the exported Rate Package documents the whole chain.</p></div></div>`
});
