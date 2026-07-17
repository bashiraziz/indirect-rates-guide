window.BOOK=window.BOOK||{};Object.assign(window.BOOK,{
ch19:`<h1>Audit Readiness</h1>
<p class="lead">A cost audit is not an exam you cram for — it is an inspection of habits. Whoever the auditor is — a customer, a prime, an external accountant, or DCAA — the businesses that pass painlessly are the ones whose monthly process already produces what the auditor asks for.</p>
<h2>What a cost auditor actually checks</h2>
<p>For indirect rates, audit attention concentrates on four questions:</p>
<ol><li><strong>Are unallowable costs excluded?</strong> The auditor samples accounts like travel, professional fees, and marketing looking for entertainment, lobbying, fines, and first-class airfare hiding in allowable pools.</li>
<li><strong>Is the accounting consistent?</strong> The same cost treated as direct on one contract and indirect on another (or moved mid-year without disclosure) is the classic finding.</li>
<li><strong>Do the numbers trace?</strong> Every rate must decompose to pools, pools to accounts, accounts to transactions, transactions to source documents — timesheets, invoices, payroll registers.</li>
<li><strong>Who changed what, when?</strong> Adjusting journal entries near year-end, remapped accounts, and edited scenarios all need an explanation and a name attached.</li></ol>
<h2>The traceability chain</h2>
<div class="formula">Rate (40.0%)
 └─ Pool $260,000 / Base $650,000
     └─ Account 7100 Facilities: $42,000
         └─ March postings: 3 transactions
             └─ Lease invoice #4471, check #8812</div>
<p>If any link is reconstructable only by the one person who remembers, you don't have a chain — you have a liability. The chain must survive employee turnover and a multi-year lag (government incurred-cost audits routinely arrive years after the fiscal year closes).</p>
<h2>Unallowables: segregate, don't delete</h2>
<div class="warnbox"><p>The instinct to keep unallowable costs "out of the books" is exactly backwards. Auditors expect to <strong>see</strong> them — recorded, in clearly labeled accounts, excluded from pools, and (per FAR 31.203(d), for federal work) still included in allocation bases where they belong. An unallowable cost you can't produce looks like an unallowable cost you hid.</p></div>
<div class="example"><div class="ex-tag">Worked example — the finding that costs 100× the dinner</div>
<p>Meridian's $4,200 client entertainment sits in account 8520 (unallowable). Suppose instead it had been coded to 8010 — Executive Salaries, inside the G&amp;A pool. The G&amp;A rate becomes 11.2% instead of 10.9% (139.2+4.2 = 143.4 ÷ 1,280). Every cost-type invoice all year is slightly overbilled. The finding isn't $4,200 — it's a questioned-cost calculation across all affected contracts, penalty exposure under FAR 42.709 for expressly unallowable costs, and a downgraded assessment of the accounting system. The dinner was the cheap part.</p></div>
<h2>The monthly readiness habit</h2>
<ul><li>Close the GL and import to the rate system the same week.</li><li>Run the forecast; file the output with its assumptions.</li><li>Review any account newly mapped or remapped this month — with a note on why.</li><li>Scan unallowable-candidate accounts for miscodings while memories are fresh.</li><li>Keep the audit log's export in reach: who, what, when, before/after.</li></ul>
<div class="appbox"><div class="ab-head">In ForwardRates</div><div class="ab-body"><p>Audit support is structural: the rate engine is deterministic (every rate traces to GL entries — no AI in the math), the <strong>Audit Log</strong> records create/update/delete/import for every entity with before/after JSON snapshots, date filters, and CSV export up to 10,000 rows; the Rate Package's <strong>Unallowable Costs</strong> sheet lists flagged entries with FAR 31.201-6 references; and forecast run history preserves each run's assumptions (the Copy button formats them for workpapers).</p></div></div>`,

ch20:`<h1>The Rate Package</h1>
<p class="lead">The rate package is the deliverable that carries your rates to people who must trust them — auditors, customers, lenders, and your own leadership. It is the cascade of Chapter 7, documented to survive scrutiny.</p>
<h2>What goes in it</h2>
<table><thead><tr><th>Sheet</th><th>Contents</th><th>Reader</th></tr></thead><tbody>
<tr><td>Cover</td><td>FY, period, scenario, run date, references</td><td>Everyone — context first</td></tr>
<tr><td>Rate Summary</td><td>Fringe / OH / G&amp;A by period</td><td>The number people quote</td></tr>
<tr><td>Pool Cost Detail</td><td>GL entries aggregated by pool and account</td><td>The auditor's sampling ground</td></tr>
<tr><td>Base Computation</td><td>Pools, bases, and rates showing the cascade chain</td><td>Proof the math is the math</td></tr>
<tr><td>Unallowable Costs</td><td>Flagged entries with FAR references</td><td>Proof of exclusion</td></tr>
<tr><td>Narrative</td><td>Written analysis: drivers, anomalies, recommendations</td><td>Management and reviewers</td></tr>
</tbody></table>
<h2>Timing and recipients</h2>
<ul><li><strong>Monthly (internal)</strong> — CFO/controller review; the forecast conversation of Chapter 9.</li>
<li><strong>At provisional rate proposals</strong> — supports the billing rates you ask DCAA/your ACO to approve.</li>
<li><strong>Year-end</strong> — underpins the incurred cost submission (the ICE model); the actual-rate documentation.</li>
<li><strong>On request</strong> — auditors, DCMA, or a prime doing subcontractor rate reviews.</li></ul>
<div class="example"><div class="ex-tag">Worked example — the reviewer's path through Meridian's package</div>
<p>An auditor picks a number on the Rate Summary — March overhead, 40.0%. Base Computation shows $260,000 ÷ $650,000. Pool Cost Detail decomposes the $260,000 across accounts 7100–7400; the auditor samples 7100 Facilities ($42,000) and asks for the lease invoice. Total elapsed time: minutes — because each sheet answers the question the previous one raises. That flow, not formatting, is what makes a package "clean."</p></div>
<div class="note"><p><strong>One package per scenario.</strong> A rate package is always conditional on a scenario's assumptions. Internal what-if packages should say so on the cover; anything sent outside the company should be built from the Base scenario unless you intend to negotiate on the alternative.</p></div>
<div class="keybox"><div class="kb-tag">Key insight</div><p>The package's real audience test: could a stranger with GovCon literacy reconstruct your rates from it alone, without calling you? If yes, audits get shorter every year as trust accrues. If no, every review starts from zero.</p></div>
<div class="appbox"><div class="ab-head">In ForwardRates</div><div class="ab-body"><p><strong>Export Rate Package</strong> (Rates page header) builds the whole workbook from the latest forecast run of the currently selected scenario — set the scenario selector first. The export adapts to your business profile: GovCon profiles get "DCAA Rate Package" titling with FAR 31.203 / DCAA CAM 6-600 references; commercial profiles get a "Cost Rate Report" without them. Appendix C is a pre-flight checklist.</p></div></div>`,

ch21:`<h1>Forward Pricing Rate Proposals</h1>
<div class="gov" style="margin-top:0"><div class="g-tag">Government contracting</div><p>This chapter is specific to federal work. The underlying skill — defending projected rates with documented assumptions — applies to any multi-year pricing negotiation.</p></div>
<p class="lead">Provisional rates let you bill this year. A Forward Pricing Rate Proposal (FPRP) is about the next several years: the rates you'll use in proposals, submitted for government review and — ideally — locked in as an agreement.</p>
<h2>What an FPRP is</h2>
<p>Under FAR 15.407-3 and DFARS 15.408 (Table 15-2 format), a contractor projected to do significant government business can submit proposed indirect rates for future periods. The government evaluates them (DCAA advises, DCMA's ACO negotiates), and the result may be a <strong>Forward Pricing Rate Agreement (FPRA)</strong> — negotiated rates both sides use in all proposals — or <strong>Forward Pricing Rate Recommendations (FPRR)</strong>, the government's own evaluated positions.</p>
<p>Why bother: with an FPRA, every proposal skips rate re-litigation. Without one, each bid's rates get audited individually — slower awards, repeated argument, and pressure to discount.</p>
<h2>Forecast rates, not history</h2>
<p>The defining feature: an FPRP is built on <strong>forward-looking rates</strong>. History is the evidence; the proposal is the projection. That makes the forecast engine — run rate plus scenario events for known future changes — the direct source of the deliverable:</p>
<div class="example"><div class="ex-tag">Worked example — Meridian proposes FY2027 rates</div>
<p>FY2026 actuals are running at 30 / 40 / 10.9. Known changes for FY2027: a lease renewal adds $6K/month to overhead; the pipeline's probability-weighted new business adds $85K/month of DL from July. Meridian models both as scenario events and proposes:</p>
<table><thead><tr><th>Rate</th><th class="num">FY26 actual (run)</th><th class="num">FY27 proposed</th><th>Support</th></tr></thead><tbody>
<tr><td>Fringe</td><td class="num">30.0%</td><td class="num">30.4%</td><td>Benefits renewal quote +4%</td></tr>
<tr><td>Overhead</td><td class="num">40.0%</td><td class="num">39.1%</td><td>Lease delta net of base growth</td></tr>
<tr><td>G&amp;A</td><td class="num">10.9%</td><td class="num">10.6%</td><td>TCI growth, flat G&amp;A headcount</td></tr>
</tbody></table>
<p>Every proposed number carries its assumption. The negotiation then argues about <em>assumptions</em> (is the win probability real? is the lease signed?) rather than about arithmetic — which is where you want it.</p></div>
<h2>Negotiation dynamics</h2>
<ul><li><strong>The government pushes rates down</strong> for cost-type exposure; you need rates that actually recover cost. Aggressive lowballing wins the FPRA and loses money all year.</li>
<li><strong>Bring the base story.</strong> Most rate disputes are secretly volume disputes — your pipeline evidence for the base projection matters as much as pool budgets.</li>
<li><strong>Update when facts change.</strong> FPRAs carry an obligation to notify when projections shift materially; a monitoring cadence (your monthly forecast) is the compliance mechanism.</li></ul>
<div class="appbox"><div class="ab-head">In ForwardRates</div><div class="ab-body"><p><strong>Export FPRP</strong> (Rates page, beside Export Rate Package) generates the DFARS 15.408 Table 15-2 workbook from forecast rates: Cover with regulatory references, Proposed Rates by period with averages, Pool Cost Projections, Base Computation, Methodology &amp; Assumptions (run-rate method, cascade order, scenario applied), and the certification sheet with signature block. Filename: <code>FPRP_&#123;FY&#125;_&#123;Scenario&#125;.xlsx</code>.</p></div></div>`
});
