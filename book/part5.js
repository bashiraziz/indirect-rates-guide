window.BOOK=window.BOOK||{};Object.assign(window.BOOK,{
ch15:`<h1>EVM Foundations</h1>
<p class="lead">Earned Value Management asks three questions of a project at any moment: how much work was <em>planned</em> by now, how much was <em>done</em>, and what did the done work <em>cost</em>? Everything else in EVM is arithmetic on those three numbers.</p>
<h2>The four primary quantities</h2>
<table><thead><tr><th>Symbol</th><th>Name</th><th>Plain English</th></tr></thead><tbody>
<tr><td><strong>BAC</strong></td><td>Budget at Completion</td><td>Total planned cost of the whole project</td></tr>
<tr><td><strong>PV</strong></td><td>Planned Value (BCWS)</td><td>Budget for the work <em>scheduled</em> to date</td></tr>
<tr><td><strong>EV</strong></td><td>Earned Value (BCWP)</td><td>Budget for the work <em>actually accomplished</em> to date</td></tr>
<tr><td><strong>AC</strong></td><td>Actual Cost (ACWP)</td><td>What the accomplished work actually cost</td></tr>
</tbody></table>
<p>The insight that makes EVM work: <strong>EV prices progress in budget dollars.</strong> "We're 40% done on a $1.2M project" becomes EV = $480,000 — directly comparable to both the plan (PV) and the spend (AC).</p>
<div class="example"><div class="ex-tag">Worked example — Meridian's data migration project, month 6</div>
<p>BAC $1,200,000, 12-month PoP, work planned evenly ($100K/month).</p>
<table><thead><tr><th>Quantity</th><th>Computation</th><th class="num">Value</th></tr></thead><tbody>
<tr><td>PV</td><td>6 × $100,000</td><td class="num">$600,000</td></tr>
<tr><td>EV</td><td>45% complete × $1.2M</td><td class="num">$540,000</td></tr>
<tr><td>AC</td><td>from the ledger</td><td class="num">$610,000</td></tr>
</tbody></table>
<p>Read it in one line: planned $600K of work, did $540K of work, paid $610K for it. The project is <strong>behind schedule</strong> (EV &lt; PV by $60K) and <strong>over budget</strong> (AC &gt; EV by $70K). Neither fact is visible from spend alone — $610K spent against a $600K plan looks almost perfect until EV exposes it.</p></div>
<h2>Where PV comes from — the PMB</h2>
<p>The Performance Measurement Baseline spreads BAC over time. <strong>Linear</strong> spreading (BAC ÷ PoP months) is adequate for level-of-effort work. <strong>Manual PV</strong> lets the PM enter a per-month profile for front-loaded or milestone-driven work. Baselines can be snapshotted at award and after re-baselines, so current PV is always comparable to the original plan.</p>
<h2>Where EV comes from — earning rules</h2>
<p>Percent complete can be judged at the project level, or built up from <strong>work packages</strong>, each with its own earning rule:</p>
<table><thead><tr><th>Rule</th><th>EV earned</th><th>Best for</th></tr></thead><tbody>
<tr><td>LOE</td><td>Tracks PV exactly (SPI ≡ 1)</td><td>Support/sustaining work</td></tr>
<tr><td>50/50</td><td>Half at start, half at completion</td><td>Short discrete tasks</td></tr>
<tr><td>0/100</td><td>All on completion</td><td>Deliverables; most conservative</td></tr>
<tr><td>Milestone</td><td>At defined % checkpoints</td><td>Long tasks with review gates</td></tr>
</tbody></table>
<div class="keybox"><div class="kb-tag">Key insight</div><p>EVM's honesty depends entirely on how EV is measured. Self-reported "90% done" projects stay 90% done for months. Prefer conservative earning rules (0/100, milestone) for anything government-facing.</p></div>
<div class="appbox"><div class="ab-head">In ForwardRates</div><div class="ab-body"><p>Projects (with contract type, PoP, and BAC by cost element) live on the <strong>Projects</strong> page; the <strong>EVM Dashboard</strong> computes everything else. % complete is either system-computed (Cum AC ÷ BAC — sensible for FFP/T&amp;M) or manual (required for cost-plus, where spend always tracks budget), with defaults per billing type and per-project overrides. Expand any row for the period detail and the S-curve chart — PV dashed blue, EV green, AC red, BAC ceiling purple.</p></div></div>`,

ch16:`<h1>Performance Indices</h1>
<p class="lead">Dividing the three EVM quantities into each other yields indices that compress project health into two decimals — and, used correctly, predict the ending while there's still time to change it.</p>
<h2>The efficiency indices</h2>
<div class="formula">CPI = EV ÷ AC     cost efficiency   ($ of work per $ spent)
SPI = EV ÷ PV     schedule efficiency (work done vs. planned)
CV  = EV − AC     cost variance ($)
SV  = EV − PV     schedule variance ($)</div>
<p>CPI &lt; 1 means every dollar buys less than a dollar of progress. SPI &lt; 1 means the plan is slipping. Meridian's migration project: CPI = 540 ÷ 610 = <strong>0.885</strong>, SPI = 540 ÷ 600 = <strong>0.90</strong> — red and borderline respectively under the standard thresholds (green ≥ 1.0, yellow 0.90–1.0, red &lt; 0.90).</p>
<h2>The completion estimates</h2>
<table><thead><tr><th>Metric</th><th>Formula</th><th>Meaning</th></tr></thead><tbody>
<tr><td>EAC</td><td>BAC ÷ CPI</td><td>Final cost if current efficiency continues</td></tr>
<tr><td>ETC</td><td>EAC − AC</td><td>Cost remaining from here</td></tr>
<tr><td>VAC</td><td>BAC − EAC</td><td>Expected overrun (−) or underrun (+)</td></tr>
<tr><td>TCPI</td><td>(BAC − EV) ÷ (BAC − AC)</td><td>Efficiency needed from now on to finish on budget</td></tr>
<tr><td>IEAC(SPI)</td><td>BAC ÷ SPI</td><td>Independent EAC from schedule efficiency</td></tr>
</tbody></table>
<div class="example"><div class="ex-tag">Worked example — the migration project's endgame</div>
<div class="formula">EAC  = $1,200,000 ÷ 0.885 = $1,355,900
ETC  = $1,355,900 − $610,000 = $745,900
VAC  = $1,200,000 − $1,355,900 = −$155,900
TCPI = ($1.2M − $540K) ÷ ($1.2M − $610K) = 660 ÷ 590 = 1.12</div>
<p>Translation: expect a ~$156K overrun. To avoid it, the team would need to run at 112% cost efficiency for the remaining half of the project — after running at 88.5% so far. TCPI &gt; 1.1 is the "recovery is unrealistic" line: the honest moves are re-baseline, de-scope, or eat the variance knowingly. Note TCPI color coding is inverted: high is bad.</p></div>
<h2>Reading indices over time</h2>
<ul><li><strong>CPI at 20% complete predicts the ending.</strong> Decades of DoD program data: final CPI rarely improves more than a few points from the 20% mark. A 0.85-CPI project does not "work harder" its way to 1.0.</li>
<li><strong>Watch trends, not points.</strong> A CPI drifting 0.98 → 0.94 → 0.90 across three periods is a steeper alarm than a flat 0.92.</li>
<li><strong>Schedule slips become cost overruns.</strong> Late work means more months of standing-army cost; SPI &lt; 1 today is CPI pressure tomorrow. The schedule-adjusted end date (PoP months ÷ SPI) makes the slip concrete: at SPI 0.90, a 12-month project projects to 13.3 months.</li></ul>
<div class="keybox"><div class="kb-tag">Key insight</div><p>EAC = BAC ÷ CPI is not pessimism — it is statistically the best single-point estimate available. Plans to beat it need evidence (scope change, staffing change), not intent.</p></div>
<div class="appbox"><div class="ab-head">In ForwardRates</div><div class="ab-body"><p>The <strong>EVM Dashboard</strong> computes all of these per project — CPI/SPI badges color-coded, at-risk rows flagged with a red left border, TCPI inverted, projected end-date badges, and a CPI/SPI trend chart in the expanded detail. Dashboard <strong>Portfolio Health</strong> rolls up portfolio CPI/SPI, at-risk project pills, and aggregate VAC. <strong>Export IPMR Format 5</strong> produces the government submission workbook with an AI-drafted variance narrative.</p></div></div>`,

ch17:`<h1>Scenario EAC</h1>
<p class="lead">Standard EVM tracks direct cost. But what a project will really cost — to the government and to you — is the <em>burdened</em> figure, and the burden depends on which company-level scenario plays out. Scenario EAC is the bridge between Part IV and Part V.</p>
<h2>The gap it closes</h2>
<p>A project with $500,000 of direct cost remaining doesn't have one cost-to-complete. Under Base-scenario rates it might be $700,000 burdened; under a Lose scenario — where a lost contract elsewhere pushes overhead up — the same work costs $780,000. Standard EAC can't see that, because CPI knows nothing about your rate structure. Two facts that seem contradictory are both true:</p>
<ul><li>Losing a contract can leave a project's <strong>standard EAC unchanged</strong> (its own efficiency didn't move), while</li><li>its <strong>Scenario EAC rises</strong> — the company's rates went up, so remaining work burdens higher.</li></ul>
<p>A PM cares about the first number. A CFO revising the budget cares about the second.</p>
<h2>How it's computed</h2>
<ol><li>Pick a scenario; the system reads the projected rates from that scenario's most recent forecast run (averaged across the forecast periods).</li>
<li>For each project, aggregate its direct cost entries: DL, subk, ODC, travel — no manual BAC entry needed.</li>
<li>Apply the full DCAA cascade from Chapter 7:</li></ol>
<div class="formula">Fringe       = DL × fringe rate
OH base      = DL + fringe
Overhead     = OH base × OH rate
TCI          = DL + fringe + OH + subk + ODC + travel
G&amp;A          = TCI × G&amp;A rate
Burdened EAC = TCI + G&amp;A</div>
<div class="example"><div class="ex-tag">Worked example — one project, two futures</div>
<p>Meridian's DHS help desk: $190K/month DL, $15K ODC, 10 months remaining → $1.9M DL, $150K ODC to go.</p>
<table><thead><tr><th></th><th class="num">Base rates<br>(30 / 40 / 10.9)</th><th class="num">Lose rates<br>(31 / 50.6 / 12.4)</th></tr></thead><tbody>
<tr><td>Fringe</td><td class="num">$570,000</td><td class="num">$589,000</td></tr>
<tr><td>Overhead</td><td class="num">$988,000</td><td class="num">$1,259,400</td></tr>
<tr><td>TCI</td><td class="num">$3,608,000</td><td class="num">$3,898,400</td></tr>
<tr><td>G&amp;A</td><td class="num">$393,300</td><td class="num">$483,400</td></tr>
<tr class="total"><td>Burdened cost to complete</td><td class="num">$4,001,300</td><td class="num">$4,381,800</td></tr>
</tbody></table>
<p>The Lose scenario makes the <em>same remaining work</em> $380,000 more expensive — with not one hour of DHS effort changed. If the help desk is FFP, that delta comes out of Meridian's margin. That number belongs in the risk register, and no standard EVM report will ever produce it.</p></div>
<h2>Using it</h2>
<ul><li><strong>Budget reviews</strong> — flip the scenario selector between Base and Lose; the delta across projects is your quantified rate-risk exposure.</li>
<li><strong>Forward pricing</strong> — burdened cost-to-complete under forward rates is what an option-year price must cover.</li><li><strong>Bid decisions</strong> — a win scenario lowers every existing project's Scenario EAC; occasionally that saving is itself a reason to bid aggressively.</li></ul>
<div class="appbox"><div class="ab-head">In ForwardRates</div><div class="ab-body"><p>On the EVM Dashboard, pick a scenario in the bar above the table; a rates badge shows what's being applied (e.g., <code>Fringe 28.5% · OH 42.1% · G&amp;A 18.3%</code>) and the <strong>Scenario EAC</strong> column populates — hover any cell for the unburdened baseline and each rate applied. "No rates" means no forecast run exists yet for that FY + scenario: run it on the Forecast page first.</p></div></div>`,

ch18:`<h1>Project Status Reporting</h1>
<p class="lead">Rates answer "what does the government owe us per dollar of work?" The PSR answers the question your owners ask: "are the projects making money?" Same data, opposite lens — and scenarios flow through both.</p>
<h2>The PSR: revenue, cost, margin</h2>
<p>The Project Status Report shows, per project and in total:</p>
<div class="formula">Total Cost = direct costs + allocated indirects (the cascade)
Fee        = Revenue − Total Cost
Margin %   = Fee ÷ Revenue</div>
<div class="example"><div class="ex-tag">Worked example — Meridian's March PSR</div>
<table><thead><tr><th>Project</th><th class="num">Revenue</th><th class="num">Direct</th><th class="num">Indirect</th><th class="num">Fee</th><th class="num">Margin</th></tr></thead><tbody>
<tr><td>Navy cloud (CPFF)</td><td class="num">$856,000</td><td class="num">$467,000</td><td class="num">$332,800</td><td class="num">$56,200</td><td class="num">6.6%</td></tr>
<tr><td>DHS help desk (FFP)</td><td class="num">$310,000</td><td class="num">$205,000</td><td class="num">$92,300</td><td class="num">$12,700</td><td class="num">4.1%</td></tr>
<tr class="total"><td>Total</td><td class="num">$1,166,000</td><td class="num">$672,000</td><td class="num">$425,100</td><td class="num">$68,900</td><td class="num">5.9%</td></tr>
</tbody></table>
<p>The CPFF project's margin is essentially its fee percentage — stable by construction. The FFP project's margin is <em>exposed to rates</em>: if overhead rises 2 points, its indirect allocation grows ~$8K/month and margin halves. FFP rows are where rate forecasts become profit forecasts.</p></div>
<h2>Scenario-driven margins</h2>
<p>Scenario events carry a <strong>revenue delta</strong> alongside their cost deltas (Chapter 12). The PSR layers those onto base revenue at report time, so selecting a WIN scenario shows the new contract's revenue and margin; selecting LOSE compresses them — no revenue re-entry per scenario.</p>
<div class="keybox"><div class="kb-tag">Key insight</div><p>On a contract loss, rates and margins move in opposite directions. Rates rise (Chapter 11) — but portfolio margin can <em>improve</em> if the lost work was low-margin. Always read the Rates page and the PSR together: one is the compliance view, the other the business view. A decision made from only one of them is half-informed.</p></div>
<h2>The EVM overlay</h2>
<p>With EVM data loaded, the PSR adds forward-looking columns per project: <strong>EAC</strong>, <strong>Projected Fee</strong> (revenue − EAC), <strong>Projected Margin</strong>, CPI and SPI. Current margin says how the project has done; projected margin says how it will end. A project at 8% current margin but CPI 0.88 is a 2%-margin project wearing makeup.</p>
<h2>The PST: one period, actual vs. forecast</h2>
<p>The Period Status Table is the month-close companion: for a selected period, actuals side by side with what the forecast said. Persistent one-sided misses mean the run-rate window or a scenario assumption needs revisiting — the PST is where forecast quality gets audited.</p>
<div class="appbox"><div class="ab-head">In ForwardRates</div><div class="ab-body"><p>The <strong>PSR</strong> page: KPI cards (plus EVM-projected fee/margin when available), per-project summary with totals, a margin-trend chart with a red 0% reference line, scenario selector, and revenue management (manual or <code>Period,Project,Revenue</code> CSV, upserted). <strong>Download Excel</strong> exports summary + period detail sheets, respecting active org filters. The <strong>PST</strong> page needs just FY, period, and scenario.</p></div></div>`
});
