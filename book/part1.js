window.BOOK=window.BOOK||{};Object.assign(window.BOOK,{
ch1:`<h1>How Businesses Classify Costs</h1>
<p class="lead">Every dollar a services business spends lands in one of a small number of buckets, and which bucket it lands in determines how — and whether — a customer ultimately pays for it. This chapter builds the two classification axes everything else in this book rests on.</p>
<h2>Axis one: direct vs. indirect</h2>
<p>A <strong>direct cost</strong> can be traced to a single final cost objective — one contract, one project. The salary of an engineer who works full-time on the Navy task order is direct. So is the subcontractor invoice for that contract, the plane ticket to the customer site, and the materials consumed on that job.</p>
<p>An <strong>indirect cost</strong> benefits more than one cost objective and cannot be practically traced to any single one. The office lease, the HR manager's salary, the accounting software, employer payroll taxes — all real, all necessary, none attributable to a single contract.</p>
<p>The test is not "is this cost important?" but <strong>"can I charge this to exactly one project without arbitrary allocation?"</strong> If yes, it's direct. If no, it's indirect — and it will be recovered through an indirect <em>rate</em> applied on top of direct costs (Part II).</p>
<h2>Axis two: allowable vs. unallowable</h2>
<p>The second axis is contractual: which costs your customer has agreed to pay for. Any cost-reimbursable arrangement — a government contract, a commercial cost-plus deal, an audited rate agreement — comes with a list of costs that may not be passed through. An <strong>allowable</strong> cost may be recovered from customers, directly or through indirect rates. An <strong>unallowable</strong> cost must be excluded from every billing and every rate calculation.</p>
<div class="gov"><div class="g-tag">Government contracting</div><p>For federal work the list is codified: <strong>FAR Part 31</strong> defines allowability, and FAR 31.205 names the unallowables — alcohol, entertainment, lobbying, fines, and more (Appendix B). Commercial businesses face the same idea in softer form: customer audit clauses and internal policy.</p></div>
<div class="warnbox"><p><strong>Unallowable does not mean forbidden.</strong> Your company may absolutely buy holiday party drinks. It just may not recover that cost from customers. Unallowables come out of profit — and they must still be <em>recorded</em>, in segregated accounts, so an auditor can verify they were excluded.</p></div>
<h2>The four quadrants</h2>
<table><thead><tr><th></th><th>Allowable</th><th>Unallowable</th></tr></thead><tbody>
<tr><td><strong>Direct</strong></td><td>Engineer's labor on Contract A; billed to Contract A</td><td>First-class airfare upgrade on Contract A travel; the coach-fare portion is allowable, the upgrade is not</td></tr>
<tr><td><strong>Indirect</strong></td><td>Rent, fringe benefits, CFO salary; recovered via rates</td><td>Entertainment, lobbying, bad debt; excluded from pools, absorbed by profit</td></tr>
</tbody></table>
<div class="example"><div class="ex-tag">Worked example — Meridian Federal Systems</div>
<p>Meridian is a 60-person IT services contractor. In March it spends:</p>
<table><thead><tr><th>Cost</th><th class="num">Amount</th><th>Classification</th></tr></thead><tbody>
<tr><td>Labor on Navy cloud contract</td><td class="num">$310,000</td><td>Direct, allowable</td></tr>
<tr><td>Labor on DHS help desk contract</td><td class="num">$190,000</td><td>Direct, allowable</td></tr>
<tr><td>Health insurance premiums (all staff)</td><td class="num">$88,000</td><td>Indirect (Fringe), allowable</td></tr>
<tr><td>Office lease</td><td class="num">$42,000</td><td>Indirect (Overhead), allowable</td></tr>
<tr><td>CEO and finance salaries</td><td class="num">$95,000</td><td>Indirect (G&amp;A), allowable</td></tr>
<tr><td>Client dinner &amp; box seats</td><td class="num">$4,200</td><td>Indirect, <strong>unallowable</strong> (FAR 31.205-14)</td></tr>
</tbody></table>
<p>The $500,000 of direct labor is billed to the two contracts. The $225,000 of allowable indirect cost is recovered by applying rates to that direct labor. The $4,200 is recorded in an unallowable account and recovered from no one.</p></div>
<div class="keybox"><div class="kb-tag">Key insight</div><p>Classification is destiny. A cost misfiled as direct overbills one customer; an unallowable cost left in a pool overbills every customer — and that is the first thing any cost auditor looks for.</p></div>
<div class="appbox"><div class="ab-head">In ForwardRates</div><div class="ab-body"><p>Classification lives in two places: the <strong>Chart of Accounts</strong> (every GL account) and <strong>Pool Setup</strong>, where each account is assigned to a pool, a direct-cost category, or flagged unallowable. The AI Suggest feature proposes classifications — flagging, for example, an "Entertainment" account as unallowable with the FAR 31.205-14 citation — but you review and accept each one.</p></div></div>`,

ch2:`<h1>The Chart of Accounts</h1>
<p class="lead">The chart of accounts (CoA) is the master list of buckets your general ledger sorts every transaction into. A well-structured CoA makes indirect rates almost automatic; a messy one makes every month-end a forensic exercise.</p>
<h2>What it is</h2>
<p>Each account has a <strong>number</strong>, a <strong>name</strong>, and (for our purposes) an eventual <strong>pool assignment</strong>. When the bookkeeper posts the $42,000 rent invoice, it lands in account 7100 — Facilities. When payroll runs, wages split across accounts by type. The general ledger (GL) is simply the dated record of every posting, and "GL actuals" — the phrase you'll see throughout this book — means those postings summed by account and month.</p>
<h2>Numbering conventions</h2>
<p>Most GovCon charts group accounts by thousands so the number itself signals the cost's nature:</p>
<table><thead><tr><th>Range</th><th>Typical contents</th><th>Eventual treatment</th></tr></thead><tbody>
<tr><td class="num">4000s</td><td>Revenue</td><td>Not a cost — excluded from rates</td></tr>
<tr><td class="num">5000s</td><td>Direct costs — labor, subcontracts, ODC, travel</td><td>Base categories</td></tr>
<tr><td class="num">6000s</td><td>Fringe — payroll taxes, insurance, PTO, 401(k)</td><td>Fringe pool</td></tr>
<tr><td class="num">7000s</td><td>Overhead — facilities, IT, operations management</td><td>Overhead pool</td></tr>
<tr><td class="num">8000s</td><td>G&amp;A — executive, finance, BD, legal</td><td>G&amp;A pool</td></tr>
<tr><td class="num">8500s</td><td>Unallowables — entertainment, lobbying, fines</td><td>Excluded, segregated</td></tr>
</tbody></table>
<p>Decimal suffixes create sub-accounts: <code>6096.01 — Allocations</code>. The exact scheme matters less than consistency — the forecast engine maps <em>accounts</em> to pools, so one account should never mix direct and indirect costs.</p>
<div class="example"><div class="ex-tag">Worked example — Meridian's chart (excerpt)</div>
<table><thead><tr><th>Account</th><th>Name</th><th>March posting</th></tr></thead><tbody>
<tr><td class="num">5010</td><td>Direct Labor</td><td class="num">$500,000</td></tr>
<tr><td class="num">5200</td><td>Subcontractor Costs</td><td class="num">$120,000</td></tr>
<tr><td class="num">6010</td><td>Payroll Taxes</td><td class="num">$38,000</td></tr>
<tr><td class="num">6020</td><td>Health Insurance</td><td class="num">$88,000</td></tr>
<tr><td class="num">7100</td><td>Facilities</td><td class="num">$42,000</td></tr>
<tr><td class="num">8010</td><td>Executive Salaries</td><td class="num">$95,000</td></tr>
<tr><td class="num">8520</td><td>Entertainment (unallowable)</td><td class="num">$4,200</td></tr>
</tbody></table>
<p>Note the discipline: entertainment has its <em>own account</em>. If it were buried inside 8010, Meridian could not prove to an auditor that it was excluded from the G&amp;A pool.</p></div>
<h2>Rules of a healthy GovCon chart</h2>
<ul><li><strong>Segregate unallowables by account</strong>, not by memo line. FAR 31.201-6 requires identification and exclusion; a dedicated account range is the audit-proof way.</li>
<li><strong>Separate direct from indirect labor.</strong> The same person can charge both (direct on project weeks, overhead on bench weeks) — but through different accounts or labor categories.</li>
<li><strong>One account, one pool.</strong> If an account would need splitting between pools, split the account instead.</li>
<li><strong>Don't over-engineer.</strong> Twenty-three well-chosen accounts beat four hundred vague ones.</li></ul>
<div class="appbox"><div class="ab-head">In ForwardRates</div><div class="ab-body"><p>The <strong>Chart of Accounts</strong> page holds the global account list — shared across all fiscal years, so you build it once. Add accounts manually, bulk-import a CSV (<code>Account,Name,Category</code>), or auto-detect accounts appearing in imported GL data. An account must exist here before Pool Setup can assign it to a pool. The sample data set ships 23 pre-mapped accounts if you want a working reference structure.</p></div></div>`,

ch3:`<h1>Direct Costs in Depth</h1>
<p class="lead">Direct costs are the denominator of every indirect rate, the driver of every billing, and the raw material of project profitability. This chapter breaks down the four standard categories and follows them from timesheet to invoice.</p>
<h2>The four categories</h2>
<h3>1. Direct labor (DL)</h3>
<p>Wages for hours worked on a specific contract — tracked in both <strong>dollars and hours</strong>. Dollars drive the rate math; hours drive pricing, capacity planning, and T&amp;M billing. Direct labor is the most important number in the entire rate structure: it is the base for Fringe, the core of the Overhead base, and the largest component of Total Cost Input.</p>
<h3>2. Subcontracts (Subk)</h3>
<p>Work you buy from another company for a specific contract. Subk typically carries <em>no fringe or overhead</em> (the subcontractor pays their own) but does flow through the G&amp;A base — a fact with real pricing consequences, since $1 of subk is cheaper to the customer than $1 of your own labor.</p>
<h3>3. Other direct costs (ODC)</h3>
<p>Contract-specific materials, software licenses, cloud hosting, equipment. Like subk, ODC usually enters only the G&amp;A base.</p>
<h3>4. Travel</h3>
<p>Contract-specific travel, tracked separately because it has its own regulatory ceilings (coach fare, per diem limits under FAR 31.205-46 — amounts above them are unallowable).</p>
<div class="example"><div class="ex-tag">Worked example — one month, one project</div>
<p>Meridian's Navy cloud contract, March:</p>
<table><thead><tr><th>Category</th><th class="num">Amount</th><th>Notes</th></tr></thead><tbody>
<tr><td>Direct Labor</td><td class="num">$310,000</td><td>2,750 hours across 17 staff</td></tr>
<tr><td>Subcontracts</td><td class="num">$120,000</td><td>Security assessment sub</td></tr>
<tr><td>ODC</td><td class="num">$31,000</td><td>Cloud hosting + licenses</td></tr>
<tr><td>Travel</td><td class="num">$6,000</td><td>Two site visits, within per diem</td></tr>
<tr class="total"><td>Total direct</td><td class="num">$467,000</td><td></td></tr>
</tbody></table>
<p>This $467,000 is <em>not</em> what the Navy is billed. Indirect burdens are applied on top — Chapter 7 computes exactly how, and turns this into roughly $650,000 of billed cost.</p></div>
<h2>How direct costs flow into projects</h2>
<ol><li><strong>Capture</strong> — timesheets code hours to charge numbers; AP invoices code to project + account.</li>
<li><strong>Accumulate</strong> — month-end close sums by project and category: the "direct costs by project" table.</li>
<li><strong>Burden</strong> — indirect rates are applied per the cascade (Chapter 7).</li>
<li><strong>Bill</strong> — on cost-type contracts, burdened cost + fee is invoiced. On T&amp;M, hours × fixed rates. On FFP, cost tracking is internal — it measures margin, not billing.</li></ol>
<div class="note"><p><strong>Why hours matter as much as dollars.</strong> Two contractors with identical DL dollars can have very different hour counts (senior vs. junior mix). Hours expose that mix — which is why forecasting, pipeline modeling, and EVM all carry <code>DirectLaborHrs</code> alongside dollars.</p></div>
<div class="keybox"><div class="kb-tag">Key insight</div><p>Every direct-cost dollar does double duty: it is billed to a customer AND it enlarges the base that absorbs indirect cost. Win more direct work and your rates fall; lose it and they rise. That coupling is the entire subject of Part IV.</p></div>
<div class="appbox"><div class="ab-head">In ForwardRates</div><div class="ab-body"><p>The <strong>Direct Costs</strong> page takes entries by period and project: <code>Period, Project, DirectLabor$, DirectLaborHrs, Subk, ODC, Travel</code> — manual entry or CSV import (a template is downloadable). If projects exist in the <strong>Projects</strong> registry, the project field autocompletes. Imports automatically queue a background forecast run, so rates stay current with the data.</p></div></div>`
});
