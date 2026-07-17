window.BOOK=window.BOOK||{};Object.assign(window.BOOK,{
ch11:`<h1>Why Rates Move</h1>
<p class="lead">Rates are fractions, so they move for exactly two reasons: the pool changes, or the base changes. Almost every confusing rate movement becomes obvious once you ask which one happened — and the most important case is the one that feels backwards.</p>
<h2>The fraction has two ends</h2>
<div class="formula">Rate ↑ when:  pool grows   OR  base shrinks
Rate ↓ when:  pool shrinks OR  base grows</div>
<p>Pool-driven moves feel intuitive: spend more on rent, overhead rate rises. Base-driven moves are the ones that surprise people — because the base is <em>revenue-side</em>. Winning and losing work moves your rates without a single indirect dollar changing.</p>
<h2>Sticky costs</h2>
<p>Indirect costs are mostly <strong>sticky</strong> — they do not scale down smoothly with volume. Lose a contract tomorrow and the lease, the IT stack, the controller's salary, and most management are all still there next month. As a rough working assumption (and ForwardRates' pipeline defaults), about 85% of fringe is variable with labor, ~55% of overhead, and only ~35% of G&amp;A.</p>
<h2>The loss effect — rates rise when business shrinks</h2>
<div class="example"><div class="ex-tag">Worked example — Meridian loses a recompete</div>
<p>Baseline: OH pool $260K, OH base $650K → 40.0%. Meridian loses a contract carrying $120K/month of direct labor. Fringe on it (30%) leaves the base too; only a sliver of overhead cost goes away ($10K of directly attributable IT seats).</p>
<table><thead><tr><th></th><th class="num">Before</th><th class="num">After</th></tr></thead><tbody>
<tr><td>OH pool</td><td class="num">$260,000</td><td class="num">$250,000</td></tr>
<tr><td>OH base (DL + fringe)</td><td class="num">$650,000</td><td class="num">$494,000</td></tr>
<tr class="total"><td>OH rate</td><td class="num">40.0%</td><td class="num"><strong>50.6%</strong></td></tr>
</tbody></table>
<p>A 26% revenue loss produced a <strong>10.6-point</strong> overhead rate jump. Every <em>remaining</em> contract now carries more burden — squeezing FFP margins, inflating cost-type invoices, and making the next bid less competitive. Losses compound.</p></div>
<h2>The win effect — dilution</h2>
<p>Symmetrically, new direct work usually brings less-than-proportional indirect cost, so rates fall. Add $200K of DL with only $60K of new fringe: 
$1,000K÷$2,000K = 50% becomes $1,060K÷$2,200K = <strong>48.2%</strong>. Growth dilutes fixed cost — the quantitative version of "scale improves competitiveness."</p>
<h2>Other movers worth naming</h2>
<ul><li><strong>Seasonality</strong> — PTO burn in December, insurance resets, payroll tax caps hitting mid-year (fringe falls in Q4 as high earners max FICA).</li>
<li><strong>Hiring ahead of revenue</strong> — new staff on the bench are indirect labor until their contract starts: pool up, base flat, rates up <em>temporarily</em>.</li>
<li><strong>Step costs</strong> — a new office or ERP doesn't drift in; it lands as a cliff on one month.</li></ul>
<div class="keybox"><div class="kb-tag">Key insight</div><p>Rates going up is not evidence of overspending, and rates going down is not evidence of discipline. Both are usually the base moving. Diagnose the fraction before assigning credit or blame — and model wins and losses <em>before</em> they happen, which is the next chapter.</p></div>
<div class="appbox"><div class="ab-head">In ForwardRates</div><div class="ab-body"><p>Everything in this chapter is what <strong>scenario events</strong> encode: deltas to the base (direct cost changes) and deltas to the pools, starting at an effective period. The forecast engine reruns the cascade with those deltas — showing you the loss effect or the dilution effect months before it hits the GL.</p></div></div>`,

ch12:`<h1>Forecast Scenarios</h1>
<p class="lead">A forecast scenario is a named what-if: the base forecast plus a set of discrete business events — a win, a loss, a hiring wave — each expressed as dollar deltas that start in a given month. Scenarios turn "what happens to our rates if…" from a spreadsheet afternoon into a dropdown.</p>
<h2>Anatomy of a scenario</h2>
<p>A scenario belongs to a fiscal year and contains <strong>events</strong>. Each event has:</p>
<table><thead><tr><th>Field</th><th>What it does</th></tr></thead><tbody>
<tr><td>Effective period</td><td>Month the delta starts — applies from then forward</td></tr>
<tr><td>Type</td><td>WIN / LOSE / HIRE / RIF / ADJUST — labels for humans; math is identical</td></tr>
<tr><td>Direct cost deltas</td><td>ΔDL$, ΔDL hrs, ΔSubk, ΔODC, ΔTravel — move the <em>bases</em></td></tr>
<tr><td>Pool deltas</td><td>ΔFringe, ΔOverhead, ΔG&amp;A — move the <em>pools</em></td></tr>
<tr><td>Revenue delta</td><td>Monthly revenue change — drives PSR fee and margin (Ch. 18)</td></tr>
</tbody></table>
<h2>Building a credible WIN event</h2>
<div class="example"><div class="ex-tag">Worked example — Meridian bids a DoD cloud contract</div>
<p>The new contract would add, starting 2026-01: $200,000/month DL (1,750 hrs), $50,000 subk, and $300,000/month revenue. Fringe follows labor at ~30%: +$60,000 pool delta. Overhead is mostly sticky; add $8,000 for seats and licenses. G&amp;A: no change.</p>
<table><thead><tr><th>Rate</th><th class="num">Base scenario</th><th class="num">Win scenario</th><th class="num">Δ</th></tr></thead><tbody>
<tr><td>Fringe</td><td class="num">30.0%</td><td class="num">30.0%</td><td class="num">0.0</td></tr>
<tr><td>Overhead</td><td class="num">40.0%</td><td class="num">29.5%</td><td class="num">−10.5</td></tr>
<tr><td>G&amp;A</td><td class="num">10.9%</td><td class="num">8.9%</td><td class="num">−2.0</td></tr>
</tbody></table>
<p>OH math: pool $268K ÷ base $910K ($650K + $200K DL + $60K fringe) = 29.5%. The dilution is dramatic because Meridian is small — this single win makes <em>every other bid</em> more competitive. That second-order effect is invisible without scenario modeling.</p></div>
<div class="warnbox"><p><strong>Always pair cost deltas with a revenue delta on WIN/LOSE events.</strong> A win event with costs but no revenue makes margins look worse in the PSR, not better. The forecast engine doesn't need revenue — the margin reporting does.</p></div>
<h2>A standard scenario set</h2>
<p>Most contractors maintain three or four persistent scenarios per fiscal year:</p>
<ul><li><strong>Base</strong> — known business only; the billing-rate anchor.</li><li><strong>Win</strong> — pipeline awards ≥ 50% probability.</li><li><strong>Lose</strong> — recompetes at risk go away.</li><li><strong>Stress</strong> — Lose plus a hiring freeze or RIF response.</li></ul>
<p>Run all of them each month; present rates as a band (Lose is your ceiling, Win your floor). Chapter 14's adjustment bands offer a lighter-weight version of the same idea.</p>
<div class="appbox"><div class="ab-head">In ForwardRates</div><div class="ab-body"><p>On <strong>Scenarios</strong>: pick the FY, <strong>Add</strong> a scenario, then <strong>Add Event</strong> per business change — or bulk-import events from CSV (template provided; one row per event). Any scenario edit triggers an automatic background forecast. On the <strong>Forecast</strong> page, enable <strong>Compare all scenarios</strong> for the Scenario Rate Overlay chart — one line per scenario per rate type — with the delta table below; the <strong>Rates</strong> page shows each scenario as its own comparison column.</p></div></div>`,

ch13:`<h1>Pipeline-Driven Modeling</h1>
<p class="lead">Hand-building events works for three contracts. For a thirty-deal pipeline it doesn't scale — so the pipeline tool computes the events for you, from a portfolio CSV and a set of volume assumptions, contract type by contract type.</p>
<h2>The problem it solves</h2>
<p>"What if T&amp;M volume grows 20% while our FFP recompetes shrink 10%?" Answering by hand means estimating DL, subk, ODC, fringe scaling, and effective periods for every affected project, then keying dozens of events. The pipeline tool derives all of it from the portfolio's own bucket ratios and writes the events into a target scenario automatically.</p>
<h2>How it works</h2>
<ol><li><strong>Source</strong> — upload a Project Portfolio CSV (columns include <code>Project, Contract Value, Begin/End date, Billing Type, Revenue, Labor Hrs, Labor Cost, Subcontract buckets, Material, Travel, ODC, Total Direct</code>) or use prior-year actuals from the database.</li>
<li><strong>Reference FY</strong> — anchors the pool structure: the tool reads how Fringe/OH/G&amp;A actually scaled against that year's cost base.</li>
<li><strong>Mode</strong> — <em>Uniform</em> (one volume % and rate % for everything) or <em>Per Billing Type</em> (separate assumptions for T&amp;M, FFP, CPFF — because their cost behavior differs).</li>
<li><strong>Volume % / Rate %</strong> — volume moves cost and revenue; rate change moves revenue only (billing rates, not costs).</li>
<li><strong>Fixed/variable split</strong> — how much of each pool scales with volume. Defaults: Fringe 85% variable, Overhead 55%, G&amp;A 35% (Chapter 11's stickiness, parameterized).</li>
<li><strong>Preview → Generate</strong> — preview shows projected rates vs. current before anything is written; generate writes the events into the target scenario.</li></ol>
<h2>Why billing type matters</h2>
<table><thead><tr><th>Type</th><th>Cost behavior when volume moves</th></tr></thead><tbody>
<tr><td>T&amp;M</td><td>Labor-dominant; volume change is nearly all DL → strong base effect on rates</td></tr>
<tr><td>FFP</td><td>Revenue fixed per contract; cost changes hit margin — optionally projected EAC-based (using EVM CPI) instead of margin-based</td></tr>
<tr><td>CPFF</td><td>Cost and revenue move together; heavier ODC/subk mix → more G&amp;A base, less OH base</td></tr>
</tbody></table>
<div class="example"><div class="ex-tag">Worked example — stress-testing a 20% T&amp;M decline</div>
<p>Meridian's portfolio: $3.6M/yr of T&amp;M direct cost (80% DL), $1.8M FFP, $1.2M CPFF. Per-billing-type mode, T&amp;M volume −20%, others flat. The tool derives monthly deltas ≈ −$48K DL, −$12K other directs, and pool deltas of −$12.2K fringe (85% variable × 30% × 48K), −$7.9K OH, −$2.1K G&amp;A. Result: OH rate climbs from 40.0% to ~44.1% — quantified rate pressure from a sales-side assumption, generated in one pass and reviewable event by event.</p></div>
<div class="note"><p><strong>Regeneration is safe.</strong> Only events tagged <code>source&nbsp;=&nbsp;pipeline</code> are replaced on a re-run; manually entered events in the same scenario are preserved. Use <em>Ramp start</em> to phase the delta in rather than stepping it on one month.</p></div>
<div class="appbox"><div class="ab-head">In ForwardRates</div><div class="ab-body"><p>The <strong>Pipeline Rate Scenario</strong> panel lives on the Scenarios page (download the CSV template there). It writes into a normal Forecast Scenario — after generating, run that scenario on the Forecast page like any other. Deal-level pipeline tracking with LCAT rate cards lives on the separate <strong>Pipeline</strong> page (Chapter 22), whose saved scenarios can also drive the Budget page's base projection.</p></div></div>`,

ch14:`<h1>Rate Adjustment Bands</h1>
<p class="lead">Sometimes you don't need another cost model — you need a range on a page. Rate adjustment bands are simple ± percentage overlays on already-computed rates: management judgment, clearly labeled as such.</p>
<h2>What they are — and are not</h2>
<p>A band multiplies a computed rate by a fixed factor for display. It has no fiscal year, no events, no pool deltas, and no effect on the forecast engine. Where a forecast scenario says "if we lose contract X, the model says overhead goes to 50.6%," a band says "show me ±10% around whatever the model says."</p>
<table><thead><tr><th></th><th>Forecast scenario</th><th>Adjustment band</th></tr></thead><tbody>
<tr><td>Derived from cost data</td><td>Yes — events through the cascade</td><td>No — display multiplier</td></tr>
<tr><td>Auditable to GL</td><td>Yes</td><td>No (and shouldn't pretend to be)</td></tr>
<tr><td>Effort to set up</td><td>Real modeling work</td><td>Seconds</td></tr>
<tr><td>Appears on</td><td>Forecast + Rates pages</td><td>Rates page only</td></tr>
</tbody></table>
<div class="example"><div class="ex-tag">Worked example — the board wants a range</div>
<p>Base forecast: Fringe 30.0%, OH 40.0%, G&amp;A 10.9%. Bands: Conservative −10%, Base 0%, Upside +10%.</p>
<table><thead><tr><th>Band</th><th class="num">Fringe</th><th class="num">Overhead</th><th class="num">G&amp;A</th></tr></thead><tbody>
<tr><td>Conservative (−10%)</td><td class="num">27.0%</td><td class="num">36.0%</td><td class="num">9.8%</td></tr>
<tr><td>Base</td><td class="num">30.0%</td><td class="num">40.0%</td><td class="num">10.9%</td></tr>
<tr><td>Upside (+10%)</td><td class="num">33.0%</td><td class="num">44.0%</td><td class="num">12.0%</td></tr>
</tbody></table>
<p>Note the multiplication is on the <em>rate itself</em>: −10% of a 40% rate is 36%, not 30%. Label the table "management sensitivity bands" — never present band values as model outputs.</p></div>
<h2>When to use which tool</h2>
<ul><li><strong>Board pre-read due tomorrow</strong> → bands.</li><li><strong>Pricing a real bid, revising provisional rates, or answering DCAA</strong> → forecast scenarios, always. Bands are not defensible support for a rate proposal.</li><li><strong>Both</strong> — common in practice: scenario columns for Base/Win/Lose plus a thin band around Base for residual uncertainty.</li></ul>
<div class="warnbox"><p>Because bands aren't tied to cost data, they can silently drift into fiction — a −20% band on a rate that has never varied more than 3% overstates your downside credibly-sounding nonsense. Sanity-check band widths against your actual historical rate variance once a year.</p></div>
<div class="appbox"><div class="ab-head">In ForwardRates</div><div class="ab-body"><p>Configure named bands in the <strong>Rate Adjustment Bands</strong> panel (Scenarios page, or Settings), toggle them on, and save. When enabled they render as extra rows beneath the model-computed scenario rates on the <strong>Rates</strong> comparison page — deliberately absent from the Forecast page, since there is nothing for the engine to run.</p></div></div>`
});
