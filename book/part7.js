window.BOOK=window.BOOK||{};Object.assign(window.BOOK,{
ch22:`<h1>App Walkthrough</h1>
<p class="lead">This chapter is the guided tour: what each page is for, and the order that makes the pieces click together. Everything here has appeared conceptually in Parts I–VI; this is where the concepts get street addresses.</p>
<h2>The setup path</h2>
<p>New workspaces follow one sequence (the onboarding wizard walks it with you):</p>
<div class="formula">Fiscal Year → Chart of Accounts → Pool Setup → Mappings
→ Data (GL + Direct Costs) → Scenarios → Forecast</div>
<p>Chart of Accounts, Pool Setup, and Mappings are <strong>global</strong> — set up once, shared by every fiscal year. A new FY needs only a name and date range.</p>
<h2>Page directory</h2>
<table><thead><tr><th>Page</th><th>What you do there</th><th>Chapter</th></tr></thead><tbody>
<tr><td><strong>Dashboard</strong></td><td>Rate cards with sparklines, rate alerts, portfolio health (CPI/SPI/VAC), FY cards, recent runs</td><td>4, 16</td></tr>
<tr><td><strong>Fiscal Years</strong></td><td>Create/delete the containers for data and runs</td><td>—</td></tr>
<tr><td><strong>Chart of Accounts</strong></td><td>Global GL account list; manual, CSV, or auto-detected</td><td>2</td></tr>
<tr><td><strong>Pool Setup</strong></td><td>Rate groups, pool groups, sub-pools; shuttle assignment; AI Suggest; cascade order</td><td>5–6</td></tr>
<tr><td><strong>Cost Structure / Mappings</strong></td><td>Verify rate formulas; map accounts to labor/ODC/subk categories</td><td>6</td></tr>
<tr><td><strong>GL Ledger / Direct Costs</strong></td><td>Import or key actuals; imports auto-queue a forecast</td><td>2–3</td></tr>
<tr><td><strong>Projects</strong></td><td>Contract registry: type, PoP, values, BAC by element</td><td>3, 15</td></tr>
<tr><td><strong>Scenarios</strong></td><td>Forecast scenarios + events; pipeline generator; adjustment bands</td><td>12–14</td></tr>
<tr><td><strong>Forecast</strong></td><td>Run, compare scenarios (overlay chart), history, ZIP downloads</td><td>8–9</td></tr>
<tr><td><strong>Rates</strong></td><td>Latest forecast rates, reference rates, Rate Package + FPRP exports</td><td>10, 20–21</td></tr>
<tr><td><strong>Budget / Variance</strong></td><td>Pool/base budget grids; Budget vs Actual vs Forecast drill-down</td><td>10</td></tr>
<tr><td><strong>PSR / PST</strong></td><td>Margin by project; actual-vs-forecast by period</td><td>18</td></tr>
<tr><td><strong>EVM Dashboard</strong></td><td>CPI/SPI/EAC/TCPI, S-curves, work packages, Scenario EAC, IPMR F5</td><td>15–17</td></tr>
<tr><td><strong>Pipeline</strong></td><td>CRM-style deal tracker with LCAT rate card and recompute</td><td>13</td></tr>
<tr><td><strong>Audit Log / Data Files / Usage</strong></td><td>Who-changed-what; uploads and storage</td><td>19</td></tr>
<tr><td><strong>Settings</strong></td><td>Business profile (terminology), team workspace, API keys, wizard restart</td><td>—</td></tr>
</tbody></table>
<h2>The Pipeline page in brief</h2>
<p>Beyond the scenario generator of Chapter 13, the <strong>Pipeline</strong> page tracks individual deals through lifecycle stages (Lead → Qualified → Proposal → Best-And-Final → Award/Lost/No Bid). Each deal prices its direct labor at one of three fidelity levels — Rule of Thumb (DL % of TCV), Blended (hours × blended rate), or LCAT (governed line items against the rate card). Editing the rate card flags dependent deals stale; <strong>Recompute</strong> re-prices them with a previewed diff. Closed deals freeze permanently. HubSpot sync maps deals in automatically if connected.</p>
<h2>Learning safely: sample vs. demo data</h2>
<table><thead><tr><th></th><th>Sample data (FY2025-TEST)</th><th>Demo data (4 DEMO-FYs)</th></tr></thead><tbody>
<tr><td>Purpose</td><td>Practice the import → forecast workflow yourself</td><td>Explore a fully-populated app instantly</td></tr>
<tr><td>State after load</td><td>23 accounts, pools, scenarios; CSVs written but <em>not imported</em></td><td>48 months of actuals imported, forecasts already run, EVM seeded</td></tr>
<tr><td>Your next step</td><td>Import the CSVs, run the forecast — the real workflow, rehearsed</td><td>None — browse</td></tr>
</tbody></table>
<p>Both load and clear from the dashboard's Resources &amp; Dev Tools section.</p>
<div class="appbox"><div class="ab-head">In ForwardRates</div><div class="ab-body"><p>If you're starting right now: load <strong>Demo Data</strong>, open the Dashboard to see rate cards live, then walk Forecast → Rates → PSR → EVM with this book beside you. When it makes sense, clear it and load <strong>Sample Data</strong> to rehearse the import workflow you'll use with real numbers.</p></div></div>`,

ch23:`<h1>Data Import Reference</h1>
<p class="lead">Every number in the system arrives through a handful of CSV formats. This chapter is the desk reference: exact columns, conventions, and the gotchas that cause 90% of import errors.</p>
<h2>Conventions that apply everywhere</h2>
<ul><li><strong>Periods are <code>YYYY-MM</code></strong> (pipeline portfolio dates are full <code>YYYY-MM-DD</code>).</li><li><strong>Every import has a downloadable template</strong> — start from it, not from scratch.</li><li><strong>Row-level validation:</strong> bad rows are reported individually; good rows import.</li><li><strong>USD only.</strong> A <code>Currency</code> column with non-USD values triggers a warning — convert before importing, or rates will be silently wrong.</li><li><strong>Import history</strong> (last 20 files, with error counts) is kept per page.</li></ul>
<h2>GL Actuals</h2>
<div class="formula">Period,Account,Amount,Entity
2024-10,6000,125000.00,DIV-A
2024-10,6096.01,8500.00,DIV-A</div>
<p><code>Entity</code> is optional. Positive = cost, negative = credit/reversal. Accounts not mapped to any pool are ignored by the forecast engine — a silent zero, so reconcile mapped-account totals after first import. Each import auto-queues a background forecast.</p>
<h2>Direct Costs by Project</h2>
<div class="formula">Period,Project,DirectLabor$,DirectLaborHrs,Subk,ODC,Travel
2025-01,P001,250000.00,2200,60000.00,20000.00,10000.00</div>
<p>Project names autocomplete from the Projects registry but free text is accepted — watch for near-duplicates ("P001" vs "P-001") splitting one project into two.</p>
<h2>Projects</h2>
<div class="formula">name,contract_number,contract_type,pop_start,pop_end,
contract_value,funded_value,bac_direct_labor,bac_labor_hrs,
bac_subk,bac_odc,bac_travel,status,notes</div>
<p>Only <code>name</code> is required; names upsert (existing projects update, new insert). Contract types group into billing categories: CPFF/CPIF/CPAF → cost-plus; T&amp;M/LH → time &amp; materials; FFP → firm fixed price. <code>status</code>: active / complete / option. Or skip the CSV entirely: <strong>Sync from Direct Costs</strong> creates a bare project record for every distinct project name in your cost data.</p>
<h2>Scenario Events</h2>
<div class="formula">EffectivePeriod,EventType,Project,
DeltaDirectLabor$,DeltaDirectLaborHrs,DeltaSubk,DeltaODC,
DeltaTravel,DeltaRevenue,DeltaPoolFringe,DeltaPoolOverhead,
DeltaPoolGA,Notes</div>
<p>Column matching is case-insensitive; rows missing <code>EffectivePeriod</code> are skipped with an error. Remember Chapter 12's rule: WIN/LOSE events need <code>DeltaRevenue</code> or PSR margins mislead.</p>
<h2>Other formats</h2>
<table><thead><tr><th>Import</th><th>Columns</th><th>Notes</th></tr></thead><tbody>
<tr><td>Chart of Accounts</td><td><code>Account,Name,Category</code></td><td>Global; account must exist before pool assignment</td></tr>
<tr><td>PSR Revenue</td><td><code>Period,Project,Revenue</code></td><td>Upserts on period+project</td></tr>
<tr><td>Pipeline portfolio</td><td><code>Project, Contract Value, Begin/End date, Billing Type, Revenue, Labor Hrs, Labor Cost, Subcontract buckets, Material, Travel, ODC, Total Direct</code></td><td>Feeds the pipeline scenario generator (Ch. 13)</td></tr>
<tr><td>Budget base</td><td><code>Period,DL,Subk,ODC,Travel</code> (or the pipeline export's 12-column form)</td><td>Round-trips with the Budget page's export</td></tr>
</tbody></table>
<div class="note"><p><strong>Accounting-system exports:</strong> parser skills exist for QuickBooks, NetSuite, Costpoint, Unanet, Xero, and Vision exports, plus a generic parser — mapping their native report formats into the schemas above so you don't hand-reshape columns each month. Zapier/Make can automate the recurring import entirely (Chapter 24).</p></div>
<div class="appbox"><div class="ab-head">In ForwardRates</div><div class="ab-body"><p>Uploaded files live on the <strong>Data Files</strong> page with row counts, sizes, and a storage gauge (100&nbsp;MB per account). Deleting a file frees storage but keeps the already-imported entries. Every import is also recorded in the Audit Log — filename, user, timestamp — for the Chapter 19 trail.</p></div></div>`,

ch24:`<h1>Automation &amp; AI</h1>
<p class="lead">The forecasting math never changes hands — it stays deterministic and auditable. Around that fixed core, a layer of AI and automation removes the typing: classifying accounts, writing narratives, answering questions, and moving data on schedule.</p>
<h2>The architecture principle</h2>
<div class="formula">AI plans and explains.  The engine computes.
rate = pool$ ÷ base$   — always, traceably, per period.</div>
<p>DCAA requires every rate to trace to GL entries (Chapter 19), so no language model ever touches the cascade. AI sits before the math (planning, classification) and after it (analysis, narrative).</p>
<h2>The agentic forecast pipeline</h2>
<ol><li><strong>Planning agent</strong> — inspects your GL density and scenario set before the run; with under 6 months of actuals it recommends a shorter horizon and logs the note (advisory, not blocking).</li>
<li><strong>Rate engine</strong> — the deterministic core.</li>
<li><strong>Reporting agent</strong> — analyzes results with tools (retrieves rates and pool costs, detects &gt;5&nbsp;pp period-over-period spikes, checks data quality), then writes the narrative: Executive Summary, Rate Analysis, Anomalies &amp; Risks, Recommendations — with your actual numbers, suitable for a CFO or auditor. Without an AI key, a template narrative is generated instead; the run itself is unaffected.</li></ol>
<h2>AI Suggest (account mapping)</h2>
<p>Chapter 5's boundary calls, proposed automatically: for each unmapped account, a suggested pool with a reason — including unallowable flags with FAR citations (e.g., 8520 Entertainment → Unallowable, FAR 31.205-14). Suggestions stage into pending changes; nothing persists until you review and save. The same division of labor as the narrative: AI proposes, you decide, the log records.</p>
<h2>Rate Analyst Chat</h2>
<p>An embedded assistant (sidebar, dashboard, and Forecast page) that answers both textbook questions ("explain the G&amp;A cascade") and <strong>live-data questions</strong> by calling API tools on your account:</p>
<table><thead><tr><th>You ask</th><th>It does</th></tr></thead><tbody>
<tr><td>"What are my current G&amp;A and OH rates for FY2026?"</td><td><code>list_fiscal_years</code> → <code>get_rates</code>, answers with your numbers</td></tr>
<tr><td>"Which projects have CPI below 0.9?"</td><td><code>get_evm</code>, lists them with values</td></tr>
<tr><td>"Run a new Base forecast and tell me what changed"</td><td><code>run_forecast</code>, then explains</td></tr>
</tbody></table>
<p>Be specific about the fiscal year and say "my rates" (not "typical rates") to trigger tool use. On the Forecast page, the current run's results are pre-loaded as context.</p>
<h2>MCP: your data in Claude</h2>
<p>The MCP server exposes the same tools to Claude Desktop / Claude Code: generate an API key (Settings → API Keys, prefix <code>irk_</code>, shown once, revocable), add the server to your client config, and ask questions from your own AI workflow. Read tools are always safe; write tools (<code>import_gl_entries</code>, <code>import_direct_costs</code>, <code>run_forecast</code>) default to append mode.</p>
<h2>Zapier / Make: the monthly close, unattended</h2>
<div class="example"><div class="ex-tag">Worked example — Meridian's automated month-end</div>
<ol><li>Accounting system emails the GL export on the 3rd business day.</li><li>A Zap catches it and POSTs rows to <code>/api/fiscal-years/&#123;id&#125;/gl-entries</code> (API key in the <code>X-API-Key</code> header).</li><li>The import auto-queues a forecast; a second step can explicitly hit the forecast-runs endpoint.</li><li>The controller opens the dashboard on day 4 to fresh rates, an updated narrative — and a Rate Alert if forecast has crossed provisional.</li></ol>
<p>What used to be a week of copying is a morning of reviewing. The review — Chapter 9's four passes — is the part that was never automatable anyway.</p></div>
<div class="keybox"><div class="kb-tag">Key insight</div><p>Automate the movement of numbers, never the judgment about them. Every AI output in this system is either advisory (suggestions, narratives, chat) or logged and reversible — that boundary is what keeps the whole stack auditable.</p></div>`
});
