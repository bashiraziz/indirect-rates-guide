window.BOOK=window.BOOK||{};Object.assign(window.BOOK,{
ch8:`<h1>Run-Rate Forecasting</h1>
<p class="lead">A rate forecast answers one question: given what we've actually spent so far, what will our rates be for the rest of the year? The engine that answers it is deliberately simple — and that simplicity is a feature.</p>
<h2>How the engine works</h2>
<ol><li><strong>Ingest actuals.</strong> GL postings by account and month, plus direct costs by project and month.</li>
<li><strong>Map.</strong> Each account routes to a pool (Fringe/OH/G&amp;A), a base category (DL, subk, ODC, travel), or the unallowable bucket.</li>
<li><strong>Compute the run rate.</strong> Average the most recent N months of each pool and base line — the "run-rate window."</li>
<li><strong>Project forward.</strong> Carry that monthly run rate across the remaining forecast horizon, adjusted by any scenario events (Part IV).</li>
<li><strong>Divide.</strong> Pool ÷ base, per month, per the cascade → a rate curve for the rest of the year.</li></ol>
<h2>The run-rate window (smoothing)</h2>
<p>Averaging N months smooths noise: a one-time insurance true-up in March shouldn't define April–September. The window trades responsiveness against stability:</p>
<table><thead><tr><th>Window</th><th>Behavior</th><th>Use when</th></tr></thead><tbody>
<tr><td>3 months</td><td>Reacts fast, noisy</td><td>Cost structure just changed (move, RIF, acquisition)</td></tr>
<tr><td>6 months</td><td>Balanced — the usual default</td><td>Steady-state operations</td></tr>
<tr><td>12 months</td><td>Very stable, slow to react</td><td>Strong seasonality you want averaged out</td></tr>
</tbody></table>
<div class="example"><div class="ex-tag">Worked example — window choice changes the answer</div>
<p>Meridian's fringe pool: Jan $146K, Feb $149K, Mar $150K, Apr $151K, May $168K (annual insurance true-up), Jun $153K.</p>
<table><thead><tr><th>Window</th><th>Computation</th><th class="num">Monthly run rate</th><th class="num">Fringe rate (÷ $500K DL)</th></tr></thead><tbody>
<tr><td>3-mo (Apr–Jun)</td><td>(151+168+153)/3</td><td class="num">$157.3K</td><td class="num">31.5%</td></tr>
<tr><td>6-mo (Jan–Jun)</td><td>(146+…+153)/6</td><td class="num">$152.8K</td><td class="num">30.6%</td></tr>
</tbody></table>
<p>Nearly a full point of fringe rate difference from the window alone. If May's spike is truly one-time, 6 months is more honest; if premiums genuinely reset upward, 3 months catches it sooner.</p></div>
<h2>Horizon selection</h2>
<p>Forecast to the end of the fiscal year at minimum — that's the true-up exposure. Forecast further for pricing. But respect data density: <strong>projecting 12 months from 2 months of actuals is arithmetic, not insight</strong>. A reasonable floor is actuals ≥ half your horizon.</p>
<div class="note"><p>ForwardRates' planning agent applies the same rule automatically: with fewer than 6 months of actuals it recommends a shorter horizon and logs the note. The recommendation is advisory — you can override it.</p></div>
<h2>What run-rate forecasting misses</h2>
<p>The method assumes tomorrow resembles the recent past. It will not anticipate a lease expiring, a hiring wave, or a lost recompete — <em>known future events are exactly what scenario events are for</em> (Chapter 12). Run rate is the baseline; scenarios are the deviations you already know about.</p>
<div class="appbox"><div class="ab-head">In ForwardRates</div><div class="ab-body"><p>On the <strong>Forecast</strong> page: pick fiscal year, scenario, forecast months, and run-rate months, then <strong>Run Forecast</strong>. Progress stages (Validating → Uploading → Computing → Unpacking) stream, results land in Rates / Pool Costs / Base Costs / Projections tabs, and the run saves to History automatically. Forecasts also re-run in the background whenever GL data or scenarios change — check History for runs tagged <strong>Auto</strong>.</p></div></div>`,

ch9:`<h1>Reading Your Forecast Output</h1>
<p class="lead">A forecast run produces a rate table, pool and base detail, and a narrative. Reading them well is a skill: the table tells you <em>what</em>, the detail tells you <em>why</em>, and the deltas tell you <em>what to do</em>.</p>
<h2>The rate table</h2>
<p>The core output is a period × rate matrix:</p>
<table><thead><tr><th>Period</th><th class="num">Fringe</th><th class="num">Overhead</th><th class="num">G&amp;A</th><th>Basis</th></tr></thead><tbody>
<tr><td>2026-01</td><td class="num">29.8%</td><td class="num">39.4%</td><td class="num">10.7%</td><td>Actual</td></tr>
<tr><td>2026-02</td><td class="num">30.1%</td><td class="num">39.9%</td><td class="num">10.8%</td><td>Actual</td></tr>
<tr><td>2026-03</td><td class="num">30.0%</td><td class="num">40.0%</td><td class="num">10.9%</td><td>Actual</td></tr>
<tr><td>2026-04</td><td class="num">30.2%</td><td class="num">40.3%</td><td class="num">10.9%</td><td>Forecast</td></tr>
<tr><td>2026-05</td><td class="num">30.2%</td><td class="num">40.6%</td><td class="num">11.0%</td><td>Forecast</td></tr>
<tr><td>…</td><td class="num"></td><td class="num"></td><td class="num"></td><td></td></tr>
<tr><td>2026-09</td><td class="num">30.3%</td><td class="num">41.4%</td><td class="num">11.2%</td><td>Forecast</td></tr>
</tbody></table>
<h2>How to read it — a four-pass method</h2>
<ol><li><strong>Direction.</strong> Is each rate flat, drifting, or stepping? Here overhead climbs steadily (+1.4&nbsp;pp over the horizon) — that's a trend, not noise.</li>
<li><strong>Level vs. reference.</strong> Compare the forecast to provisional and budget rates. Meridian bills provisionally at 40.0% OH; a 41.4% September forecast means an under-billing building up each month.</li>
<li><strong>Cause.</strong> Open pool and base detail. Is the OH <em>pool</em> growing (spending problem) or the <em>base</em> shrinking (volume problem)? The fix is completely different.</li>
<li><strong>Materiality.</strong> Convert to dollars: 1.4&nbsp;pp × ~$650K monthly OH base ≈ $9K/month ≈ $55K by year-end. Now it's a decision, not a percentage.</li></ol>
<div class="example"><div class="ex-tag">Worked example — diagnosing the overhead drift</div>
<p>Meridian's pool detail shows the OH pool flat at ~$260K but the base sliding from $650K toward $628K as a small task order winds down. Diagnosis: <strong>volume problem</strong>. Options: accelerate a pipeline win (raises the base), shift bench staff to direct work, or trim OH cost. Cutting facilities would be the wrong reflex — the pool wasn't the mover.</p></div>
<h2>The narrative</h2>
<p>Each run ships a written narrative — Executive Summary, Rate Analysis, Anomalies &amp; Risks, Recommendations — referencing the actual numbers and flagging any rate that moves more than 5&nbsp;pp period-over-period. Use it as the starting draft for your monthly management review, not as a substitute for the four passes above.</p>
<div class="keybox"><div class="kb-tag">Key insight</div><p>Never report a rate change without its dollar consequence and its cause. "Overhead is up 1.4 points" invites panic; "overhead drifts up $55K by September because the Alpha task order ends in June — here are three responses" invites a decision.</p></div>
<div class="appbox"><div class="ab-head">In ForwardRates</div><div class="ab-body"><p>Results tabs cover all four passes: <strong>Rates</strong> (the matrix), <strong>Pool Costs</strong> and <strong>Base Costs</strong> (the cause), <strong>Projections</strong> (the detail). The <strong>Variance</strong> page adds the reference comparison — Budget vs. Actual vs. Forecast with drill-down to pool level. Returning to the Forecast page auto-restores the latest run with a banner naming its date and scenario.</p></div></div>`,

ch10:`<h1>Budget vs. Provisional vs. Actual</h1>
<p class="lead">Three reference rates frame every forecast: what you planned (budget), what you're allowed to bill (provisional), and what really happened (actual). The forecast's job is to predict the third before it's too late to act on the first two.</p>
<h2>The three reference points</h2>
<table><thead><tr><th></th><th>Budget</th><th>Provisional</th><th>Actual</th></tr></thead><tbody>
<tr><td><strong>What</strong></td><td>Internal plan for the year</td><td>Billing rates approved by the government</td><td>The realized ratio</td></tr>
<tr><td><strong>Set by</strong></td><td>Management, pre-year</td><td>Proposed by you; accepted by DCAA/ACO</td><td>Arithmetic</td></tr>
<tr><td><strong>Changes</strong></td><td>Rarely (re-plan)</td><td>Mid-year revision possible if materially off</td><td>Monthly as data posts</td></tr>
<tr><td><strong>Used for</strong></td><td>Accountability, variance</td><td>Interim invoices on cost-type work</td><td>Incurred cost submission, true-up</td></tr>
</tbody></table>
<h2>The annual cycle</h2>
<ol><li><strong>Before the year:</strong> build a budget (pool $ and base $ by month → budget rates). Propose provisional billing rates, typically anchored to that budget.</li>
<li><strong>During the year:</strong> bill cost-type contracts at provisional rates. Post actuals monthly. Forecast continuously.</li>
<li><strong>After year-end:</strong> file the incurred cost submission with actual rates. Settle the difference between provisional billings and actual cost.</li></ol>
<div class="example"><div class="ex-tag">Worked example — the mid-year check</div>
<p>Meridian, June. Overhead:</p>
<table><thead><tr><th>Reference</th><th class="num">Rate</th><th>Meaning</th></tr></thead><tbody>
<tr><td>Budget</td><td class="num">39.5%</td><td>The plan</td></tr>
<tr><td>Provisional</td><td class="num">40.0%</td><td>What invoices carry</td></tr>
<tr><td>Actual YTD</td><td class="num">40.1%</td><td>Where the year stands</td></tr>
<tr><td>Forecast full-year</td><td class="num">41.0%</td><td>Where it's heading</td></tr>
</tbody></table>
<p>Cost-type OH base for the year ≈ $4.7M. Ending at 41.0% while billing 40.0% under-recovers about <strong>$47,000</strong>. Meridian's choices in June: (a) request a provisional rate revision now, (b) push base volume up, (c) cut pool cost, or (d) knowingly absorb it. In February the only option left is (d) plus paperwork.</p></div>
<div class="warnbox"><p><strong>Two failure modes.</strong> Billing <em>below</em> actual quietly lends the government money interest-free until settlement. Billing <em>above</em> actual builds a refund liability that surprises the CFO at year-end — and repeated large overages erode DCAA's confidence in your proposals. Both are forecasting failures, not accounting ones.</p></div>
<div class="keybox"><div class="kb-tag">Key insight</div><p>Budget is a promise to yourself, provisional is a promise to the government, actual is reality. The forecast is the only one of the four that gives you time — treat any forecast-vs-provisional gap over ~0.5&nbsp;pp as an action item, not a footnote.</p></div>
<div class="appbox"><div class="ab-head">In ForwardRates</div><div class="ab-body"><p>The <strong>Budget</strong> page holds editable pool-$ and base-$ grids (seed from GL actuals with a growth %, copy from a prior FY, or drive the base from pipeline projections), computes budget rates automatically, and publishes them as reference rates. Provisional rates live under <strong>Rates → Reference Rates</strong>. The <strong>Variance</strong> page shows Budget · Actual · Forecast side by side with drill-down; the dashboard raises a Rate Alert whenever forecast exceeds provisional by &gt;0.1&nbsp;pp.</p></div></div>`
});
