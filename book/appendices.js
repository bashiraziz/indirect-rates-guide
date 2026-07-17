window.BOOK=window.BOOK||{};Object.assign(window.BOOK,{
appA:`<h1>Glossary</h1>
<p class="lead">Working definitions for the terms used throughout this manual. Government-contracting terms are marked; the rest apply to any services business.</p>
<dl class="glossary">
<dt>AC / ACWP</dt><dd>Actual Cost (of Work Performed) — what the accomplished work actually cost.</dd>
<dt>ACO</dt><dd>Administrative Contracting Officer — the government official who negotiates rates and administers contracts (usually DCMA).</dd>
<dt>Allocation base</dt><dd>The denominator of a rate — the direct-cost measure a pool is spread over.</dd>
<dt>Allowable / Unallowable</dt><dd>Whether a cost may be charged to the government (FAR Part 31). Unallowables must be recorded, segregated, and excluded from pools.</dd>
<dt>BAC</dt><dd>Budget at Completion — total planned cost of a project.</dd>
<dt>B&amp;P</dt><dd>Bid &amp; Proposal cost — proposal-writing effort, normally a G&amp;A element.</dd>
<dt>Base (scenario)</dt><dd>The forecast with known business only — no speculative events.</dd>
<dt>Burden / Burdened cost</dt><dd>Indirect cost applied on top of direct cost; direct + burden = burdened (fully loaded) cost.</dd>
<dt>Cascade</dt><dd>The fixed order in which pools compute — Fringe → Overhead → G&amp;A — because each pool's output joins the next pool's base.</dd>
<dt>CAS</dt><dd>Cost Accounting Standards — federal consistency rules for larger contractors.</dd>
<dt>Chart of accounts (CoA)</dt><dd>The master list of GL accounts transactions are posted to.</dd>
<dt>CPFF / CPIF / CPAF</dt><dd>Cost-plus contracts (fixed / incentive / award fee) — government reimburses cost plus a fee; your rates are billed directly.</dd>
<dt>CPI</dt><dd>Cost Performance Index, EV ÷ AC. Below 1.0 = over budget.</dd>
<dt>CV / SV</dt><dd>Cost / Schedule Variance in dollars: EV − AC and EV − PV.</dd>
<dt>DCAA</dt><dd>Defense Contract Audit Agency — audits contractor costs and rates.</dd>
<dt>DCMA</dt><dd>Defense Contract Management Agency — administers contracts; home of most ACOs.</dd>
<dt>Direct cost</dt><dd>Cost traceable to exactly one final cost objective (contract/project).</dd>
<dt>Direct labor (DL)</dt><dd>Wages for hours worked on a specific contract, tracked in dollars and hours.</dd>
<dt>EAC</dt><dd>Estimate at Completion — projected final cost; standard form BAC ÷ CPI.</dd>
<dt>ETC</dt><dd>Estimate to Complete — EAC − AC; cost remaining.</dd>
<dt>EV / BCWP</dt><dd>Earned Value — budget value of work actually accomplished.</dd>
<dt>EVM</dt><dd>Earned Value Management — integrated scope/schedule/cost measurement (EIA-748).</dd>
<dt>FAR</dt><dd>Federal Acquisition Regulation; Part 31 governs cost allowability.</dd>
<dt>FFP</dt><dd>Firm Fixed Price — price is fixed; cost overruns are the contractor's problem, so rates hit margin, not billing.</dd>
<dt>Fee</dt><dd>Profit component: revenue − total (burdened) cost.</dd>
<dt>Fiscal year (FY)</dt><dd>The accounting year; container for actuals, scenarios, and runs.</dd>
<dt>FPRA / FPRP / FPRR</dt><dd>Forward Pricing Rate Agreement / Proposal / Recommendation — negotiated, proposed, or government-evaluated future-year rates (DFARS 15.408).</dd>
<dt>Fringe</dt><dd>The pool of employment costs beyond wages — payroll taxes, insurance, PTO, retirement.</dd>
<dt>G&amp;A</dt><dd>General &amp; Administrative — enterprise-wide costs (executive, finance, BD), allocated over TCI.</dd>
<dt>GL / GL actuals</dt><dd>General ledger; postings summed by account and month.</dd>
<dt>ICE / Incurred cost submission</dt><dd>The year-end filing of actual rates for audit and settlement.</dd>
<dt>Indirect cost</dt><dd>Cost benefiting multiple cost objectives, recovered through rates.</dd>
<dt>IPMR Format 5</dt><dd>The narrative variance-analysis format in government program management reporting.</dd>
<dt>LCAT</dt><dd>Labor category — a priced skill level (e.g., Senior Engineer) in a rate card.</dd>
<dt>LOE</dt><dd>Level of Effort — work earned by time passing; EV tracks PV.</dd>
<dt>ODC</dt><dd>Other Direct Costs — contract-specific materials, licenses, hosting, equipment.</dd>
<dt>Overhead (OH)</dt><dd>The pool of costs supporting contract execution generally — facilities, IT, supervision, bench time.</dd>
<dt>PMB</dt><dd>Performance Measurement Baseline — the planned-value profile over time.</dd>
<dt>PoP</dt><dd>Period of Performance — a contract's start and end dates.</dd>
<dt>Pool</dt><dd>A grouping of indirect costs sharing one allocation base — the numerator of a rate.</dd>
<dt>Provisional rates</dt><dd>Government-approved interim billing rates for the current year, trued up to actuals at year-end.</dd>
<dt>PSR / PST</dt><dd>Project Status Report (revenue/cost/margin by project) / Period Status Table (actual vs. forecast for one period).</dd>
<dt>PV / BCWS</dt><dd>Planned Value — budget for work scheduled to date.</dd>
<dt>Rate package</dt><dd>The documented rate deliverable: summary, pool detail, base computation, unallowables, narrative.</dd>
<dt>RIF</dt><dd>Reduction in force — a layoff; as a scenario event, negative labor deltas with lagging pool relief.</dd>
<dt>Run rate</dt><dd>The average of the most recent N months, projected forward as the baseline forecast.</dd>
<dt>Scenario / Event</dt><dd>A named what-if case / a discrete dollar-delta starting at an effective period.</dd>
<dt>Scenario EAC</dt><dd>Burdened cost-to-complete using a scenario's forecast rates through the cascade.</dd>
<dt>SPI</dt><dd>Schedule Performance Index, EV ÷ PV. Below 1.0 = behind schedule.</dd>
<dt>Sticky cost</dt><dd>Indirect cost that does not scale down with volume (rent, management) — the cause of the loss effect.</dd>
<dt>Subcontract (Subk)</dt><dd>Contract-specific work bought from another company; typically enters only the G&amp;A base.</dd>
<dt>T&amp;M / LH</dt><dd>Time &amp; Materials / Labor Hour contracts — billed at fixed hourly rates.</dd>
<dt>TCI</dt><dd>Total Cost Input — all direct cost plus fringe and overhead; the usual G&amp;A base.</dd>
<dt>TCPI</dt><dd>To-Complete Performance Index — efficiency required from now on to finish on budget; &gt;1.1–1.2 signals unrealistic recovery.</dd>
<dt>True-up</dt><dd>Year-end settlement of the difference between provisional billings and actual rates.</dd>
<dt>VAC</dt><dd>Variance at Completion — BAC − EAC; expected under/overrun.</dd>
<dt>Value added base</dt><dd>A G&amp;A base excluding subk/materials, used when pass-throughs are large; usually paired with a handling rate.</dd>
<dt>Wrap rate</dt><dd>The multiplier from raw labor dollar to fully burdened (and often fee-loaded) billing dollar.</dd>
</dl>`,

appB:`<h1>FAR 31.205 Unallowable Cost Reference</h1>
<p class="lead">The selected-costs list every GovCon accountant ends up memorizing. This is a working reference to the most commonly encountered items — not a substitute for the regulation text or counsel on edge cases.</p>
<h2>Always unallowable</h2>
<table><thead><tr><th>Cost</th><th>Cite (31.205-)</th><th>Watch for</th></tr></thead><tbody>
<tr><td>Entertainment; amusement; social activities</td><td>-14</td><td>Client dinners, box seats, golf — including the meal portion of "business development" outings</td></tr>
<tr><td>Alcoholic beverages</td><td>-51</td><td>Buried inside catering and event invoices</td></tr>
<tr><td>Lobbying and political activity</td><td>-22</td><td>Trade-association dues often include a lobbying share — the association reports the %</td></tr>
<tr><td>Contributions and donations</td><td>-8</td><td>Sponsorships that are really donations (no ad value received)</td></tr>
<tr><td>Fines, penalties, and mischarging costs</td><td>-15</td><td>Late fees on taxes, parking tickets in expense reports</td></tr>
<tr><td>Bad debts and collection costs</td><td>-3</td><td>Written-off receivables routed to expense</td></tr>
<tr><td>Interest and other financial costs</td><td>-20</td><td>Line-of-credit interest, financing fees — real cost, never reimbursable</td></tr>
<tr><td>Organization/reorganization costs</td><td>-27</td><td>M&amp;A legal and banker fees, incorporation costs</td></tr>
<tr><td>Federal income taxes</td><td>-41</td><td>State income taxes are generally allowable; federal never</td></tr>
<tr><td>Goodwill</td><td>-49</td><td>Amortization after acquisitions</td></tr>
<tr><td>Defense of fraud proceedings (unsuccessful)</td><td>-47</td><td>Legal costs where the contractor is found liable</td></tr>
<tr><td>Advertising (most) and public relations</td><td>-1</td><td>Help-wanted ads and required product ads are the allowable exceptions</td></tr>
</tbody></table>
<h2>Conditionally allowable — the ceiling cases</h2>
<table><thead><tr><th>Cost</th><th>Cite</th><th>The condition</th></tr></thead><tbody>
<tr><td>Travel</td><td>-46</td><td>Coach airfare and federal per diem ceilings; the increment above them is unallowable</td></tr>
<tr><td>Compensation</td><td>-6</td><td>Must be reasonable; executive comp capped (per statute) for reimbursement</td></tr>
<tr><td>Bonuses &amp; incentive comp</td><td>-6(f)</td><td>Allowable under an established plan or agreement made before services rendered</td></tr>
<tr><td>Employee morale/welfare</td><td>-13</td><td>Allowable (wellness, cafeteria subsidy) — but gifts and entertainment components are not</td></tr>
<tr><td>Recruitment</td><td>-34</td><td>Allowable; excess signing inducements and entertainment during interviews are not</td></tr>
<tr><td>Professional &amp; consultant services</td><td>-33</td><td>Allowable with evidence of work performed (invoices with detail, work product)</td></tr>
<tr><td>Legal costs</td><td>-47</td><td>Depends on proceeding type and outcome</td></tr>
<tr><td>Selling &amp; marketing</td><td>-38</td><td>Direct selling allowable; brand advertising generally not</td></tr>
<tr><td>Insurance</td><td>-19</td><td>Generally allowable; key-person life insurance where company is beneficiary is not</td></tr>
<tr><td>IR&amp;D / B&amp;P</td><td>-18</td><td>Allowable within reasonableness; specific allocation rules</td></tr>
</tbody></table>
<h2>Handling rules (the part auditors test)</h2>
<ul><li><strong>Record everything.</strong> Unallowables are booked in segregated accounts (Chapter 2), never left off the books.</li>
<li><strong>Exclude from pools; include in bases.</strong> FAR 31.201-6 and 31.203(d): out of the numerator, still absorbing burden in the denominator where applicable.</li>
<li><strong>Directly associated costs follow.</strong> The airfare to the entertainment event is unallowable because the event is.</li>
<li><strong>Expressly unallowable costs carry penalties</strong> (FAR 42.709) when claimed — the reason "when in doubt, screen it out" is the standing rule.</li></ul>
<div class="appbox"><div class="ab-head">In ForwardRates</div><div class="ab-body"><p>Flag accounts as unallowable in Pool Setup (AI Suggest proposes flags with these citations). Flagged entries are excluded from every pool computation and reported on the Rate Package's Unallowable Costs sheet with FAR 31.201-6 references.</p></div></div>`,

appC:`<h1>Sample Rate Package Checklist</h1>
<p class="lead">Run this list before any rate package leaves the building — monthly internal reviews get the short loop; anything going to DCAA, an ACO, or a prime gets all of it.</p>
<h2>Data integrity</h2>
<ul><li>☐ GL import reconciles to the accounting system's trial balance for every period covered</li>
<li>☐ All accounts with activity are mapped to a pool, a base category, or the unallowable flag — no silent unmapped accounts</li>
<li>☐ Direct costs by project reconcile to the job-cost ledger</li>
<li>☐ No non-USD amounts imported unconverted</li>
<li>☐ Period coverage is complete — no missing months inside the actuals range</li></ul>
<h2>Rate computation</h2>
<ul><li>☐ Cascade order verified: Fringe → Overhead → G&amp;A</li>
<li>☐ Base definitions match the disclosed/established practice (TCI vs. value added — same as last year, or change documented)</li>
<li>☐ Spot-check one rate by hand: pool ÷ base from the Base Computation sheet matches the Rate Summary</li>
<li>☐ Run-rate window and forecast horizon are stated and reasonable for the data density</li>
<li>☐ Scenario is correct — external packages built from Base unless deliberately otherwise, and the cover says which</li></ul>
<h2>Allowability</h2>
<ul><li>☐ Unallowable accounts (entertainment, lobbying, interest, fines, contributions…) all excluded from pools</li>
<li>☐ Unallowable Costs sheet reviewed — items look complete against Appendix B's list</li>
<li>☐ Travel spot-checked against per diem/airfare ceilings</li>
<li>☐ Directly associated costs of unallowable activities also excluded</li></ul>
<h2>Comparisons &amp; story</h2>
<ul><li>☐ Forecast vs. provisional gap computed; any rate &gt;0.5 pp adrift has an explanation and an action</li>
<li>☐ Forecast vs. budget variance explained (pool-driven or base-driven, per Chapter 9's four passes)</li>
<li>☐ Narrative reviewed and edited — numbers verified, recommendations you actually endorse</li>
<li>☐ Any &gt;5 pp period-over-period spike explained in the narrative</li></ul>
<h2>Package hygiene</h2>
<ul><li>☐ Cover sheet: fiscal year, period range, scenario, run date, preparer</li>
<li>☐ Correct profile titling (DCAA Rate Package vs. Cost Rate Report)</li>
<li>☐ Assumptions block archived with the run (History → Copy) in the workpaper file</li>
<li>☐ Audit log export for the period filed alongside the package</li>
<li>☐ Prior period's package retained unchanged — never overwrite history</li></ul>
<h2>If it's an FPRP</h2>
<ul><li>☐ Rates are forward-looking (forecast), not historical averages</li>
<li>☐ Every year-over-year rate change ties to a named assumption (lease, benefits renewal, pipeline volume)</li>
<li>☐ Base projection supported by pipeline evidence</li>
<li>☐ Methodology &amp; Assumptions sheet complete; certification signed (DFARS 15.408 Table 15-2)</li></ul>
<div class="note"><p>The test from Chapter 20 stands: could a literate stranger reconstruct your rates from the package alone? If any checklist item makes you hesitate, that's the sheet to fix before it ships.</p></div>`
});
